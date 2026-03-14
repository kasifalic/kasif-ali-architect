/**
 * Generates portfolio-context.mjs for the Netlify chat function.
 * Parses projectsData.ts + hardcoded personal info into a single context string.
 *
 * Run: node scripts/generate-portfolio-context.mjs
 * Output: netlify/functions/portfolio-context.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';

const source = readFileSync('src/data/projectsData.ts', 'utf-8');

// --- Extraction helpers ---

function extractField(block, fieldName) {
  // Match: fieldName: "value" (handles escaped quotes)
  const regex = new RegExp(`${fieldName}:\\s*"((?:[^"\\\\]|\\\\.)*)"`, 's');
  const match = block.match(regex);
  return match ? match[1].replace(/\\"/g, '"').replace(/\\n/g, '\n') : null;
}

function extractArrayOfStrings(block, fieldName) {
  const regex = new RegExp(`${fieldName}:\\s*\\[([\\s\\S]*?)\\]`, 's');
  const match = block.match(regex);
  if (!match) return [];
  const items = [];
  const strRegex = /"((?:[^"\\\\]|\\\\.)*)"/g;
  let m;
  while ((m = strRegex.exec(match[1])) !== null) {
    items.push(m[1].replace(/\\"/g, '"'));
  }
  return items;
}

function extractObjectArray(block, fieldName, keys) {
  const regex = new RegExp(`${fieldName}:\\s*\\[([\\s\\S]*?)\\n    \\]`, 's');
  const match = block.match(regex);
  if (!match) return [];
  const results = [];
  const objRegex = /\{([^}]*)\}/g;
  let m;
  while ((m = objRegex.exec(match[1])) !== null) {
    const obj = {};
    for (const key of keys) {
      const valMatch = m[1].match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
      if (valMatch) obj[key] = valMatch[1].replace(/\\"/g, '"');
    }
    if (Object.keys(obj).length > 0) results.push(obj);
  }
  return results;
}

function extractTechNames(block) {
  const regex = /techStack:\s*\[([\s\S]*?)\n    \]/s;
  const match = block.match(regex);
  if (!match) return [];
  const names = [];
  const nameRegex = /name:\s*"([^"]*)"/g;
  let m;
  while ((m = nameRegex.exec(match[1])) !== null) {
    names.push(m[1]);
  }
  return names;
}

function extractKeyDecisions(block) {
  const regex = /keyDecisions:\s*\[([\s\S]*?)\n    \],/s;
  const match = block.match(regex);
  if (!match) return [];
  const decisions = [];
  const objRegex = /\{([\s\S]*?)\n      \}/g;
  let m;
  while ((m = objRegex.exec(match[1])) !== null) {
    const title = m[1].match(/title:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    const reasoning = m[1].match(/reasoning:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    const outcome = m[1].match(/outcome:\s*"((?:[^"\\]|\\.)*)"/)?.[1] || '';
    decisions.push({ title, reasoning, outcome });
  }
  return decisions;
}

// --- Split source into project blocks ---

// Each project block starts with `{` followed by `id: N`
const blockSplits = source.split(/\n\s*\{\s*\n\s*id:\s*/);
const projectTexts = [];

for (let i = 1; i < blockSplits.length; i++) {
  const block = blockSplits[i];

  const name = extractField(block, 'name');
  const tagline = extractField(block, 'tagline');
  const type = extractField(block, 'type');
  const organization = extractField(block, 'organization');
  const overview = extractField(block, 'overview');
  const challenge = extractField(block, 'challenge');
  const solution = extractField(block, 'solution');
  const impact = extractField(block, 'impact');
  const liveUrl = extractField(block, 'liveUrl');
  const features = extractArrayOfStrings(block, 'features');
  const techStack = extractTechNames(block);
  const metrics = extractObjectArray(block, 'metrics', ['label', 'value']);
  const keyDecisions = extractKeyDecisions(block);

  let text = `## ${name}\n`;
  if (tagline) text += `${tagline}\n`;
  if (type) text += `Type: ${type} | Organization: ${organization || 'N/A'}\n`;
  if (liveUrl) text += `Live: ${liveUrl}\n`;
  text += '\n';
  if (overview) text += `Overview: ${overview}\n\n`;
  if (challenge) text += `Challenge: ${challenge}\n\n`;
  if (solution) text += `Solution: ${solution}\n\n`;
  if (impact) text += `Impact: ${impact}\n\n`;

  if (features.length > 0) {
    text += `Features:\n${features.map(f => `- ${f}`).join('\n')}\n\n`;
  }

  if (techStack.length > 0) {
    text += `Tech Stack: ${techStack.join(', ')}\n\n`;
  }

  if (metrics.length > 0) {
    text += `Metrics: ${metrics.map(m => `${m.label}: ${m.value}`).join(' | ')}\n\n`;
  }

  if (keyDecisions.length > 0) {
    text += `Key Decisions:\n`;
    for (const kd of keyDecisions) {
      text += `- ${kd.title}: ${kd.reasoning} Outcome: ${kd.outcome}\n`;
    }
    text += '\n';
  }

  projectTexts.push(text);
}

// --- Personal info (from AboutSection, ExperienceSection, ContactSection) ---

