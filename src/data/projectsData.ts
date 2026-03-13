import {
  Store,
  ShieldCheck,
  Sparkles,
  Inbox,
  Activity,
  Zap,
  MessageSquare,
  BookOpen,
  ArrowLeftRight,
  Calendar,
  ShoppingCart,
  PieChart,
  Users,
  Mic,
  TrendingUp,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'infrastructure' | 'ai';
  icon?: string; // Simple Icons slug
}

export interface Integration {
  system: string;
  type: string;
  dataFlow: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface KeyDecision {
  question: string;
  answer: string;
}

export interface BeforeAfter {
  label: string;
  before: string;
  after: string;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface DesignPrinciple {
  title: string;
  description: string;
  screenshotIndex: number; // which screenshot illustrates this
  highlight: string; // specific area to call attention to
}

export interface ColorToken {
  name: string;
  hex: string;
  usage: string;
}

export interface DesignSection {
  philosophy: string;
  principles: DesignPrinciple[];
  colorPalette: ColorToken[];
  componentPatterns: string[];
}

export interface ProjectArticle {
  // Identification
  id: number;
  slug: string; // URL-friendly

  // Header
  name: string;
  tagline: string;
  type: string;
  organization: string;
  category: string; // For grouping in sub-sections
  readTime: string;
  publishDate: string;

  // Visual
  icon: LucideIcon;
  monogram: string; // 2-letter abbreviation for unique icons
  color: string;
  heroImage: string; // Gradient placeholder

  // Article Content Sections
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  architecture?: string;
  impact: string;

  // Enhanced sections (optional)
  keyDecisions?: KeyDecision[];
  beforeAfter?: BeforeAfter[];
  screenshots?: Screenshot[];
  design?: DesignSection;

  // Technical Details
  techStack: TechItem[];
  integrations?: Integration[];
  metrics: Metric[];

  // Recognition
  award?: string; // e.g. "GenAI Buildathon Winner"
  liveUrl?: string; // URL for live/deployed projects

  // Legacy fields for backward compatibility
  userStory: string;
  description: string;
}

export const projectsData: ProjectArticle[] = [
  // ==================== ENTERPRISE PROJECTS ====================
  {
    id: 1,
    slug: "vendorlens",
    name: "VendorLens",
    tagline: "Smart Vendor Spend Management",
    type: "FinOps",
    organization: "Amagi Media",
    category: "Finance & FinOps",
    readTime: "10 min read",
    publishDate: "January 2025",
    icon: Store,
    monogram: "VL",
    color: "bg-amber-500",
    heroImage: "gradient-amber",

    overview: "VendorLens is a comprehensive SaaS vendor and tool spend management platform designed to bring financial clarity to IT operations. Managing multi-million dollar annual software spending across 300+ vendors and 370+ tools, it serves as the central source of truth for subscription tracking, renewal management, and cost optimization across the enterprise.",

    challenge: "IT and Finance teams struggled with vendor sprawl—no centralized visibility into software subscriptions, renewal dates, or department-level spending. Surprise renewals and duplicate tools were common. The business needed a way to track engineering vs non-engineering tools, identify cost optimization opportunities, and prevent billing surprises.",

    solution: "Built a full-stack platform with FastAPI backend and React TypeScript frontend, integrating directly with the enterprise ERP for vendor master data and a centralized data warehouse for analytics. Implemented hybrid AI classification using rule-based logic validated by GPT-4 for tool categorization (Engineering vs Non-Engineering). Created department-level analytics, functional owner tracking, and automated renewal alerts.",

    features: [
      "Real-time spend tracking across multi-million dollar software subscriptions",
      "AI-powered tool classification (Rule-based + GPT-4 validation)",
      "ERP integration for live vendor master data sync",
      "Department-level spending analytics and cost center attribution",
      "Renewal tracking with automated alerts for upcoming expirations",
      "Functional owner management across 80+ stakeholders",
      "Vendor consolidation recommendations powered by AI",
      "LLM chatbot for natural language spend queries",
      "400+ subscription monitoring with status tracking",
      "Cost optimization insights and duplicate tool detection"
    ],

    architecture: "The platform connects to the enterprise ERP via REST API for vendor data synchronization and a centralized data warehouse for historical analytics. A hybrid classification engine combines rule-based keyword matching with GPT-4 validation for uncertain cases, ensuring accurate tool categorization while minimizing API costs.",

    impact: "VendorLens transformed vendor management from reactive to proactive. Finance gained complete visibility into software spending, IT identified significant cost optimization opportunities through duplicate tool detection, and department heads could now track their team's software costs in real time. The platform prevents surprise renewals and enables data-driven vendor negotiations.",

    keyDecisions: [
      {
        question: "Why hybrid classification instead of pure LLM?",
        answer: "Pure GPT-4 classification would cost ~$0.03 per tool at 370+ tools with frequent reclassification — unnecessary for 80% of cases where simple keyword rules work. The hybrid approach uses rule-based matching first (free, instant), then only sends ambiguous cases to GPT-4 for validation. This cut AI costs by ~70% while maintaining 95%+ accuracy."
      },
      {
        question: "Why ERP integration over CSV imports?",
        answer: "CSV-based workflows broke constantly — stale data, format changes, manual uploads forgotten. Direct ERP API integration ensures vendor master data is always current, eliminating the 2-3 day data lag that caused missed renewal alerts and incorrect spend attribution."
      },
      {
        question: "Why FastAPI over Django for the backend?",
        answer: "The dashboard requires sub-second response times for real-time spend queries across 300+ vendors. FastAPI's async architecture and automatic OpenAPI documentation made it ideal for building a high-performance API layer, while Django's ORM overhead would have added latency to complex aggregation queries."
      }
    ],

    beforeAfter: [
      {
        label: "Vendor Visibility",
        before: "Scattered spreadsheets, no single source of truth",
        after: "Centralized dashboard with real-time spend tracking"
      },
      {
        label: "Tool Classification",
        before: "Manual tagging, inconsistent categorization",
        after: "AI-powered hybrid classification (95%+ accuracy)"
      },
      {
        label: "Renewal Management",
        before: "Surprise renewals, missed cancellation windows",
        after: "Automated alerts 30/60/90 days before expiry"
      },
      {
        label: "Spend Analysis",
        before: "Quarterly manual reports, weeks of effort",
        after: "Real-time analytics, instant department drill-down"
      }
    ],

    screenshots: [
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_47_16.webp",
        alt: "VendorLens Main Dashboard",
        caption: "Main dashboard — Engineering vs Non-Engineering spend analysis, vendor performance metrics, top vendors & tools, and functional owner management"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_47_52.webp",
        alt: "Vendor Management Page",
        caption: "Vendor management — Sortable vendor table with spend, contracts, growth trends, and upcoming renewal dates"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_48_09.webp",
        alt: "Cost Analysis Page",
        caption: "Cost analysis — Trend analysis, department-level spending breakdown, and AI-powered cost optimization opportunities with confidence scoring"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_48_20.webp",
        alt: "Reports & Exports Page",
        caption: "Reports & exports — Pre-configured financial reports, scheduled deliveries, and on-demand data exports"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_48_31.webp",
        alt: "Renewal Management Page",
        caption: "Renewal management — Urgency-based contract tracking with auto-renew status, owner assignment, and days-until-expiry alerts"
      }
    ],

    design: {
      philosophy: "VendorLens was designed with a data-dense dark interface optimized for finance and IT operations teams who spend hours analyzing vendor data. Every design decision prioritizes scannability, reducing cognitive load, and surfacing actionable insights without requiring drill-down.",

      principles: [
        {
          title: "Semantic Color Coding",
          description: "Colors carry meaning, not decoration. Blue represents engineering spend, green maps to non-engineering/growth metrics, amber signals renewals needing attention, and red flags urgent action items. Users learn the color language once and can scan dashboards instantly.",
          screenshotIndex: 0,
          highlight: "Engineering vs Non-Engineering chart and stat cards"
        },
        {
          title: "Progressive Information Density",
          description: "Each page follows a top-down hierarchy: summary KPI cards → visual charts → detailed data tables. Users get the high-level picture in 2 seconds and can drill into specifics only when needed, preventing information overload.",
          screenshotIndex: 1,
          highlight: "Stat cards → bar chart → vendor table flow"
        },
        {
          title: "Confidence-Based Visual Weight",
          description: "In the cost optimization module, recommendations are styled with visual weight proportional to their confidence level. High-confidence items use bold green progress bars; medium-confidence uses subtler yellow — so users naturally prioritize the most reliable savings opportunities.",
          screenshotIndex: 2,
          highlight: "Cost optimization cards with High/Medium confidence badges"
        },
        {
          title: "Urgency-Driven Layout",
          description: "The renewal management page uses a three-tier urgency system — red (action required within 7 days), amber (needs attention within 30 days), and green (on track). This status-first layout ensures critical renewals never get buried in a generic list.",
          screenshotIndex: 4,
          highlight: "Urgent Action → Needs Attention → On Track status cards"
        },
        {
          title: "Action-Proximity Pattern",
          description: "Export controls, filters, and action buttons are always positioned in the top-right of each section — the natural terminal point of left-to-right reading. Report cards place format badges (PDF, Excel, CSV) at the action edge for one-click generation.",
          screenshotIndex: 3,
          highlight: "Quick Export / Schedule / Custom Report action bar"
        }
      ],

      colorPalette: [
        { name: "Surface", hex: "#0a0a0a", usage: "Primary background — reduces eye strain during extended analysis sessions" },
        { name: "Card", hex: "#171717", usage: "Elevated containers for stat cards, charts, and data panels" },
        { name: "Engineering Blue", hex: "#3B82F6", usage: "Engineering spend, primary data series, active navigation states" },
        { name: "Growth Green", hex: "#22C55E", usage: "Non-engineering data, positive growth indicators, on-track status" },
        { name: "Alert Amber", hex: "#F59E0B", usage: "Renewals, attention-needed states, secondary highlights" },
        { name: "Urgent Red", hex: "#EF4444", usage: "Urgent actions, negative trends, critical alerts" },
        { name: "Optimize Purple", hex: "#8B5CF6", usage: "Cost optimization, analytics insights, AI-powered features" }
      ],

      componentPatterns: [
        "Stat cards with icon, value, label, and trend indicator — used across all 5 pages for consistent KPI presentation",
        "Collapsible sidebar navigation with icon-only collapsed state — maximizes data area on smaller screens",
        "Category badges with distinct background colors — instant visual differentiation in dense data tables",
        "Inline growth indicators (+12.5%, -2.1%) with color coding — no need to reference a separate legend",
        "Days-left countdown badges in renewal tables — temporal urgency is always visible at the row level"
      ]
    },

    techStack: [
      // Frontend
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "Recharts", category: "frontend", icon: "recharts" },
      // Backend
      { name: "Python", category: "backend", icon: "python" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "SQLAlchemy", category: "backend", icon: "sqlalchemy" },
      { name: "Pandas", category: "backend", icon: "pandas" },
      { name: "Uvicorn", category: "backend", icon: "uvicorn" },
      { name: "Redis", category: "backend", icon: "redis" },
      // Database
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      // Infrastructure
      { name: "AWS EC2", category: "infrastructure", icon: "amazonec2" },
      { name: "AWS RDS", category: "infrastructure", icon: "amazonrds" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "Docker", category: "infrastructure", icon: "docker" },
      { name: "Nginx", category: "infrastructure", icon: "nginx" },
      { name: "GitHub", category: "infrastructure", icon: "github" },
      // AI/ML
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
    ],

    integrations: [
      {
        system: "Enterprise ERP",
        type: "REST API",
        dataFlow: "Vendor master data, purchase orders, invoice history, contract renewals"
      },
      {
        system: "Data Warehouse",
        type: "Direct connection",
        dataFlow: "Centralized analytics store for vendor spend history and trend analysis"
      }
    ],

    metrics: [
      { label: "Spend Tracked", value: "$27M+" },
      { label: "Vendors", value: "300+" },
      { label: "Tools Classified", value: "370+" },
      { label: "Subscriptions", value: "400+" },
      { label: "Departments", value: "13" },
      { label: "Stakeholders", value: "80+" },
    ],

    userStory: "As a Finance Director, I want to see all vendor renewals in one place so I can negotiate better contracts and avoid surprise charges.",
    description: "Comprehensive SaaS vendor management platform tracking multi-million dollar software spending across 300+ vendors with renewal alerts and department analytics.",
  },

  {
    id: 2,
    slug: "unified-posture-hub",
    name: "Unified Posture Hub",
    tagline: "IT Compliance Dashboard",
    type: "Security",
    organization: "Amagi Media",
    category: "Security & Compliance",
    readTime: "9 min read",
    publishDate: "December 2024",
    icon: ShieldCheck,
    monogram: "UP",
    color: "bg-emerald-500",
    heroImage: "gradient-emerald",

    overview: "Unified Posture Hub is an enterprise IT compliance monitoring platform that provides real-time visibility into security software installations across 1,178 company assets. It aggregates data from four enterprise systems — FreshService, ManageEngine, Trend Micro, and Cloudflare WARP — into a single compliance dashboard with per-asset, per-department, and per-tool breakdowns.",

    challenge: "The IT Security team lacked centralized visibility into endpoint security compliance. Data was scattered across four disconnected systems: FreshService for asset inventory, ManageEngine for endpoint management and encryption, Trend Micro for antivirus and threat detection, and Cloudflare WARP for network security. Manual audits required weeks of cross-referencing spreadsheets. Non-compliant devices went undetected until external security audits, creating risk exposure. There was no way to answer a simple question: \"Which laptops are missing which security tools right now?\"",

    solution: "Built a FastAPI-powered aggregation platform with custom Python connectors for each enterprise system. FreshService provides the asset master list via REST API; ManageEngine connects via OAuth 2.0 with automatic token refresh for encryption and patching status; Trend Micro's XDR API delivers endpoint security posture. Asset records are normalized and cross-referenced using serial numbers and hostnames into a unified PostgreSQL schema. A React + TypeScript dashboard with a neobrutalist design system renders real-time compliance rates, department-level breakdowns, and per-device compliance matrices.",

    features: [
      "Multi-system integration across 4 enterprise security platforms",
      "Real-time compliance monitoring for 1,178 endpoints (laptops, servers, desktops)",
      "Per-asset compliance matrix showing status across all 4 tools",
      "Department-level security posture analytics and drill-down",
      "Automated asset reconciliation with soft-delete lifecycle management",
      "Non-compliant device identification with severity-based alerting",
      "90-day compliance trend tracking with historical data",
      "Asset type distribution charts (compliant vs non-compliant by device type)",
      "Category-level compliance breakdown (FreshService, Encryption, Patching, Security)",
      "One-click compliance report generation (PDF, CSV, XLSX formats)",
      "Searchable asset table with multi-column filtering and export",
      "Configurable alert notifications for non-compliant assets"
    ],

    architecture: "The platform uses a connector-per-system architecture. FreshServiceConnector fetches paginated asset inventories via basic auth REST API. ManageEngineConnector handles OAuth 2.0 token lifecycle (access + refresh) with automatic rotation and fetches encryption and patch compliance via OData-style endpoints. TrendMicroConnector queries the Vision One XDR API with JWT authentication for endpoint security status. A sync router orchestrates periodic data pulls, normalizes records into a unified Asset + ComplianceStatus schema in PostgreSQL, and cross-references using serial numbers and hostnames. The React frontend queries FastAPI endpoints for aggregated compliance summaries, trend data, and per-asset details.",

    impact: "The security team gained instant visibility into compliance gaps, reducing audit preparation time from days to minutes. IT could now proactively remediate non-compliant devices before security reviews. Compliance rates improved from 62% to 70.2% within three months of deployment. The platform became the single source of truth for endpoint security posture across the entire organization.",

    keyDecisions: [
      {
        question: "Why a connector-per-system architecture instead of a generic API adapter?",
        answer: "Each security system has fundamentally different auth mechanisms (basic auth, OAuth 2.0 with token refresh, JWT bearer tokens) and data schemas. A generic adapter would paper over these differences and break on edge cases. Dedicated connectors (freshservice.py, manageengine.py, trendmicro.py) handle each system's quirks — like ManageEngine's OAuth token rotation and Trend Micro's pagination via nextLink — resulting in more reliable data sync."
      },
      {
        question: "Why cross-reference assets by hostname and serial number instead of a single key?",
        answer: "No single identifier is consistent across all four systems. FreshService uses display_id, ManageEngine uses its own asset ID, and Trend Micro identifies by endpoint GUID. Hostnames and serial numbers are the only fields present in all systems, so we use a composite match strategy — hostname first, serial number fallback — to achieve reliable asset reconciliation."
      },
      {
        question: "Why neobrutalist design instead of a conventional dashboard aesthetic?",
        answer: "Compliance dashboards are inherently boring — they get ignored. The bold neobrutalist style with hard shadows, thick borders, and high-contrast status colors (green/red/blue) was a deliberate choice to make the dashboard visually arresting and impossible to overlook. When a metric card turns red with a hard shadow, it demands attention."
      },
      {
        question: "Why PostgreSQL with soft-delete instead of syncing fresh every time?",
        answer: "Assets disappear from source systems for temporary reasons (reimaging, RMA, decommissioning in progress). Hard-syncing would lose compliance history for those assets. The is_active soft-delete flag preserves historical records while filtering inactive assets from current compliance calculations, enabling accurate trend analysis over time."
      }
    ],

    beforeAfter: [
      {
        label: "Compliance Visibility",
        before: "Four separate admin consoles, no unified view of endpoint security posture",
        after: "Single dashboard showing per-asset compliance across all tools in one table"
      },
      {
        label: "Audit Preparation",
        before: "Weeks of manual spreadsheet cross-referencing across 4 systems",
        after: "One-click report generation with real-time compliance data"
      },
      {
        label: "Non-Compliant Device Detection",
        before: "Discovered during external audits, creating security risk windows",
        after: "Real-time alerting with specific tool gaps per device"
      },
      {
        label: "Compliance Tracking",
        before: "Point-in-time snapshots with no trend data",
        after: "90-day compliance trend charts with historical tracking"
      },
      {
        label: "Asset Reconciliation",
        before: "Manual matching of devices across systems by name or serial number",
        after: "Automated cross-referencing with composite key matching (hostname + serial)"
      }
    ],

    screenshots: [
      {
        src: "/projects/unified-posture-hub/screenshot-1-dashboard.webp",
        alt: "Endpoints Compliance Dashboard",
        caption: "Main dashboard — KPI metric cards (total, compliant, non-compliant), 90-day compliance trend chart, asset distribution by type, compliance by category progress bars, and recent security alerts"
      },
      {
        src: "/projects/unified-posture-hub/screenshot-2-assets.webp",
        alt: "Asset Management Page",
        caption: "Asset management — Device type summary cards (laptops, servers, desktops) with compliance percentages, searchable asset table showing per-tool compliance status with checkmarks and crosses"
      },
      {
        src: "/projects/unified-posture-hub/screenshot-3-reports.webp",
        alt: "Reports Page",
        caption: "Reports — Compliance summary, non-compliant assets, monthly trend, and asset inventory reports with download and on-demand generation capabilities"
      },
      {
        src: "/projects/unified-posture-hub/screenshot-4-settings.webp",
        alt: "Settings Page",
        caption: "Settings — User management, email/SMTP configuration, API key management, notification toggles, security settings (2FA, session timeout, audit logging), and data management"
      }
    ],

    design: {
      philosophy: "Unified Posture Hub uses a neobrutalist design system — bold 2px borders, hard offset box-shadows, and zero border-radius — deliberately chosen to make a compliance dashboard feel urgent and impossible to ignore. Every visual element prioritizes instant status recognition over aesthetic subtlety.",

      principles: [
        {
          title: "Semantic Status Colors",
          description: "Three colors carry all the meaning: blue for neutral/informational metrics, green for compliant states, and red for non-compliant alerts. This trichromy is applied consistently across metric cards, table status badges, chart segments, and alert indicators — users learn the system in seconds.",
          screenshotIndex: 0,
          highlight: "Blue Total Assets card, green Compliant card, red Non-Compliant card with alert icon"
        },
        {
          title: "Hard Shadow Urgency",
          description: "The neobrutalist box-shadow (4px offset, solid color) grows on hover to 6px, creating a tactile \"pressing\" interaction. Critical cards (non-compliant) use red shadows that visually shout for attention, while compliant cards use calmer green shadows. The shadow color matches the status, reinforcing the semantic system.",
          screenshotIndex: 0,
          highlight: "Offset box-shadows on all metric cards and navigation buttons"
        },
        {
          title: "Per-Tool Compliance Matrix",
          description: "The assets table uses a multi-column matrix design where each security tool (FreshService ME, TM, Warp, ManageEngine Encryption, Patching, Trend Micro Security, Cloudflare Active) gets its own column with color-coded checkmarks and crosses. This lets IT admins instantly see exactly which tool is missing on which device.",
          screenshotIndex: 1,
          highlight: "Color-coded header bands (blue, green, yellow, red) per tool group with checkmark/cross per cell"
        },
        {
          title: "Progressive Report Access",
          description: "The reports page uses a three-tier action hierarchy: quick-access action cards at top (Schedule, Export, Custom), pre-built report list in the middle, and each report row offers both Download (existing) and Generate (fresh) actions. This serves both quick-grab and on-demand use cases without overwhelming the interface.",
          screenshotIndex: 2,
          highlight: "Blue Schedule, green Export, amber Custom action cards above the report list"
        },
        {
          title: "Collapsible Navigation Density",
          description: "The sidebar collapses to icon-only mode, maximizing the data area for the compliance table and charts. In collapsed state, the Amagi logo becomes a two-letter monogram ('AM'), and navigation items show only their Lucide icons — maintaining wayfinding without sacrificing screen real estate.",
          screenshotIndex: 3,
          highlight: "Left sidebar with Dashboard, Assets, Reports, Settings navigation and Collapse toggle"
        }
      ],

      colorPalette: [
        { name: "Dark Surface", hex: "#0F172A", usage: "Primary background — deep navy-black providing high contrast for colored elements" },
        { name: "Card Surface", hex: "#1E293B", usage: "Elevated containers, sidebar, table rows — subtle separation from background" },
        { name: "Status Blue", hex: "#2563EB", usage: "Active navigation, total/neutral metrics, compliance trend chart, FreshService headers" },
        { name: "Compliant Green", hex: "#16A34A", usage: "Compliant status cards, checkmarks, asset distribution bars, ManageEngine headers" },
        { name: "Alert Red", hex: "#DC2626", usage: "Non-compliant status, alert icons, missing tool X marks, critical alert indicators" },
        { name: "Accent Amber", hex: "#D97706", usage: "Warning states, Trend Micro/Cloudflare header bands, desktop category cards" },
        { name: "Border Bright", hex: "#FFFFFF", usage: "2px borders on all cards and navigation — high contrast neobrutalist signature in dark mode" }
      ],

      componentPatterns: [
        "Metric cards with semantic shadow colors (blue/green/red) that grow on hover — used across dashboard and asset summary for instant status recognition",
        "Neobrutalist buttons with 2px black borders and 4px offset box-shadows — consistent across sidebar navigation, report actions, and settings controls",
        "Color-coded header bands in data tables — tool groups (FreshService, ManageEngine, Trend Micro, Cloudflare) each get a distinct background color for visual grouping",
        "Action card trios at page tops (Schedule/Export/Custom, User/Email/API) — consistent 3-column hero pattern across Reports and Settings pages",
        "Toggle switches for boolean settings with section grouping (Notifications, Security, Data Management) — clean settings pattern with clear hierarchy"
      ]
    },

    techStack: [
      // Frontend
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "Recharts", category: "frontend", icon: "recharts" },
      { name: "shadcn/ui", category: "frontend", icon: "shadcnui" },
      // Backend
      { name: "Python", category: "backend", icon: "python" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "SQLAlchemy", category: "backend", icon: "sqlalchemy" },
      { name: "HTTPX", category: "backend" },
      { name: "Uvicorn", category: "backend", icon: "uvicorn" },
      // Database
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      // Infrastructure
      { name: "AWS EC2", category: "infrastructure", icon: "amazonec2" },
      { name: "AWS RDS", category: "infrastructure", icon: "amazonrds" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "Nginx", category: "infrastructure", icon: "nginx" },
      { name: "Docker", category: "infrastructure", icon: "docker" },
      { name: "GitHub", category: "infrastructure", icon: "github" },
    ],

