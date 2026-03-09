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
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_47_16.png",
        alt: "VendorLens Main Dashboard",
        caption: "Main dashboard — Engineering vs Non-Engineering spend analysis, vendor performance metrics, top vendors & tools, and functional owner management"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_47_52.png",
        alt: "Vendor Management Page",
        caption: "Vendor management — Sortable vendor table with spend, contracts, growth trends, and upcoming renewal dates"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_48_09.png",
        alt: "Cost Analysis Page",
        caption: "Cost analysis — Trend analysis, department-level spending breakdown, and AI-powered cost optimization opportunities with confidence scoring"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_48_20.png",
        alt: "Reports & Exports Page",
        caption: "Reports & exports — Pre-configured financial reports, scheduled deliveries, and on-demand data exports"
      },
      {
        src: "/projects/vendorlens/screencapture-purple-bask-69920692-figma-site-2026-02-12-00_48_31.png",
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
      { label: "Spend Tracked", value: "Millions" },
      { label: "Vendors", value: "300+" },
      { label: "Tools Classified", value: "370+" },
      { label: "Subscriptions", value: "400+" },
      { label: "Departments", value: "All" },
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
        src: "/projects/unified-posture-hub/screenshot-1-dashboard.png",
        alt: "Endpoints Compliance Dashboard",
        caption: "Main dashboard — KPI metric cards (total, compliant, non-compliant), 90-day compliance trend chart, asset distribution by type, compliance by category progress bars, and recent security alerts"
      },
      {
        src: "/projects/unified-posture-hub/screenshot-2-assets.png",
        alt: "Asset Management Page",
        caption: "Asset management — Device type summary cards (laptops, servers, desktops) with compliance percentages, searchable asset table showing per-tool compliance status with checkmarks and crosses"
      },
      {
        src: "/projects/unified-posture-hub/screenshot-3-reports.png",
        alt: "Reports Page",
        caption: "Reports — Compliance summary, non-compliant assets, monthly trend, and asset inventory reports with download and on-demand generation capabilities"
      },
      {
        src: "/projects/unified-posture-hub/screenshot-4-settings.png",
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
        src: "/projects/billing-dashboard/screenshot-1-dashboard.png",
        alt: "Summary Dashboard",
        caption: "Summary dashboard — KPI cards (total emails, SLA compliance gauge, pending actions, overdue replies), email volume trend chart with time range selector, classification breakdown donut, top customers by value, and live SLA status alerts"
      },
      {
        src: "/projects/billing-dashboard/screenshot-2-team.png",
        alt: "Team Performance",
        caption: "Team performance — Individual analyst cards with emails handled, average turnaround time, SLA compliance rates, and pending counts. Email load distribution bar chart and team comparison radar chart for cross-metric benchmarking"
      },
      {
        src: "/projects/billing-dashboard/screenshot-3-customers.png",
        alt: "Customer Overview",
        caption: "Customer overview — 512 tracked customers with multi-currency open values (USD, INR, GBP, EUR), email volume sparklines, escalation counts, average TAT, and sentiment scores in a searchable, sortable table"
      },
      {
        src: "/projects/billing-dashboard/screenshot-4-ai-insights.png",
        alt: "AI Insights",
        caption: "AI Insights — GPT-generated daily summary with key highlights, actionable recommendations, 95% classification accuracy gauge, trending topic tags, and automation opportunity cards with estimated time savings"
      },
      {
        src: "/projects/billing-dashboard/screenshot-7-actions-popup.png",
        alt: "Pending Actions",
        caption: "Pending Actions modal — 700+ threads awaiting team response, paginated list with email subjects, customer names, timestamps, and thread counts. Click any thread to open the full email detail view"
      },
      {
        src: "/projects/billing-dashboard/screenshot-6-email-detail.png",
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
    tagline: "AP Email Analytics Platform",
    type: "AI/Operations",
    organization: "Amagi Media",
    category: "AI-Powered Operations",
    readTime: "6 min read",
    publishDate: "October 2024",
    icon: Inbox,
    monogram: "PD",
    color: "bg-blue-500",
    heroImage: "gradient-blue",

    overview: "Payable Dashboard is an email monitoring and analytics platform for the Accounts Payable team (payable@amagi.com). It provides semantic search across 21,000+ financial documents, team productivity tracking, and AI-powered chatbot for AP queries, integrated with NetSuite and Salesforce.",

    challenge: "The AP team handled thousands of vendor emails monthly without centralized tracking. Finding historical payment communications was difficult, vendor query patterns were unknown, and team workload was unbalanced. They needed semantic search to find emails using natural language, integration with NetSuite for payment context, and analytics to optimize team performance.",

    solution: "Built a FastAPI platform with OpenAI text-embedding-3-large for semantic search powered by pgvector. Created vendor-centric analytics tracking query patterns and response times. Integrated with NetSuite for AP aging reports and payment schedules, and Salesforce for vendor relationship context. Developed an AI chatbot for conversational AP analytics.",

    features: [
      "Semantic search across 21,000+ financial documents",
      "Natural language queries using text-embedding-3-large embeddings",
      "AI chatbot powered by OpenAI GPT-4 for AP analytics",
      "NetSuite integration for vendor payment records and AP aging",
      "Salesforce integration for vendor account data",
      "Team productivity metrics and workload distribution",
      "Vendor query pattern analysis",
      "Historical email tracking (April - November 2025)",
      "10 team member performance dashboards",
      "Response time analytics and SLA tracking"
    ],

    architecture: "Email data is ingested from Gmail and stored in PostgreSQL with pgvector extension. Each email is embedded using text-embedding-3-large (3072 dimensions) for semantic similarity search. NetSuite and Salesforce integrations enrich vendor records with payment status and relationship data. The AI chatbot uses retrieval-augmented generation to answer AP-related queries.",

    impact: "Finding relevant historical vendor communications went from 15-20 minutes of manual searching to instant semantic search results. The team identified top vendors with repeated queries, enabling proactive communication improvements. Workload balancing improved as managers gained visibility into team member email volumes and response times.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "Python", category: "backend", icon: "python" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "pgvector", category: "database" },
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
      { name: "OpenAI Embeddings", category: "ai", icon: "openai" },
    ],

    integrations: [
      {
        system: "NetSuite",
        type: "REST API",
        dataFlow: "Vendor payment records, AP aging, invoice matching, payment schedules"
      },
      {
        system: "Salesforce",
        type: "REST API",
        dataFlow: "Vendor account data, contract information, relationship context"
      },
      {
        system: "Gmail",
        type: "OAuth 2.0",
        dataFlow: "Email ingestion for payable@amagi.com"
      }
    ],

    metrics: [
      { label: "Emails Indexed", value: "21,000+" },
      { label: "Team Size", value: "10" },
      { label: "Data Coverage", value: "8 months" },
      { label: "Search Type", value: "Semantic" },
      { label: "Systems Integrated", value: "3" },
      { label: "SLA Target", value: "48hrs" },
    ],

    userStory: "As an AP Manager, I want to track team response times and identify vendors with repeated queries to improve our SLA compliance.",
    description: "Email monitoring and analytics for Accounts Payable with AI-powered semantic search and team productivity tracking.",
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

    overview: "Purchase Dashboard is an email operations platform for purchase@amagi.com, enabling the procurement team to manage vendor communications with AI-powered categorization, sentiment analysis, and intelligent chatbot for data retrieval.",

    challenge: "The procurement team dealt with diverse email types—RFQs, payment delays, shipment updates, vendor queries—without systematic categorization. Understanding vendor sentiment and tracking procurement patterns manually was inefficient. They needed AI to categorize emails, detect vendor sentiment, and provide quick data access.",

    solution: "Built a Flask backend with React frontend, deployed on AWS. Implemented GPT-4 for email categorization (Payment Delays, RFQs, Shipment Updates, etc.) and sentiment analysis (positive/neutral/negative). Created an AI chatbot with SQL-based data retrieval and security validation to answer procurement queries.",

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

    impact: "Procurement gained instant visibility into email categories and vendor sentiment. The AI chatbot reduced time spent on data lookups by 70%. Vendor sentiment tracking enabled proactive relationship management.",

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

    metrics: [
      { label: "Categories", value: "6+" },
      { label: "Analysis", value: "Sentiment" },
      { label: "Data Lookup", value: "70% faster" },
      { label: "Status", value: "Production" },
    ],

    screenshots: [
      {
        src: "/projects/purchase-dashboard/screenshot-1-dashboard.png",
        alt: "Purchase Dashboard Overview",
        caption: "Main dashboard — KPI cards (email volume, avg response time, SLA compliance, pending escalations), email volume trend chart with incoming/outgoing split, and response time SLA breakdown"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-2-overview-metrics.png",
        alt: "All Sections Metrics Overview",
        caption: "Collapsed metrics overview — Vendor analytics, sentiment analysis, process health monitoring (closure rate, unanswered emails), and team productivity summary cards"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-3-vendor-expanded.png",
        alt: "Vendor & Request Analytics Expanded",
        caption: "Vendor deep-dive — Top vendors by email volume, request category distribution (Invoice Queries, Vendor Onboarding, Payment Processing), vendors with payment issues, and recent internal requests"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-4-sentiment-expanded.png",
        alt: "Sentiment Analysis & Escalations Expanded",
        caption: "Sentiment intelligence — Communication sentiment breakdown (negative/neutral/positive), high-risk vendor list with escalation counts, critical escalations timeline, and vendor vs internal sentiment comparison"
      },
      {
        src: "/projects/purchase-dashboard/screenshot-5-team-expanded.png",
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

    metrics: [
      { label: "Engineers Tracked", value: "370+" },
      { label: "Total Requests", value: "429k+" },
      { label: "AI Models", value: "8+" },
      { label: "Lines Generated", value: "23M+" },
      { label: "Data Period", value: "6 months" },
      { label: "Status", value: "Production" },
    ],

    screenshots: [
      {
        src: "/projects/cursor-analytics/screenshot-1-overview.png",
        alt: "Cursor Analytics Overview Dashboard",
        caption: "Overview dashboard — KPI cards (members, total requests, spend, lines generated, avg cost/user), top performers leaderboard with productivity scores, feature adoption rates, and code generation metrics"
      },
      {
        src: "/projects/cursor-analytics/screenshot-2-overview-bottom.png",
        alt: "Overview Bottom - Models & Spending",
        caption: "Overview continued — Code generation stats (3.9M lines generated, 1.7M accepted, 56% retention), top AI models by user count, and monthly spending summary with trend charts"
      },
      {
        src: "/projects/cursor-analytics/screenshot-3-users.png",
        alt: "Users Tab - Detailed Per-User Table",
        caption: "Users tab — Sortable table with productivity score, request counts, Plan/Ask/Agent breakdown, generated/accepted lines, spend, and all-time usage per engineer"
      },
      {
        src: "/projects/cursor-analytics/screenshot-4-analytics.png",
        alt: "Analytics Tab - Spending Trends",
        caption: "Analytics tab — Total spend, top spender, total requests KPIs, and 6-month spending trend line chart (Sep '25 - Feb '26) showing cost trajectory"
      },
      {
        src: "/projects/cursor-analytics/screenshot-5-analytics-bottom.png",
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
        src: "/projects/calendar-analytics/screenshot-1-dashboard.png",
        alt: "Calendar Analytics Dashboard",
        caption: "Executive dashboard — KPI cards (428K meetings, 496K hours, 46% external collaboration, most active department), department analytics pie chart with distribution breakdown, and top 10 cross-departmental collaboration rankings"
      },
      {
        src: "/projects/calendar-analytics/screenshot-2-insights.png",
        alt: "Key Insights and Executive Summary",
        caption: "Key Insights — Weekly meeting load (53h), cross-department connectivity (8%), external focus (46%), collaboration intensity legend, and AI-generated executive summary analyzing organizational health"
      },
      {
        src: "/projects/calendar-analytics/screenshot-3-kpi-modal.png",
        alt: "KPI Insights Modal - Total Meetings",
        caption: "KPI drill-down modal — Total Meetings Analysis showing meeting distribution (322 avg/user), activity level assessment, top contributors (3 power users), collaboration scope (50 departments), and executive summary"
      },
      {
        src: "/projects/calendar-analytics/screenshot-4-chatbot.png",
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
    heroImage: "gradient-cyan",

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
        decision: "Delta Lake over traditional data warehouse",
        rationale: "ACID transactions prevent partial writes during ETL failures. Time-travel enables audit trails and rollback — critical for financial data. Auto-optimization with Z-ordering delivers sub-second query response on dashboards."
      },
      {
        decision: "JSON-based GL mappings over hardcoded logic",
        rationale: "Finance frequently adds or reclassifies GL accounts. A configurable gl_mappings.json allows non-engineer updates to account-category mappings without code changes or redeployment."
      },
      {
        decision: "Hierarchical aggregation pipeline over flat tables",
        rationale: "Financial reporting requires drill-down from totals to subcategories to individual GL accounts. Building the hierarchy in the ETL (not the dashboard) ensures consistent totals and enables both summary and detail views from the same data."
      },
      {
        decision: "Databricks Genie over custom chatbot",
        rationale: "Genie understands the Delta table schema natively and translates natural language to SQL. Building a custom LLM chatbot would require maintaining prompt templates, SQL generation, and validation — Genie provides this out of the box with financial domain tuning."
      }
    ],

    beforeAfter: [
      {
        before: "Manual CSV export from NetSuite → Excel aggregation → Email to leadership (hours per report)",
        after: "Automated daily ETL pipeline → Delta Lake → Interactive dashboard refreshed by 6 AM IST (minutes)"
      },
      {
        before: "300+ GL accounts in flat CSV files with no categorization or hierarchy",
        after: "Hierarchical financial structure: GL → 50+ subcategories → major categories → Balance Sheet totals"
      },
      {
        before: "Finance analysts manually compile QTD/YTD reports with spreadsheet formulas",
        after: "Cumulative QTD and YTD calculations automated in PySpark with 3 fiscal years of history"
      },
      {
        before: "Leadership asks analyst 'What's our cash position?' and waits hours for a response",
        after: "CFO asks Genie 'What are total assets for Q3?' and gets an answer in seconds"
      },
      {
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
    tagline: "Automated User Provisioning",
    type: "Automation",
    organization: "Amagi Media",
    category: "Automation",
    readTime: "8 min read",
    publishDate: "May 2024",
    icon: Users,
    monogram: "IL",
    color: "bg-lime-500",
    heroImage: "gradient-lime",

    overview: "Identity Lifecycle Automation orchestrates employee onboarding, updates, and offboarding across SAP SuccessFactors, Google Workspace, and OneLogin. Managing 5,800+ accounts for 1,200-1,400 active employees, it features AI-powered name processing, smart email generation, and anomaly detection for secure identity management.",

    challenge: "Manual account creation took 2-4 hours per employee. Field updates between SAP and Google Workspace were inconsistent. Offboarding was delayed, creating security risks. Name variations (Jr., III, O'Connor, international formats) caused email generation errors. No anomaly detection for suspicious mass changes.",

    solution: "Built Python automation orchestrating SAP SuccessFactors (OAuth + OData), Google Workspace (GAMADV-XTD3 CLI), and OneLogin (REST API). Implemented NLP for intelligent name processing, ML-based email deduplication, and statistical anomaly detection. Automated flows: Onboarding (hourly), Updates (4 hours), Offboarding (2 hours) with 20 parallel workers.",

    features: [
      "Automated onboarding (hourly sync)",
      "9-field synchronization (SAP → GWS)",
      "Intelligent name processing (NLP)",
      "Smart email generation with deduplication",
      "Anomaly detection for mass changes",
      "Automated offboarding (2-hour check)",
      "OneLogin SSO provisioning",
      "Auto-generated welcome emails",
      "20 parallel workers for updates",
      "Complete audit logging",
      "Predictive offboarding alerts"
    ],

    architecture: "Linux crontab triggers Python scripts at defined intervals. SAP SuccessFactors serves as HR system of record. Changes flow through validation → GWS creation → OneLogin provisioning → credential fetch → welcome email. Anomaly detection flags unusual patterns before execution.",

    impact: "Onboarding time reduced from 2-4 hours to minutes. Real-time field sync every 4 hours eliminated data inconsistencies. Offboarding automated within 2 hours, closing security gaps. Zero manual credential distribution with auto-generated welcome emails.",

    techStack: [
      { name: "Python", category: "backend", icon: "python" },
      { name: "SAP SuccessFactors", category: "infrastructure" },
      { name: "Google Workspace", category: "infrastructure", icon: "google" },
      { name: "OneLogin", category: "infrastructure" },
      { name: "GAMADV-XTD3", category: "backend" },
      { name: "Linux Crontab", category: "infrastructure", icon: "linux" },
    ],

    integrations: [
      {
        system: "SAP SuccessFactors",
        type: "OAuth + OData",
        dataFlow: "HR system of record, employee data source"
      },
      {
        system: "Google Workspace",
        type: "GAMADV-XTD3 CLI",
        dataFlow: "Account creation, field updates, suspension"
      },
      {
        system: "OneLogin",
        type: "REST API",
        dataFlow: "SSO provisioning, credential management"
      }
    ],

    metrics: [
      { label: "Accounts Managed", value: "5,800+" },
      { label: "Active Employees", value: "1,400" },
      { label: "Fields Synced", value: "9" },
      { label: "Parallel Workers", value: "20" },
      { label: "Systems", value: "3" },
      { label: "Onboarding", value: "Minutes" },
    ],

    userStory: "As an IT Admin, I want new hire accounts created automatically so employees have Day-1 access without manual provisioning.",
    description: "AI-powered identity lifecycle automation across SAP, Google Workspace, and OneLogin for 5,800+ accounts.",
  },

  {
    id: 10,
    slug: "rydoo-sync",
    name: "Rydoo Sync",
    tagline: "Serverless Expense Automation",
    type: "Automation",
    organization: "Amagi Media",
    category: "Automation",
    readTime: "4 min read",
    publishDate: "April 2024",
    icon: ArrowLeftRight,
    monogram: "RS",
    color: "bg-red-500",
    heroImage: "gradient-red",

    overview: "Rydoo Sync is a serverless expense management automation system ensuring Indian data residency compliance. Running on AWS Lambda with scheduled EventBridge triggers, it syncs expense data daily at 2:00 AM IST with minimal operational cost (~$72/year).",

    challenge: "Amagi needed to sync expense data from Rydoo to internal systems while maintaining Indian data residency compliance for regulatory requirements. Manual sync processes were error-prone and delayed expense reporting. The solution needed to be cost-effective, reliable, and require minimal maintenance.",

    solution: "Architected a serverless solution using AWS Lambda for compute, S3 for data storage, API Gateway for endpoints, and Secrets Manager for credential management. EventBridge triggers daily sync at 2:00 AM IST. The Lambda function fetches expense data from Rydoo API, transforms it, and stores it in compliance-approved storage within Indian AWS regions.",

    features: [
      "Serverless architecture for minimal operational overhead",
      "Daily automated sync at 2:00 AM IST via EventBridge",
      "Indian data residency compliance (AWS Mumbai region)",
      "AWS Secrets Manager for secure credential storage",
      "S3 for reliable expense data storage",
      "Error handling and retry logic",
      "CloudWatch logging for audit trails",
      "Cost-optimized design (~$72/year)",
      "Zero-downtime deployments",
      "API Gateway for manual trigger capability"
    ],

    architecture: "EventBridge scheduler triggers Lambda function daily at 2:00 AM IST. Lambda retrieves Rydoo API credentials from Secrets Manager, fetches expense data, transforms records, and writes to S3 in Indian AWS region. CloudWatch Logs capture execution details for debugging and compliance audits.",

    impact: "Finance team gained automated, reliable expense sync with 100% data residency compliance. The serverless architecture eliminated server maintenance overhead. Operational costs dropped to $72/year (83% reduction vs EC2-based solution). Daily sync ensured expense reports were always current.",

    techStack: [
      { name: "AWS Lambda", category: "infrastructure", icon: "amazonaws" },
      { name: "AWS S3", category: "infrastructure", icon: "amazonaws" },
      { name: "AWS API Gateway", category: "infrastructure", icon: "amazonaws" },
      { name: "AWS Secrets Manager", category: "infrastructure", icon: "amazonaws" },
      { name: "AWS EventBridge", category: "infrastructure", icon: "amazonaws" },
      { name: "Python", category: "backend", icon: "python" },
    ],

    metrics: [
      { label: "Architecture", value: "Serverless" },
      { label: "Annual Cost", value: "~$72" },
      { label: "Sync Schedule", value: "Daily 2AM" },
      { label: "Compliance", value: "India DC" },
    ],

    userStory: "As a Finance Manager, I want expenses to sync automatically daily with Indian data residency compliance, without managing servers.",
    description: "Serverless expense management synchronization with Indian data residency compliance, automated daily sync via AWS Lambda.",
  },

  // ==================== PERSONAL PROJECTS ====================
  {
    id: 11,
    slug: "zapgap-sidekick",
    name: "ZapGap Sidekick",
    tagline: "AI Agents for Cloud Ops",
    type: "AI Agents",
    organization: "Personal",
    category: "AI & Agents",
    readTime: "7 min read",
    publishDate: "September 2024",
    icon: Zap,
    monogram: "ZG",
    color: "bg-rose-500",
    heroImage: "gradient-rose",

    overview: "ZapGap Sidekick is an AI-powered cloud operations platform featuring autonomous agents for SRE auto-remediation, DevOps self-service, and cost optimization. It brings conversational AI to infrastructure management, reducing MTTR to under 1 minute for known issues.",

    challenge: "SRE teams were constantly firefighting—late-night alerts for memory leaks, CPU spikes, and service crashes. DevOps teams faced environment provisioning bottlenecks. Leadership struggled with cloud cost sprawl. Manual remediation was slow, inconsistent, and error-prone. Teams needed AI agents that could detect issues, remediate automatically, and provide self-service infrastructure operations.",

    solution: "Built an agentic AI platform with deterministic execution (no hallucinations). Implemented auto-remediation workflows triggered by monitoring alerts (memory leaks → service restart, disk full → log cleanup). Created a self-service portal with AI approval routing for environment provisioning. Developed cost optimization agents that analyze cloud bills and recommend savings. Integrated policy enforcement using Open Policy Agent for compliance.",

    features: [
      "Auto-remediation agents for common incidents (MTTR <1 min)",
      "Self-service provisioning with AI approval routing",
      "AI-powered cost optimization recommendations",
      "Deterministic execution (100% code-based, no hallucinations)",
      "Policy enforcement with Open Policy Agent (OPA)",
      "Complete audit logging for all operations",
      "Multi-environment support (prod, staging, dev, on-prem)",
      "Context-aware AI understanding system topology",
      "RBAC and compliance as code",
      "40%+ ticket reduction through automation",
      "Conversational interface for infrastructure operations"
    ],

    architecture: "The platform uses agentic patterns with human-in-the-loop for sensitive operations. Monitoring alerts trigger agents that follow pre-defined remediation code paths (deterministic). Policy enforcement via OPA ensures compliance before execution. Audit logs capture every action for security reviews.",

    impact: "SRE teams eliminated 2 AM pages for known issues—agents handle them automatically. DevOps provisioning time dropped from days to minutes. Leadership identified $500K+ in annual cloud cost savings through AI recommendations. Ticket volume decreased 40% as common requests became self-service.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Framer Motion", category: "frontend" },
      { name: "AI/LLM", category: "ai" },
    ],

    metrics: [
      { label: "MTTR", value: "<1min" },
      { label: "Ticket Reduction", value: "40%" },
      { label: "Use Cases", value: "3" },
      { label: "Status", value: "Prototype" },
    ],

    userStory: "As an SRE, I want AI agents to automatically detect memory leaks and restart services so I don't get woken up at 2 AM.",
    description: "AI-powered cloud operations platform with autonomous agents for SRE auto-remediation, DevOps self-service, and cost optimization.",
  },

  {
    id: 12,
    slug: "cost-savvy-chat",
    name: "Cost Savvy Chat",
    tagline: "Cloud Cost Intelligence",
    type: "AI/FinOps",
    organization: "Personal",
    category: "Finance & Investment",
    readTime: "4 min read",
    publishDate: "August 2024",
    icon: MessageSquare,
    monogram: "CS",
    color: "bg-sky-500",
    heroImage: "gradient-sky",

    overview: "Cost Savvy Chat is an AI-powered cloud bill analysis platform. Upload your AWS, Azure, or GCP bills and chat with an AI assistant to discover cost optimization opportunities, understand spending trends, and get actionable recommendations—all through natural language conversation.",

    challenge: "Cloud bills are complex, multi-page PDFs with cryptic service names and hidden cost drivers. Engineering leaders need answers like 'Why did our S3 costs spike?' or 'Which EC2 instances are over-provisioned?' but lack time to manually analyze bills. Traditional cost tools require training and expertise.",

    solution: "Built a conversational AI interface that ingests cloud bill PDFs, parses line items, and enables natural language queries. The AI chatbot understands cloud services, identifies cost anomalies, and provides optimization recommendations. Users can ask questions like 'What's our biggest cost driver?' and get instant, contextual answers.",

    features: [
      "Cloud bill upload and parsing (AWS, Azure, GCP)",
      "AI chatbot for natural language cost queries",
      "Cost anomaly detection and spike analysis",
      "Optimization recommendations (rightsizing, unused resources)",
      "Dashboard visualization of spending trends",
      "Service-level cost breakdown",
      "Month-over-month comparison",
      "Export insights and recommendations"
    ],

    architecture: "Bills are parsed using OCR and structured into queryable data. An AI chatbot powered by LLMs answers user questions using retrieval-augmented generation over the parsed bill data. Dashboards visualize key metrics like top services, cost trends, and anomalies.",

    impact: "CTOs and FinOps teams gained instant bill insights without learning complex tools. The conversational interface democratized cost analysis—anyone can now ask budget questions and get answers. Early users identified 15-30% cost savings through AI-driven recommendations.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "AI/LLM", category: "ai" },
    ],

    metrics: [
      { label: "Interface", value: "Chat" },
      { label: "Analysis", value: "AI-Powered" },
      { label: "Cloud Providers", value: "3" },
      { label: "Cost Savings", value: "15-30%" },
    ],

    userStory: "As a CTO, I want to ask natural language questions about cloud spending and get instant, actionable answers without reading 50-page PDFs.",
    description: "Upload cloud bills and chat with AI for cost optimization insights. Natural language interface for cloud financial analysis.",
  },

  {
    id: 13,
    slug: "sahayak",
    name: "Sahayak",
    tagline: "AI Learning Platform",
    type: "Education",
    organization: "Personal",
    category: "Education",
    readTime: "5 min read",
    publishDate: "July 2024",
    icon: BookOpen,
    monogram: "SH",
    color: "bg-green-500",
    heroImage: "gradient-green",

    overview: "Sahayak is an AI-powered learning platform designed for personalized education. With multi-language support and adaptive learning paths, it serves as an intelligent tutor that adjusts to each student's pace and learning style.",

    challenge: "Traditional online learning platforms offer static content that doesn't adapt to individual student needs. Language barriers limit access to quality education. Students need personalized guidance, instant feedback, and culturally relevant content. Teachers struggle to provide one-on-one attention in large classrooms.",

    solution: "Built an adaptive learning platform with AI-powered tutoring. The system assesses student understanding in real-time, adjusts lesson difficulty, and provides personalized explanations. Multi-language support (via i18n) enables global accessibility. AI tutors answer questions, provide examples, and offer encouragement tailored to each learner's progress.",

    features: [
      "AI tutor with personalized learning paths",
      "Multi-language support for global accessibility",
      "Real-time comprehension assessment",
      "Adaptive lesson difficulty adjustment",
      "Instant feedback on exercises and quizzes",
      "Culturally relevant examples and content",
      "Progress tracking and analytics",
      "Interactive exercises with AI assistance",
      "Voice-based learning for accessibility"
    ],

    architecture: "The platform uses Firebase for real-time data sync and user authentication. AI tutors leverage LLMs to provide contextual explanations and feedback. The i18n framework enables seamless language switching, with content translated and culturally adapted.",

    impact: "Students in underserved regions gained access to quality, personalized education in their native languages. The AI tutor provided instant support, reducing dropout rates. Teachers used platform analytics to identify struggling students and intervene proactively.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "JavaScript", category: "frontend", icon: "javascript" },
      { name: "Firebase", category: "backend", icon: "firebase" },
      { name: "i18n", category: "backend" },
    ],

    metrics: [
      { label: "Languages", value: "Multi" },
      { label: "AI Tutor", value: "Adaptive" },
      { label: "Feedback", value: "Real-time" },
      { label: "Status", value: "Live" },
    ],

    userStory: "As a learner, I want an AI tutor that adapts to my pace, explains concepts in my native language, and provides instant feedback on my progress.",
    description: "AI-powered learning platform with multi-language support and adaptive tutoring for personalized education.",
  },

  {
    id: 14,
    slug: "dryvox",
    name: "DryVox",
    tagline: "Voice AI for Shipping",
    type: "Voice AI",
    organization: "Personal",
    category: "AI & Agents",
    readTime: "8 min read",
    publishDate: "March 2024",
    icon: Mic,
    monogram: "DV",
    color: "bg-slate-600",
    heroImage: "gradient-slate",

    overview: "DryVox is 'Jarvis for Shipbrokers'—an enterprise voice-first AI assistant for the maritime shipping industry. It features real-time voice streaming, multimodal document analysis (Charter Parties via GPT-4 Vision), and live market data integration for laytime/demurrage calculations.",

    challenge: "Shipbrokers spend hours analyzing Charter Party documents, calculating laytime and demurrage, and tracking market data. Voice interfaces are natural for maritime professionals on the move. Traditional tools don't support voice-first interaction or multimodal document analysis. The industry needed an AI assistant that understands shipping domain terminology.",

    solution: "Built a voice-first AI platform using WebSockets for real-time bidirectional voice streaming. Integrated OpenAI Whisper for speech-to-text and TTS for streaming audio responses. Implemented GPT-4 Vision for Charter Party document analysis via camera/upload. Created RAG workflows for persistent document context and sandboxed code execution for verified calculations.",

    features: [
      "Real-time bidirectional voice streaming",
      "Speech-to-text via OpenAI Whisper",
      "Text-to-speech with streaming audio",
      "GPT-4 Vision for Charter Party analysis",
      "PDF, DOCX, Excel document parsing",
      "RAG workflow for mission context",
      "Sandboxed code execution for calculations",
      "Live market data (BDI, bunker prices)",
      "Port congestion tracking",
      "Laytime/demurrage calculations",
      "Neumorphism + Glassmorphism design"
    ],

    architecture: "WebSocket server handles real-time voice streaming. Whisper transcribes speech, GPT-4 processes queries with RAG context, and TTS streams responses. Document uploads are processed via OCR and GPT-4 Vision for multimodal understanding. Sandboxed execution ensures calculation accuracy.",

    impact: "Shipbrokers can now analyze Charter Parties hands-free while on calls or traveling. Laytime calculations that took hours are completed in minutes with verified accuracy. Voice-first interface matches the maritime industry's communication style.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "TailwindCSS", category: "frontend", icon: "tailwindcss" },
      { name: "Framer Motion", category: "frontend" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "WebSockets", category: "backend" },
      { name: "OpenAI Whisper", category: "ai", icon: "openai" },
      { name: "OpenAI TTS", category: "ai", icon: "openai" },
      { name: "GPT-4 Vision", category: "ai", icon: "openai" },
    ],

    metrics: [
      { label: "Completion", value: "94%" },
      { label: "Stories Done", value: "31/33" },
      { label: "Voice", value: "Real-time" },
      { label: "Vision", value: "GPT-4V" },
    ],

    userStory: "As a Shipbroker, I want to analyze Charter Parties using voice commands while traveling so I can respond to deals faster.",
    description: "Enterprise voice-first AI assistant for maritime shipping with real-time voice streaming and GPT-4 Vision document analysis.",
  },

  {
    id: 15,
    slug: "nivesha",
    name: "Nivesha",
    tagline: "AI Stock Market Companion",
    type: "AI/Finance",
    organization: "Personal",
    category: "Finance & Investment",
    readTime: "5 min read",
    publishDate: "February 2024",
    icon: TrendingUp,
    monogram: "NV",
    color: "bg-emerald-600",
    heroImage: "gradient-emerald",

    overview: "Nivesha is an AI-first investment platform designed for Indian retail investors. It combines conversational AI for portfolio analysis, real-time market data integration, tax optimization recommendations, and RAG-based market research to democratize sophisticated investment insights.",

    challenge: "Indian retail investors lack access to sophisticated investment analysis tools available to institutional investors. Market research is time-consuming. Tax implications of investment decisions are complex. Investors need an AI companion that understands Indian market nuances, tax laws, and can provide personalized guidance.",

    solution: "Building a conversational AI platform with real-time NSE/BSE data integration. Implementing portfolio analysis with tax optimization recommendations specific to Indian regulations. Creating RAG-based market research that synthesizes news, analyst reports, and company filings. Dual LLM approach using GPT-4 and Claude for balanced insights.",

    features: [
      "Conversational AI for portfolio analysis",
      "Real-time NSE/BSE market data",
      "Tax optimization recommendations",
      "RAG-based market research",
      "Dual LLM (GPT-4 + Claude) insights",
      "Indian tax law understanding",
      "Portfolio health scoring",
      "Sector allocation analysis",
      "Risk assessment",
      "Investment recommendations"
    ],

    architecture: "FastAPI backend with PostgreSQL for portfolio storage and Redis for market data caching. Real-time data integration via market APIs. RAG pipeline indexes news, reports, and filings for contextual answers. Dual LLM approach provides balanced perspectives on investment queries.",

    impact: "Retail investors will gain access to institutional-grade analysis through conversational interface. Tax optimization features help maximize post-tax returns. RAG-based research saves hours of manual market analysis.",

    techStack: [
      { name: "React", category: "frontend", icon: "react" },
      { name: "TypeScript", category: "frontend", icon: "typescript" },
      { name: "Vite", category: "frontend", icon: "vite" },
      { name: "FastAPI", category: "backend", icon: "fastapi" },
      { name: "PostgreSQL", category: "database", icon: "postgresql" },
      { name: "Redis", category: "backend", icon: "redis" },
      { name: "OpenAI GPT-4", category: "ai", icon: "openai" },
      { name: "Anthropic Claude", category: "ai", icon: "anthropic" },
    ],

    metrics: [
      { label: "Market", value: "India" },
      { label: "LLMs", value: "GPT-4 + Claude" },
      { label: "Data", value: "Real-time" },
      { label: "Status", value: "In Dev" },
    ],

    userStory: "As an Indian retail investor, I want AI-powered portfolio analysis with tax optimization so I can make better investment decisions.",
    description: "AI-first investment platform for Indian retail investors with conversational analysis and tax optimization.",
  },
];
