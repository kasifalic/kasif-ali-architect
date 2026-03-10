import { motion } from 'framer-motion';
import {
  Database,
  Server,
  Brain,
  Layout,
  Users,
  Store,
  MessageSquare,
  GitBranch,
  ArrowDown,
  Boxes,
  Settings,
  UserCheck,
  Shield,
  ShieldCheck,
  Monitor,
  RefreshCw,
  Key,
  Mail,
  Search,
  Clock,
  Zap,
  Mic,
  FileText,
  Calculator,
  Globe,
  Cloud,
  AudioLines,
  Eye,
  Workflow,
} from 'lucide-react';

// ───────────────────────────────────────────────────
// Architecture Node
// ───────────────────────────────────────────────────

type NodeVariant = 'source' | 'process' | 'service' | 'ai' | 'frontend' | 'user';

const variantStyles: Record<NodeVariant, { card: string; iconBg: string; iconColor: string }> = {
  source: {
    card: 'from-blue-50 to-indigo-50 border-blue-200/60',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  process: {
    card: 'from-amber-50 to-orange-50 border-amber-200/60',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  service: {
    card: 'from-emerald-50 to-teal-50 border-emerald-200/60',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  ai: {
    card: 'from-violet-50 to-purple-50 border-violet-200/60',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  frontend: {
    card: 'from-rose-50 to-pink-50 border-rose-200/60',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  user: {
    card: 'from-gray-50 to-slate-50 border-gray-200/60',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
};

interface ArchNodeProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  variant: NodeVariant;
  delay?: number;
  className?: string;
}

const ArchNode = ({ icon: Icon, title, subtitle, variant, delay = 0, className = '' }: ArchNodeProps) => {
  const styles = variantStyles[variant];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className={`group relative px-4 py-3 rounded-xl bg-gradient-to-br ${styles.card} border shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-default ${className}`}
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${styles.iconBg} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-4 h-4 ${styles.iconColor}`} />
        </div>
        <div className="min-w-0">
          <div className="font-sora text-sm font-semibold text-gray-900 leading-tight">{title}</div>
          <div className="text-[11px] text-gray-500 leading-tight mt-0.5">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  );
};

// ───────────────────────────────────────────────────
// Connectors
// ───────────────────────────────────────────────────

const FlowArrow = ({ label, delay = 0 }: { label?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scaleY: 0 }}
    whileInView={{ opacity: 1, scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="flex flex-col items-center py-1"
    style={{ transformOrigin: 'top' }}
  >
    <div className="relative w-0.5 h-10 rounded-full overflow-hidden">
      {/* Base line */}
      <div className="absolute inset-0 bg-gray-300 rounded-full" />

      {/* Animated shimmer flowing down the line */}
      <motion.div
        className="absolute inset-x-0 h-full rounded-full"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(217,169,91,0.45) 40%, rgba(217,169,91,0.45) 60%, transparent 100%)',
          height: '50%',
        }}
        animate={{ top: ['-50%', '150%'] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.8,
          repeatDelay: 1.5,
        }}
      />

      {/* Arrow head */}
      <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-400" />
    </div>
    {label && (
      <span className="text-[10px] text-gray-400 font-medium tracking-wide mt-1.5 font-mono">{label}</span>
    )}
  </motion.div>
);

// ───────────────────────────────────────────────────
// Layer wrapper
// ───────────────────────────────────────────────────

const LayerLabel = ({ label, delay = 0 }: { label: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    className="mb-3"
  >
    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 font-mono">
      {label}
    </span>
  </motion.div>
);

// ───────────────────────────────────────────────────
// Classification Pipeline (sub-diagram)
// ───────────────────────────────────────────────────

const ClassificationPipeline = ({ delay = 0 }: { delay?: number }) => {
  const steps = [
    { label: 'Rule-Based', sublabel: 'Keyword Match', icon: Settings },
    { label: 'GPT-4', sublabel: 'AI Validation', icon: Brain },
    { label: 'Dept Fallback', sublabel: 'Department Map', icon: Users },
    { label: 'Manual', sublabel: 'Override', icon: UserCheck },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="w-full rounded-xl bg-gradient-to-br from-violet-50/50 to-purple-50/50 border border-violet-200/40 p-4"
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400 font-mono mb-3">
        Hybrid Classification Pipeline
      </div>
      <div className="flex items-center gap-1 flex-wrap justify-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: delay + 0.1 * i }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-violet-200/50 shadow-sm"
            >
              <step.icon className="w-3.5 h-3.5 text-violet-500" />
              <div>
                <div className="text-[11px] font-semibold text-gray-800 leading-none">{step.label}</div>
                <div className="text-[9px] text-gray-400 leading-none mt-0.5">{step.sublabel}</div>
              </div>
            </motion.div>
            {i < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: delay + 0.1 * i + 0.15 }}
              >
                <ArrowDown className="w-3 h-3 text-violet-300 rotate-[-90deg]" />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ───────────────────────────────────────────────────
// VendorLens Architecture Diagram
// ───────────────────────────────────────────────────

const VendorLensArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Data Sources ── */}
      <LayerLabel label="Data Sources" delay={0} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Database}
          title="Enterprise ERP"
          subtitle="Vendor master, POs, invoices, renewals"
          variant="source"
          delay={0.05}
        />
        <ArchNode
          icon={Database}
          title="Data Warehouse"
          subtitle="Historical spend  |  Trend analytics"
          variant="source"
          delay={0.1}
        />
      </div>

      {/* Connection labels */}
      <div className="grid grid-cols-2 gap-3">
        <div className="flex justify-center">
          <FlowArrow label="REST API" delay={0.15} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="Direct" delay={0.2} />
        </div>
      </div>

      {/* ── Layer 2: API Backend ── */}
      <LayerLabel label="API Layer" delay={0.25} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Server}
          title="FastAPI Backend"
          subtitle="Python 3.11+  |  REST API  |  Auth & Middleware"
          variant="process"
          delay={0.3}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.35} />
      </div>

      {/* ── Layer 3: Core Services ── */}
      <LayerLabel label="Core Services" delay={0.4} />
      <div className="grid grid-cols-3 gap-3 mb-1">
        <ArchNode
          icon={Store}
          title="Vendor Management"
          subtitle="300+ vendors  |  400+ subs"
          variant="service"
          delay={0.45}
        />
        <ArchNode
          icon={GitBranch}
          title="Classification Engine"
          subtitle="370+ tools classified"
          variant="service"
          delay={0.5}
        />
        <ArchNode
          icon={MessageSquare}
          title="LLM Chatbot"
          subtitle="NL spend queries"
          variant="service"
          delay={0.55}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.6} />
      </div>

      {/* ── Layer 4: Classification Pipeline (detail) ── */}
      <LayerLabel label="AI Classification" delay={0.65} />
      <ClassificationPipeline delay={0.7} />

      <div className="flex justify-center">
        <FlowArrow delay={0.8} />
      </div>

      {/* ── Layer 5: Frontend ── */}
      <LayerLabel label="Presentation" delay={0.85} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Layout}
          title="React + TypeScript Dashboard"
          subtitle="Vite  |  TailwindCSS  |  Real-time analytics"
          variant="frontend"
          delay={0.9}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.95} />
      </div>

      {/* ── Layer 6: Consumers ── */}
      <LayerLabel label="Consumers" delay={1.0} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Boxes}
          title="Finance Team"
          subtitle="Spend visibility"
          variant="user"
          delay={1.05}
        />
        <ArchNode
          icon={Boxes}
          title="IT Admin"
          subtitle="Tool management"
          variant="user"
          delay={1.1}
        />
        <ArchNode
          icon={Boxes}
          title="Department Heads"
          subtitle="Cost attribution"
          variant="user"
          delay={1.15}
        />
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────
// Unified Posture Hub Architecture Diagram
// ───────────────────────────────────────────────────

const UnifiedPostureHubArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Data Sources (4 enterprise systems) ── */}
      <LayerLabel label="Enterprise Systems" delay={0} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-1">
        <ArchNode
          icon={Database}
          title="FreshService"
          subtitle="Asset inventory  |  CMDB"
          variant="source"
          delay={0.05}
        />
        <ArchNode
          icon={Monitor}
          title="ManageEngine"
          subtitle="Encryption  |  Patching"
          variant="source"
          delay={0.1}
        />
        <ArchNode
          icon={Shield}
          title="Trend Micro"
          subtitle="XDR  |  Endpoint security"
          variant="source"
          delay={0.15}
        />
        <ArchNode
          icon={ShieldCheck}
          title="Cloudflare WARP"
          subtitle="Network security  |  VPN"
          variant="source"
          delay={0.2}
        />
      </div>

      {/* Connection labels */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="flex justify-center">
          <FlowArrow label="Basic Auth" delay={0.25} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="OAuth 2.0" delay={0.3} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="JWT Bearer" delay={0.35} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="API Key" delay={0.4} />
        </div>
      </div>

      {/* ── Layer 2: Connector Layer ── */}
      <LayerLabel label="Python Connectors" delay={0.45} />
      <div className="w-full rounded-xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200/40 p-4 mb-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { name: 'freshservice.py', detail: 'Paginated REST' },
            { name: 'manageengine.py', detail: 'Token refresh' },
            { name: 'trendmicro.py', detail: 'XDR pagination' },
            { name: 'cloudflare.py', detail: 'Device status' },
          ].map((conn, i) => (
            <motion.div
              key={conn.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + 0.05 * i }}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-amber-200/50 shadow-sm"
            >
              <Key className="w-3.5 h-3.5 text-amber-500" />
              <div>
                <div className="text-[11px] font-semibold text-gray-800 leading-none font-mono">{conn.name}</div>
                <div className="text-[9px] text-gray-400 leading-none mt-0.5">{conn.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <FlowArrow label="Normalized Records" delay={0.7} />
      </div>

      {/* ── Layer 3: Sync & Storage ── */}
      <LayerLabel label="Sync & Storage" delay={0.75} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={RefreshCw}
          title="Sync Router"
          subtitle="Orchestrates pulls  |  Cross-references"
          variant="process"
          delay={0.8}
        />
        <ArchNode
          icon={Database}
          title="PostgreSQL"
          subtitle="Asset + ComplianceStatus  |  Soft-delete"
          variant="service"
          delay={0.85}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="REST API" delay={0.9} />
      </div>

      {/* ── Layer 4: API Layer ── */}
      <LayerLabel label="API Layer" delay={0.95} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Server}
          title="FastAPI Backend"
          subtitle="Assets  |  Sync  |  Reports routers"
          variant="process"
          delay={1.0}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={1.05} />
      </div>

      {/* ── Layer 5: Frontend ── */}
      <LayerLabel label="Presentation" delay={1.1} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Layout}
          title="React + TypeScript"
          subtitle="Neobrutalist UI  |  TailwindCSS  |  Recharts"
          variant="frontend"
          delay={1.15}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={1.2} />
      </div>

      {/* ── Layer 6: Consumers ── */}
      <LayerLabel label="Consumers" delay={1.25} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Boxes}
          title="IT Security"
          subtitle="Compliance monitoring"
          variant="user"
          delay={1.3}
        />
        <ArchNode
          icon={Boxes}
          title="IT Admin"
          subtitle="Asset management"
          variant="user"
          delay={1.35}
        />
        <ArchNode
          icon={Boxes}
          title="Auditors"
          subtitle="Report generation"
          variant="user"
          delay={1.4}
        />
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────
// Billing Dashboard Architecture Diagram
// ───────────────────────────────────────────────────

const BillingDashboardArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Data Sources ── */}
      <LayerLabel label="Data Sources" delay={0} />
      <div className="grid grid-cols-3 gap-3 mb-1">
        <ArchNode
          icon={Mail}
          title="Gmail"
          subtitle="5 mailboxes  |  OAuth 2.0"
          variant="source"
          delay={0.05}
        />
        <ArchNode
          icon={Database}
          title="Enterprise ERP"
          subtitle="Invoices  |  AR aging  |  Payments"
          variant="source"
          delay={0.1}
        />
        <ArchNode
          icon={Users}
          title="CRM Platform"
          subtitle="Customer enrichment  |  Accounts"
          variant="source"
          delay={0.15}
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="flex justify-center">
          <FlowArrow label="OAuth 2.0" delay={0.2} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="REST API" delay={0.25} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="REST API" delay={0.3} />
        </div>
      </div>

      {/* ── Layer 2: API Backend ── */}
      <LayerLabel label="API Layer" delay={0.35} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Server}
          title="FastAPI Backend"
          subtitle="18+ services  |  Python 3.11+"
          variant="process"
          delay={0.4}
        />
        <ArchNode
          icon={Database}
          title="PostgreSQL + pgvector"
          subtitle="Emails  |  Embeddings  |  3072-dim"
          variant="service"
          delay={0.45}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.5} />
      </div>

      {/* ── Layer 3: AI & Async Processing ── */}
      <LayerLabel label="AI & Async Processing" delay={0.55} />
      <div className="w-full rounded-xl bg-gradient-to-br from-violet-50/50 to-purple-50/50 border border-violet-200/40 p-4 mb-1">
        <div className="grid grid-cols-2 gap-4">
          {/* AI Services */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400 font-mono mb-2">
              AI Services (OpenAI)
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { name: 'Classification', detail: 'GPT-4 — type, priority, sentiment', icon: Brain },
                { name: 'Invoice Extraction', detail: 'Regex → PDF → GPT-4 Vision', icon: Zap },
                { name: 'Semantic Search', detail: '3072-dim embeddings + RRF', icon: Search },
              ].map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + 0.05 * i }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-violet-200/50 shadow-sm"
                >
                  <svc.icon className="w-3.5 h-3.5 text-violet-500" />
                  <div>
                    <div className="text-[11px] font-semibold text-gray-800 leading-none">{svc.name}</div>
                    <div className="text-[9px] text-gray-400 leading-none mt-0.5">{svc.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Celery Workers */}
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400 font-mono mb-2">
              Celery Workers (Redis)
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { name: 'email_sync', detail: 'Hourly Gmail pulls', icon: RefreshCw },
                { name: 'classification', detail: 'Batch AI processing', icon: Settings },
                { name: 'cache_warming', detail: 'Every 2-4 min refresh', icon: Clock },
              ].map((task, i) => (
                <motion.div
                  key={task.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + 0.05 * i }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-amber-200/50 shadow-sm"
                >
                  <task.icon className="w-3.5 h-3.5 text-amber-500" />
                  <div>
                    <div className="text-[11px] font-semibold text-gray-800 leading-none font-mono">{task.name}</div>
                    <div className="text-[9px] text-gray-400 leading-none mt-0.5">{task.detail}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <FlowArrow label="REST + WebSocket" delay={0.8} />
      </div>

      {/* ── Layer 4: Frontend ── */}
      <LayerLabel label="Presentation" delay={0.85} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Layout}
          title="React Dashboard"
          subtitle="6 views  |  Glassmorphism  |  TailwindCSS"
          variant="frontend"
          delay={0.9}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.95} />
      </div>

      {/* ── Layer 5: Consumers ── */}
      <LayerLabel label="Consumers" delay={1.0} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Boxes}
          title="Billing Team"
          subtitle="Email triage & SLA"
          variant="user"
          delay={1.05}
        />
        <ArchNode
          icon={Boxes}
          title="Finance Lead"
          subtitle="Invoice analytics"
          variant="user"
          delay={1.1}
        />
        <ArchNode
          icon={Boxes}
          title="Management"
          subtitle="Team performance"
          variant="user"
          delay={1.15}
        />
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────
// SPOG Architecture Diagram
// ───────────────────────────────────────────────────

const SPOGArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Data Source ── */}
      <LayerLabel label="Source System" delay={0} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Database}
          title="NetSuite ERP"
          subtitle="Balance Sheet & Cash Flow  |  300+ GL accounts"
          variant="source"
          delay={0.05}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="CSV Export (source of truth)" delay={0.15} />
      </div>

      {/* ── Layer 2: Ingestion ── */}
      <LayerLabel label="Ingestion" delay={0.2} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Store}
          title="DBFS Storage"
          subtitle="Databricks File System  |  Raw CSV landing zone"
          variant="process"
          delay={0.25}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="PySpark ETL" delay={0.35} />
      </div>

      {/* ── Layer 3: Processing ── */}
      <LayerLabel label="Processing (Databricks Notebooks)" delay={0.4} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Server}
          title="Balance Sheet Processor"
          subtitle="GL mapping  |  Hierarchical aggregation  |  Multi-currency"
          variant="process"
          delay={0.45}
        />
        <ArchNode
          icon={Server}
          title="Cash Flow Processor"
          subtitle="9-line format  |  QTD/YTD  |  Operating/Investing/Financing"
          variant="process"
          delay={0.5}
        />
      </div>

      {/* Sub-detail: GL Mapping Pipeline */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.55 }}
        className="w-full rounded-xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200/40 p-4 mb-1"
      >
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400 font-mono mb-3">
          GL Account Mapping Pipeline
        </div>
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {[
            { label: 'Raw CSV', sublabel: '300+ GL accounts', icon: Database },
            { label: 'JSON Config', sublabel: 'gl_mappings.json', icon: Settings },
            { label: 'Categorize', sublabel: '50+ subcategories', icon: GitBranch },
            { label: 'Aggregate', sublabel: 'GL → Sub → Major → Total', icon: Boxes },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.55 + 0.1 * i }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-amber-200/50 shadow-sm"
              >
                <step.icon className="w-3.5 h-3.5 text-amber-500" />
                <div>
                  <div className="text-[11px] font-semibold text-gray-800 leading-none">{step.label}</div>
                  <div className="text-[9px] text-gray-400 leading-none mt-0.5">{step.sublabel}</div>
                </div>
              </motion.div>
              {i < 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.55 + 0.1 * i + 0.15 }}
                >
                  <ArrowDown className="w-3 h-3 text-amber-300 rotate-[-90deg]" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center">
        <FlowArrow label="Delta Write (ACID)" delay={0.7} />
      </div>

      {/* ── Layer 4: Storage ── */}
      <LayerLabel label="Storage (Unity Catalog)" delay={0.75} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-1">
        {[
          { title: 'Balance Sheet', subtitle: 'Monthly snapshots' },
          { title: 'Cash Flow', subtitle: 'Operating/Investing/Financing' },
          { title: 'GL Mappings', subtitle: 'Account → category' },
          { title: 'Historical', subtitle: 'FY23 / FY24 / FY25' },
        ].map((table, i) => (
          <ArchNode
            key={table.title}
            icon={Database}
            title={table.title}
            subtitle={table.subtitle}
            variant="service"
            delay={0.8 + 0.05 * i}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex justify-center">
          <FlowArrow label="SQL Queries (20+)" delay={0.95} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="NL → SQL" delay={1.0} />
        </div>
      </div>

      {/* ── Layer 5: Presentation ── */}
      <LayerLabel label="Presentation" delay={1.05} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Layout}
          title="SQL Dashboards"
          subtitle="20+ parameterized queries  |  INR/USD conversion"
          variant="frontend"
          delay={1.1}
        />
        <ArchNode
          icon={Brain}
          title="Databricks Genie"
          subtitle="Natural language financial queries"
          variant="ai"
          delay={1.15}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={1.2} />
      </div>

      {/* ── Layer 6: Consumers ── */}
      <LayerLabel label="Consumers" delay={1.25} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Users}
          title="CFO"
          subtitle="Financial oversight"
          variant="user"
          delay={1.3}
        />
        <ArchNode
          icon={Users}
          title="Finance Team"
          subtitle="Report generation"
          variant="user"
          delay={1.35}
        />
        <ArchNode
          icon={Users}
          title="Auditors"
          subtitle="Compliance & trails"
          variant="user"
          delay={1.4}
        />
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────
// Identity Lifecycle Architecture Diagram
// ───────────────────────────────────────────────────

const IdentityLifecycleArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Source System ── */}
      <LayerLabel label="HR System of Record" delay={0} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Database}
          title="SAP SuccessFactors"
          subtitle="OAuth 2.0 SAML2-bearer  |  OData v2 API  |  5,800+ accounts"
          variant="source"
          delay={0.05}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="OData Query + Pagination" delay={0.15} />
      </div>

      {/* ── Layer 2: Three Cron Phases ── */}
      <LayerLabel label="Cron-Triggered Phases" delay={0.2} />
      <div className="grid grid-cols-3 gap-3 mb-1">
        <ArchNode
          icon={Users}
          title="Onboarding"
          subtitle="Hourly  |  New hire detection"
          variant="process"
          delay={0.25}
        />
        <ArchNode
          icon={RefreshCw}
          title="Field Updates"
          subtitle="Every 12h  |  9-field compare"
          variant="process"
          delay={0.3}
        />
        <ArchNode
          icon={Shield}
          title="Offboarding"
          subtitle="Every 2h  |  Termination filter"
          variant="process"
          delay={0.35}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.4} />
      </div>

      {/* ── Layer 3: Intelligence Layer ── */}
      <LayerLabel label="Processing Intelligence" delay={0.45} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="w-full rounded-xl bg-gradient-to-br from-violet-50/50 to-purple-50/50 border border-violet-200/40 p-4 mb-1"
      >
        <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400 font-mono mb-3">
          Email Fabrication & Validation Pipeline
        </div>
        <div className="flex items-center gap-1 flex-wrap justify-center">
          {[
            { label: 'Name Parsing', sublabel: 'Country-aware format', icon: Users },
            { label: 'Prefix Strip', sublabel: 'db.inactive. removal', icon: Search },
            { label: 'Dedup Check', sublabel: '5,800+ email history', icon: Shield },
            { label: 'Conversion Detect', sublabel: 'c-prefix → permanent', icon: UserCheck },
          ].map((step, i) => (
            <div key={step.label} className="flex items-center gap-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.55 + 0.1 * i }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-violet-200/50 shadow-sm"
              >
                <step.icon className="w-3.5 h-3.5 text-violet-500" />
                <div>
                  <div className="text-[11px] font-semibold text-gray-800 leading-none">{step.label}</div>
                  <div className="text-[9px] text-gray-400 leading-none mt-0.5">{step.sublabel}</div>
                </div>
              </motion.div>
              {i < 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.55 + 0.1 * i + 0.15 }}
                >
                  <ArrowDown className="w-3 h-3 text-violet-300 rotate-[-90deg]" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="flex justify-center">
        <FlowArrow label="GAM CLI Commands (20 workers)" delay={0.85} />
      </div>

      {/* ── Layer 4: Execution ── */}
      <LayerLabel label="Execution (GAMADV-XTD3)" delay={0.9} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Settings}
          title="GAMADV-XTD3 CLI"
          subtitle="Account create  |  Field update  |  Suspend  |  Email notify"
          variant="service"
          delay={0.95}
          className="w-full max-w-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex justify-center">
          <FlowArrow label="Provision + Update" delay={1.0} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="SSO Provision" delay={1.05} />
        </div>
      </div>

      {/* ── Layer 5: Target Systems ── */}
      <LayerLabel label="Target Systems" delay={1.1} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Mail}
          title="Google Workspace"
          subtitle="Account lifecycle  |  15+ fields  |  Welcome email"
          variant="frontend"
          delay={1.15}
        />
        <ArchNode
          icon={Key}
          title="OneLogin SSO"
          subtitle="Auto-provisioning  |  Credential fetch"
          variant="service"
          delay={1.2}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="Email writeback to SAP" delay={1.25} />
      </div>

      {/* ── Layer 6: Feedback ── */}
      <LayerLabel label="Feedback & Notifications" delay={1.3} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Database}
          title="SAP Writeback"
          subtitle="OData upsert — GWS email"
          variant="source"
          delay={1.35}
        />
        <ArchNode
          icon={Mail}
          title="IT Notifications"
          subtitle="HTML emails + CSV reports"
          variant="user"
          delay={1.4}
        />
        <ArchNode
          icon={Boxes}
          title="Audit Logs"
          subtitle="JSON tracking + error logs"
          variant="user"
          delay={1.45}
        />
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────
// Rydoo Sync Architecture Diagram
// ───────────────────────────────────────────────────

const RydooSyncArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Source System ── */}
      <LayerLabel label="Expense Platform" delay={0} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Store}
          title="Rydoo API"
          subtitle="OAuth 2.0 Client Credentials  |  /v2/expenses/exported  |  Receipt streaming"
          variant="source"
          delay={0.05}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="OAuth 2.0 + Pagination" delay={0.15} />
      </div>

      {/* ── Layer 2: Trigger & Orchestration ── */}
      <LayerLabel label="Trigger & Credentials" delay={0.2} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Clock}
          title="EventBridge"
          subtitle="Cron: 2:00 AM IST daily"
          variant="process"
          delay={0.25}
        />
        <ArchNode
          icon={Key}
          title="Secrets Manager"
          subtitle="client_id + client_secret"
          variant="service"
          delay={0.3}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={0.35} />
      </div>

      {/* ── Layer 3: Processing — Two Parallel Paths ── */}
      <LayerLabel label="Processing (Two Paths)" delay={0.4} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        {/* Data Sync Lambda */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="rounded-xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200/40 p-4"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400 font-mono mb-3">
            Data Sync Lambda
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { label: 'Fetch Expenses', sublabel: 'Paginated API', icon: Database },
              { label: 'Download Receipts', sublabel: 'S3 dedup', icon: Zap },
              { label: 'Upload to S3', sublabel: 'Date-partitioned', icon: Boxes },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + 0.08 * i }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-amber-200/50 shadow-sm"
              >
                <step.icon className="w-3.5 h-3.5 text-amber-500" />
                <div>
                  <div className="text-[11px] font-semibold text-gray-800 leading-none">{step.label}</div>
                  <div className="text-[9px] text-gray-400 leading-none mt-0.5">{step.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Browser Audit Scraper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="rounded-xl bg-gradient-to-br from-violet-50/50 to-purple-50/50 border border-violet-200/40 p-4"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400 font-mono mb-3">
            Browser Audit Scraper (Playwright)
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { label: 'Web UI Login', sublabel: 'Auto re-login', icon: Key },
              { label: 'Scrape Audit Trail', sublabel: '10+ events/expense', icon: Search },
              { label: 'Checkpoint/Resume', sublabel: 'Atomic writes', icon: RefreshCw },
            ].map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 + 0.08 * i }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-violet-200/50 shadow-sm"
              >
                <step.icon className="w-3.5 h-3.5 text-violet-500" />
                <div>
                  <div className="text-[11px] font-semibold text-gray-800 leading-none">{step.label}</div>
                  <div className="text-[9px] text-gray-400 leading-none mt-0.5">{step.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex justify-center">
          <FlowArrow label="Write (partitioned)" delay={0.85} />
        </div>
        <div className="flex justify-center">
          <FlowArrow label="Audit JSON + Screenshots" delay={0.9} />
        </div>
      </div>

      {/* ── Layer 4: Storage ── */}
      <LayerLabel label="S3 Storage (ap-south-1 Mumbai)" delay={0.95} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-1">
        {[
          { title: 'Expenses', subtitle: 'year=/month= JSON' },
          { title: 'Receipts', subtitle: 'PDF/JPG/PNG files' },
          { title: 'Audit Trails', subtitle: 'Approval history' },
          { title: 'Sync State', subtitle: 'last_sync.json' },
        ].map((item, i) => (
          <ArchNode
            key={item.title}
            icon={Database}
            title={item.title}
            subtitle={item.subtitle}
            variant="service"
            delay={1.0 + 0.05 * i}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <FlowArrow label="Search + Presigned URLs" delay={1.2} />
      </div>

      {/* ── Layer 5: Audit Portal ── */}
      <LayerLabel label="Audit Portal (API Gateway + Lambda)" delay={1.25} />
      <div className="flex justify-center mb-1">
        <ArchNode
          icon={Layout}
          title="Expense Audit Portal"
          subtitle="Search by ID  |  Detail cards  |  Audit timeline  |  Receipt preview"
          variant="frontend"
          delay={1.3}
          className="w-full max-w-sm"
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow delay={1.35} />
      </div>

      {/* ── Layer 6: Consumers ── */}
      <LayerLabel label="Consumers" delay={1.4} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Users}
          title="Finance Team"
          subtitle="Expense verification"
          variant="user"
          delay={1.45}
        />
        <ArchNode
          icon={Users}
          title="Auditors"
          subtitle="Compliance checks"
          variant="user"
          delay={1.5}
        />
        <ArchNode
          icon={Users}
          title="IT Admin"
          subtitle="Sync monitoring"
          variant="user"
          delay={1.55}
        />
      </div>
    </div>
  );
};

// ───────────────────────────────────────────────────
// Main Export: Architecture Diagram wrapper
// ───────────────────────────────────────────────────

interface ArchitectureDiagramProps {
  slug: string;
  textDescription?: string;
}

// ───────────────────────────────────────────────────
// DryVox Architecture
// ───────────────────────────────────────────────────

const DryVoxArchitecture = () => {
  return (
    <div className="relative">
      {/* ── Layer 1: Clients ── */}
      <LayerLabel label="Frontend & Users" delay={0} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Layout}
          title="React 19 SPA"
          subtitle="Vite 6, Zustand, Framer Motion, Tailwind"
          variant="frontend"
          delay={0.05}
        />
        <ArchNode
          icon={Users}
          title="Shipping Operators"
          subtitle="Trainee | Junior | Senior experience levels"
          variant="user"
          delay={0.1}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="WebSocket + REST" delay={0.15} />
      </div>

      {/* ── Layer 2: Auth & Gateway ── */}
      <LayerLabel label="Authentication & API Gateway" delay={0.2} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <ArchNode
          icon={Shield}
          title="AWS Cognito"
          subtitle="OAuth 2.0, JWT, MFA, email verification"
          variant="service"
          delay={0.25}
        />
        <ArchNode
          icon={Server}
          title="FastAPI Backend"
          subtitle="14 route modules, async SQLAlchemy, Pydantic v2"
          variant="process"
          delay={0.3}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="JWT-verified requests" delay={0.35} />
      </div>

      {/* ── Layer 3: AI Provider Gateway ── */}
      <LayerLabel label="AI Provider Gateway (3 Providers)" delay={0.4} />
      <div className="grid grid-cols-3 gap-3 mb-1">
        <ArchNode
          icon={AudioLines}
          title="Gemini Live"
          subtitle="Native audio WebSocket proxy, function calling"
          variant="ai"
          delay={0.45}
        />
        <ArchNode
          icon={Brain}
          title="OpenAI Suite"
          subtitle="GPT-4 chat, Whisper STT, TTS, Vision"
          variant="ai"
          delay={0.5}
        />
        <ArchNode
          icon={Workflow}
          title="OpenRouter"
          subtitle="Fallback provider, cost-effective inference"
          variant="ai"
          delay={0.55}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="Tool execution + RAG context" delay={0.6} />
      </div>

      {/* ── Layer 4: Domain Tools & Document Processing ── */}
      <LayerLabel label="Domain Tools & Documents" delay={0.65} />
      <div className="grid grid-cols-2 gap-3 mb-1">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="rounded-xl bg-gradient-to-br from-amber-50/50 to-orange-50/50 border border-amber-200/40 p-4"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-400 font-mono mb-3">
            Shipping Calculators
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { label: 'Laytime', sublabel: 'NOR, weather days', icon: Clock },
              { label: 'Demurrage', sublabel: 'Daily rate, pro-rata', icon: Calculator },
              { label: 'Freight', sublabel: 'Rate estimation', icon: Globe },
              { label: 'Voyage', sublabel: 'Distance, fuel, cost', icon: Globe },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <item.icon className="w-3 h-3 text-amber-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className="text-gray-400">— {item.sublabel}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.75 }}
          className="rounded-xl bg-gradient-to-br from-violet-50/50 to-purple-50/50 border border-violet-200/40 p-4"
        >
          <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-violet-400 font-mono mb-3">
            Document Pipeline
          </div>
          <div className="flex flex-col gap-1.5">
            {[
              { label: 'OCR + Vision', sublabel: 'Charter Party analysis', icon: Eye },
              { label: 'Parser', sublabel: 'PDF, DOCX, Excel, PPTX', icon: FileText },
              { label: 'Generator', sublabel: 'HTML, PDF, DOCX, PPTX', icon: FileText },
              { label: 'Mission RAG', sublabel: 'Persistent doc context', icon: Brain },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <item.icon className="w-3 h-3 text-violet-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">{item.label}</span>
                <span className="text-gray-400">— {item.sublabel}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center">
        <FlowArrow label="Confidence scoring + audit" delay={0.8} />
      </div>

      {/* ── Layer 5: Data & Storage ── */}
      <LayerLabel label="Data & Storage" delay={0.85} />
      <div className="grid grid-cols-3 gap-3 mb-1">
        <ArchNode
          icon={Database}
          title="PostgreSQL"
          subtitle="10 models, Alembic migrations, async"
          variant="source"
          delay={0.9}
        />
        <ArchNode
          icon={Zap}
          title="Redis"
          subtitle="Session cache, rate limiting"
          variant="service"
          delay={0.95}
        />
        <ArchNode
          icon={Cloud}
          title="AWS S3"
          subtitle="Document storage, generated files"
          variant="service"
          delay={1.0}
        />
      </div>

      <div className="flex justify-center">
        <FlowArrow label="CloudFront CDN" delay={1.05} />
      </div>

      {/* ── Layer 6: Infrastructure ── */}
      <LayerLabel label="AWS Infrastructure" delay={1.1} />
      <div className="grid grid-cols-3 gap-3">
        <ArchNode
          icon={Server}
          title="EC2 + Docker"
          subtitle="FastAPI backend, uvicorn"
          variant="process"
          delay={1.15}
        />
        <ArchNode
          icon={Globe}
          title="CloudFront"
          subtitle="CDN, HTTPS termination"
          variant="service"
          delay={1.2}
        />
        <ArchNode
          icon={Layout}
          title="Amplify"
          subtitle="Frontend hosting, CI/CD"
          variant="frontend"
          delay={1.25}
        />
      </div>
    </div>
  );
};

const ArchitectureDiagram = ({ slug, textDescription }: ArchitectureDiagramProps) => {
  // Only render visual diagram for projects that have one
  const hasDiagram = ['vendorlens', 'unified-posture-hub', 'billing-dashboard', 'spog', 'identity-lifecycle', 'rydoo-sync', 'dryvox'].includes(slug);

  if (!hasDiagram) {
    // Fallback to text description
    return textDescription ? (
      <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
        <h3 className="font-sora text-xl font-bold text-gray-900 mb-3">Architecture</h3>
        <p className="text-gray-700 leading-relaxed">{textDescription}</p>
      </div>
    ) : null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-8 relative"
    >
      {/* Container */}
      <div className="relative p-6 md:p-8 rounded-2xl bg-white border border-gray-200/80 shadow-lg overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }} />

        {/* Header */}
        <div className="relative flex items-center justify-between mb-6">
          <div>
            <h3 className="font-sora text-xl font-bold text-gray-900">System Architecture</h3>
            <p className="text-sm text-gray-500 mt-0.5">Data flow from source systems to end users</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {(['source', 'process', 'service', 'ai', 'frontend'] as NodeVariant[]).map((v) => (
              <div key={v} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${variantStyles[v].iconBg}`} />
                <span className="text-[10px] text-gray-400 capitalize font-mono">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Diagram */}
        <div className="relative">
          {slug === 'vendorlens' && <VendorLensArchitecture />}
          {slug === 'unified-posture-hub' && <UnifiedPostureHubArchitecture />}
          {slug === 'billing-dashboard' && <BillingDashboardArchitecture />}
          {slug === 'spog' && <SPOGArchitecture />}
          {slug === 'identity-lifecycle' && <IdentityLifecycleArchitecture />}
          {slug === 'rydoo-sync' && <RydooSyncArchitecture />}
          {slug === 'dryvox' && <DryVoxArchitecture />}
        </div>

        {/* Text summary below */}
        {textDescription && (
          <div className="relative mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 leading-relaxed">{textDescription}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ArchitectureDiagram;