const personalInfo = `# About Kasif Ali

Name: Kasif Ali
Role: AI & IT Systems Architect
Experience: 10+ years shipping production systems
Education: M.Sc. Computer Science (2016), B.Sc. Computer Science (2012)
Location: Bengaluru, India
Email: kasifaliwdr@gmail.com
LinkedIn: linkedin.com/in/kasif-ali
Twitter: @kasifmuthu
Website: kasifali.tech

Philosophy: "I build systems that outlast me." / "The best AI systems don't replace workflows -- they make impossible workflows possible."

Recognition: 2x Buildathon Winner -- India's First GenAI Buildathon by 100xEngineers
- ZapGap: 1st Place, Agents Category (1st Edition, out of 1,502 participants)
- Investo (Nivesha): 1st Place, Open Category (2nd Edition, out of 3,497 participants)

## Core Expertise
1. LLM Systems & RAG: LangChain, LlamaIndex, Weaviate, ChromaDB, PGVector, GPT-4 MultiModals, Gemini MultiModals, Hybrid Semantic Search, Vector Embeddings
2. Agentic AI & Orchestration: Multi-Agent Orchestration, CrewAI, AutoGen, LangGraph, Python Agents, Google ADK, ReAct Agents, Autonomous Agents, Tool Calling
3. Vision & Multimodal AI: GPT-4 Vision, Gemini Agentic Vision, Document Intelligence, OCR + LLM, Vision-Language Models, Multimodal RAG
4. Enterprise Data Pipelines: PySpark, Databricks, Delta Lake at $300M+ scale
5. LLM Deployment & Operations: vLLM Serving, Ollama, Ray Serve, LiteLLM Gateway, Production LLM Operations, Cost Optimization, Model Serving
6. LLM Fine-tuning & Safety: NVIDIA NeMo, Mistral Models, Llama Models, LoRA/PEFT, Instruction Tuning, NeMo Guardrails, Responsible AI, Model Quantization

## Production Impact
- $300M+ Revenue Processed (SPOG - Databricks financial platform)
- 21K+ Emails AI-Classified (GPT-4 powered billing intelligence)
- 5,800+ Identities Managed (SAP -> GWS -> OneLogin automation)
- 80% Automation Rate (L1 tickets auto-resolved via Freddy AI)

## Career History
1. Amagi (2025-Present): Architect - AI & IT Systems | Media & Streaming Tech | Bengaluru
   - Shipped 12+ AI-powered internal tools: RAG pipelines, GPT-4 Vision invoice extraction, agentic workflows
   - Built VendorLens & Billing Dashboard saving 40L+/yr in vendor spend & invoice processing
   - Deployed Identity Lifecycle automating 100% of provisioning/offboarding across 370+ engineers
   - Tech: LLMs, RAG, Databricks, Terraform, AWS, Azure, Python, Langchain, Weaviate

2. Strand Life Sciences (2021-2025): Head of Information Systems | Genomics & Life Sciences | Bengaluru
   - Architected hybrid infra across AWS, Proxmox, Hetzner -- retired VMware
   - Deployed Freddy AI & Kubiya for GenAI-powered L1 automation
   - Won India's first GenAI Buildathon -- 2x recognition
   - Tech: AWS, Proxmox, Hetzner, Terraform, Freddy AI, Kubiya, JumpCloud, Okta, Twingate, Intune, Wazuh

3. Extreme Networks (2020-2021): Site Lead - IT Operations | Network Infrastructure | Bengaluru
   - Decommissioned 5+ physical offices, redesigned core IT for distributed teams
   - Maintained 100% infrastructure uptime throughout global remote transition
   - Tech: Jamf, Intune, ServiceNow, O365, Azure AD, VPN, MDM, SASE, DLP

4. Jifflenow (2016-2019): Senior IT Engineer | SaaS / Meeting Automation | Bengaluru
   - Built IT from ground up across 4 global offices -- zero consultants
   - Scaled from 21 to 350+ users with hybrid cloud architecture
   - Tech: AWS, Azure, VMware, JumpCloud, Okta, Jamf, Freshservice, Sophos, Juniper

5. CenturyLink / Lumen Technologies (2014-2016): System Administrator | Telecommunications | Bengaluru
   - Managed 2000+ device fleet -- servers, endpoints, IP phones
   - Automated OS deployment with WDS, SCCM, and Jamf
   - Tech: SCCM, WDS, Jamf, Exchange, Lync, VMware, Hyper-V, Active Directory

## What Kasif Can Help With
- AI Systems & LLM Integration
- Cloud Architecture & Migration
- Automation & DevOps
- Enterprise IT Strategy
`;

// --- Combine into full context ---

const fullContext = `${personalInfo}
# Projects (${projectTexts.length} total)

${projectTexts.join('\n---\n\n')}`;

// --- Write output ---

mkdirSync('netlify/functions', { recursive: true });

const outputContent = `// Auto-generated by scripts/generate-portfolio-context.mjs
// Re-run: node scripts/generate-portfolio-context.mjs
export const PORTFOLIO_CONTEXT = ${JSON.stringify(fullContext)};
`;

writeFileSync('netlify/functions/portfolio-context.mjs', outputContent);

console.log(`Portfolio context generated: ${projectTexts.length} projects, ~${Math.round(fullContext.length / 1000)}KB`);
console.log('Output: netlify/functions/portfolio-context.mjs');
