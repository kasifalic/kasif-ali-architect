import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, Newspaper, ExternalLink, Building2, Loader2 } from 'lucide-react';

interface StockData {
  price: number;
  previousClose: number;
  change: number;
  changePercent: number;
}

interface NewsItem {
  title: string;
  url: string;
  source: string;
  date: string;
}

interface CompanyWidgetProps {
  company: string;
  stockSymbol?: string;
  exchange?: string;
  accentColor: string;
  isPrivate?: boolean;
  privateMessage?: string;
  newsSearchTerm?: string;
}

async function fetchStockQuote(symbol: string): Promise<StockData | null> {
  try {
    const res = await fetch(`/api/stock?symbol=${encodeURIComponent(symbol)}`);
    if (!res.ok) return null;
    const data = await res.json();
    const meta = data?.chart?.result?.[0]?.meta;
    if (!meta) return null;
    const price = meta.regularMarketPrice;
    const previousClose = meta.chartPreviousClose ?? meta.previousClose;
    const change = price - previousClose;
    const changePercent = (change / previousClose) * 100;
    return { price, previousClose, change, changePercent };
  } catch {
    return null;
  }
}

async function fetchCompanyNews(companyName: string, maxItems = 4): Promise<NewsItem[]> {
  try {
    const res = await fetch(`/api/news?q=${encodeURIComponent(companyName)}`);
    if (!res.ok) return [];
    const text = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');
    const news: NewsItem[] = [];
    for (let i = 0; i < Math.min(items.length, maxItems); i++) {
      const item = items[i];
      const rawTitle = item.querySelector('title')?.textContent || '';
      // Google News titles end with " - Source Name"
      const dashIdx = rawTitle.lastIndexOf(' - ');
      const title = dashIdx > 0 ? rawTitle.substring(0, dashIdx) : rawTitle;
      const source = dashIdx > 0 ? rawTitle.substring(dashIdx + 3) : '';
      const link = item.querySelector('link')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      news.push({
        title,
        url: link,
        source,
        date: pubDate ? formatRelativeDate(new Date(pubDate)) : '',
      });
    }
    return news;
  } catch {
    return [];
  }
}

function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1d ago';
  if (diffDays < 7) return `${diffDays}d ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

// Cache in sessionStorage to avoid repeated fetches
function getCached<T>(key: string): T | null {
  try {
    const cached = sessionStorage.getItem(key);
    if (!cached) return null;
    const { data, ts } = JSON.parse(cached);
    // Cache for 30 minutes
    if (Date.now() - ts > 30 * 60 * 1000) return null;
    return data;
  } catch {
    return null;
  }
}

function setCache(key: string, data: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify({ data, ts: Date.now() }));
  } catch {}
}

const CompanyWidget: React.FC<CompanyWidgetProps> = ({
  company,
  stockSymbol,
  exchange,
  accentColor,
  isPrivate = false,
  privateMessage,
  newsSearchTerm,
}) => {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      // Stock quote (only for public companies)
      if (!isPrivate && stockSymbol && exchange) {
        const cacheKey = `stock_${stockSymbol}`;
        const cached = getCached<StockData>(cacheKey);
        if (cached) {
          if (!cancelled) setStockData(cached);
        } else {
          const quote = await fetchStockQuote(stockSymbol);
          if (!cancelled && quote) {
            setStockData(quote);
            setCache(cacheKey, quote);
          }
        }
      }

      // News
      const searchTerm = newsSearchTerm || company;
      const newsCacheKey = `news_${searchTerm}`;
      const cachedNews = getCached<NewsItem[]>(newsCacheKey);
      if (cachedNews) {
        if (!cancelled) setNews(cachedNews);
      } else {
        const articles = await fetchCompanyNews(searchTerm);
        if (!cancelled && articles.length > 0) {
          setNews(articles);
          setCache(newsCacheKey, articles);
        }
      }

      if (!cancelled) setLoading(false);
    };

    loadData();
    return () => { cancelled = true; };
  }, [stockSymbol, company, exchange, isPrivate]);

  if (loading) {
    return (
      <div
        className="rounded-2xl p-6 backdrop-blur-sm border h-full flex items-center justify-center"
        style={{ background: 'rgba(255, 255, 255, 0.8)', borderColor: `${accentColor}40` }}
      >
        <Loader2 className="w-5 h-5 animate-spin" style={{ color: accentColor }} />
      </div>
    );
  }

  if (!isPrivate && !stockData && news.length === 0) return null;

  const isPositive = stockData ? stockData.change >= 0 : false;
  const currencySymbol = stockSymbol?.includes('.NS') || stockSymbol?.includes('.BO') ? '₹' : '$';

  return (
    <div
      className="rounded-2xl p-6 md:p-7 backdrop-blur-sm border transition-all duration-300 hover:shadow-lg h-full flex flex-col"
      style={{ background: 'rgba(255, 255, 255, 0.8)', borderColor: `${accentColor}40` }}
    >
      {/* Private Company Badge */}
      {isPrivate && (
        <div className="mb-5">
          <div className="flex items-center gap-3 mb-3">
            <Building2 className="w-5 h-5" style={{ color: accentColor }} />
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
              Company Status
            </span>
          </div>
          <div
            className="px-4 py-3 rounded-xl text-sm"
            style={{ background: `${accentColor}15`, color: accentColor, border: `1px solid ${accentColor}30` }}
          >
            <p className="font-medium">{privateMessage || 'Private Company'}</p>
            <p className="text-xs mt-1 opacity-70">Not publicly traded</p>
          </div>
        </div>
      )}

      {/* Stock Price */}
      {stockData && (
        <div className="mb-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: accentColor }}>
              {exchange || 'STOCK'}
            </span>
            <span className="text-xs font-mono text-[#5a4a3a]/60">{stockSymbol}</span>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#2a2218] mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
              {currencySymbol}{stockData.price.toFixed(2)}
            </div>
            <div className={`flex items-center gap-1.5 text-sm font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{isPositive ? '+' : ''}{stockData.change.toFixed(2)}</span>
              <span>({isPositive ? '+' : ''}{stockData.changePercent.toFixed(2)}%)</span>
            </div>
          </div>
        </div>
      )}

      {/* News */}
      {news.length > 0 && (
        <div className={`${stockData || isPrivate ? 'border-t pt-5' : ''} flex-1`} style={stockData || isPrivate ? { borderColor: `${accentColor}30` } : {}}>
          <div className="flex items-center gap-2 mb-4">
            <Newspaper className="w-4 h-4" style={{ color: accentColor }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: accentColor }}>
              Latest News
            </span>
          </div>
          <div className="space-y-3.5">
            {news.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-start gap-2">
                  <div className="flex-1">
                    <div className="text-sm text-[#2a2218] font-medium leading-tight group-hover:opacity-70 transition-opacity" style={{ fontFamily: 'Outfit, sans-serif' }}>
                      {item.title}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-[#5a4a3a]/60">{item.source}</span>
                      {item.date && (
                        <>
                          <span className="text-[#5a4a3a]/30">·</span>
                          <span className="text-xs text-[#5a4a3a]/40">{item.date}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <ExternalLink className="w-3 h-3 text-[#5a4a3a]/30 group-hover:text-amber-500 transition-colors flex-shrink-0 mt-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyWidget;