    integrations: [
      {
        system: "FreshService",
        type: "REST API",
        dataFlow: "Asset master inventory — device hostname, type, serial number, department, user assignment, OS details"
      },
      {
        system: "ManageEngine",
        type: "OAuth 2.0 + REST",
        dataFlow: "Endpoint management — encryption status, patch compliance, pending patches, software installations"
      },
      {
        system: "Trend Micro",
        type: "JWT + REST",
        dataFlow: "XDR endpoint security — antivirus status, threat detection, security task completion, risk scoring"
      },
      {
        system: "Cloudflare WARP",
        type: "API",
        dataFlow: "Network security agent — WARP client installation status, VPN connectivity, device enrollment"
      }
    ],

    metrics: [
      { label: "Assets Tracked", value: "1,178" },
      { label: "Compliance Rate", value: "70.2%" },
      { label: "Compliant Devices", value: "827" },
      { label: "Non-Compliant", value: "351" },
      { label: "Systems Integrated", value: "4" },
      { label: "Audit Prep Time", value: "Minutes" },
      { label: "Departments", value: "All" },
      { label: "Compliance Gain", value: "+8.2%" },
    ],

    userStory: "As an IT Security Manager, I want real-time visibility into which devices are missing which security tools so I can remediate gaps before external audits and eliminate compliance blind spots.",
    description: "Real-time compliance monitoring tracking ManageEngine, Trend Micro, and Cloudflare WARP installations across 1,178+ company assets with neobrutalist dashboard design.",
  },

  {
    id: 3,
    slug: "billing-dashboard",
    name: "Billing Dashboard",
    tagline: "AI-Powered Invoice Intelligence",
    type: "AI/Finance",
    organization: "Amagi Media",
    category: "Finance & FinOps",
    readTime: "11 min read",
    publishDate: "November 2024",
    icon: Sparkles,
    monogram: "BD",
    color: "bg-violet-500",
    heroImage: "gradient-violet",

    overview: "Billing Dashboard is an AI-powered email analytics and intelligence platform built for the billing team at Amagi Media. It processes 21,000+ emails using GPT-4 for automated classification, multi-stage invoice extraction via GPT-4 Vision, and hybrid semantic search combining pgvector embeddings with PostgreSQL full-text search through Reciprocal Rank Fusion.",

    challenge: "The billing team was drowning in email volume — manually sorting invoices from queries, escalations from approvals across 5 mailboxes. Critical invoices were missed in the noise, and SLA compliance sat at just 65%. There was no way to search historical conversations semantically, no automated way to extract invoice amounts from scanned PDFs, and no integration with the enterprise ERP or CRM for customer context. Response times regularly exceeded 48 hours for routine queries.",

    solution: "Architected an 18-service FastAPI backend with Celery async task processing and Redis caching. Implemented a multi-stage invoice extraction pipeline (regex → PDF text parsing → GPT-4 Vision fallback for scanned documents). Built a hybrid search system using Reciprocal Rank Fusion to merge keyword search (PostgreSQL TSVECTOR) with semantic search (text-embedding-3-large + pgvector, 3072-dimension vectors). Created AI classification pipelines for email type, priority, sentiment, and thread resolution. Integrated with enterprise ERP for AR aging reports and CRM for customer enrichment. The React frontend uses a glassmorphism dark theme with real-time SLA countdown timers, team performance analytics, and multi-currency customer tracking.",

    features: [
      "AI email classification (type, priority, sentiment) using GPT-4 with 95% accuracy",
      "Multi-stage invoice extraction: regex → PDF parsing → GPT-4 Vision fallback",
      "Hybrid search with Reciprocal Rank Fusion (keyword + semantic)",
      "Semantic search using text-embedding-3-large (3072-dimension vectors)",
      "Thread resolution detection powered by GPT-4o-mini",
      "Real-time SLA tracking with countdown timers and overdue alerts",
      "Enterprise ERP integration for invoice status and AR aging reports",
      "CRM integration for customer data enrichment and account mapping",
      "Redis caching with scheduled cache warming (every 2-4 minutes)",
      "Celery async workers for email sync, classification, and cache refresh",
      "5 mailbox synchronization via Gmail OAuth 2.0",
      "Team performance metrics with radar charts and load distribution",
      "Customer-level analytics across 500+ accounts with multi-currency tracking",
      "AI-powered daily insights with automation opportunity detection"
    ],

    architecture: "Gmail OAuth 2.0 ingests emails from 5 mailboxes into PostgreSQL with pgvector extension. Celery workers handle four async task types: email_sync (hourly pulls), classification (batch GPT-4 processing), thread_resolution (async status detection), and cache_warming (every 2-4 minutes via Redis). The classification service chains GPT-4 for type/priority/sentiment analysis, GPT-4 Vision for invoice extraction from scanned PDFs, and GPT-4o-mini for thread resolution. Hybrid search combines TSVECTOR keyword matching with pgvector cosine similarity, merged using Reciprocal Rank Fusion with configurable weights. Enterprise ERP and CRM integrations run on-demand via REST APIs for customer enrichment and invoice correlation. The React frontend queries FastAPI endpoints for real-time dashboards across 6 views: Summary, Team, Customers, Entities, AI Insights, and Search.",

    impact: "The billing team achieved 80% reduction in manual email sorting and SLA compliance improved from 65% to 92%. Response times dropped from 48+ hours to under 24 hours for routine queries. The AI classification system maintains 95% accuracy across 21,000+ processed emails. Critical invoices are now surfaced automatically with extracted amounts. The hybrid search system finds relevant historical emails in seconds, even with fuzzy natural language queries. Customer analytics now track 500+ accounts with multi-currency open value visibility.",

    keyDecisions: [
      {
        question: "Why hybrid search (keyword + semantic) instead of pure semantic search?",
        answer: "Pure semantic search misses exact matches — searching for 'INV-2024-0847' should find that exact invoice, not semantically similar invoices. Pure keyword search misses intent — 'emails about late payments' needs semantic understanding. Reciprocal Rank Fusion merges both result sets with configurable weights, giving exact matches when they exist and semantic fallback otherwise. This proved especially critical for financial queries where precision matters."
      },
      {
        question: "Why multi-stage invoice extraction instead of sending everything to GPT-4 Vision?",
        answer: "GPT-4 Vision API calls are expensive and slow (~3-5 seconds each). The three-stage pipeline (regex → PDF text extraction → GPT-4 Vision) means 70%+ of invoices are extracted by fast regex patterns, another 20% by PDF text parsing, and only the remaining scanned/image PDFs hit the Vision API. This reduced AI costs by roughly 80% while maintaining extraction accuracy."
      },
      {
        question: "Why Celery with Redis instead of FastAPI background tasks?",
        answer: "FastAPI's BackgroundTasks run in-process and die with the server. Email sync, batch classification, and cache warming need to survive restarts, retry on failure, and run on schedules. Celery with Redis as broker provides scheduled beats (cache warming every 2-4 min), automatic retries with exponential backoff, and a separate worker process that doesn't block API response times."
      },
      {
        question: "Why glassmorphism dark theme instead of a traditional dashboard aesthetic?",
        answer: "The billing team works in this dashboard 6-8 hours daily. The glassmorphism dark theme with frosted glass cards, subtle glow effects, and high-contrast accent colors reduces eye strain during extended use. The dark background makes the color-coded status indicators (red SLA warnings, green completions, blue metrics) pop without competing visual noise."
      }
    ],

    beforeAfter: [
      {
        label: "Email Sorting",
        before: "Manual sorting across 5 mailboxes — invoices, queries, escalations mixed together",
        after: "AI auto-classifies by type, priority, and sentiment with 95% accuracy"
      },
      {
        label: "Invoice Extraction",
        before: "Manually opening PDFs, reading amounts, entering into spreadsheets",
        after: "Three-stage pipeline extracts amounts automatically, including scanned documents"
      },
      {
        label: "SLA Compliance",
        before: "65% compliance, no real-time tracking, overdue threads discovered late",
        after: "92% compliance with live countdown timers and proactive overdue alerts"
      },
      {
        label: "Email Search",
        before: "Gmail search by keyword only — couldn't find 'emails about payment delays'",
        after: "Hybrid semantic + keyword search finds results by intent or exact match"
      },
      {
        label: "Customer Visibility",
        before: "No aggregated view of customer email patterns, escalation history, or open values",
        after: "500+ customer profiles with multi-currency tracking, sentiment analysis, and escalation trends"
      }
    ],

    screenshots: [
      {
        src: "/projects/billing-dashboard/screenshot-1-dashboard.webp",
        alt: "Summary Dashboard",
        caption: "Summary dashboard — KPI cards (total emails, SLA compliance gauge, pending actions, overdue replies), email volume trend chart with time range selector, classification breakdown donut, top customers by value, and live SLA status alerts"
      },
      {
        src: "/projects/billing-dashboard/screenshot-2-team.webp",
        alt: "Team Performance",
        caption: "Team performance — Individual analyst cards with emails handled, average turnaround time, SLA compliance rates, and pending counts. Email load distribution bar chart and team comparison radar chart for cross-metric benchmarking"
      },
      {
        src: "/projects/billing-dashboard/screenshot-3-customers.webp",
        alt: "Customer Overview",
        caption: "Customer overview — 512 tracked customers with multi-currency open values (USD, INR, GBP, EUR), email volume sparklines, escalation counts, average TAT, and sentiment scores in a searchable, sortable table"
      },
      {
        src: "/projects/billing-dashboard/screenshot-4-ai-insights.webp",
        alt: "AI Insights",
        caption: "AI Insights — GPT-generated daily summary with key highlights, actionable recommendations, 95% classification accuracy gauge, trending topic tags, and automation opportunity cards with estimated time savings"
      },
      {
        src: "/projects/billing-dashboard/screenshot-7-actions-popup.webp",
        alt: "Pending Actions",
        caption: "Pending Actions modal — 700+ threads awaiting team response, paginated list with email subjects, customer names, timestamps, and thread counts. Click any thread to open the full email detail view"
      },
      {
        src: "/projects/billing-dashboard/screenshot-6-email-detail.webp",
        alt: "Email Detail",
        caption: "Email Detail view — full email content with classification badges (Reminder, Follow-Up, Neutral), message metadata sidebar (From, To, CC, Sent), customer card, quick actions (copy text, reply), and complete thread history"
      }
    ],

    design: {
      philosophy: "Billing Dashboard uses a glassmorphism dark theme — frosted glass cards on a near-black surface with subtle backdrop blur and glow accents. Designed for extended daily use by the billing team (6-8 hours), the dark background reduces eye strain while high-contrast accent colors make status indicators instantly scannable. Every chart and metric is color-coded to minimize cognitive load.",

      principles: [
        {
          title: "Glassmorphism Cards",
          description: "Semi-transparent cards with backdrop blur (12-16px) and subtle white border (8% opacity) create depth without visual clutter. Each card floats on the dark surface with soft glass shadows, making the UI feel modern and layered while keeping data readable.",
          screenshotIndex: 0,
          highlight: "KPI cards with frosted glass effect, glow borders on hover"
        },
        {
          title: "Color-Coded Status System",
          description: "Red for overdue/danger, green for compliant/success, blue for informational metrics, yellow for warnings. This four-color system is applied consistently across KPI cards, progress bars, chart segments, and table badges — users read status before reading numbers.",
          screenshotIndex: 0,
          highlight: "Red overdue replies card with warning icon, green SLA gauge arc"
        },
        {
          title: "Comparative Analytics",
          description: "Team view uses side-by-side cards with identical metric layouts so managers can compare performance at a glance. The radar chart overlays all team members on one axis, revealing strengths and gaps without needing separate views per person.",
          screenshotIndex: 1,
          highlight: "Four analyst cards with parallel metrics, radar chart overlay"
        },
        {
          title: "Data-Dense Tables",
          description: "Customer table packs 7 columns with inline sparklines, color-coded escalation badges, multi-currency values, and sentiment scores. Headers are sticky, rows are searchable, and the information density rivals a terminal while remaining visually clean.",
          screenshotIndex: 2,
          highlight: "Customer table with sparkline trends, escalation badges, multi-currency columns"
        },
        {
          title: "AI Transparency",
          description: "The AI Insights view surfaces model confidence (95% accuracy gauge), explains its recommendations, and shows trending topics as tag clouds. Users see what the AI analyzed, what it found, and how confident it is — building trust through transparency rather than black-box outputs.",
          screenshotIndex: 3,
          highlight: "Classification accuracy gauge, key highlights with counts, recommendation list"
        }
      ],

      colorPalette: [
        { name: "Dark Surface", hex: "#0a0a0a", usage: "Page background, app shell" },
        { name: "Card Glass", hex: "#171717", usage: "Glassmorphism card backgrounds" },
        { name: "Glass Border", hex: "rgba(255,255,255,0.08)", usage: "Subtle card borders, dividers" },
        { name: "Accent Blue", hex: "#3b82f6", usage: "Primary metrics, info states, links" },
        { name: "Danger Red", hex: "#ef4444", usage: "Overdue SLA, escalations, critical alerts" },
        { name: "Success Green", hex: "#22c55e", usage: "Compliant states, positive trends" },
        { name: "Accent Purple", hex: "#8b5cf6", usage: "AI features, classification badges" }
      ],

      componentPatterns: [
        "Glassmorphism KPI cards with glow hover effects and animated counters",
        "SLA countdown timers with color transitions (green → yellow → red)",
        "Inline sparkline charts in table cells for trend visualization",
        "Radar chart overlays for multi-dimensional team comparison",
        "Command palette (Cmd+K) for keyboard-first navigation",
        "Animated gauge components for SLA compliance and AI accuracy"
      ]
    },

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "Framer Motion", category: "frontend", icon: "framer" },
      { name: "Recharts", category: "frontend", icon: "react" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "Python", category: "backend", icon: "python" },
      { name: "Celery", category: "backend", icon: "celery" },
      { name: "Redis", category: "backend", icon: "redis" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "pgvector", category: "database", icon: "postgresql" },
      { name: "AWS EC2", category: "infrastructure", icon: "amazonec2" },
      { name: "AWS RDS", category: "infrastructure", icon: "amazonrds" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "Nginx", category: "infrastructure", icon: "nginx" },
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
      { name: "OpenAI GPT-4 Vision", category: "ai", icon: "openai" },
      { name: "OpenAI Embeddings", category: "ai", icon: "openai" },
      { name: "Gmail", category: "infrastructure", icon: "gmail" },
    ],

    integrations: [
      {
        system: "Enterprise ERP",
        type: "REST API",
        dataFlow: "Invoice data sync, customer records, payment status, AR aging reports — correlates email threads with financial transactions"
      },
      {
        system: "CRM Platform",
        type: "REST API",
        dataFlow: "Customer data enrichment, account mapping, opportunity correlation — provides customer context for email classification"
      },
      {
        system: "Gmail",
        type: "OAuth 2.0",
        dataFlow: "Email ingestion from 5 mailboxes, thread synchronization, attachment handling — primary data source for the platform"
      },
      {
        system: "OpenAI",
        type: "REST API",
        dataFlow: "GPT-4 for classification/extraction, GPT-4 Vision for scanned PDFs, GPT-4o-mini for thread resolution, text-embedding-3-large for semantic search"
      }
    ],

    metrics: [
      { label: "Emails Processed", value: "21,000+" },
      { label: "Classification Accuracy", value: "95%" },
      { label: "Mailboxes Synced", value: "5" },
      { label: "Services Built", value: "18+" },
      { label: "SLA Improvement", value: "65% → 92%" },
      { label: "Manual Sorting Reduction", value: "80%" },
      { label: "Customers Tracked", value: "500+" },
      { label: "Search Type", value: "Hybrid RRF" },
    ],

    userStory: "As a Billing Analyst, I want AI to automatically classify, extract invoice data, and surface critical emails so I can focus on exceptions and customer escalations instead of manual sorting and data entry.",
    description: "AI-powered billing email analytics with GPT-4 classification, multi-stage invoice extraction, hybrid semantic search, and real-time SLA tracking across 5 mailboxes.",
  },

  {
    id: 4,
    slug: "payable-dashboard",
    name: "Payable Dashboard",
    tagline: "AP Email Analytics & Intelligence Platform",
    type: "AI/Operations",
    organization: "Amagi Media",
    category: "AI-Powered Operations",
    readTime: "9 min read",
    publishDate: "October 2024",
    icon: Inbox,
    monogram: "PD",
    color: "bg-blue-500",
    heroImage: "gradient-blue",

    overview: "Payable Dashboard is a real-time email monitoring and analytics platform built for the Accounts Payable team. It indexes 21,000+ vendor communications with AI-powered semantic search, surfaces emails with real attachments (filtering noise from signatures and footers), and provides vendor sentiment analysis, SLA tracking, and team productivity scoring — all integrated with enterprise ERP and CRM systems.",

    challenge: "The AP team processed thousands of vendor emails monthly across payment delays, invoice queries, PO disputes, and tax questions — all without centralized tracking. Finding a specific vendor communication from months ago meant 15-20 minutes of manual inbox searching. Managers had no visibility into team workload distribution, SLA compliance was unmeasured, and high-risk vendor relationships went undetected until escalations. The team also needed a way to quickly access invoice attachments without wading through email noise — reply chains, signatures, and marketing footers made finding real documents painful.",

    solution: "Built a FastAPI + React platform deployed on AWS Amplify and EC2. Emails are ingested via Gmail OAuth and stored in PostgreSQL with pgvector for 3072-dimensional semantic embeddings (text-embedding-3-large). A smart attachment filter separates real financial documents (invoices, POs, credit notes) from email noise. Vendor analytics track query patterns across categories (Payment Delays, Invoice Queries, PO Queries, Tax Queries, General Inquiry) with sentiment scoring. Enterprise ERP integration provides AP aging context, while CRM integration adds vendor relationship data. An AI chatbot powered by GPT-4 enables conversational data retrieval with SQL-level query translation and security validation.",

    features: [
      "Semantic search across 21,000+ financial documents using pgvector embeddings",
      "Smart attachment filter — surfaces real invoices and documents, skips email noise",
      "AI chatbot with GPT-4 for conversational AP analytics and secure SQL generation",
      "Vendor sentiment analysis with risk scoring (positive/neutral/negative breakdown)",
      "High-risk vendor identification with escalation tracking",
      "Response Time SLA dashboard with 48-hour compliance monitoring",
      "Email volume trends with daily, weekly, and monthly views",
      "Request categorization: Payment Delays, Invoice Queries, PO Queries, Tax Queries",
      "Team productivity scoring with efficiency metrics per member",
      "Process health monitoring: closure rate, repeat queries, unanswered emails",
      "Enterprise ERP integration for AP aging reports and payment schedules",
      "Email resolution tracking: single vs. multi-exchange thread analysis"
    ],

    architecture: "Gmail OAuth ingests emails into PostgreSQL with pgvector extension. Each email is embedded using text-embedding-3-large (3072 dimensions) for semantic similarity search across the full corpus. A classification pipeline categorizes emails by type (Payment Delays, Invoice Queries, PO, Tax, General) and runs sentiment analysis. The attachment service filters real financial documents from email noise (signatures, footers, marketing). Enterprise ERP provides AP aging and payment context via REST API. CRM enriches vendor records with relationship data. Redis caches frequent queries for sub-second dashboard response times. The AI chatbot uses retrieval-augmented generation with security-validated SQL translation for conversational data access.",

    impact: "Vendor communication lookup dropped from 15-20 minutes to instant semantic search. SLA compliance became measurable for the first time — revealing a 46.7% compliance rate that triggered process improvements. High-risk vendor detection identified 18 vendors requiring proactive outreach. Team managers gained visibility into individual workload distribution across 10 members, with efficiency scoring enabling data-driven resource allocation. The attachment filter eliminated the noise problem entirely, giving the team direct access to real financial documents.",

    keyDecisions: [
      {
        question: "Why semantic search over traditional full-text search?",
        answer: "AP communications use varied terminology — 'payment delay', 'overdue invoice', 'pending remittance' all mean the same thing. Semantic embeddings (text-embedding-3-large, 3072 dimensions) capture meaning, not just keywords, enabling natural language queries like 'vendors with repeated payment issues' to surface relevant threads regardless of exact wording."
      },
      {
        question: "Why build a smart attachment filter instead of showing all attachments?",
        answer: "Email threads accumulate noise — every reply carries forward signature images, logo footers, and marketing banners as 'attachments'. The filter classifies attachments by type and content, surfacing only real financial documents (invoices, POs, credit notes) in the Recent Emails with Attachments section. This eliminated 80%+ of false positives."
      },
      {
        question: "Why vendor-centric analytics instead of email-centric?",
        answer: "Individual emails lack context. By aggregating communications per vendor and tracking patterns (query frequency, sentiment trend, escalation history), the dashboard reveals relationship health. A vendor sending 16 emails in a month with negative sentiment tells a very different story than raw email counts."
      },
      {
        question: "Why Redis caching alongside PostgreSQL?",
        answer: "Dashboard KPI cards and summary analytics are queried on every page load by all 10 team members. Redis caches these aggregated results, keeping dashboard response times sub-second while PostgreSQL handles the heavy semantic search and complex analytical queries."
      }
    ],

    beforeAfter: [
      {
        label: "Finding Vendor Emails",
        before: "15-20 minutes manually searching inbox, often giving up",
        after: "Instant semantic search — natural language queries across 21,000+ documents"
      },
      {
        label: "SLA Compliance",
        before: "Completely unmeasured — no visibility into response times",
        after: "Real-time SLA dashboard with 48-hour target tracking per team member"
      },
      {
        label: "Vendor Risk Detection",
        before: "High-risk vendors discovered only after escalation or complaint",
        after: "Proactive identification — 18 high-risk vendors flagged with sentiment scoring"
      },
      {
        label: "Attachment Access",
        before: "Wading through reply chains, signatures, and marketing footers to find real invoices",
        after: "Smart filter surfaces only genuine financial documents — invoices, POs, credit notes"
      },
      {
        label: "Team Workload",
        before: "No visibility — managers guessed who was overloaded",
        after: "Per-member productivity scoring with efficiency metrics and workload distribution"
      }
    ],

    screenshots: [
      {
        src: "/projects/payable-dashboard/screenshot-1-dashboard.webp",
        alt: "Payable Dashboard Overview",
        caption: "Main dashboard — KPI cards showing daily email volume, average response time, SLA compliance, and pending escalations. AI-powered semantic search bar and Recent Emails with Attachments section for quick document access."
      },
      {
        src: "/projects/payable-dashboard/screenshot-2-analytics.webp",
        alt: "Analytics Summary Sections",
        caption: "Email volume trend chart with daily/weekly/monthly toggle, Response Time SLA breakdown with color-coded compliance bands, and summary cards for Vendor Analytics, Sentiment Analysis, and Process Health."
      },
      {
        src: "/projects/payable-dashboard/screenshot-3-vendor-details.webp",
        alt: "Vendor Analytics Expanded",
        caption: "Vendor & Request Analytics detail view — top vendors by email volume, request category distribution showing Payment Delays, Invoice Queries, PO Queries, Tax Queries, and General Inquiry breakdown."
      },
      {
        src: "/projects/payable-dashboard/screenshot-4-sentiment.webp",
        alt: "Sentiment Analysis & Escalations",
        caption: "Communication sentiment breakdown (neutral/negative/positive) with vendor-level scores. High-Risk Vendors panel showing sentiment percentage, escalation count, and risk level for proactive vendor management."
      },
      {
        src: "/projects/payable-dashboard/screenshot-5-team.webp",
        alt: "Team Productivity & Performance",
        caption: "Team performance table with efficiency scores, response counts, SLA compliance rates, average response times, and category coverage per team member. Process health metrics showing email resolution efficiency and closure rates."
      }
    ],

    design: {
      philosophy: "Payable Dashboard was designed as a clean, data-dense operations interface optimized for AP teams who need quick access to vendor communications, SLA metrics, and team performance data. The light theme with strong color-coded status indicators ensures critical information — SLA breaches, high-risk vendors, unanswered emails — demands immediate attention.",
      principles: [
        {
          title: "Color-Coded Severity",
          description: "SLA compliance uses a traffic-light system: green for under 12 hours, blue for 12-24 hours, amber for the 24-48 hour SLA window, and red for breaches beyond 48 hours. This lets managers instantly assess compliance health without reading numbers.",
          screenshotIndex: 0,
          highlight: "Response Time SLA section with green, blue, amber, and red progress bars"
        },
        {
          title: "Progressive Disclosure",
          description: "Each analytics section shows summary KPI cards by default, with a 'Show Details' toggle that reveals granular breakdowns — vendor lists, category distributions, team performance tables. This keeps the dashboard scannable while allowing deep dives on demand.",
          screenshotIndex: 2,
          highlight: "Hide Details toggle on Vendor & Request Analytics with expanded detail panels below"
        },
        {
          title: "Risk-First Information Hierarchy",
          description: "High-risk indicators (red badges on unanswered emails, escalation counts, negative sentiment scores) are always visually prominent. The dashboard surfaces problems first — breached SLAs, high-risk vendors, unanswered emails — before showing healthy metrics.",
          screenshotIndex: 3,
          highlight: "High-Risk Vendors panel with sentiment percentages and risk level badges"
        },
        {
          title: "Consistent Metric Cards",
          description: "Every analytics section uses the same 4-card KPI layout: icon + label + large number. This creates visual rhythm across Vendor Analytics, Sentiment Analysis, Process Health, and Team Productivity — reducing cognitive load when scanning sections.",
          screenshotIndex: 1,
          highlight: "Uniform KPI card rows across all four analytics sections"
        }
      ],
      colorPalette: [
        { name: "Background", hex: "#FFFFFF", usage: "Primary surface, card backgrounds" },
        { name: "Text Primary", hex: "#1A1A1A", usage: "Headings, KPI values, primary content" },
        { name: "SLA Green", hex: "#16A34A", usage: "Under 12-hour responses, healthy compliance, positive sentiment" },
        { name: "SLA Amber", hex: "#CA8A04", usage: "24-48 hour SLA window, warning states" },
        { name: "SLA Red", hex: "#DC2626", usage: "SLA breaches, high-risk vendors, unanswered emails, negative sentiment" },
        { name: "Accent Blue", hex: "#3B82F6", usage: "Search bar, active states, primary action buttons, incoming email trend" },
        { name: "Border Gray", hex: "#E5E7EB", usage: "Card borders, section dividers, table lines" }
      ],
      componentPatterns: [
        "KPI Summary Cards — 4-column icon + label + value layout used across every analytics section for consistent data scanning",
        "Progressive Detail Panels — collapsible sections with 'Show Details' toggle revealing vendor lists, charts, and tables on demand",
        "Color-Coded SLA Bars — horizontal progress bars with green/blue/amber/red severity, showing count and percentage alongside",
        "Vendor Communication Cards — email preview cards with sender, subject snippet, date, and attachment indicators",
        "Trend Chart with Time Toggle — Recharts line chart with Daily/Weekly/Monthly tab selector for email volume analysis",
        "Risk Badge System — red triangle icons for high-risk vendors, amber warning triangles for payment issues, green checks for healthy metrics"
      ]
    },

    techStack: [
      { name: "React 18", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
      { name: "Recharts", category: "frontend", icon: "recharts" },
      { name: "Radix UI", category: "frontend", icon: "radixui" },
      { name: "Framer Motion", category: "frontend", icon: "framer" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "Python", category: "backend", icon: "python" },
      { name: "Uvicorn", category: "backend" },
      { name: "Redis", category: "backend", icon: "redis" },
      { name: "Celery", category: "backend", icon: "celery" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "pgvector", category: "database" },
      { name: "AWS EC2", category: "infrastructure", icon: "amazonec2" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "Nginx", category: "infrastructure", icon: "nginx" },
      { name: "GitHub", category: "infrastructure", icon: "github" },
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
      { name: "text-embedding-3-large", category: "ai", icon: "openai" },
    ],

    integrations: [
      {
        system: "Enterprise ERP",
        type: "REST API",
        dataFlow: "Vendor payment records, AP aging reports, invoice matching, payment schedules"
      },
      {
        system: "Enterprise CRM",
        type: "REST API",
        dataFlow: "Vendor account data, contract information, relationship context"
      },
      {
        system: "Gmail",
        type: "OAuth 2.0",
        dataFlow: "Email ingestion, attachment extraction, and thread tracking for AP mailbox"
      },
      {
        system: "Redis Cache",
        type: "In-Memory",
        dataFlow: "Dashboard KPI caching, frequent query results, session data"
      }
    ],

    metrics: [
      { label: "Emails Indexed", value: "21,000+" },
      { label: "Active Vendors", value: "170+" },
      { label: "Team Members", value: "10" },
      { label: "SLA Target", value: "48hrs" },
      { label: "Request Categories", value: "5" },
      { label: "Search Latency", value: "<1s" },
      { label: "Data Coverage", value: "8 months" },
      { label: "Systems Integrated", value: "4" },
    ],

    userStory: "As an AP Manager, I want to track team response times, identify vendors with repeated payment issues, and instantly surface email attachments so my team can resolve vendor queries within SLA without wading through inbox noise.",
    description: "Real-time email monitoring and analytics for Accounts Payable with AI-powered semantic search, smart attachment filtering, vendor sentiment analysis, and team productivity tracking.",
  },

  {
    id: 5,
    slug: "purchase-dashboard",
    name: "Purchase Dashboard",
    tagline: "Procurement Email Operations",
    type: "AI/Operations",
    organization: "Amagi Media",
    category: "AI-Powered Operations",
    readTime: "5 min read",
    publishDate: "September 2024",
    icon: ShoppingCart,
    monogram: "PR",
    color: "bg-teal-500",
    heroImage: "gradient-teal",

    overview: "Purchase Dashboard is an AI-powered email operations platform for the procurement shared mailbox (purchase@amagi.com), transforming unstructured vendor communications into categorized, sentiment-analyzed, and searchable intelligence. It combines GPT-4 email classification across 6+ categories, real-time sentiment tracking for vendor relationship management, SLA compliance monitoring, and a natural-language chatbot that translates procurement queries into secure SQL — all deployed on AWS with PostgreSQL.",

    challenge: "The procurement team received hundreds of emails daily across the shared mailbox — RFQs, payment delay notifications, shipment updates, vendor onboarding requests, invoice queries — all mixed together with no systematic categorization. Team members spent 15-20 minutes per query manually searching through email threads to find vendor history. Vendor sentiment was invisible: a vendor sending increasingly frustrated emails about payment delays would go unnoticed until the relationship deteriorated. SLA compliance tracking was manual and inconsistent, and there was no way to identify which team members were handling which categories or falling behind on response times.",

    solution: "Built a Flask backend with Gunicorn production serving and a React + TypeScript frontend, deployed on AWS EC2 with RDS PostgreSQL. GPT-4 powers two AI pipelines: an email categorization engine that classifies incoming messages into 6+ categories (Payment Delays, RFQs, Shipment Updates, Invoice Queries, Vendor Onboarding, Payment Processing) and a sentiment analysis layer that scores each communication as positive, neutral, or negative. The AI chatbot accepts natural language procurement queries ('Show me all payment delay emails from Vendor X in the last 30 days'), translates them to SQL with security validation to prevent injection, and returns structured results. AWS Secrets Manager handles credential rotation for the shared mailbox OAuth tokens.",

    features: [
      "AI email categorization (Payment Delays, RFQs, Shipment Updates)",
      "Vendor sentiment analysis (positive/neutral/negative)",
      "AI chatbot with SQL-based secure data retrieval",
      "Real-time email monitoring and analytics",
      "Category-wise email distribution insights",
      "Vendor communication pattern tracking",
      "Response time analytics",
      "Security-validated query execution"
    ],

    architecture: "Flask backend with Gunicorn for production serving. PostgreSQL database for email storage and analytics. GPT-4 handles categorization and sentiment analysis. The chatbot translates natural language to SQL with security validation before execution.",

    impact: "Procurement gained instant visibility into email categories and vendor sentiment across the shared mailbox. The AI chatbot reduced time spent on data lookups by 70% — queries that took 15-20 minutes of manual email searching now return results in seconds. Sentiment tracking surfaced high-risk vendors with escalating negative communications before relationships deteriorated, enabling proactive outreach. SLA compliance monitoring revealed response time patterns across team members, driving accountability and workload rebalancing. The progressive disclosure dashboard design (collapsed KPI cards → expandable deep-dives) became a template adopted by two other internal tools.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "Flask", category: "backend", icon: "flask" },
      { name: "Python", category: "backend", icon: "python" },
      { name: "Gunicorn", category: "backend" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "AWS EC2", category: "infrastructure", icon: "amazonaws" },
      { name: "AWS RDS", category: "infrastructure", icon: "amazonaws" },
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
    ],

    keyDecisions: [
      {
        question: "Why Flask instead of FastAPI (used in Billing and Payable Dashboards)?",
        answer: "The Purchase Dashboard has a simpler request model — synchronous email categorization with no background job queues or webhook processing. Flask with Gunicorn handles the load efficiently without the async complexity. FastAPI's advantages (async I/O, Celery integration) weren't needed here, and Flask's maturity and simpler debugging made it the pragmatic choice for the team maintaining it."
      },
      {
        question: "Why SQL-based chatbot instead of RAG over email content?",
        answer: "Procurement queries are structured ('show me payment delays from Vendor X last month') not semantic ('find emails about late deliveries'). SQL over the categorized/indexed PostgreSQL data gives exact, auditable results. RAG would add latency and hallucination risk for queries that map cleanly to WHERE clauses. The security validation layer also benefits from SQL — it's easier to validate and sanitize a generated SQL query than to ensure a RAG pipeline doesn't leak cross-vendor data."
      },
      {
        question: "Why real-time sentiment analysis per email vs. batch processing?",
        answer: "Vendor sentiment can shift within a single email thread — a frustrated follow-up on a payment delay needs to be flagged immediately, not discovered in a nightly batch. Real-time classification on ingest means the high-risk vendor list is always current, and SLA response time tracking starts from the moment the email arrives."
      }
    ],

    beforeAfter: [
      {
        before: "Procurement manually searches through email threads for 15-20 minutes to find vendor communication history",
        after: "AI chatbot returns structured results in seconds — 'Show me all payment delay emails from Vendor X' → instant SQL-backed response"
      },
      {
        before: "Vendor sentiment invisible — frustrated vendors sending escalating emails go unnoticed until the relationship is damaged",
        after: "Real-time sentiment scoring flags high-risk vendors with escalation counts, enabling proactive outreach before relationships deteriorate"
      },
      {
        before: "No visibility into which email categories dominate the shared mailbox or how workload distributes across the team",
        after: "Category distribution and team performance dashboards show exactly who handles what, with SLA compliance tracking per member"
      },
      {
        before: "SLA compliance tracking is manual and inconsistent — no one knows actual response times by category",
        after: "Color-coded SLA bars (green < 1h, orange 4-24h, red > 24h) provide instant compliance visibility with trend tracking"
      }
    ],

    metrics: [
      { label: "Categories", value: "6+" },
      { label: "Sentiment", value: "Real-time" },
      { label: "Data Lookup", value: "70% faster" },
      { label: "Query Time", value: "Seconds" },
      { label: "SLA Tracking", value: "Per-member" },
      { label: "Status", value: "Production" },
    ],

    screenshots: [
      {
        src: "/projects/purchase-dashboard/screenshot-1-dashboard.webp",
        alt: "Purchase Dashboard Overview",
        caption: "Main dashboard — KPI cards (email volume, avg response time, SLA compliance, pending escalations), email volume trend chart with incoming/outgoing split, and response time SLA breakdown"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-2-overview-metrics.webp",
        alt: "All Sections Metrics Overview",
        caption: "Collapsed metrics overview — Vendor analytics, sentiment analysis, process health monitoring (closure rate, unanswered emails), and team productivity summary cards"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-3-vendor-expanded.webp",
        alt: "Vendor & Request Analytics Expanded",
        caption: "Vendor deep-dive — Top vendors by email volume, request category distribution (Invoice Queries, Vendor Onboarding, Payment Processing), vendors with payment issues, and recent internal requests"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-4-sentiment-expanded.webp",
        alt: "Sentiment Analysis & Escalations Expanded",
        caption: "Sentiment intelligence — Communication sentiment breakdown (negative/neutral/positive), high-risk vendor list with escalation counts, critical escalations timeline, and vendor vs internal sentiment comparison"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-5-team-expanded.webp",
        alt: "Team Productivity & Performance Expanded",
        caption: "Team performance — Top performer and most responsive badges, detailed performance table with efficiency scores, SLA compliance per member, response times, and category specialist assignments"
      }
    ],

    design: {
      philosophy: "Designed as a data-dense dark operations dashboard for procurement teams monitoring high-volume vendor communications. The expandable section pattern keeps the overview scannable while allowing deep-dives into vendor analytics, sentiment, and team performance without page navigation.",
      principles: [
        {
          title: "Progressive Disclosure",
          description: "Collapsed metric cards show KPIs at a glance; 'Show Details' expands rich analytics — vendor breakdowns, sentiment charts, team tables — without leaving the page or losing context.",
          screenshotIndex: 1,
          highlight: "All four sections with collapsed summary metric cards and 'Show Details' toggles"
        },
        {
          title: "Operational Awareness",
          description: "Color-coded SLA bars (green < 1h, blue 1-4h, orange 4-24h, red > 24h) and risk indicators surface compliance issues instantly. Red alert icons on high-risk vendors and unanswered emails demand immediate attention.",
          screenshotIndex: 0,
          highlight: "Response Time SLA Breakdown bars and KPI trend arrows (green up, red down)"
        },
        {
          title: "Data Density with Clarity",
          description: "Every section packs multiple data dimensions — counts, percentages, sentiment scores, and trends — into a compact layout. Request categories show both percentage share and absolute count side by side.",
          screenshotIndex: 2,
          highlight: "Request Categories list with percentage + count, and Top Vendors by Email Volume"
        },
        {
          title: "Sentiment-Driven Prioritization",
          description: "High-risk vendors are surfaced with sentiment scores and escalation counts, enabling procurement to prioritize relationship repair. Communication sentiment breakdown (negative/neutral/positive) provides the overall pulse.",
          screenshotIndex: 3,
          highlight: "High-Risk Vendors panel with sentiment scores and Communication Sentiment breakdown"
        },
        {
          title: "Team Accountability",
          description: "Individual performance metrics with efficiency scores, SLA compliance percentages, and escalation counts drive ownership. Top Performer, Most Responsive, and Most Active badges celebrate excellence.",
          screenshotIndex: 4,
          highlight: "Team Performance Details table and Top Performer / Most Responsive / Most Active badges"
        }
      ],
      colorPalette: [
        { name: "Background", hex: "#0a0a0a", usage: "Page background" },
        { name: "Card Surface", hex: "#141414", usage: "Card and section backgrounds" },
        { name: "Teal Accent", hex: "#14b8a6", usage: "Primary accent, active indicators" },
        { name: "SLA Green", hex: "#22c55e", usage: "Good SLA compliance, positive sentiment" },
        { name: "Warning Orange", hex: "#f59e0b", usage: "Medium risk, 4-24h SLA band" },
        { name: "Alert Red", hex: "#ef4444", usage: "High risk vendors, SLA breaches, escalations" },
        { name: "Chart Blue", hex: "#3b82f6", usage: "Charts, incoming email trend line" }
      ],
      componentPatterns: [
        "KPI cards with icon, label, value, and trend indicator — consistent metric presentation across all sections",
        "Expandable sections with summary metrics visible in collapsed state — progressive disclosure without page navigation",
        "Color-coded horizontal SLA bars (green/blue/orange/red) — instant time-band distribution at a glance",
        "Dual-line trend chart with daily/weekly/monthly toggle — incoming vs outgoing email volume comparison",
        "Team performance table with efficiency scores, SLA compliance badges, and escalation counts per member"
      ]
    },

    userStory: "As a Procurement Manager, I want to understand vendor sentiment and email patterns to improve our vendor relationships.",
    description: "Email operations dashboard for procurement with AI categorization, sentiment analysis, and intelligent chatbot.",
  },

  {
    id: 6,
    slug: "cursor-analytics",
    name: "Cursor Analytics",
    tagline: "AI Usage Intelligence",
    type: "Analytics",
    organization: "Amagi Media",
    category: "Analytics & Intelligence",
    readTime: "5 min read",
    publishDate: "January 2025",
    icon: Activity,
    monogram: "CA",
    color: "bg-indigo-500",
    heroImage: "gradient-indigo",

    overview: "Cursor Analytics is a Next.js dashboard for monitoring Cursor AI usage across 370+ engineers. Since Cursor's Team Plan provides no admin analytics, this platform pulls data from the Cursor Admin API and CSV usage exports to track per-user activity, model consumption, spending trends, and team productivity scores.",

    challenge: "Amagi's engineering team adopted Cursor AI for development acceleration, but the Team Plan provided zero admin analytics. IT had no visibility into who was using it, which AI models developers preferred, what the monthly spend looked like, or whether the investment was delivering ROI. The Cursor Admin API existed but had no dashboard, and detailed cost/model data was only available via CSV exports.",

    solution: "Built a Next.js 15 + React 19 dashboard deployed on AWS Amplify. Created a server-side API client to pull member data from the Cursor Admin API, combined with a CSV pre-aggregation pipeline (PapaParse) for detailed cost and model analytics. Developed four tab views: Overview (KPIs + leaderboard), Users (detailed per-user table), Inactive (license recovery), and Analytics (spending trends, model costs, top spenders).",

    features: [
      "Organization-wide KPI dashboard (members, requests, spend, lines generated, avg cost/user)",
      "Top Performers leaderboard with productivity scores and retention rates",
      "Feature adoption tracking (Plan Mode, Ask Mode, Agent usage)",
      "Per-user detailed table with score, requests, plan/ask/agent breakdown, generated/accepted lines",
      "Inactive user detection for license optimization",
      "Spending trend analysis (Sep '25 - Feb '26) with monthly breakdown",
      "Cost by Model chart (default, Claude 4.5/4.6, GPT-5.3, Composer)",
      "Top Spenders horizontal bar chart for budget visibility",
      "Per-user monthly usage trends with bar + line overlays",
      "Time range filters (7d, 14d, 30d) and CSV/JSON export",
      "Code generation metrics (lines generated, lines accepted, retention rate)",
      "Billing breakdown: Free vs Included vs On-Demand per month"
    ],

    architecture: "Next.js 15 with server-side API routes fetches member and daily usage data from the Cursor Admin API. A pre-aggregation script processes CSV exports (PapaParse) into per-user monthly stats for cost and model analytics. Data is cached server-side for fast dashboard loading. Recharts renders all visualizations with a custom dark theme. TanStack Table powers the sortable, filterable user tables.",

    impact: "IT admins gained full visibility into Cursor AI usage across 370+ engineers. Identified inactive users for license recovery, saving on unused subscriptions. Model preference data (Claude 4.5 preferred for high-thinking tasks, default model for quick completions) informed AI tool strategy. Monthly spend tracking enabled budget forecasting and cost optimization.",

    techStack: [
      { name: "Next.js", category: "frontend", icon: "nextdotjs" },
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "Recharts", category: "frontend" },
      { name: "TanStack Table", category: "frontend" },
      { name: "Radix UI", category: "frontend" },
      { name: "PapaParse", category: "backend" },
      { name: "Cursor Admin API", category: "backend" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "Lucide Icons", category: "frontend" },
    ],

    integrations: [
      {
        system: "Cursor Admin API",
        type: "REST API",
        dataFlow: "Member data, daily usage metrics, request counts, active days"
      },
      {
        system: "Cursor CSV Exports",
        type: "File Processing",
        dataFlow: "Per-request cost, model, token counts — pre-aggregated via PapaParse"
      }
    ],

    keyDecisions: [
      {
        title: "Rebuild from Streamlit to Next.js",
        reasoning: "The initial prototype was a Streamlit dashboard — fast to ship but limited in UX customization, component reuse, and client-side interactivity. Rebuilding in Next.js with TanStack Table and Recharts gave full control over the leaderboard, sortable user tables, and tabbed analytics — features Streamlit couldn't deliver without heavy workarounds.",
        alternatives: "Keep Streamlit and add custom CSS / Retool / Grafana with custom panels",
        outcome: "Production-grade dashboard with sub-second client-side sorting, custom productivity scoring, and a polished dark UI that IT admins actually enjoy using daily."
      },
      {
        title: "Dual Data Sources: Admin API + CSV Exports",
        reasoning: "Cursor's Admin API provides member data and daily usage counts but exposes no per-request cost or model breakdown. CSV exports from Cursor's billing portal contain per-request detail (model, tokens, cost) but lack user metadata. Neither source alone gives full visibility.",
        alternatives: "API-only (lose cost data) / CSV-only (lose real-time user status) / Reverse-engineer undocumented endpoints",
        outcome: "Combining both sources yields the complete picture — user activity from the API, cost and model analytics from CSVs — with PapaParse pre-aggregating CSV data client-side to avoid a backend."
      },
      {
        title: "PapaParse Client-Side Aggregation vs Backend API",
        reasoning: "CSV exports are static snapshots uploaded periodically. Standing up a backend just to parse CSVs adds infrastructure cost and deployment complexity for what is essentially a read-only analytics tool. PapaParse handles 100K+ row CSVs in-browser in under 2 seconds.",
        alternatives: "FastAPI backend with database / AWS Lambda pre-processing / Databricks pipeline",
        outcome: "Zero backend infrastructure — the entire app runs as a static Next.js site on AWS Amplify. CSV processing happens client-side, keeping deployment simple and costs near zero."
      }
    ],

    beforeAfter: [
      {
        before: "IT had no visibility into Cursor usage — no way to see who was active, which models engineers preferred, or what the AI tooling was costing per user.",
        after: "Full dashboard tracking 370+ engineers with per-user productivity scores, model preferences (Claude 4.5 dominant for high-thinking tasks), and individual spend breakdowns."
      },
      {
        before: "License optimization was guesswork — inactive seats went unnoticed, and there was no data to justify renewals or expansion.",
        after: "Inactive user detection enabled license recovery, and usage trend data provided concrete evidence for budget forecasting and subscription decisions."
      },
      {
        before: "No understanding of which AI features engineers actually adopted — Plan Mode, Ask Mode, and Agent usage were invisible.",
        after: "Feature adoption panel shows exact usage counts per mode (Agent: 76.5K requests, Plan: 2.8K, Ask: 1.7K), informing training priorities and rollout strategy."
      }
    ],

    metrics: [
      { label: "Engineers Tracked", value: "370+" },
      { label: "Total Requests", value: "429k+" },
      { label: "AI Models", value: "8+" },
      { label: "Lines Generated", value: "23M+" },
      { label: "Data Period", value: "6 months" },
      { label: "Cost Visibility", value: "Per-user" },
    ],

    screenshots: [
      {
        src: "/projects/cursor-analytics/screenshot-1-overview.webp",
        alt: "Cursor Analytics Overview Dashboard",
        caption: "Overview dashboard — KPI cards (members, total requests, spend, lines generated, avg cost/user), top performers leaderboard with productivity scores, feature adoption rates, and code generation metrics"
      },
      {
        src: "/projects/cursor-analytics/screenshot-2-overview-bottom.webp",
        alt: "Overview Bottom - Models & Spending",
        caption: "Overview continued — Code generation stats (3.9M lines generated, 1.7M accepted, 56% retention), top AI models by user count, and monthly spending summary with trend charts"
      },
      {
        src: "/projects/cursor-analytics/screenshot-3-users.webp",
        alt: "Users Tab - Detailed Per-User Table",
        caption: "Users tab — Sortable table with productivity score, request counts, Plan/Ask/Agent breakdown, generated/accepted lines, spend, and all-time usage per engineer"
      },
      {
        src: "/projects/cursor-analytics/screenshot-4-analytics.webp",
        alt: "Analytics Tab - Spending Trends",
        caption: "Analytics tab — Total spend, top spender, total requests KPIs, and 6-month spending trend line chart (Sep '25 - Feb '26) showing cost trajectory"
      },
      {
        src: "/projects/cursor-analytics/screenshot-5-analytics-bottom.webp",
        alt: "Analytics Bottom - Model Costs & Top Spenders",
        caption: "Analytics deep-dive — Cost by Model (Top 10) horizontal bar chart, monthly billing breakdown (Free/Included/On-Demand), top spenders ranking, and per-user monthly usage with bar + trend overlay"
      }
    ],

    design: {
      philosophy: "Designed as a dark-first analytics dashboard for IT admins monitoring AI tool adoption across hundreds of engineers. The interface prioritizes scannability with prominent KPI cards, a leaderboard that gamifies productivity, and tabbed navigation that separates overview metrics from deep-dive analytics.",
      principles: [
        {
          title: "Gamified Productivity",
          description: "The Top Performers leaderboard ranks engineers by a composite productivity score combining requests, retention rate, and active days. Numbered rankings and score badges create healthy visibility into AI tool adoption.",
          screenshotIndex: 0,
          highlight: "Top Performers list with rank numbers, productivity scores, and retention percentages"
        },
        {
          title: "Multi-Dimensional User Analysis",
          description: "The Users table exposes every dimension of AI usage — score, requests, Plan/Ask/Agent feature breakdown, code generation, acceptance rates, and spend — enabling IT to identify power users, underutilizers, and cost outliers in one view.",
          screenshotIndex: 2,
          highlight: "Sortable user table with Plan/Ask/Agent columns and per-user spend"
        },
        {
          title: "Cost Transparency",
          description: "The Analytics tab surfaces spending trends, per-model costs, and top spenders. The monthly billing breakdown separates Free, Included, and On-Demand tiers so IT can distinguish base subscription value from overage costs.",
          screenshotIndex: 4,
          highlight: "Cost by Model chart, billing breakdown (Free/Included/On-Demand), and Top Spenders bar"
        },
        {
          title: "Temporal Context",
          description: "Time range filters (7d, 14d, 30d) on KPIs and a 6-month trend line on analytics give both real-time pulse and long-term trajectory. 'Current cycle' spend vs 'last 30d' comparisons surface cost acceleration early.",
          screenshotIndex: 3,
          highlight: "7d/14d/30d filters, 'current cycle' labels on KPIs, and Sep '25 - Feb '26 trend line"
        },
        {
          title: "Feature Adoption Visibility",
          description: "Plan Mode, Ask Mode, and Agent usage are tracked separately with user counts and total requests. This reveals which AI capabilities engineers actually use, informing training priorities and feature rollout decisions.",
          screenshotIndex: 0,
          highlight: "Feature Adoption panel with Plan Mode (2.8k), Ask Mode (1.7k), Agent (76.5k)"
        }
      ],
      colorPalette: [
        { name: "Background", hex: "#101017", usage: "Page background — deep blue-black for extended viewing" },
        { name: "Surface", hex: "#181820", usage: "Card and panel backgrounds" },
        { name: "Surface Raised", hex: "#1e1e28", usage: "Table rows, hover states" },
        { name: "Accent Blue", hex: "#5b7cf7", usage: "Primary accent, KPI icons, active tab indicator" },
        { name: "Success Green", hex: "#22c55e", usage: "Positive metrics, retention indicators" },
        { name: "Warning Amber", hex: "#d4a017", usage: "Attention states, mid-range metrics" },
        { name: "Chart Red", hex: "#ef4444", usage: "Top spenders bar, negative indicators" }
      ],
      componentPatterns: [
        "KPI stat cards with icon, label, large value, and subtext (e.g., 'last 30d' or 'current cycle') — consistent across all tabs",
        "Tabbed navigation (Overview, Users, Inactive, Analytics) — separates high-level metrics from deep-dive data",
        "Numbered leaderboard with composite productivity scores — gamifies AI adoption tracking",
        "Sortable data table with multi-column breakdown (TanStack Table) — enables drill-down into individual users",
        "Horizontal bar charts for model costs and top spenders — easy visual comparison of ranked values"
      ]
    },

    userStory: "As an IT Admin, I want to track which AI models our developers use most and what it costs so I can optimize our Cursor Team Plan subscription.",
    description: "Next.js analytics dashboard for monitoring Cursor AI usage across 370+ engineers — built because Cursor's Team Plan provides no admin analytics.",
  },

  {
    id: 7,
    slug: "calendar-analytics",
    name: "Calendar Analytics",
    tagline: "Meeting Intelligence Platform",
    type: "Analytics",
    organization: "Amagi Media",
    category: "Analytics & Intelligence",
    readTime: "6 min read",
    publishDate: "August 2024",
    icon: Calendar,
    monogram: "CL",
    color: "bg-pink-500",
    heroImage: "gradient-pink",

    overview: "Calendar Analytics is a collaboration intelligence platform that analyzes 428,000+ Google Meet meetings across 1,400+ employees and 50 departments. It combines Google Workspace calendar data (via GAM CLI) with SAP SuccessFactors HR data to surface cross-departmental collaboration patterns, meeting load hotspots, and external engagement metrics — with an AI chatbot ('Aria') for natural language queries.",

    challenge: "Leadership had zero visibility into meeting culture at scale — how much time teams spend in meetings, which departments collaborate most, external vs internal meeting ratios, and whether managers were drowning in meetings. Manual calendar analysis was impractical across 1,400+ employees and 50 departments. The data existed in Google Workspace but had no analytics layer.",

    solution: "Built a Next.js frontend with a FastAPI backend deployed on AWS. A Python data pipeline pulls calendar events via GAM CLI and correlates them with SAP SuccessFactors HR data (departments, managers, job titles) by employee ID. The dashboard surfaces KPIs, department distribution, cross-departmental collaboration rankings, and Key Insights with AI-generated executive summaries. An AI chatbot ('Aria') powered by GPT-4o-mini answers natural language queries about meeting data.",

    features: [
      "Organization-wide KPIs (total meetings, total hours, external collaboration rate, most active department)",
      "Department analytics with pie chart distribution and meeting volume views",
      "Top 10 cross-departmental collaboration rankings with participant counts and weekly frequency",
      "Collaboration intensity heatmap (Low → High) across 99 department pairings",
      "Clickable KPI insights modals with meeting distribution, activity level, top contributors, and collaboration scope",
      "Key Insights cards (weekly meeting load, cross-dept connectivity, external focus) with drill-down",
      "AI-generated Executive Summary analyzing organizational health from meeting patterns",
      "AI chatbot 'Aria' for natural language queries ('Which managers have most meetings?')",
      "External vs internal meeting ratio tracking per department",
      "SAP SuccessFactors HR data enrichment (department, manager, job title per attendee)",
      "GAM CLI calendar data pipeline with date-range filtering",
      "Dark/light theme toggle"
    ],

    architecture: "A Python data pipeline exports calendar events via GAM CLI (Google Admin SDK) and cleans/normalizes them with Pandas. SAP SuccessFactors OData API provides HR data (employees, departments, managers). The FastAPI backend correlates calendar and HR data by employee ID, caches aggregated analytics, and serves API endpoints. The Next.js frontend renders interactive Recharts visualizations and a Radix UI component system. The AI chatbot translates natural language to analytics queries via GPT-4o-mini.",

    impact: "Leadership gained data-driven insights into meeting culture across 50 departments. Identified that Customer Success had the highest meeting volume (25% of all meetings) while cross-department connectivity was only 8% — highlighting silo risks. The 53-hour average weekly meeting load surfaced potential burnout in key teams. External collaboration tracking (46%) validated customer engagement levels.",

    techStack: [
      { name: "Next.js", category: "frontend", icon: "nextdotjs" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "Recharts", category: "frontend" },
      { name: "Radix UI", category: "frontend" },
      { name: "Framer Motion", category: "frontend" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "Python", category: "backend", icon: "python" },
      { name: "Pandas", category: "backend" },
      { name: "Google Workspace", category: "infrastructure", icon: "google" },
      { name: "SAP SuccessFactors", category: "infrastructure" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "OpenAI GPT-4o-mini", category: "ai", icon: "openai" },
    ],

    integrations: [
      {
        system: "Google Workspace",
        type: "GAM CLI",
        dataFlow: "Calendar events for all users in configurable date ranges via Google Admin SDK"
      },
      {
        system: "SAP SuccessFactors",
        type: "OAuth + OData",
        dataFlow: "Employee data — departments, managers, job titles — correlated by employee ID"
      },
      {
        system: "OpenAI GPT-4o-mini",
        type: "API",
        dataFlow: "Natural language meeting queries translated to analytics responses via 'Aria' chatbot"
      }
    ],

    keyDecisions: [
      {
        title: "GAM CLI over Direct Google Calendar API",
        reasoning: "The Google Calendar API requires per-user OAuth consent or domain-wide delegation with complex scope management. GAM (Google Apps Manager) CLI leverages existing Google Admin SDK credentials to bulk-export calendar events for all 1,400+ users in a single command — no per-user auth flows, no pagination headaches, and IT already had GAM configured for other admin tasks.",
        alternatives: "Google Calendar API with domain-wide delegation / Google Workspace Events API / BigQuery export via Workspace logs",
        outcome: "Calendar data for 1,400+ users extracted in minutes with a single GAM command, using credentials IT already managed. Zero additional OAuth setup or API quota concerns."
      },
      {
        title: "SAP SuccessFactors HR Data Join",
        reasoning: "Raw calendar data only has email addresses — no department, manager, or job title context. Without HR enrichment, you can't answer 'Which department has the most meetings?' or 'Are managers drowning in meetings?' SAP SuccessFactors was Amagi's HR system of record, and its OData API exposes the exact employee metadata needed to transform anonymous calendar events into organizational intelligence.",
        alternatives: "Manual department mapping spreadsheet / LDAP/Active Directory lookup / Ask managers to self-report",
        outcome: "Every calendar event enriched with department, manager, and job title — enabling department-level analytics, cross-departmental collaboration tracking, and manager meeting load analysis across 50 departments."
      },
      {
        title: "GPT-4o-mini for the Aria Chatbot",
        reasoning: "Leadership wanted to ask questions like 'Which managers have the most meetings?' without navigating dashboards. GPT-4o-mini was chosen over GPT-4 for its 10x lower cost and faster response times — critical for a chatbot that could see frequent queries. The model receives pre-aggregated meeting statistics as context, not raw data, so the smaller model handles it well.",
        alternatives: "GPT-4 (expensive for chatbot volume) / Claude (API access constraints at the time) / No chatbot, filters only",
        outcome: "Sub-second natural language responses to meeting queries at minimal API cost. 'Aria' handles questions about department patterns, meeting efficiency, and collaboration trends without users touching a filter."
      }
    ],

    beforeAfter: [
      {
        before: "Leadership had zero visibility into meeting culture — no data on how much time teams spent in meetings, which departments collaborated, or whether meeting load was sustainable.",
        after: "Executive dashboard surfacing 428K+ meetings across 50 departments with weekly meeting load (53h), cross-department connectivity (8%), and external collaboration rate (46%)."
      },
      {
        before: "Cross-departmental collaboration was invisible — no way to know which teams worked together frequently or which operated in silos.",
        after: "Top 10 collaboration rankings with meeting counts, participant volumes, and a 5-level intensity heatmap across 99 department pairings — revealing that cross-dept connectivity was only 8%, highlighting silo risks."
      },
      {
        before: "Querying meeting data required analyst support — leadership couldn't self-serve answers to questions like 'Which department has the most external meetings?'",
        after: "AI chatbot 'Aria' answers natural language questions instantly, and clickable KPI cards open drill-down modals with distribution, top contributors, and AI-generated executive summaries."
      },
      {
        before: "Customer Success's outsized meeting volume (25% of all meetings) was unknown, and potential burnout in high-meeting teams went undetected.",
        after: "Department-level analytics immediately surfaced Customer Success as the most meeting-heavy team, and the 53-hour weekly load metric flagged burnout risk for leadership action."
      }
    ],

    metrics: [
      { label: "Meetings Analyzed", value: "428K+" },
      { label: "Employees", value: "1,400+" },
      { label: "Departments", value: "50" },
      { label: "Meeting Hours", value: "496K+" },
      { label: "Dept Collaborations", value: "99 pairs" },
      { label: "Data Window", value: "7 months" },
    ],

    screenshots: [
      {
        src: "/projects/calendar-analytics/screenshot-1-dashboard.webp",
        alt: "Calendar Analytics Dashboard",
        caption: "Executive dashboard — KPI cards (428K meetings, 496K hours, 46% external collaboration, most active department), department analytics pie chart with distribution breakdown, and top 10 cross-departmental collaboration rankings"
      },
      {
        src: "/projects/calendar-analytics/screenshot-2-insights.webp",
        alt: "Key Insights and Executive Summary",
        caption: "Key Insights — Weekly meeting load (53h), cross-department connectivity (8%), external focus (46%), collaboration intensity legend, and AI-generated executive summary analyzing organizational health"
      },
      {
        src: "/projects/calendar-analytics/screenshot-3-kpi-modal.webp",
        alt: "KPI Insights Modal - Total Meetings",
        caption: "KPI drill-down modal — Total Meetings Analysis showing meeting distribution (322 avg/user), activity level assessment, top contributors (3 power users), collaboration scope (50 departments), and executive summary"
      },
      {
        src: "/projects/calendar-analytics/screenshot-4-chatbot.webp",
        alt: "AI Chatbot - Aria Analytics Partner",
        caption: "AI chatbot 'Aria' — Analytics partner for natural language queries about meeting data, with suggested prompts for department analysis, collaboration patterns, and meeting efficiency"
      }
    ],

    design: {
      philosophy: "Designed as an executive-facing collaboration intelligence dashboard that transforms raw calendar data into actionable organizational insights. The dark interface reduces eye strain during extended analysis while the card-based layout groups KPIs, department analytics, and collaboration patterns into scannable sections.",
      principles: [
        {
          title: "Executive Scannability",
          description: "Four prominent KPI cards at the top give leadership a 2-second pulse check on meeting culture — total meetings, hours invested, external engagement rate, and the most active department. Each card is clickable for drill-down analysis.",
          screenshotIndex: 0,
          highlight: "KPI cards: 428,276 meetings, 496,723 hours, 46% external, Customer Success"
        },
        {
          title: "Collaboration Intelligence",
          description: "The Top Department Collaborations panel ranks the most frequent inter-department pairings by meeting count and participant volume. A 5-level intensity scale (Low → High) helps leadership identify strong partnerships and potential silos at a glance.",
          screenshotIndex: 0,
          highlight: "Top Department Collaborations list with intensity indicators and participant counts"
        },
        {
          title: "Drill-Down Insights",
          description: "Clicking any KPI opens a modal with comprehensive breakdown — meeting distribution per user, activity level assessment, top contributors, collaboration scope, and an AI-generated executive summary. Data is presented without leaving the dashboard context.",
          screenshotIndex: 2,
          highlight: "Total Meetings Analysis modal with Meeting Distribution, Activity Level, Top Contributors, Collaboration Scope"
        },
        {
          title: "Conversational Analytics",
          description: "The 'Aria' AI chatbot sits as a floating assistant, allowing leadership to ask natural language questions about meeting data — 'Which department has the most external meetings?' or 'How efficient are our meetings?' — without navigating complex filters.",
          screenshotIndex: 3,
          highlight: "Aria chatbot with suggested prompts and natural language interface"
        }
      ],
      colorPalette: [
        { name: "Background", hex: "#1a1a1a", usage: "Page background — deep dark for extended executive viewing" },
        { name: "Card Surface", hex: "#262626", usage: "KPI cards, department analytics panel, collaboration list" },
        { name: "Primary Blue", hex: "#3b82f6", usage: "KPI icons, active states, chart accents" },
        { name: "Success Green", hex: "#22c55e", usage: "Cross-dept connectivity, positive metrics, top contributors" },
        { name: "Warning Amber", hex: "#eab308", usage: "Activity level warnings, meeting load alerts" },
        { name: "Accent Purple", hex: "#8b5cf6", usage: "Department chart segments, collaboration intensity" },
        { name: "External Pink", hex: "#ec4899", usage: "External focus metrics, external collaboration rate" }
      ],
      componentPatterns: [
        "Clickable KPI cards with icon, value, subtitle, and drill-down modal — each metric is a gateway to deeper analysis",
        "Department analytics panel with Distribution/Meeting Volume toggle — pie chart + percentage legend for 8 departments",
        "Ranked collaboration list with numbered entries, meeting counts, participant counts, and weekly frequency",
        "Key Insights cards with large metric, description, and contextual icon — color-coded by insight type",
        "Floating AI chatbot ('Aria') with suggested prompts and conversational interface for natural language queries"
      ]
    },

    userStory: "As an HR Director, I want to understand meeting patterns across departments to optimize collaboration and reduce meeting fatigue.",
    description: "Collaboration intelligence platform analyzing 428K+ Google Meet meetings across 1,400+ employees with AI chatbot for natural language queries.",
  },

  {
    id: 8,
    slug: "spog",
    name: "SPOG",
    tagline: "Financial Analytics Platform",
    type: "Data Engineering",
    organization: "Amagi Media",
    category: "Finance & FinOps",
    readTime: "10 min read",
    publishDate: "July 2024",
    icon: PieChart,
    monogram: "SP",
    color: "bg-cyan-500",
    heroImage: "/projects/spog/hero.webp",

    overview: "SPOG (Single Pane of Glass) is an enterprise financial analytics platform that consolidates Balance Sheet and Cash Flow data from NetSuite into a unified Databricks dashboard. Tracking $500M+ in assets and $50M+ in quarterly cash movements, it replaces manual report compilation with automated PySpark ETL pipelines, Delta Lake storage, and Databricks Genie for natural language financial queries.",

    challenge: "Finance leadership lacked unified visibility into financial health. Balance Sheet and Cash Flow data lived in NetSuite as raw CSV exports, requiring hours of manual aggregation across 300+ GL accounts. Non-technical stakeholders couldn't query financial data without analyst support. No historical comparison capability across fiscal years. The company needed a single source of truth for $500M+ in assets with automated daily refreshes.",

    solution: "Architected end-to-end ETL pipelines using PySpark on Databricks. Built a Balance Sheet processor that maps 300+ GL accounts to 50+ hierarchical categories (GL → Subcategory → Major Category → Total) with configurable JSON mappings. Built a Cash Flow processor with 9-line format covering Operating, Investing, and Financing activities. Data lands in Delta Lake tables with ACID compliance and time-travel. Authored 20+ SQL queries for interactive Databricks dashboards with currency conversion (INR/USD). Configured Databricks Genie with financial domain knowledge for natural language queries.",

    features: [
      "Balance Sheet processing tracking $500M+ in enterprise assets and liabilities",
      "300+ GL accounts mapped to 50+ categories via configurable JSON mappings",
      "Hierarchical aggregation (GL Accounts → Subcategories → Major Categories → Totals)",
      "Cash Flow analytics monitoring $50M+ quarterly movements across Operating, Investing, Financing",
      "Net Cash Change calculation with Opening/Closing Cash Balance tracking",
      "Cumulative QTD (Quarter-to-Date) and YTD (Year-to-Date) calculations",
      "3 fiscal years of historical data (FY23, FY24, FY25) plus current year monthly snapshots",
      "Multi-currency support with query-time INR/USD conversion",
      "20+ parameterized SQL dashboard queries with date and currency filters",
      "Databricks Genie AI integration for natural language financial queries",
      "Automated daily refresh job (6 AM IST) with deployment scripts",
      "Delta Lake time-travel for audit trails and disaster recovery"
    ],

    architecture: "NetSuite generates daily Balance Sheet and Cash Flow CSV exports. Files are ingested into Databricks File System (DBFS) via automated upload scripts. PySpark ETL pipelines (balance_sheet_processor, cash_flow_processor) validate, clean, and transform raw data — mapping GL numbers to categories via JSON config, parsing multi-format amounts, and building hierarchical aggregations. Processed data lands in Delta Lake tables under Unity Catalog governance with ACID compliance and versioning. 20+ SQL queries power interactive Databricks dashboards. Databricks Genie is configured with financial domain knowledge to answer natural language queries like 'What are total assets for Q3?' or 'Compare cash position across fiscal years.'",

    impact: "Report compilation reduced from hours to minutes with automated daily refresh. C-suite gained real-time financial visibility across Balance Sheet and Cash Flow for the first time. Non-technical stakeholders can now query financial data using natural language via Genie. Delta Lake time-travel provides complete audit trails for regulatory compliance. Eliminated data discrepancies from manual aggregation of 300+ GL accounts.",

    keyDecisions: [
      {
        question: "Why CSV exports as source of truth instead of raw NetSuite API?",
        answer: "The finance team makes internal adjustments directly in NetSuite — reclassifications, accruals, corrections — that raw API data doesn't reflect until period close. CSV exports contain post-adjustment 'truth'. We use CSVs first to establish correct values, then reverse-engineer API queries to validate against them. This CSV-first approach ensures data accuracy that direct API pulls cannot guarantee."
      },
      {
        question: "Why Delta Lake over a traditional data warehouse?",
        answer: "ACID transactions prevent partial writes during ETL failures. Time-travel enables audit trails and rollback — critical for financial data where regulators may ask 'what did this number look like last month?' Auto-optimization with Z-ordering delivers sub-second query response on dashboards."
      },
      {
        question: "Why JSON-based GL mappings over hardcoded logic?",
        answer: "Finance frequently adds or reclassifies GL accounts. A configurable gl_mappings.json allows non-engineer updates to account-category mappings without code changes or redeployment. When a new GL account appears, finance updates the JSON — no sprint needed."
      },
      {
        question: "Why hierarchical aggregation in ETL over dashboard-level rollups?",
        answer: "Financial reporting requires drill-down from totals to subcategories to individual GL accounts. Building the hierarchy in PySpark (not the dashboard) ensures consistent totals and enables both summary and detail views from the same Delta tables."
      },
      {
        question: "Why Databricks Genie over a custom LLM chatbot?",
        answer: "Genie understands the Delta table schema natively and translates natural language to SQL. Building a custom chatbot would require maintaining prompt templates, SQL generation, and validation — Genie provides this out of the box with financial domain tuning."
      }
    ],

    beforeAfter: [
      {
        label: "Report Generation",
        before: "Manual CSV export from NetSuite → Excel aggregation → Email to leadership (hours per report)",
        after: "Automated daily ETL pipeline → Delta Lake → Interactive dashboard refreshed by 6 AM IST (minutes)"
      },
      {
        label: "Data Organization",
        before: "300+ GL accounts in flat CSV files with no categorization or hierarchy",
        after: "Hierarchical financial structure: GL → 50+ subcategories → major categories → Balance Sheet totals"
      },
      {
        label: "Period Calculations",
        before: "Finance analysts manually compile QTD/YTD reports with spreadsheet formulas",
        after: "Cumulative QTD and YTD calculations automated in PySpark with 3 fiscal years of history"
      },
      {
        label: "Financial Queries",
        before: "Leadership asks analyst 'What's our cash position?' and waits hours for a response",
        after: "CFO asks Genie 'What are total assets for Q3?' and gets an answer in seconds"
      },
      {
        label: "Audit Trail",
        before: "No audit trail — if a number changes between reports, no way to trace why",
        after: "Delta Lake time-travel provides version history for every data point across all refreshes"
      }
    ],

    techStack: [
      { name: "Databricks", category: "infrastructure" },
      { name: "Delta Lake", category: "database" },
      { name: "PySpark", category: "backend" },
      { name: "Python", category: "backend", icon: "python" },
      { name: "Pandas", category: "backend" },
      { name: "SQL", category: "database" },
      { name: "Unity Catalog", category: "infrastructure" },
      { name: "DBFS", category: "infrastructure" },
      { name: "Databricks Genie", category: "ai" },
      { name: "NetSuite", category: "infrastructure" },
      { name: "Bash", category: "backend" },
    ],

    integrations: [
      {
        system: "NetSuite",
        type: "CSV Export + OAuth1 API",
        dataFlow: "Daily Balance Sheet and Cash Flow CSV exports, GL account data — ingested into DBFS"
      },
      {
        system: "Databricks Genie",
        type: "Native Integration",
        dataFlow: "Natural language financial queries translated to SQL against Delta Lake tables"
      }
    ],

    metrics: [
      { label: "Assets Tracked", value: "$500M+" },
      { label: "Cash Flow", value: "$50M+ qtr" },
      { label: "GL Accounts", value: "300+" },
      { label: "Categories", value: "50+" },
      { label: "Delta Tables", value: "4" },
      { label: "Dashboard Queries", value: "20+" },
      { label: "Daily Refresh", value: "6 AM IST" },
      { label: "Fiscal Years", value: "3+" },
    ],

    userStory: "As a CFO, I want real-time financial dashboards with natural language queries so I can make data-driven decisions without waiting for analyst reports.",
    description: "Enterprise financial analytics platform tracking $500M+ in assets on Databricks with automated ETL pipelines and AI-powered natural language queries via Genie.",
  },

  {
    id: 9,
    slug: "identity-lifecycle",
    name: "Identity Lifecycle",
    tagline: "Automated User Provisioning & Offboarding",
    type: "Automation",
    organization: "Amagi Media",
    category: "Automation",
    readTime: "9 min read",
    publishDate: "May 2024",
    icon: Users,
    monogram: "IL",
    color: "bg-lime-500",
    heroImage: "gradient-lime",

    overview: "Identity Lifecycle Automation orchestrates the full employee journey — onboarding, field synchronization, and offboarding — across SAP SuccessFactors, Google Workspace, and OneLogin. Managing 5,800+ accounts for 1,200–1,400 active employees, the system runs on cron-triggered Python scripts with smart email fabrication, inactive-prefix normalization, contractor-to-permanent conversion detection, and 20-worker parallel updates.",

    challenge: "Manual account creation took 2–4 hours per new hire, delaying Day-1 access. Nine critical fields (job title, division, manager, location, employee class, and more) drifted between SAP and Google Workspace with no automated reconciliation. Offboarding was reactive — terminated employees retained active Google accounts for days, creating security exposure. Email generation failed on edge cases: names with suffixes (Jr., III), apostrophes (O'Connor), multi-part last names, and contractor-to-permanent conversions where the old c-prefix email needed to stay as an alias rather than being suspended.",

    solution: "Built a three-phase Python automation system anchored to SAP SuccessFactors as the HR system of record. Onboarding runs hourly via cron, pulling new hires through an OAuth 2.0 SAML2-bearer flow to the SAP OData API, fabricating unique business emails with inactive-prefix normalization, creating Google Workspace accounts via GAMADV-XTD3 CLI, and writing the created email back to SAP. Updates run every 12 hours, comparing 9 fields between SAP and GWS with 20 parallel ProcessPoolExecutor workers. Offboarding runs every 2 hours, fetching paginated inactive users from SAP, filtering by termination date, detecting contractor conversions, and suspending GWS accounts. All phases send HTML notification emails to IT support.",

    features: [
      "Hourly onboarding sync from SAP SuccessFactors via OData API",
      "Smart email fabrication with inactive-prefix normalization (db.inactive., inactive. stripped for dedup)",
      "Country-aware name formatting (US/UK use cleaned last name, others use full display name)",
      "Bi-directional sync — created GWS email written back to SAP via OData upsert",
      "9-field comparison engine (jobTitle, division, businessUnit, managerEmail, employeeClass, companyName, country, workLocation, personIdExternal)",
      "20 parallel workers via ProcessPoolExecutor for batch GWS updates",
      "Intelligent org-field grouping — if any organization field changes, all are updated together to prevent GWS API overwrites",
      "Paginated offboarding fetches (handles 1,000+ inactive users across multiple SAP OData pages)",
      "Contractor-to-permanent conversion detection prevents accidental suspension of alias accounts",
      "Processed-user tracking via JSON with configurable lookback windows",
      "HTML welcome emails with credentials via GAMADV-XTD3 notify + template system",
      "Automated IT notification emails for both onboarding and offboarding events"
    ],

    architecture: "Three cron-triggered Python phases run on a dedicated Linux server. Onboarding (hourly): SAP OData pull → new-hire detection (7-day window) → email fabrication with dedup → GAMADV-XTD3 account creation → SAP email writeback → welcome email. Updates (every 12 hours): SAP data pull → GWS data export via GAM → 9-field comparison → parallel GAM updates (20 workers) → CSV summary email. Offboarding (every 2 hours): paginated SAP inactive-user fetch → termination-date filtering → contractor-conversion check → GAM account suspension → IT notification. All phases use OAuth 2.0 SAML2-bearer authentication against SAP SuccessFactors.",

    impact: "Onboarding reduced from 2–4 hours of manual provisioning to automated execution within minutes of SAP record creation. Field synchronization runs every 12 hours, eliminating data drift between HR and productivity systems. Offboarding completes within 2 hours of termination in SAP, closing the security window from days to hours. Contractor-to-permanent conversion detection prevents false suspensions. Zero manual credential distribution with auto-generated welcome emails to new hires and IT support.",

    keyDecisions: [
      {
        question: "Why GAMADV-XTD3 CLI over the Google Workspace Admin SDK?",
        answer: "GAMADV-XTD3 provides a single command interface for user creation, field updates, suspension, and email sending — operations that would require multiple Admin SDK endpoints, service account delegation setup, and custom retry logic. GAM also handles duplicate-email suffixing natively with addnumericsuffixonduplicate, and credential logging with logpassword. For a cron-based automation managing 5,800+ accounts, operational simplicity outweighed API-level control."
      },
      {
        question: "Why cron-based scheduling instead of event-driven webhooks?",
        answer: "SAP SuccessFactors Intelligent Services (webhooks) require additional licensing and configuration that wasn't available. Cron with hourly/2-hour/12-hour intervals provides predictable batch processing, simpler debugging via log files, and no dependency on SAP webhook infrastructure. The trade-off is latency (up to 1 hour for onboarding), which is acceptable since new hires are added days before their start date."
      },
      {
        question: "Why normalize inactive email prefixes instead of excluding terminated users from dedup?",
        answer: "When an employee is terminated, their email gets prefixed (e.g., db.inactive.rahul.s@amagi.com). If a new hire named Rahul S joins, naive dedup would generate rahul.s@amagi.com — creating a collision when the old account is eventually cleaned up. By stripping inactive prefixes during comparison, the system detects the conflict and appends a numeric suffix, ensuring globally unique emails across the full 5,800+ account history."
      },
      {
        question: "Why write created emails back to SAP instead of using SAP as the email source?",
        answer: "SAP stores a 'preferred email' field (customString4) from the offer letter, but GAM may modify the actual email (e.g., appending a numeric suffix for duplicates). Writing the GAM-created email back to SAP via OData upsert ensures SAP always reflects the real Google Workspace email, which downstream systems (payroll, benefits, OneLogin SSO) depend on for authentication."
      }
    ],

    beforeAfter: [
      {
        label: "New Hire Provisioning",
        before: "IT admin manually creates Google account, types org fields, generates password, emails credentials — 2–4 hours per employee",
        after: "Cron detects new SAP record hourly, auto-creates GWS account with 15+ fields, sends welcome email with temp password — minutes, zero touch"
      },
      {
        label: "Field Synchronization",
        before: "Promotions, transfers, and manager changes sat in SAP for weeks before someone manually updated Google Workspace",
        after: "9 fields compared every 12 hours, drift detected and corrected automatically with 20 parallel workers, CSV summary emailed to IT"
      },
      {
        label: "Offboarding Security",
        before: "Terminated employees kept active Google accounts for days until IT noticed, creating unauthorized access risk",
        after: "Every 2 hours, terminated users detected via SAP status + date filter and suspended in Google Workspace automatically"
      },
      {
        label: "Email Uniqueness",
        before: "Duplicate emails created when new hires shared names with inactive employees, causing account conflicts and SSO failures",
        after: "Inactive-prefix normalization strips db.inactive./ prefixes during dedup, numeric suffix auto-appended, result written back to SAP"
      },
      {
        label: "Contractor Conversions",
        before: "When contractors became permanent, their c-prefix email was suspended during offboarding, breaking their now-primary account alias",
        after: "Conversion detection cross-references c-email against active SAP records, skips suspension if permanent account exists"
      }
    ],

    techStack: [
      { name: "Python", category: "backend", icon: "python" },
      { name: "Pandas", category: "backend", icon: "pandas" },
      { name: "Requests", category: "backend" },
      { name: "SAP SuccessFactors", category: "infrastructure" },
      { name: "OData API", category: "backend" },
      { name: "OAuth 2.0 SAML2", category: "infrastructure" },
      { name: "Google Workspace", category: "infrastructure", icon: "google" },
      { name: "GAMADV-XTD3", category: "backend" },
      { name: "OneLogin", category: "infrastructure" },
      { name: "Linux", category: "infrastructure", icon: "linux" },
      { name: "Cron", category: "infrastructure" },
      { name: "ProcessPoolExecutor", category: "backend" },
      { name: "JSON", category: "backend", icon: "json" },
      { name: "CSV", category: "backend" },
      { name: "HTML Email Templates", category: "frontend" },
      { name: "Bash", category: "infrastructure", icon: "gnubash" },
    ],

    integrations: [
      {
        system: "SAP SuccessFactors",
        type: "OAuth 2.0 SAML2-bearer + OData v2",
        dataFlow: "HR system of record — employee records with 14+ nested field expansions, paginated inactive-user queries, email writeback via OData upsert"
      },
      {
        system: "Google Workspace",
        type: "GAMADV-XTD3 CLI",
        dataFlow: "Account creation with 15+ fields, 9-field comparison and update, account suspension, welcome email sending, user data export"
      },
      {
        system: "OneLogin",
        type: "REST API",
        dataFlow: "SSO provisioning triggered by GWS account creation, credential fetch for welcome emails"
      },
      {
        system: "SMTP / GAM Email",
        type: "GAMADV-XTD3 sendemail",
        dataFlow: "HTML notification emails to IT support for onboarding/offboarding events, CSV summary attachments for field updates"
      }
    ],

    metrics: [
      { label: "Accounts Managed", value: "5,800+" },
      { label: "Active Employees", value: "1,400" },
      { label: "Fields Synced", value: "9" },
      { label: "Parallel Workers", value: "20" },
      { label: "Systems Integrated", value: "3" },
      { label: "Onboarding Time", value: "Minutes" },
      { label: "Offboarding Window", value: "2 Hours" },
      { label: "Cron Phases", value: "3" },
    ],

    screenshots: [
      {
        src: "/projects/identity-lifecycle/hero-identity-lifecycle.webp",
        alt: "Identity Lifecycle Automation — System Flow Visualization",
        caption: "Conceptual visualization of the three-system identity pipeline: HR badge (SAP SuccessFactors) → Workspace envelope (Google Workspace) → Security shield (OneLogin SSO), with employee silhouettes flowing through the provisioning stream."
      }
    ],

    userStory: "As an IT Admin, I want new hire accounts created automatically from SAP records so employees have Day-1 access to Google Workspace and OneLogin without manual provisioning, and terminated employees are suspended within hours.",
    description: "Production identity lifecycle automation orchestrating SAP SuccessFactors, Google Workspace, and OneLogin for 5,800+ accounts with smart email fabrication, 9-field sync, and automated offboarding.",
  },

  {
    id: 10,
    slug: "rydoo-sync",
    name: "Rydoo Sync",
    tagline: "Serverless Expense Backup & Audit Portal",
    type: "Automation",
    organization: "Amagi Media",
    category: "Automation",
    readTime: "8 min read",
    publishDate: "April 2024",
    icon: ArrowLeftRight,
    monogram: "RS",
    color: "bg-red-500",
    heroImage: "gradient-red",

    overview: "Rydoo Sync is a three-component serverless system for expense data backup, audit trail capture, and compliance verification. The Data Sync pulls expenses and receipts from the Rydoo API into date-partitioned S3 in Mumbai. The Browser Audit Scraper — a 1,800-line Playwright automation — logs into Rydoo's web UI to capture the full 10+ event audit trail that the API doesn't expose. The Audit Portal (Lambda + API Gateway) lets finance teams search any expense by reference ID, view the complete approval timeline, and preview backed-up receipts.",

    challenge: "Amagi's finance team relied on Rydoo as their expense management platform but had no independent backup of expense records, receipts, or approval audit trails. Indian data residency regulations required all financial data to remain within Indian infrastructure, yet Rydoo's servers are EU-hosted. Critically, the Rydoo API only exposed 3–4 audit events per expense (submitted, approved, controlled, exported), while the web UI showed the full 10+ event trail including policy violations, rejections, re-submissions, and controller actions. Manual exports were tedious, incomplete, and provided no searchable interface. When auditors needed proof of a specific expense's complete approval chain — with the original receipt — finance had to manually navigate Rydoo's web UI per expense, a process taking 5–10 minutes each.",

    solution: "Built a three-component system. The Data Sync runs daily at 2:00 AM IST via EventBridge, authenticating to the Rydoo API with OAuth 2.0 client credentials, fetching all exported expenses with pagination, downloading receipt files (PDF/JPG/PNG) with S3 dedup checks, and writing to date-partitioned S3 in ap-south-1 (Mumbai). The Browser Audit Scraper — a 1,800-line Playwright automation running on EC2 — logs into Rydoo's web UI, navigates to each expense page, and extracts the full 10+ event audit trail that the API doesn't expose. It features checkpoint/resume with atomic JSON writes, exponential backoff retries, auto re-login on session expiry, and browser restart every 500 expenses to prevent memory leaks. An incremental mode detects new and in-flight expenses nightly. The Audit Portal is a separate Lambda behind API Gateway serving an HTML search interface — enter an expense reference ID and get the expense detail card, complete audit timeline, and receipt preview via presigned S3 URLs.",

    features: [
      "OAuth 2.0 client credentials authentication against Rydoo API with automatic token refresh",
      "Paginated expense fetching from /v2/expenses/exported endpoint (100 records per page)",
      "Receipt file download with S3 dedup — skips already-backed-up files",
      "Date-partitioned S3 storage (expenses/year=YYYY/month=MM/) for Athena-compatible querying",
      "Incremental sync with 30-day rolling window and last_sync.json state tracking",
      "Playwright browser automation that logs into Rydoo's web UI and scrapes the full 10+ event audit trail per expense",
      "Checkpoint/resume with atomic JSON writes and backup — survives crashes and restarts mid-scrape",
      "Exponential backoff retries (5s, 15s, 30s), auto re-login on session expiry, browser restart every 500 expenses",
      "Incremental nightly scraper detects new expenses and re-scrapes in-flight ones until reaching 'reimbursed' status",
      "Web-based Audit Portal with expense search by reference ID and full detail card with audit timeline",
      "Receipt preview and download via presigned S3 URLs (1-hour expiry)",
      "SNS notifications on sync success (expense/receipt/audit counts) and failure (error details + CloudWatch link)"
    ],

    architecture: "Three components work together. (1) Data Sync: EventBridge triggers Lambda daily at 2:00 AM IST → Secrets Manager credentials → OAuth 2.0 auth → paginated expense fetch → receipt download with S3 dedup → date-partitioned S3 writes → SNS notification. State persists in sync_state/last_sync.json for incremental runs. (2) Browser Audit Scraper: runs on EC2 after the data sync, loads the expense manifest, logs into Rydoo's web UI via Playwright, navigates to each expense page by type-specific URL slug, extracts the full audit trail from the Activity panel (10+ events vs API's 3–4), and saves per-expense JSON + screenshot to S3. Checkpoint/resume ensures long scraping runs survive interruptions. Incremental mode re-scrapes in-flight expenses until reaching reimbursed status. (3) Audit Portal: separate Lambda behind API Gateway serves an HTML search UI → searches partitioned S3 expense files by reference ID → renders expense detail card + audit timeline + receipt preview via presigned URLs.",

    impact: "Finance team gained a fully independent, India-resident backup of all expense data with zero manual effort. Compliance verification time dropped from 5–10 minutes per expense (navigating Rydoo's web UI) to seconds (search by ID in the Audit Portal). The serverless architecture runs at ~$72/year — 83% cheaper than an equivalent EC2-based solution. Daily sync ensures the backup is never more than 24 hours stale. Receipt files are preserved even if deleted from Rydoo. The Athena-compatible partitioning enables SQL-based bulk analysis when auditors need aggregate reports across months.",

    keyDecisions: [
      {
        question: "Why date-partitioned S3 storage instead of a database?",
        answer: "Expense data is write-once, read-rarely — it's backed up for compliance, not queried in real-time. S3 with year=/month= partitioning is orders of magnitude cheaper than RDS, scales infinitely, and is natively Athena-queryable for ad-hoc auditor requests. The Audit Portal reads partitioned JSON files directly from S3, avoiding the cost and maintenance of a database entirely."
      },
      {
        question: "Why OAuth 2.0 client credentials flow instead of API key authentication?",
        answer: "Rydoo's API uses OAuth 2.0 exclusively for machine-to-machine access. The client credentials grant provides scoped tokens (expenses:read, users:read, fields:read, company_structure:read) with automatic expiry. Credentials are stored in AWS Secrets Manager rather than environment variables, ensuring they're encrypted at rest and rotatable without redeploying the Lambda."
      },
      {
        question: "Why a separate Lambda for the Audit Portal instead of adding routes to the sync Lambda?",
        answer: "The sync Lambda is optimized for batch processing — it runs once daily with a 15-minute timeout and high memory. The Audit Portal needs sub-second response times with a 30-second timeout and 256MB memory. Separating them allows independent scaling, IAM policies (portal only needs s3:GetObject, sync needs s3:PutObject), and deployment without risking the nightly sync."
      },
      {
        question: "Why Playwright browser scraping instead of relying on the Rydoo API for audit trails?",
        answer: "The Rydoo API only returns 3–4 audit events per expense (submitted, approved, controlled, exported), but the web UI shows the full 10+ event trail — including policy limit violations, rejections, re-submissions, auto-approvals, and controller actions. For compliance, the complete chain matters. The browser scraper logs into app.rydoo.com, navigates to each expense by type-specific URL slug, and extracts the Activity panel. Checkpoint/resume with atomic writes, auto re-login, and browser restart every 500 expenses makes it production-reliable for thousands of expenses."
      }
    ],

    beforeAfter: [
      {
        label: "Expense Backup",
        before: "No independent backup — all expense records, receipts, and audit trails lived only on Rydoo's EU-hosted servers",
        after: "Complete daily backup to S3 in Mumbai (ap-south-1) with expenses, receipts, and audit trails in date-partitioned storage"
      },
      {
        label: "Compliance Verification",
        before: "Auditors had to manually navigate Rydoo's web UI per expense — 5–10 minutes each to find approval chain and receipt",
        after: "Search by expense ID in Audit Portal, see full detail card + audit timeline + receipt preview in seconds"
      },
      {
        label: "Data Residency",
        before: "Financial data stored on Rydoo's EU infrastructure, creating regulatory exposure for Indian data residency requirements",
        after: "All data backed up to AWS Mumbai region (ap-south-1), satisfying Indian data residency regulations"
      },
      {
        label: "Receipt Preservation",
        before: "Receipts accessible only through Rydoo's streaming URLs — if deleted from Rydoo, gone forever",
        after: "Receipt files (PDF/JPG/PNG) downloaded and stored permanently in S3 with presigned URL access from Audit Portal"
      },
      {
        label: "Operational Cost",
        before: "Previous approach considered EC2-based sync running 24/7, estimated at ~$430/year for a small instance",
        after: "Serverless architecture (Lambda + S3 + EventBridge) costs ~$72/year — 83% reduction, zero server maintenance"
      }
    ],

    screenshots: [
      {
        src: "/projects/rydoo-sync/screenshot-1-landing.webp",
        alt: "Rydoo Audit Portal — Landing Page",
        caption: "The Audit Portal home page with two functions: single expense search by reference ID (XPD prefix) and bulk CSV export by date range. Built as a serverless HTML app served via Lambda + API Gateway."
      },
      {
        src: "/projects/rydoo-sync/screenshot-2-expense-detail.webp",
        alt: "Rydoo Audit Portal — Expense Detail with Audit Trail",
        caption: "Expense detail view showing the full audit trail timeline (18 events from Created → Auto-Approved → Controlled → Reported to ERP), receipt backup status with download link, and expense metadata — all retrieved from date-partitioned S3 storage in the Mumbai region."
      },
    ],

    techStack: [
      { name: "Python", category: "backend", icon: "python" },
      { name: "Boto3", category: "backend", icon: "amazonaws" },
      { name: "Requests", category: "backend" },
      { name: "Playwright", category: "backend" },
      { name: "AWS Lambda", category: "infrastructure", icon: "awslambda" },
      { name: "Amazon S3", category: "infrastructure", icon: "amazons3" },
      { name: "Amazon API Gateway", category: "infrastructure", icon: "amazonapigateway" },
      { name: "AWS Secrets Manager", category: "infrastructure", icon: "amazonaws" },
      { name: "Amazon EventBridge", category: "infrastructure", icon: "amazonaws" },
      { name: "Amazon SNS", category: "infrastructure", icon: "amazonaws" },
      { name: "Amazon EC2", category: "infrastructure", icon: "amazonec2" },
      { name: "AWS IAM", category: "infrastructure", icon: "amazonaws" },
      { name: "CloudWatch", category: "infrastructure", icon: "amazoncloudwatch" },
      { name: "OAuth 2.0", category: "backend" },
      { name: "HTML/CSS", category: "frontend", icon: "html5" },
      { name: "JSON", category: "backend", icon: "json" },
      { name: "Bash", category: "infrastructure", icon: "gnubash" },
    ],

    integrations: [
      {
        system: "Rydoo Expense Platform",
        type: "OAuth 2.0 Client Credentials + REST API",
        dataFlow: "Expense records via /v2/expenses/exported with pagination, receipt file downloads via streaming URLs with Bearer token, audit trail history embedded in expense objects"
      },
      {
        system: "Amazon S3 (ap-south-1)",
        type: "AWS SDK (Boto3)",
        dataFlow: "Date-partitioned write: expenses/year=/month=, receipts/year=/month=, audit_trail/, raw_data/, sync_state/last_sync.json — read: Audit Portal searches expense JSONs, generates presigned receipt URLs"
      },
      {
        system: "AWS Secrets Manager",
        type: "AWS SDK",
        dataFlow: "Rydoo API client_id, client_secret, and scope retrieved at Lambda cold start, cached for function lifetime"
      },
      {
        system: "Amazon SNS",
        type: "AWS SDK",
        dataFlow: "Sync completion notifications — success (expense count, receipt count, audit records) or failure (error message, CloudWatch log link)"
      }
    ],

    metrics: [
      { label: "Architecture", value: "Serverless" },
      { label: "Annual Cost", value: "~$72" },
      { label: "Cost Reduction", value: "83%" },
      { label: "Sync Schedule", value: "Daily 2AM" },
      { label: "Data Residency", value: "India (Mumbai)" },
      { label: "Python LOC", value: "5,800+" },
      { label: "Components", value: "3" },
      { label: "AWS Services", value: "8" },
    ],

    userStory: "As a Finance Manager, I want all Rydoo expense data — records, receipts, and audit trails — automatically backed up to Indian infrastructure daily, with a searchable portal where auditors can verify any expense by reference ID in seconds.",
    description: "Two-part serverless system: daily expense data backup from Rydoo API to S3 (Mumbai) with Indian data residency compliance, plus a web-based Audit Portal for instant expense verification with audit trails and receipt preview.",
  },

  // ==================== PERSONAL PROJECTS ====================
  {
    id: 14,
    slug: "dryvox",
    name: "DryVox",
    tagline: "Voice AI Operational Checkpoint for Dry Bulk Shipping",
    type: "Voice AI",
    organization: "Personal",
    category: "AI & Agents",
    liveUrl: "https://www.dryvox.com",
    readTime: "12 min read",
    publishDate: "March 2024",
    icon: Mic,
    monogram: "DV",
    color: "bg-slate-600",
    heroImage: "gradient-slate",

    overview: "DryVox is a voice-driven operational checkpoint for dry bulk shipping operations. Built for Operations Managers and Post-Fixture Leads, it catches risk, gaps, and uncertainties before irreversible actions — with confidence levels and clear audit trails. The platform combines Gemini Live native audio streaming, GPT-4 vision for Charter Party document analysis, shipping calculators (laytime, demurrage, freight, voyage estimates), and mission context RAG — all wrapped in a dark neumorphic UI deployed on AWS with Cognito authentication.",

    challenge: "In dry bulk shipping, a single miscalculated demurrage claim or overlooked Charter Party clause can cost tens of thousands of dollars. Operations teams rely on manual spreadsheets, email threads, and institutional knowledge. Junior operators lack the experience to catch discrepancies, commercial teams face post-fixture surprises, and claims teams struggle with incomplete audit trails. The 30 seconds before sending an irreversible action — a demurrage claim, a fixture recap, a laytime calculation — is where the most expensive mistakes happen.",

    solution: "Built a full-stack voice-first AI platform with a FastAPI backend (14 API route modules, 10 database models, async PostgreSQL via SQLAlchemy), a React 19 frontend with Zustand state management, and AWS Cognito for enterprise authentication. The AI layer supports three LLM providers (OpenAI, Gemini, OpenRouter) with automatic fallback, Gemini Live WebSocket proxy for real-time native audio conversations, and a domain-specific tool system including laytime calculators, demurrage estimators, port distance lookups, freight calculators, and voyage estimators. Documents are processed through OCR + multi-format parsing (PDF, DOCX, Excel, PPTX) with generated output in HTML, PDF, and Office formats via Jinja2 templates and WeasyPrint. Every AI response includes a confidence score with flagged uncertainties.",

    features: [
      "Gemini Live native audio — real-time bidirectional voice conversations with a maritime-trained AI assistant through a secure backend WebSocket proxy",
      "Confidence scoring — every AI output includes a confidence percentage with explicitly flagged uncertainties requiring human verification",
      "Laytime calculator — computes allowed/used laytime from Charter Party terms with NOR timestamps, weather working days, and exception handling",
      "Demurrage estimator — calculates demurrage/despatch amounts from laytime results with daily rate application and pro-rata computation",
      "Charter Party document analysis — OCR + GPT-4 Vision extracts clauses, dates, and rates from uploaded or photographed Charter Party documents",
      "Multi-format document generation — produces professional reports in PDF, DOCX, PPTX, and HTML using Jinja2 templates and WeasyPrint rendering",
      "Mission Context RAG — persistent document context per session allowing the AI to reference uploaded Charter Parties, fixture recaps, and voyage data across conversations",
      "Experience-level adaptation — Trainee, Junior, and Senior modes adjust AI response detail, terminology complexity, and verification requirements",
      "Live market data integration — Baltic Dry Index (BDI), bunker fuel prices, port congestion data, and freight rate benchmarks surfaced in real-time",
      "Session history with type filters — searchable conversation history filtered by Voice, Document, Image, and Calculator session types",
      "Port distance and voyage estimation — calculates steaming time, fuel consumption, and voyage costs between global ports",
      "Admin dashboard with user management — role-based access control, user analytics, and audit logging for enterprise deployments"
    ],

    architecture: "Three-tier architecture: React 19 SPA (Vite, Zustand, Framer Motion) → FastAPI async backend (14 route modules, WebSocket handlers, tool execution engine) → PostgreSQL + Redis. Authentication flows through AWS Cognito with JWT verification on every API call. The AI layer implements a provider gateway pattern supporting OpenAI (GPT-4, Whisper, TTS, Vision), Google Gemini (Live audio, function calling), and OpenRouter as fallback — selectable per-request. Voice flows through two paths: legacy OpenAI (Whisper STT → GPT-4 → TTS) and Gemini Live (native bidirectional audio WebSocket proxied through the backend to keep API keys server-side). The tool system registers domain-specific calculators (laytime, demurrage, freight, distance, voyage) that the LLM can invoke via function calling. Document processing handles PDF/DOCX/Excel/PPTX input through format-specific parsers and generates output via Jinja2 + WeasyPrint. Deployed on AWS EC2 behind CloudFront with S3 for document storage, Amplify for frontend hosting, and Cognito for identity management.",

    impact: "DryVox positions itself as the operational checkpoint for the 30 seconds before irreversible shipping actions. The confidence scoring system flags uncertainties that would otherwise go unnoticed — a 2.3-day discrepancy in time calculations, a missing NOR timestamp, an ambiguous Charter Party clause. The experience-level adaptation makes domain AI accessible to junior operators while maintaining the depth that senior brokers expect. The platform serves as both an operational tool and a training system for the next generation of shipping professionals.",

    keyDecisions: [
      {
        question: "Why Gemini Live native audio over OpenAI Whisper + TTS pipeline?",
        answer: "The legacy pipeline (Whisper STT → GPT-4 → TTS) introduced 3-5 second latency per turn — unacceptable for real-time voice conversations. Gemini Live provides native bidirectional audio streaming with sub-second latency, function calling during voice conversations, and natural interruption handling. The backend proxies the WebSocket connection to keep the Gemini API key server-side, never exposing it to the frontend."
      },
      {
        question: "Why three LLM providers (OpenAI, Gemini, OpenRouter) instead of one?",
        answer: "Each provider has different strengths: OpenAI for vision and document analysis, Gemini for real-time voice and function calling, OpenRouter for cost-effective fallback. The gateway pattern allows switching providers per-request based on task type, and automatic fallback ensures zero downtime if any single provider has an outage."
      },
      {
        question: "Why AWS Cognito over Firebase Auth or custom JWT?",
        answer: "DryVox targets enterprise shipping operations where security compliance matters. Cognito provides enterprise-grade MFA, SOC 2 compliance, integration with corporate identity providers (SAML/OIDC), and user pool management — requirements that Firebase or custom JWT would need significant custom work to match."
      },
      {
        question: "Why confidence scoring on every AI response?",
        answer: "Shipping decisions have real financial consequences — a wrong demurrage calculation can cost $50K+. Rather than pretending AI is always right, every response includes a confidence percentage and explicitly flags uncertainties (missing data, ambiguous clauses, calculation discrepancies). This 'operational checkpoint' approach builds trust with experienced operators who would otherwise distrust AI recommendations."
      },
      {
        question: "Why domain-specific tool registration over generic function calling?",
        answer: "Generic LLM function calling lacks shipping domain validation. The registered tool system (laytime, demurrage, freight, distance, voyage) includes domain-specific input validation, unit conversion (metric tons, long tons, deadweight), maritime date handling (weather working days, SHINC/SHEX), and result formatting that generic tools would get wrong. Tools are registered at startup and available to all LLM providers uniformly."
      }
    ],

    beforeAfter: [
      {
        before: "Junior operators sent demurrage claims with calculation errors, discovered weeks later",
        after: "Confidence scoring flags discrepancies and missing data before the claim is sent, with audit trail"
      },
      {
        before: "Charter Party analysis required manual reading of 20+ page legal documents",
        after: "GPT-4 Vision extracts key clauses, dates, and rates from uploaded or photographed documents in seconds"
      },
      {
        before: "Laytime calculations done in spreadsheets with manual date/time arithmetic",
        after: "Domain-specific calculator handles NOR timestamps, weather working days, SHINC/SHEX exceptions, and pro-rata computation"
      },
      {
        before: "Voice communication limited to phone calls with no AI assistance",
        after: "Gemini Live native audio enables real-time voice conversations with shipping-trained AI, including function calling during voice sessions"
      },
      {
        before: "Institutional knowledge locked in senior operators' heads",
        after: "Experience-level adaptation trains junior operators while Mission Context RAG preserves document knowledge across sessions"
      }
    ],

    screenshots: [
      {
        src: "/projects/dryvox/screenshot-1-landing.webp",
        alt: "DryVox landing page — Before you click send operational checkpoint",
        caption: "Landing page positioning DryVox as an operational checkpoint for dry bulk shipping. Shows the DryVox Review card with confidence scoring (72%) and flagged discrepancies, reinforcing the 'catch mistakes before irreversible actions' value proposition."
      },
      {
        src: "/projects/dryvox/screenshot-2-landing-features.webp",
        alt: "DryVox governance model and use cases for shipping teams",
        caption: "Governance section showing team-based value: Junior Operators (catch mistakes early), Commercial Teams (fewer post-fixture surprises), Claims Teams (cleaner audit trails), and Management (reduced key-person risk)."
      },
      {
        src: "/projects/dryvox/screenshot-3-dashboard.webp",
        alt: "DryVox dashboard with market indices, shipping news, and quick actions",
        caption: "Main dashboard with session stats, Baltic Dry Index (BDI) live chart, market indices (Panamax, Capesize, Supramax), shipping news feed, and quick actions for starting voice sessions or reviewing session history."
      },
      {
        src: "/projects/dryvox/screenshot-4-assistant.webp",
        alt: "DryVox Assistant Hub with voice, upload, downloads, and calculator tabs",
        caption: "Assistant Hub showing four capability tabs: Voice (Gemini Live real-time audio), Upload (document analysis), Downloads (generated reports), and Calculator (shipping computations). Experience level selector adapts AI responses for Trainee, Junior, or Senior operators."
      },
      {
        src: "/projects/dryvox/screenshot-5-sessions.webp",
        alt: "DryVox session history with type-based filtering",
        caption: "Session History page with searchable conversation list and type-based filters (All, Voice, Document, Image, Calculator). Each session shows duration, date, and status badges."
      },
      {
        src: "/projects/dryvox/screenshot-6-settings.webp",
        alt: "DryVox settings with profile, experience level, voice, and appearance options",
        caption: "Settings page with tabbed navigation: Profile, Experience Level, Voice & Audio configuration, Notifications, Appearance (theme customization), and Privacy & Security controls."
      }
    ],

    design: {
      philosophy: "DryVox uses a deep navy dark interface with neumorphic depth and ocean-gradient accents, designed for maritime professionals who work long hours in operations rooms. The dark theme reduces eye strain during extended sessions, while the cyan-to-purple gradient system creates a premium, technology-forward aesthetic that signals sophistication without sacrificing readability.",
      principles: [
        {
          title: "Confidence-First Information Architecture",
          description: "Every AI output surfaces a confidence percentage prominently, with explicitly flagged uncertainties highlighted in warning colors. This 'trust but verify' approach is critical in an industry where decisions have five-figure financial consequences.",
          screenshotIndex: 0,
          highlight: "Confidence bar at 72% with flagged discrepancies in the DryVox Review card"
        },
        {
          title: "Experience-Level Adaptation",
          description: "Three experience modes (Trainee, Junior, Senior) adjust the entire UI: response detail level, terminology complexity, and verification requirements. Junior mode explains shipping concepts inline; Senior mode assumes domain knowledge and gets straight to numbers.",
          screenshotIndex: 3,
          highlight: "Experience level selector with Trainee, Junior, and Senior icons in the Assistant Hub"
        },
        {
          title: "Neumorphic Depth Hierarchy",
          description: "Custom neumorphic shadows (neu-sm, neu-md, neu-lg, neu-inset) create a tactile depth hierarchy on the dark navy surface. Interactive elements feel 'pressable' while static content recedes, guiding attention through physical metaphor rather than just color.",
          screenshotIndex: 2,
          highlight: "Dashboard cards with neumorphic shadows creating raised and inset effects"
        },
        {
          title: "Real-Time Data Presence",
          description: "Live market data (BDI charts, bunker prices, port congestion) is always visible on the dashboard, not buried in settings. Shipping professionals need ambient market awareness — the dashboard serves as an information radiator.",
          screenshotIndex: 2,
          highlight: "Baltic Dry Index sparkline chart and live market indices (Panamax, Capesize, Supramax)"
        },
        {
          title: "Multi-Modal Hub Pattern",
          description: "The Assistant Hub presents four capability modes (Voice, Upload, Downloads, Calculator) as a tabbed horizontal navigation, allowing seamless switching between interaction types without losing context or leaving the page.",
          screenshotIndex: 3,
          highlight: "Four horizontal tabs: Voice (active), Upload, Downloads, Calculator"
        }
      ],
      colorPalette: [
        { name: "Navy Deep", hex: "#020617", usage: "Primary background, page canvas" },
        { name: "Navy Surface", hex: "#0a0f1c", usage: "Card backgrounds, sidebar surface" },
        { name: "Navy Elevated", hex: "#0f172a", usage: "Elevated cards, modal backgrounds" },
        { name: "Ocean Cyan", hex: "#06b6d4", usage: "Primary accent, active states, CTAs, glow effects" },
        { name: "Ocean Blue", hex: "#3b82f6", usage: "Secondary accent, info states, links" },
        { name: "Ocean Purple", hex: "#8b5cf6", usage: "Tertiary accent, session badges, gradients" },
        { name: "Signal Success", hex: "#10b981", usage: "Positive metrics, online indicators" },
        { name: "Signal Warning", hex: "#f59e0b", usage: "Flagged uncertainties, confidence warnings" },
        { name: "Signal Error", hex: "#ef4444", usage: "Critical flags, error states, discrepancy alerts" }
      ],
      componentPatterns: [
        "Neumorphic stat cards with glow hover effects — raised shadows on navy surface with animated cyan/blue/purple glow borders on hover, used across dashboard KPIs and market indices",
        "Glassmorphism panels with backdrop-blur for overlays — semi-transparent backgrounds with blur for modals, dropdowns, and floating elements, creating depth without obscuring context",
        "Live transcript feed with real-time streaming — auto-scrolling conversation panel showing voice transcription and AI responses as they stream, with timestamp markers and speaker identification",
        "Session cards with type-colored left border — color-coded left accent (cyan for voice, blue for document, purple for image, green for calculator) provides instant session type recognition in history lists",
        "Gradient CTA buttons with shimmer animation — primary actions use ocean-cyan gradient backgrounds with a 2-second shimmer animation, drawing attention without being distracting",
        "Collapsible sidebar navigation with user avatar — icon-only collapsed state maximizes workspace area, expands on hover to show full navigation labels with Framer Motion transitions"
      ]
    },

    techStack: [
      { name: "React 19", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite 6", category: "frontend", icon: "vite" },
      { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
      { name: "Framer Motion", category: "frontend", icon: "framer" },
      { name: "Zustand 5", category: "frontend" },
      { name: "React Router 7", category: "frontend", icon: "reactrouter" },
      { name: "Axios", category: "frontend", icon: "axios" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "SQLAlchemy (async)", category: "backend" },
      { name: "Pydantic v2", category: "backend", icon: "pydantic" },
      { name: "Jinja2", category: "backend", icon: "jinja" },
      { name: "WeasyPrint", category: "backend" },
      { name: "Pandas", category: "backend", icon: "pandas" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "Redis", category: "database", icon: "redis" },
      { name: "OpenAI GPT-4 / Whisper / TTS", category: "ai", icon: "openai" },
      { name: "Google Gemini Live", category: "ai", icon: "google" },
      { name: "AWS Cognito", category: "infrastructure", icon: "amazonaws" },
      { name: "AWS EC2 + CloudFront", category: "infrastructure", icon: "amazonec2" },
      { name: "AWS S3", category: "infrastructure", icon: "amazons3" },
      { name: "AWS Amplify", category: "infrastructure", icon: "awsamplify" },
      { name: "Docker", category: "infrastructure", icon: "docker" },
    ],

    integrations: [
      {
        system: "Google Gemini Live",
        type: "WebSocket Proxy",
        dataFlow: "Bidirectional native audio streaming — frontend WebSocket connects to backend, which proxies to Gemini Live API. Backend keeps API key server-side, handles tool execution during voice conversations, and generates session summaries on disconnect."
      },
      {
        system: "OpenAI (GPT-4, Whisper, TTS, Vision)",
        type: "REST API + WebSocket",
        dataFlow: "Legacy voice pipeline (Whisper STT → GPT-4 → TTS), document vision analysis (Charter Party OCR), embedding generation for RAG, and streaming chat completions with function calling for shipping calculators."
      },
      {
        system: "AWS Cognito",
        type: "OAuth 2.0 / JWT",
        dataFlow: "User registration with email verification, sign-in with JWT token issuance (ID + access tokens), automatic token refresh via Amplify SDK, password reset flows, and MFA support for enterprise deployments."
      },
      {
        system: "OpenRouter",
        type: "REST API",
        dataFlow: "Fallback LLM provider for cost-effective inference when OpenAI/Gemini are unavailable or rate-limited. Uses the same gateway interface for transparent provider switching."
      },
      {
        system: "Maritime Market APIs",
        type: "REST API",
        dataFlow: "Real-time Baltic Dry Index (BDI), sub-indices (Panamax, Capesize, Supramax), bunker fuel prices, and port congestion data surfaced on the dashboard and available to the AI assistant during conversations."
      }
    ],

    metrics: [
      { label: "API Routes", value: "14 modules" },
      { label: "DB Models", value: "10 tables" },
      { label: "LLM Providers", value: "3" },
      { label: "Shipping Calculators", value: "5" },
      { label: "Document Formats", value: "5 in, 4 out" },
      { label: "Experience Levels", value: "3" },
      { label: "Voice Latency", value: "Sub-second" },
      { label: "Auth", value: "AWS Cognito" },
    ],

    userStory: "As an Operations Manager in dry bulk shipping, I want a voice-first AI checkpoint that reviews my demurrage claims, laytime calculations, and fixture recaps before I send them — flagging discrepancies with confidence levels — so that I catch expensive mistakes in the 30 seconds before irreversible actions.",
    description: "Voice-driven operational checkpoint for dry bulk shipping: Gemini Live native audio, GPT-4 Vision document analysis, shipping calculators, confidence scoring, and experience-level adaptation — deployed on AWS with Cognito enterprise auth.",
  },

  {
    id: 15,
    slug: "nivesha",
    name: "Nivesha",
    tagline: "AI Stock Market Companion",
    type: "AI/Finance",
    organization: "Personal",
    category: "Finance & Investment",
    award: "1st Place — GenAI Buildathon (Open)",
    readTime: "8 min read",
    publishDate: "February 2024",
    icon: TrendingUp,
    monogram: "NV",
    color: "bg-emerald-600",
    heroImage: "/projects/nivesha/hero.webp",

    overview: "Nivesha is a full-stack investment intelligence platform built for Indian retail investors. It brings together real-time NSE/BSE market data, AI-powered stock research with fundamentals and technicals, portfolio tracking with XIRR calculations, goal-based investment planning with SIP recommendations, IPO tracking with grey market premiums, and personalized market news with sentiment analysis — all in a single, polished dark-mode dashboard.",

    challenge: "Indian retail investors juggle multiple apps and websites for market data, portfolio tracking, stock research, and financial planning. There's no unified platform that combines real-time Indian market indices, AI-driven stock analysis, goal-based SIP planning, and IPO research. Existing tools either lack Indian market specifics (tax rules, NSE/BSE data, INR formatting) or require expensive subscriptions for basic analytics like XIRR and diversification scoring.",

    solution: "Built a comprehensive investment platform with a FastAPI async backend serving 16 API endpoints across 18 specialized services, backed by PostgreSQL with 13 tables and Redis for market data caching. The React 19 frontend uses Zustand for state management, React Query for server state, and Recharts for interactive portfolio visualizations. Integrated yfinance and Indian Stock API for real-time market data, Zerodha Kite Connect for broker integration, and an LLM client for AI-powered stock research that covers fundamentals, technicals, peer comparison, and news sentiment analysis.",

    features: [
      "Live market dashboard with NIFTY 50, SENSEX, BANKNIFTY, NIFTY IT indices and commodity prices (Gold, Crude)",
      "Multi-portfolio management with holdings tracking, buy/sell transactions, and real-time valuations",
      "AI Research hub with stock search, market overview, trending stocks, and deep AI-powered analysis",
      "Stock detail pages with fundamental analysis, technical indicators, peer comparison, and news sentiment",
      "Goal-based financial planning with short-term and long-term goal tracking, SIP recommendations, and progress visualization",
      "IPO tracker with upcoming, current, and listed IPOs, grey market premium data, and subscription status",
      "Personalized market news feed with portfolio-relevant filtering and sentiment analysis (positive/negative/neutral)",
      "Portfolio analytics with XIRR calculation, diversification scoring, sector allocation, and benchmark comparison against NIFTY 50",
      "Watchlist management for tracking stocks of interest with real-time price updates",
      "Settings hub with profile management, broker integrations, tax reports, price alerts, and notification preferences",
      "Dark mode optimized UI with gradient accents and glassmorphism card design",
      "Celery-based background task processing for market data refresh, news aggregation, and portfolio recalculation",
    ],

    architecture: "Three-tier architecture: React 19 SPA frontend with Zustand state management and React Query for server-state synchronization, communicating via REST API to a FastAPI async backend. The backend runs 18 specialized services (ai_service, dashboard_service, portfolio_service, stock_service, news_service, ipo_service, performance_service, tax_service, alert_service, broker_service, report_service, etc.) with SQLAlchemy async ORM connecting to PostgreSQL (13 tables) for persistent storage. Redis serves dual duty as market data cache and Celery message broker for background tasks like market data refresh, news aggregation, and portfolio recalculation. External integrations include yfinance for global market data, Indian Stock API for NSE/BSE specifics, and Zerodha Kite Connect for direct broker connectivity.",

    impact: "Nivesha won 1st Place in the Open Category at Amagi's internal GenAI Buildathon, competing against teams across the organization. It consolidates 5+ separate tools (portfolio tracker, stock screener, news aggregator, SIP calculator, IPO tracker) into a single platform. Real-time market indices and portfolio valuations eliminate manual data entry. AI-powered research provides institutional-grade stock analysis in seconds. Goal-based planning with SIP recommendations makes financial planning accessible to retail investors.",

    screenshots: [
      {
        src: "/projects/nivesha/screenshot-0-landing.webp",
        caption: "Landing page with 'Track, Analyze & Grow Your Wealth' hero, 6 feature highlights (Smart Dashboard, AI-Powered Research, Portfolio Analytics, Goal-Based Investing, IPO Research Hub, Personalized News), stats bar, and login form",
        alt: "Nivesha landing page showing value proposition, feature grid, platform stats, and login form",
      },
      {
        src: "/projects/nivesha/screenshot-1-dashboard.webp",
        caption: "Dashboard with live portfolio summary (₹15.3L value, -₹1.03L P&L), real-time market indices, Market News feed with sentiment-colored articles, and quick action cards",
        alt: "Nivesha dashboard showing portfolio KPIs, live market ticker, news feed with articles, and quick actions",
      },
      {
        src: "/projects/nivesha/screenshot-2-portfolio.webp",
        caption: "Portfolio overview showing 'Long Term Growth' portfolio with ₹15.3L value, 10 holdings, -6.16% P&L, total value and P&L summary in header",
        alt: "Portfolio page showing Long Term Growth portfolio card with value, P&L, and holdings count",
      },
      {
        src: "/projects/nivesha/screenshot-3-research.webp",
        caption: "AI Research hub with stock search, live market overview indices (NIFTY 50, SENSEX, NIFTY Bank, NIFTY IT), and trending stocks (Reliance, TCS, HDFC Bank, Infosys, ITC) with monogram logos and real-time prices",
        alt: "AI Research page showing stock search, market indices, and trending stock cards with monogram logos and prices",
      },
      {
        src: "/projects/nivesha/screenshot-6-goals.webp",
        caption: "Financial Goals tracker with 4 goals totaling ₹3.75 Cr target, progress bars, SIP recommendations, and linked stock holdings per goal",
        alt: "Financial Goals page showing short-term and long-term goals with progress tracking and SIP details",
      },
      {
        src: "/projects/nivesha/screenshot-7-settings.webp",
        caption: "Settings hub with profile management, broker integrations (Zerodha), tax reports, alerts, notifications, security, and preferences",
        alt: "Settings page showing profile information, integration options, and configuration sections",
      },
    ],

    keyDecisions: [
      {
        question: "Why FastAPI with async SQLAlchemy instead of Django?",
        answer: "Financial data APIs require high concurrency — fetching prices for 50+ stocks simultaneously. FastAPI's native async support with SQLAlchemy async sessions lets us parallelize market data fetches without blocking the event loop, achieving 3-5x throughput vs synchronous Django ORM.",
      },
      {
        question: "Why Zustand over Redux for frontend state?",
        answer: "With React Query handling all server state (portfolio data, market prices, news), the remaining client state (auth, UI preferences, active filters) is minimal. Zustand's zero-boilerplate approach with TypeScript inference eliminated 80% of the state management code Redux would require.",
      },
      {
        question: "Why separate services architecture (18 services) instead of fewer fat controllers?",
        answer: "Each financial domain (portfolio, tax, performance, IPO, news) has distinct business logic, external API dependencies, and caching strategies. Isolated services let us independently tune Redis TTLs per data type — 15s for live prices, 5min for news, 24h for fundamentals — without cross-contamination.",
      },
      {
        question: "Why Celery for background tasks instead of FastAPI BackgroundTasks?",
        answer: "Market data refresh, news aggregation, and portfolio recalculation are CPU-intensive operations that shouldn't compete with API request handling. Celery with Redis broker provides dedicated worker processes, retry logic for flaky market APIs, and scheduled periodic tasks (market hours refresh every 15s).",
      },
      {
        question: "Why build custom portfolio analytics (XIRR, diversification score) instead of using a finance library?",
        answer: "Indian market specifics like STT (Securities Transaction Tax), LTCG/STCG thresholds, and INR-denominated calculations aren't well-supported by Western finance libraries. Custom implementations handle Indian fiscal year boundaries, dividend reinvestment tracking, and SEBI-compliant sector classification natively.",
      },
    ],

    beforeAfter: [
      {
        label: "Investment Workflow",
        before: "Checking 5 different apps for market data, portfolio value, stock research, IPO status, and SIP planning",
        after: "Single dashboard with live indices, portfolio valuation, AI research, IPO tracker, and goal-based planning",
      },
      {
        label: "Portfolio Analytics",
        before: "Manual XIRR calculation in Excel spreadsheets with error-prone date tracking",
        after: "Automatic XIRR computation with every transaction, benchmark comparison against NIFTY 50",
      },
      {
        label: "Market News",
        before: "Reading multiple news sources and manually filtering for portfolio-relevant stories",
        after: "Personalized news feed with sentiment analysis and automatic portfolio-stock matching",
      },
      {
        label: "Financial Planning",
        before: "No structured approach to financial goals — ad-hoc savings without SIP discipline",
        after: "Goal-based planning with progress tracking, monthly SIP recommendations, and stock-to-goal linking",
      },
      {
        label: "Stock Research",
        before: "Researching stocks across Screener, Moneycontrol, and TradingView separately",
        after: "AI-powered stock research combining fundamentals, technicals, peer comparison, and news sentiment in one view",
      },
    ],

    design: {
      philosophy: "Nivesha uses a dark-mode-first design with emerald and cyan gradient accents, creating a premium financial dashboard aesthetic. The glassmorphism card system with backdrop-blur provides visual depth without clutter, while numbered sidebar navigation (01-06) establishes clear information hierarchy. The color system is purpose-driven: emerald for positive/growth, red for losses/warnings, amber for portfolio-relevant alerts.",
      principles: [
        {
          title: "Landing Page Value Proposition",
          description: "The landing page presents a clear value hierarchy: hero headline, 6 numbered feature cards in a 2-column grid, a stats bar (500+ Stocks, NSE & BSE, Real-time, 100% Free), and the login form — all in a dark-mode split layout that communicates premium positioning.",
          screenshotIndex: 0,
          highlight: "Six numbered features (01-06) with descriptions, stats bar with platform metrics, and login form"
        },
        {
          title: "Live Market Ticker & Portfolio KPIs",
          description: "The dashboard surfaces four numbered KPI cards (Total Value, Total P&L, Total Invested, Today's Change) with color-coded indicators, plus a persistent market ticker showing live NIFTY 50, SENSEX, BANKNIFTY, NIFTY IT, USD/INR, Gold, and Crude prices.",
          screenshotIndex: 1,
          highlight: "KPI cards: ₹15,30,270 total value, ₹-1,03,451 P&L in red, live ticker with green/red percentages"
        },
        {
          title: "AI Research Hub with Trending Cards",
          description: "The AI Research page uses a search-first layout with live market overview indices in metric cards, followed by trending stock cards showing monogram logos, current prices in INR, and percentage changes with color-coded sentiment badges.",
          screenshotIndex: 3,
          highlight: "Trending stocks grid: Reliance ₹2,580.5 +0.99%, TCS ₹3,650.2 +1.25%, HDFCBANK ₹1,680.75 -0.45%"
        },
        {
          title: "Goal-Based Progress Visualization",
          description: "Financial goals use gradient progress bars with color-coded status badges (Behind in red, On Track in green). Each goal card shows saved amount vs target, remaining amount, time left, monthly SIP, linked stocks with color avatars, and a direct link to view details.",
          screenshotIndex: 4,
          highlight: "House Down Payment: ₹8.50L of ₹20.00L, 42.5% progress, Behind badge, ₹35,000 monthly SIP"
        },
        {
          title: "Settings Information Architecture",
          description: "Settings uses a two-panel layout: left sidebar with icon-labeled sections (Profile, Integrations, Tax Reports, Alerts, Notifications, Security, Preferences) and right content area showing the selected section's details, optimizing for discoverability and scan-ability.",
          screenshotIndex: 5,
          highlight: "Seven settings sections with icons, currently showing Profile with personal info and password management"
        }
      ],
      colorPalette: [
        { name: "Slate Dark", hex: "#0f172a", usage: "Primary background" },
        { name: "Card Surface", hex: "#1e293b", usage: "Card backgrounds with glassmorphism" },
        { name: "Emerald", hex: "#10b981", usage: "Primary accent, positive indicators, CTA buttons" },
        { name: "Cyan", hex: "#06b6d4", usage: "Secondary accent, gradient endpoints" },
        { name: "Coral", hex: "#f97316", usage: "Quick action highlights, warning states" },
        { name: "Purple", hex: "#8b5cf6", usage: "AI Research accents, premium features" },
        { name: "Red", hex: "#ef4444", usage: "Negative sentiment, losses, behind-schedule goals" },
        { name: "Amber", hex: "#f59e0b", usage: "Portfolio-relevant news, warning badges" },
        { name: "White/60%", hex: "#ffffff99", usage: "Secondary text, muted labels" },
      ],
      componentPatterns: [
        "Zustand stores with TypeScript inference for auth state and UI preferences — zero boilerplate",
        "React Query with custom hooks per domain (usePortfolio, useStockSearch, useMarketNews) for automatic cache invalidation",
        "Recharts-based interactive visualizations for portfolio allocation pie charts and goal progress timelines",
        "React Hook Form + Zod validation for transaction forms, goal creation, and settings updates",
        "Collapsible sidebar with numbered navigation items and active state gradients",
        "Glassmorphism card component with configurable backdrop-blur, border opacity, and hover shadow transitions",
        "Sentiment-colored news cards with portfolio-match badges and time-ago formatting",
        "Market ticker bar with live index prices, percentage changes, and commodity rates (Gold, Crude, USD/INR)",
      ],
    },

    integrations: [
      { system: "yfinance", type: "Market Data API", dataFlow: "Real-time stock prices, historical data, company financials fetched via yfinance Python library" },
      { system: "Indian Stock API", type: "Market Data API", dataFlow: "NSE/BSE specific data including indices (NIFTY 50, SENSEX), IPO listings, and Indian market metadata" },
      { system: "Zerodha Kite Connect", type: "Broker Integration", dataFlow: "Direct broker connectivity for portfolio sync, trade execution, and holdings import via Kite API" },
      { system: "LLM Client (GPT-4)", type: "AI Service", dataFlow: "Stock analysis prompts sent to LLM for fundamental analysis, technical analysis, peer comparison, and research summaries" },
      { system: "Redis + Celery", type: "Task Queue", dataFlow: "Background job processing for market data refresh (every 15s during market hours), news aggregation, and portfolio recalculation" },
      { system: "Sentry", type: "Error Monitoring", dataFlow: "Frontend and backend error tracking with performance monitoring for API latency and market data fetch reliability" },
    ],

    techStack: [
      { name: "React 19", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite 7", category: "frontend", icon: "vite" },
      { name: "Tailwind CSS", category: "frontend", icon: "tailwind" },
      { name: "Zustand", category: "frontend", icon: "zustand" },
      { name: "React Query", category: "frontend", icon: "react" },
      { name: "Recharts", category: "frontend", icon: "recharts" },
      { name: "React Hook Form", category: "frontend", icon: "react" },
      { name: "Zod", category: "frontend", icon: "zod" },
      { name: "React Markdown", category: "frontend", icon: "react" },
      { name: "Lucide Icons", category: "frontend", icon: "lucide" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "SQLAlchemy Async", category: "backend", icon: "sqlalchemy" },
      { name: "Alembic", category: "backend", icon: "alembic" },
      { name: "Celery", category: "backend", icon: "celery" },
      { name: "Python 3.12", category: "backend", icon: "python" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "Redis", category: "database", icon: "redis" },
      { name: "yfinance", category: "backend", icon: "python" },
      { name: "Zerodha Kite", category: "backend", icon: "zerodha" },
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
      { name: "Sentry", category: "infrastructure", icon: "sentry" },
      { name: "Docker", category: "infrastructure", icon: "docker" },
    ],

    metrics: [
      { label: "API Endpoints", value: "16" },
      { label: "Backend Services", value: "18" },
      { label: "DB Tables", value: "13" },
      { label: "Frontend Pages", value: "9" },
      { label: "Market", value: "NSE/BSE" },
      { label: "LLM", value: "GPT-4" },
      { label: "Data Refresh", value: "15s" },
      { label: "Status", value: "Live" },
    ],

    userStory: "As an Indian retail investor managing ₹10-50L across multiple stocks and mutual funds, I want a single dashboard where I can see my live portfolio value with XIRR, research stocks with AI-powered analysis covering fundamentals and technicals, set financial goals with SIP recommendations, track upcoming IPOs, and read portfolio-relevant news — so I can make informed investment decisions without switching between five different apps.",
    description: "Full-stack investment intelligence platform for Indian retail investors — real-time NSE/BSE market data, AI-powered stock research, portfolio analytics with XIRR, goal-based SIP planning, IPO tracking, and personalized news with sentiment analysis. Built with React 19, FastAPI, PostgreSQL, Redis, Celery, and GPT-4.",
  },

  {
    id: 11,
    slug: "zapgap-sidekick",
    name: "ZapGap",
    tagline: "AI Agents for Cloud Ops",
    type: "AI Agents",
    organization: "Personal",
    category: "AI & Agents",
    award: "1st Place — GenAI Buildathon (Agents)",
    readTime: "10 min read",
    publishDate: "September 2024",
    icon: Zap,
    monogram: "ZG",
    color: "bg-rose-500",
    heroImage: "gradient-rose",

    overview: "ZapGap is an AI-powered cloud operations platform that deploys autonomous agents for SRE auto-remediation, DevOps self-service provisioning, cloud cost optimization, and compliance enforcement. The platform features a Central Orchestrator, a Context Graph for infrastructure topology awareness, and deterministic execution paths — no hallucinations. The landing page showcases 4 use cases with interactive problem → solution → impact breakdowns and a simulated terminal demonstrating real-time infrastructure scanning.",

    challenge: "SRE teams were constantly firefighting — late-night alerts for memory leaks, CPU spikes, and service crashes meant manual remediation at 2 AM. DevOps teams faced environment provisioning bottlenecks where spinning up a test environment required an Ops ticket and hours of waiting. Leadership struggled with cloud cost sprawl: idle VMs, forgotten dev machines, and obsolete snapshots bleeding budget. IT compliance teams manually audited encryption, approved images, and regulatory standards. Every team needed AI agents that could detect issues, remediate automatically, and provide self-service operations — without sacrificing safety or auditability.",

    solution: "Designed and built a complete agentic AI platform with four distinct use-case agents orchestrated by a Central Orchestrator. SRE agents monitor for early warning signs (memory leaks, CPU spikes) and auto-remediate via deterministic code paths — safely restarting services, clearing caches, and notifying Slack within seconds. DevOps agents power a conversational self-service portal where developers request resources in plain English ('Create QA environment for payment service'), ZapGap verifies against policy, provisions standardized environments, and routes production requests for human approval. Cost optimization agents continuously scan for low-hanging fruit — <5% CPU instances, obsolete snapshots, weekend dev machines — and execute cleanup with full logging. Compliance agents enforce policy rules by scanning for deviations (unencrypted S3 buckets, unapproved AMIs) and auto-correcting per configured policy. All agents use 100% code-based execution with Open Policy Agent enforcement and complete audit trails.",

    features: [
      "Central Orchestrator that interprets requests, consults the Context Graph, and routes to specialized agents",
      "Auto-remediation agents for SRE incidents — memory leak detection, service restart, cache cleanup (MTTR <1 min)",
      "Conversational self-service portal — developers request resources in plain English via Slack, Teams, or web chat",
      "AI approval routing — standard requests auto-provisioned, production changes routed for human approval",
      "Cost optimization agents that identify idle VMs, obsolete snapshots, and weekend dev machines for cleanup",
      "Compliance enforcement agents with continuous scanning and auto-correction (e.g., encrypt unencrypted S3 buckets)",
      "Context Graph maintaining real-time understanding of infrastructure topology and policies",
      "Deterministic execution — 100% code-based workflows, no LLM hallucinations in production actions",
      "Policy enforcement via Open Policy Agent (OPA) before any infrastructure mutation",
      "Complete audit logging for every agent action with notification to Slack/Teams",
      "Multi-cloud support with modular connector system for AWS, Azure, GCP",
      "Interactive terminal simulation on landing page demonstrating infrastructure scanning in real-time"
    ],

    architecture: "The platform is built around a Central Orchestrator — the AI brain that interprets incoming requests, consults the Context Graph (a real-time map of infrastructure topology and policies), and dispatches work to specialized agents. Each agent follows deterministic execution paths: monitoring alerts trigger SRE agents, chat messages trigger DevOps self-service agents, scheduled scans trigger cost and compliance agents. Before any infrastructure mutation, Open Policy Agent validates the action against configured policies. All actions are logged to an immutable audit trail and notifications are sent via integration connectors (Slack, Teams, PagerDuty). The architecture is multi-cloud by design with a modular connector layer supporting AWS, Azure, and GCP.",

    impact: "The architecture is designed to deliver projected MTTR under 1 minute for known incident patterns, based on deterministic code path benchmarks — eliminating 2 AM pages by auto-remediating memory leaks, service restarts, and cache overflows within seconds. DevOps provisioning is estimated to drop from days (Ops ticket queue) to minutes through conversational self-service. Cost optimization agents target an estimated 25%+ in cloud savings by detecting idle VMs, obsolete snapshots, and weekend dev machines. The platform's self-service model is projected to reduce L1 ticket volume by ~40%. Compliance agents aim for near-zero security drift through continuous scanning and auto-correction. (Note: metrics are architectural projections based on design benchmarks; ZapGap is currently in prototype stage.)",

    keyDecisions: [
      {
        question: "Why deterministic code paths instead of letting LLMs execute infrastructure commands?",
        answer: "LLMs can hallucinate — a hallucinated kubectl delete or terraform destroy could cause catastrophic outages. ZapGap agents follow pre-defined, tested code paths for every remediation action. The LLM interprets intent and routes to the correct workflow, but never generates or executes arbitrary infrastructure commands. This gives teams the convenience of AI with the safety of code-reviewed runbooks."
      },
      {
        question: "Why a Central Orchestrator pattern instead of independent agent swarms?",
        answer: "Independent agents risk conflicting actions — one agent scaling up while another optimizes costs by scaling down. The Central Orchestrator maintains a unified Context Graph of infrastructure state, prevents conflicting operations, and ensures proper sequencing. It also provides a single audit point for all agent activity, critical for compliance."
      },
      {
        question: "Why Open Policy Agent (OPA) for policy enforcement?",
        answer: "OPA is the CNCF standard for policy-as-code, already adopted by Kubernetes admission controllers, Terraform, and service meshes. Using OPA means ZapGap policies are portable — the same Rego rules that govern agent actions can be reused in CI/CD pipelines and cluster admission. It also provides declarative policy logic separate from agent code, making policy changes auditable and reviewable."
      },
      {
        question: "Why Space Grotesk font and dark glassmorphism for the landing page?",
        answer: "The target audience is SRE/DevOps engineers who live in dark terminals and dashboards. Space Grotesk's geometric precision and the dark glassmorphism aesthetic create instant familiarity — the site feels like a tool they'd actually use, not a marketing page selling to them. The terminal simulation on the hero section reinforces this by showing ZapGap in an environment engineers recognize."
      }
    ],

    beforeAfter: [
      {
        label: "Incident Response",
        before: "On-call engineer woken at 2 AM by PagerDuty, SSHes into server, diagnoses memory leak, manually restarts service — 30 minutes MTTR",
        after: "ZapGap agent detects memory anomaly, auto-restarts service, clears caches, notifies Slack — MTTR under 1 minute, engineer sleeps through"
      },
      {
        label: "Environment Provisioning",
        before: "Developer submits Ops ticket 'Need QA env for payment service', waits hours/days in queue, platform team manually provisions",
        after: "Developer messages ZapGap: 'Create QA env for payment service' — agent verifies policy, provisions standardized environment in minutes"
      },
      {
        label: "Cloud Cost Management",
        before: "Finance flags rising AWS bill, engineering manually audits instances looking for waste, one-time cleanup effort that drifts within weeks",
        after: "Cost agent continuously scans for idle VMs, obsolete snapshots, weekend dev machines — auto-cleans with logging, 25%+ savings sustained"
      },
      {
        label: "Compliance Posture",
        before: "Quarterly manual audit of encryption, approved images, and security groups — deviations discovered weeks after introduction",
        after: "Compliance agent continuously scans infrastructure, auto-encrypts unencrypted S3 buckets, flags unapproved AMIs — near-zero incidents"
      },
      {
        label: "Ops Ticket Volume",
        before: "Platform team drowning in repetitive requests: env setup, access grants, config changes — pulled away from strategic work",
        after: "Common requests handled by AI self-service portal, 40% ticket reduction, platform team focuses on architecture and reliability"
      }
    ],

    screenshots: [
      {
        src: "/projects/zapgap-sidekick/screenshot-1-hero.webp",
        alt: "ZapGap — Hero with Terminal Simulation",
        caption: "Landing page hero with animated gradient title, rotating use-case text ('AI Agents for Incident Resolution'), and a live terminal simulation showing infrastructure scanning — detecting gaps and generating remediation plans in real-time."
      },
      {
        src: "/projects/zapgap-sidekick/screenshot-2-platform.webp",
        alt: "ZapGap — Platform Architecture",
        caption: "Platform architecture overview showing the Central Orchestrator at the core, connected to six capabilities: Agent-Based Architecture, Context Graph, Multi-Cloud Design, Enterprise Security, Observability, and Continuous Learning."
      },
      {
        src: "/projects/zapgap-sidekick/screenshot-3-features.webp",
        alt: "ZapGap — Features with ChatOps Expanded",
        caption: "Interactive feature accordion with ChatOps expanded — showing Slack/Teams integration for conversational infrastructure management. Each feature card reveals detailed descriptions on click."
      },
      {
        src: "/projects/zapgap-sidekick/screenshot-4-usecases.webp",
        alt: "ZapGap — SRE Use Case",
        caption: "SRE use case breakdown: Problem (2 AM memory leak alerts), ZapGap Solution (auto-remediation workflow), and Impact (MTTR dropped from 30 min to <1 min) — with tabbed navigation between SRE, DevOps, Leadership, and IT personas."
      },
      {
        src: "/projects/zapgap-sidekick/screenshot-5-usecases-devops.webp",
        alt: "ZapGap — DevOps Use Case",
        caption: "DevOps use case: developers request environments via AI self-service portal instead of Ops tickets, with policy verification and automatic approval routing — 40% reduction in ticket workload."
      }
    ],

    design: {
      philosophy: "ZapGap was designed for engineers who live in dark terminals and monitoring dashboards. The dark glassmorphism aesthetic with cyan-to-purple gradients creates instant familiarity — it feels like a tool, not a marketing page. The interactive terminal simulation on the hero section bridges the gap between product pitch and product experience.",
      principles: [
        {
          title: "Terminal-Native Aesthetic",
          description: "The hero features a simulated terminal with monospace output, green checkmarks, and amber warnings — the same visual language SREs see in their daily tools. This builds immediate credibility with the target audience.",
          screenshotIndex: 0,
          highlight: "Terminal simulation with infrastructure scan output and blinking cursor"
        },
        {
          title: "Architecture-First Storytelling",
          description: "Rather than listing features abstractly, the Platform section shows the actual system architecture — Central Orchestrator connected to six capability modules. Engineers evaluate tools by understanding how they work, not what they claim.",
          screenshotIndex: 1,
          highlight: "Central Orchestrator hub with radiating capability cards"
        },
        {
          title: "Progressive Disclosure",
          description: "Features use collapsible accordion cards — title and icon visible by default, detailed descriptions revealed on click. This prevents information overload while letting curious engineers dive deep.",
          screenshotIndex: 2,
          highlight: "ChatOps card expanded showing Slack/Teams integration details"
        },
        {
          title: "Problem → Solution → Impact Framework",
          description: "Each use case follows a three-column structure with color-coded cards: red (Problem), blue (ZapGap Solution), green (Impact with large metric). This makes the value proposition scannable in seconds.",
          screenshotIndex: 3,
          highlight: "Three-column layout with MTTR metric displayed prominently in green"
        }
      ],
      colorPalette: [
        { name: "Void Black", hex: "#000000", usage: "Primary background — mimics terminal/IDE dark theme" },
        { name: "Electric Cyan", hex: "#3ABCF7", usage: "Primary accent, gradient start, links, active states" },
        { name: "Nebula Purple", hex: "#8B2FF8", usage: "Gradient end, secondary accent, brand identity" },
        { name: "Royal Blue", hex: "#5B7CF7", usage: "Gradient midpoint, button backgrounds, hover states" },
        { name: "Ghost White", hex: "#F8FAFC", usage: "Primary text on dark surfaces" },
        { name: "Slate Gray", hex: "#94A3B8", usage: "Secondary text, descriptions, muted content" },
        { name: "Impact Green", hex: "#22C55E", usage: "Success states, impact metrics, positive outcomes" }
      ],
      componentPatterns: [
        "Glassmorphism cards — semi-transparent backdrop blur with subtle borders, used throughout for platform components and feature cards",
        "Gradient text effects — bg-clip-text with animated cyan→blue→purple gradients for headings and brand elements",
        "Interactive tab selector — pill-shaped buttons with gradient fill on active state for use case persona switching",
        "Animated terminal — monospace output with typewriter effect, status icons (✓, ⚠, ●), and blinking cursor for hero engagement",
        "Collapsible accordion — chevron rotation on expand, smooth height animation, gradient icon backgrounds per feature",
        "Neural network background — SVG lines with animated stroke-dasharray and pulsing connection nodes creating subtle depth"
      ]
    },

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
      { name: "Framer Motion", category: "frontend" },
      { name: "shadcn/ui", category: "frontend" },
      { name: "Radix UI", category: "frontend", icon: "radixui" },
      { name: "React Router", category: "frontend", icon: "reactrouter" },
      { name: "React Hook Form", category: "frontend" },
      { name: "Zod", category: "frontend", icon: "zod" },
      { name: "Lucide Icons", category: "frontend" },
      { name: "Recharts", category: "frontend" },
      { name: "Space Grotesk", category: "frontend", icon: "googlefonts" },
      { name: "Netlify", category: "infrastructure", icon: "netlify" },
      { name: "ESLint", category: "infrastructure", icon: "eslint" },
      { name: "PostCSS", category: "frontend", icon: "postcss" },
    ],

    integrations: [
      {
        system: "Slack / Microsoft Teams",
        type: "ChatOps Integration",
        dataFlow: "Conversational interface for infrastructure requests — developers message ZapGap in natural language, agents respond with actions and confirmations"
      },
      {
        system: "AWS / Azure / GCP",
        type: "Multi-Cloud Connectors",
        dataFlow: "Modular connector system for infrastructure scanning, resource provisioning, cost analysis, and compliance enforcement across cloud providers"
      },
      {
        system: "Open Policy Agent (OPA)",
        type: "Policy Engine",
        dataFlow: "Rego policy rules validated before any infrastructure mutation — portable across CI/CD pipelines, Kubernetes admission, and agent actions"
      },
      {
        system: "PagerDuty / Monitoring",
        type: "Alert Integration",
        dataFlow: "Monitoring alerts trigger SRE auto-remediation agents — memory leaks, CPU spikes, and service crashes handled automatically"
      }
    ],

    metrics: [
      { label: "MTTR", value: "<1 min" },
      { label: "Ticket Reduction", value: "40%" },
      { label: "Cost Savings", value: "25%" },
      { label: "Use Cases", value: "4" },
      { label: "Platform Components", value: "6" },
      { label: "UI Components", value: "50+" },
      { label: "Animations", value: "15+" },
      { label: "Status", value: "Prototype" },
    ],

    userStory: "As an SRE engineer, I want AI agents to automatically detect memory leaks and restart services at 2 AM so I can sleep through the night, while still getting a Slack notification of exactly what happened and why.",
    description: "AI-powered cloud operations platform with autonomous agents for SRE auto-remediation, DevOps self-service, cloud cost optimization, and compliance enforcement — featuring a dark glassmorphism landing page with interactive terminal simulation.",
  },

  {
    id: 13,
    slug: "sahayak",
    name: "Sahayak",
    tagline: "AI Teaching Assistant for Rural India",
    type: "Education",
    organization: "Personal",
    category: "Education",
    readTime: "9 min read",
    publishDate: "July 2024",
    icon: BookOpen,
    monogram: "SH",
    color: "bg-green-500",
    heroImage: "gradient-green",

    overview: "Sahayak is an AI-powered teaching assistant built for rural Indian teachers managing multi-grade classrooms. It combines NCERT curriculum mapping, AI-driven lesson preparation, a conversational teaching assistant backed by a Cloud Run agentic backend, and 5-language i18n support (English, Hindi, Tamil, Telugu, Kannada) — all in a React SPA with Firebase authentication.",

    challenge: "Teachers in rural India often manage classrooms with students spanning grades 3-12 simultaneously. They lack access to grade-specific NCERT curriculum plans, have limited time to prepare differentiated lessons, and language barriers prevent many from using English-only edtech platforms. Existing solutions assume single-grade classrooms and provide no AI-assisted lesson planning or concept explanation.",

    solution: "Built a full-stack React application with Firebase Auth (Google + email/password), a Context API state management layer, and i18next for 5 Indian languages with locale-specific Noto Sans fonts. The platform offers four core tools: NCERT-aligned curriculum generation with monthly teaching plans, an interactive concept learning module, a lesson preparation engine with grade/subject/topic selection generating 45-minute structured lesson plans, and a floating AI teaching assistant connected to a Cloud Run agentic backend for multi-turn conversational support.",

    features: [
      "Google OAuth and email/password authentication via Firebase",
      "Multi-grade classroom support with per-teacher grade selection",
      "NCERT curriculum generation with semester-based monthly teaching plans",
      "Custom curriculum builder for non-standard topic sequences",
      "Interactive concept learning module with guided teaching methodology",
      "Lesson preparation engine generating 45-minute structured plans with objectives, activities, and assessments",
      "Three-level assessment questions (Beginner, Intermediate, Advanced) per lesson",
      "Floating AI teaching assistant with session-persistent multi-turn conversations",
      "5-language UI support (English, Hindi, Tamil, Telugu, Kannada) with browser language detection",
      "NCERT textbook download links (English and Hindi editions) per grade",
      "Text-to-speech support via Web Speech API for accessibility",
      "Print-friendly lesson plan and curriculum output"
    ],

    architecture: "React 18 SPA with Create React App, using Context API (AuthContext + AppContext with useReducer) for global state. Firebase handles authentication and user profiles. The i18next framework with browser language detection provides seamless 5-language switching with locale-specific Noto Sans font families. The AI assistant communicates via Axios to a Cloud Run agentic backend (POST /chat with user_id, session_id, query), maintaining conversation context across sessions. Curriculum generation uses a local constants-driven engine mapping NCERT subjects and topics to grades 1-12, distributing them across a 12-month academic calendar (April-March). Framer Motion provides UI animations, Headless UI delivers accessible modal patterns, and Tailwind CSS handles all styling with a custom orange/cyan color palette.",

    impact: "Enabled rural teachers to generate complete NCERT-aligned teaching plans in minutes instead of hours. The multi-language interface removed the English-only barrier for teachers in southern and northern India. The AI assistant provided on-demand teaching methodology guidance, particularly valuable for teachers handling 3+ grade levels simultaneously.",

    keyDecisions: [
      {
        question: "Why Firebase Auth over custom JWT?",
        answer: "Google Sign-In is widely recognized even in rural India (most teachers have Android phones with Google accounts). Firebase Auth provides production-grade security with zero backend code, and the free tier covers the target user base."
      },
      {
        question: "Why i18next with browser language detection?",
        answer: "Teachers often don't know how to change language settings manually. Browser language detection (from their Android Chrome locale) auto-selects Hindi, Tamil, Telugu, or Kannada on first visit, with manual override saved to localStorage for persistence."
      },
      {
        question: "Why a Cloud Run agentic backend over embedded LLM calls?",
        answer: "Separating the AI backend (hosted on Google Cloud Run) from the React frontend allows independent scaling, model swapping, and prompt engineering without frontend redeployment. The session-based API design maintains conversation context server-side."
      },
      {
        question: "Why constants-driven NCERT mapping over API fetches?",
        answer: "NCERT curriculum changes infrequently (once every few years). Embedding the grade-to-subject-to-topic mapping in local constants eliminates API latency and works offline — critical for teachers with unreliable internet in rural areas."
      },
      {
        question: "Why add Gemini Voice for audio interaction?",
        answer: "Many rural teachers are more comfortable speaking than typing. Integrating Gemini's voice capabilities provides a natural speech interface for asking teaching questions, making the AI assistant accessible even to teachers with limited keyboard proficiency."
      }
    ],

    beforeAfter: [
      {
        before: "Teachers spent hours manually mapping NCERT textbooks to monthly plans",
        after: "One-click generation of 12-month teaching plans aligned to NCERT curriculum"
      },
      {
        before: "English-only edtech platforms excluded non-English-speaking teachers",
        after: "Full UI in Hindi, Tamil, Telugu, and Kannada with auto-detection from browser locale"
      },
      {
        before: "No AI support for multi-grade classroom management strategies",
        after: "Conversational AI assistant providing real-time teaching methodology guidance"
      },
      {
        before: "Lesson preparation required searching multiple textbooks and guides",
        after: "Structured 45-minute lesson plans with objectives, activities, and 3-level assessments generated from grade/subject/topic selection"
      }
    ],

    screenshots: [
      {
        src: "/projects/sahayak/screenshot-3-dashboard.webp",
        alt: "Sahayak teacher dashboard showing grade badges and four teaching tools",
        caption: "Teacher dashboard with grade badges (3, 4, 5), four core teaching tools, language selector, and teaching profile summary"
      },
      {
        src: "/projects/sahayak/screenshot-4-curriculum.webp",
        alt: "Sahayak curriculum builder with NCERT and custom options",
        caption: "Curriculum builder offering NCERT-aligned generation with monthly plans or custom curriculum creation for flexible teaching sequences"
      },
      {
        src: "/projects/sahayak/screenshot-5-learn.webp",
        alt: "Sahayak learning concepts modal with guided teaching methodology",
        caption: "Interactive Learning Concepts module where teachers type a topic and receive guided teaching methodology explanations"
      },
      {
        src: "/projects/sahayak/screenshot-6-prepare.webp",
        alt: "Sahayak lesson preparation with grade, subject, and topic selection",
        caption: "Lesson preparation engine with cascading grade, subject, and topic dropdowns that generate structured 45-minute lesson plans"
      },
      {
        src: "/projects/sahayak/screenshot-7-ai-chat.webp",
        alt: "Sahayak AI teaching assistant chat interface",
        caption: "Conversational AI teaching assistant powered by Gemini, helping teachers with curriculum questions, classroom strategies, and lesson planning in natural language"
      }
    ],

    design: {
      philosophy: "Designed for simplicity and accessibility — teachers in rural India may have limited tech experience, so the UI uses large touch targets, clear visual hierarchy, and familiar card-based navigation. The warm orange and sky-blue color palette creates an inviting, non-intimidating atmosphere.",
      principles: [
        {
          title: "Respectful Address",
          description: "The UI addresses users as 'Respected Teacher' throughout, reflecting Indian cultural norms and building trust with the platform.",
          screenshotIndex: 0
        },
        {
          title: "Card-Based Navigation",
          description: "Four large cards with emojis and clear labels serve as the primary navigation, reducing cognitive load for users who may not be comfortable with sidebar menus.",
          screenshotIndex: 0
        },
        {
          title: "Modal-First Workflows",
          description: "Learning and lesson preparation open as focused modal overlays, preventing navigation confusion and keeping the teacher's context visible in the background.",
          screenshotIndex: 2
        },
        {
          title: "Language Accessibility",
          description: "Language dropdown in the top-right corner with locale-specific Noto Sans fonts ensures proper rendering of Devanagari, Tamil, Telugu, and Kannada scripts.",
          screenshotIndex: 0
        }
      ],
      colorPalette: [
        { name: "Primary Orange", hex: "#f59332", usage: "Brand accent, buttons, active states" },
        { name: "Primary Deep", hex: "#e35d05", usage: "Hover states, emphasis elements" },
        { name: "Secondary Cyan", hex: "#0ea5e9", usage: "Links, secondary actions, badges" },
        { name: "Action Blue", hex: "#2563eb", usage: "Primary CTA buttons, navigation highlights" },
        { name: "Surface White", hex: "#ffffff", usage: "Card backgrounds, content areas" },
        { name: "Background Gray", hex: "#f9fafb", usage: "Page background, subtle separation" },
        { name: "Text Dark", hex: "#111827", usage: "Headings and primary text" }
      ],
      componentPatterns: [
        "Floating AI button — fixed bottom-right circle that expands into a chat panel, always accessible without leaving the current context",
        "Gradient modal headers — Learning (purple-to-blue) and Prepare (green-to-blue) modals use distinct gradient headers for visual identity per feature",
        "Grade badge pills — rounded blue pill badges showing assigned grades (Grade 3, Grade 4, Grade 5) provide instant context about the teacher's classroom",
        "Cascading dropdowns — Grade > Subject > Topic select pattern in lesson preparation, where each selection filters the next dropdown's options"
      ]
    },

    techStack: [
      { name: "React 18", category: "frontend", icon: "react" },
      { name: "JavaScript", category: "frontend", icon: "javascript" },
      { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
      { name: "Framer Motion", category: "frontend", icon: "framer" },
      { name: "Headless UI", category: "frontend", icon: "headlessui" },
      { name: "React Router", category: "frontend", icon: "reactrouter" },
      { name: "i18next", category: "frontend", icon: "i18next" },
      { name: "Axios", category: "frontend", icon: "axios" },
      { name: "Firebase Auth", category: "backend", icon: "firebase" },
      { name: "Google Cloud Run", category: "infrastructure", icon: "googlecloud" },
      { name: "Create React App", category: "infrastructure", icon: "createreactapp" },
      { name: "PostCSS", category: "frontend", icon: "postcss" },
      { name: "Web Speech API", category: "frontend" },
    ],

    integrations: [
      {
        system: "Google Firebase",
        type: "OAuth 2.0 + SDK",
        dataFlow: "Google Sign-In and email/password authentication, onAuthStateChanged session management, user profile storage with teaching grades, school, and district"
      },
      {
        system: "Google Cloud Run (Agentic AI)",
        type: "REST API",
        dataFlow: "POST /chat with user_id, session_id, and query — server-side conversation context for multi-turn teaching assistance with fallback mock responses"
      },
      {
        system: "Gemini Voice",
        type: "Voice API",
        dataFlow: "Speech-to-text and text-to-speech for voice-first interaction — teachers speak questions and hear AI responses in their native language"
      },
      {
        system: "NCERT Curriculum (RAG)",
        type: "Local Knowledge Base",
        dataFlow: "Constants-driven mapping of grades 1-12 to NCERT subjects and topics, feeding context into the agentic backend for curriculum-aware AI responses"
      }
    ],

    metrics: [
      { label: "Languages", value: "5" },
      { label: "Grades Supported", value: "1-12" },
      { label: "Lesson Plan Duration", value: "45 min" },
      { label: "Assessment Levels", value: "3" },
      { label: "i18n Translations", value: "5 locales" },
      { label: "Auth Methods", value: "2" },
      { label: "Teaching Tools", value: "4" },
      { label: "Components", value: "15+" },
    ],

    userStory: "As a rural Indian teacher managing grades 3, 4, and 5 in one classroom, I want an AI teaching assistant in my native language that generates NCERT-aligned lesson plans and helps me learn how to teach concepts effectively, so I can provide quality education despite limited resources.",
    description: "AI-powered multi-grade teaching assistant for rural India: NCERT curriculum mapping, lesson preparation, conversational AI tutoring, and 5-language support — built on React, Firebase, and Google Cloud Run.",
  },

  {
    id: 12,
    slug: "cost-savvy-chat",
    name: "Cost Savvy Chat",
    tagline: "Cloud Cost Intelligence",
    type: "AI/FinOps",
    organization: "Personal",
    category: "Finance & Investment",
    readTime: "7 min read",
    publishDate: "August 2024",
    icon: MessageSquare,
    monogram: "CS",
    color: "bg-sky-500",
    heroImage: "/projects/cost-savvy-chat/hero.webp",

    overview: "Cost Savvy Chat is a full-stack AI-powered cloud bill analysis platform. Users upload AWS invoice PDFs via drag-and-drop, GPT-4o-mini extracts service-level cost data into structured JSON, and a context-aware AI chatbot answers natural language questions about the parsed bill — all within a glassmorphic tab-based interface backed by Supabase for auth and storage, with Supabase Edge Functions handling AI inference.",

    challenge: "Cloud bills are dense, multi-page PDFs with cryptic service names and nested line items. Engineering leaders need answers like 'Why did our S3 costs spike?' or 'Which EC2 instances are over-provisioned?' but lack time to manually analyze 50-page invoices. Traditional FinOps tools like CloudHealth or Spot.io require onboarding, training, and enterprise contracts. What teams actually want is to upload a PDF and ask questions in plain English.",

    solution: "Built a four-tab SPA (Upload → Dashboard → Chat → Settings) with a serverless AI backend. The Upload tab accepts PDF invoices via drag-and-drop, converts them to base64, and sends them to a Supabase Edge Function that calls OpenAI GPT-4o-mini with a structured extraction prompt (temperature 0.1 for deterministic parsing). The extracted JSON — total cost, per-service costs with month-over-month change, billing period, and AI-generated recommendations — is stored in Supabase PostgreSQL. The Dashboard tab renders service breakdown cards with cost-proportional progress bars and trending indicators. The Chat tab injects the parsed bill data as context into GPT-4o-mini (temperature 0.7) so users can ask questions like 'What's my biggest cost driver?' and get answers grounded in their actual invoice. Supabase Auth with Row Level Security ensures each user only sees their own data.",

    features: [
      "Drag-and-drop PDF upload with file validation (PDF only, 10MB max) and base64 conversion",
      "GPT-4o-mini invoice parsing — extracts total cost, per-service breakdown, billing period, and cost change into structured JSON",
      "Service breakdown dashboard with cost-proportional progress bars and month-over-month trending indicators",
      "Context-aware AI chatbot — bill data injected as system context so responses are grounded in actual invoice",
      "AI-generated cost optimization recommendations (Reserved Instances, storage class optimization, rightsizing)",
      "Supabase Auth integration with email/password signup and Row Level Security for data isolation",
      "Alternative Groq LLM backend (Llama 3 8B) for cost-effective inference",
      "Graceful fallback to realistic mock data when AI parsing fails",
      "Dark mode support with CSS variable theming and glassmorphic card design",
      "Tab-based single-page navigation (Upload → Dashboard → Chat → Settings) with no page loads",
      "Keyboard support in chat (Enter to send) with auto-scroll and typing indicators",
      "Settings panel showing API configuration status, security policies, and usage instructions"
    ],

    architecture: "React SPA with tab-based navigation communicates with Supabase Edge Functions (Deno runtime) for AI processing. PDF upload flow: client base64-encodes the file → Edge Function parse-aws-invoice receives it → sends to OpenAI GPT-4o-mini with structured extraction prompt → returns JSON (totalCost, services[], recommendations[], billingPeriod, costChange) → stored in Supabase PostgreSQL aws_invoices table. Chat flow: client sends user message + bill context → Edge Function chat-aws-assistant builds system prompt with user's cost data → GPT-4o-mini generates contextual response → streamed back to client. Authentication via Supabase Auth with Row Level Security ensuring per-user data isolation.",

    impact: "Democratized cloud cost analysis — anyone can upload a bill and get instant, actionable insights without FinOps training or enterprise tool licenses. The conversational interface surfaces optimization opportunities (Reserved Instances, storage class changes, rightsizing) that typically require specialized knowledge. Early testing identified 15-30% potential cost savings from AI recommendations. The dual-model architecture (OpenAI for accuracy, Groq for cost) demonstrates production-ready AI inference patterns.",

    keyDecisions: [
      {
        question: "Why GPT-4o-mini instead of GPT-4 for invoice parsing?",
        answer: "Invoice extraction is a structured task — converting PDF text into a known JSON schema with fields like totalCost, services[{name, cost, change}], and recommendations[]. GPT-4o-mini handles this reliably at 0.1 temperature with significantly lower cost and latency than GPT-4. The 50KB input limit prevents token overflow on large invoices. For the chat interface, the same model at 0.7 temperature provides more creative responses while staying grounded in the injected bill context."
      },
      {
        question: "Why Supabase Edge Functions instead of a traditional backend?",
        answer: "The app has exactly two serverless operations: parse a PDF and answer a chat message. A FastAPI backend would require an always-on server for occasional invocations. Supabase Edge Functions (Deno runtime) provide zero-cold-start serverless execution co-located with the database, automatic scaling, and built-in secrets management for API keys — all without managing infrastructure."
      },
      {
        question: "Why include a Groq/Llama 3 alternative alongside OpenAI?",
        answer: "OpenAI costs add up when parsing invoices and handling chat conversations. The Groq integration with Llama 3 8B provides a cost-effective alternative for chat responses where absolute parsing accuracy matters less. This dual-model pattern — expensive model for extraction, cheap model for conversation — is a production FinOps practice applied to the AI inference itself."
      },
      {
        question: "Why tab-based SPA instead of multi-page routing?",
        answer: "The user workflow is strictly sequential: Upload → Dashboard → Chat. Multi-page routing would lose state between tabs (parsed invoice data, chat history). A tab-based SPA keeps everything in React state, enabling instant tab switches and seamless context sharing between the Dashboard and Chat components."
      }
    ],

    beforeAfter: [
      {
        label: "Bill Analysis",
        before: "Open 50-page PDF, manually scan for service line items, cross-reference with last month's bill in a spreadsheet — hours per invoice",
        after: "Drag-and-drop PDF, GPT-4o-mini extracts structured data in seconds, dashboard shows service breakdown with trending indicators instantly"
      },
      {
        label: "Cost Questions",
        before: "Email the FinOps team 'Why did our S3 costs spike?', wait hours/days for someone to pull data and respond",
        after: "Ask the AI chatbot directly — it has the parsed bill as context and responds in seconds with specific service-level answers"
      },
      {
        label: "Optimization Discovery",
        before: "Hire a FinOps consultant or learn CloudHealth/Spot.io — weeks of onboarding before identifying first savings opportunity",
        after: "AI generates actionable recommendations immediately: 'Switch to Reserved Instances for EC2 — save 30%', 'Optimize S3 storage classes — save $120/month'"
      },
      {
        label: "Access & Expertise",
        before: "Only the infrastructure team understands cloud bills — leadership and product teams have no visibility into cost drivers",
        after: "Anyone with a PDF can upload and chat — natural language interface requires zero cloud or FinOps expertise"
      }
    ],

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "Tailwind CSS", category: "frontend", icon: "tailwindcss" },
      { name: "shadcn/ui", category: "frontend" },
      { name: "Radix UI", category: "frontend", icon: "radixui" },
      { name: "Recharts", category: "frontend" },
      { name: "Lucide Icons", category: "frontend" },
      { name: "React Query", category: "frontend" },
      { name: "React Hook Form", category: "frontend" },
      { name: "Supabase", category: "backend", icon: "supabase" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "Deno", category: "backend", icon: "deno" },
      { name: "OpenAI GPT-4o-mini", category: "ai", icon: "openai" },
      { name: "Groq / Llama 3", category: "ai" },
      { name: "Zod", category: "backend", icon: "zod" },
    ],

    integrations: [
      {
        system: "OpenAI API",
        type: "REST API (GPT-4o-mini)",
        dataFlow: "Invoice parsing: base64 PDF → structured JSON extraction (temperature 0.1). Chat: user message + bill context → contextual cost analysis response (temperature 0.7)"
      },
      {
        system: "Groq API",
        type: "REST API (Llama 3 8B)",
        dataFlow: "Alternative chat backend — same context injection pattern as OpenAI but with cost-effective open-source model inference"
      },
      {
        system: "Supabase",
        type: "Client SDK + Edge Functions",
        dataFlow: "Auth (email/password with RLS), PostgreSQL storage (aws_invoices table with services_data JSON), Edge Functions (Deno runtime for AI inference)"
      }
    ],

    metrics: [
      { label: "AI Model", value: "GPT-4o-mini" },
      { label: "Parsing Accuracy", value: "~95%" },
      { label: "Cost Savings Found", value: "15-30%" },
      { label: "LLM Options", value: "2" },
      { label: "UI Components", value: "47+" },
      { label: "Tab Views", value: "4" },
      { label: "Auth Method", value: "Supabase" },
      { label: "Status", value: "Prototype" },
    ],

    userStory: "As a CTO, I want to upload my AWS invoice PDF and ask 'What's our biggest cost driver?' in plain English, getting an instant answer grounded in my actual bill data — without learning FinOps tools or reading 50-page PDFs.",
    description: "Full-stack AI cloud bill analysis platform: drag-and-drop PDF upload, GPT-4o-mini invoice extraction, context-aware chatbot, and service cost dashboard — built on React, Supabase, and serverless Edge Functions.",
  },

];
