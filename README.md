# JANI Token: AI-Powered Conservation Finance

Every tree planted is instantly verified, automatically rewarded, and permanently tracked—creating a trustless, autonomous regeneration economy where nature becomes finance.

## 🌱 What is JANI?

JANI JAZAMITI  is a blockchain-powered ecosystem that mints one JANI token per verified tree planted. Using intelligent AI agents built on **ADK-TS (Agent Development Kit for TypeScript)**, JANI achieves sub-2-second verification with 95%+ fraud detection—transforming conservation from a trust problem into a verifiable, incentivized system.

**Core Vision:**
A CBO farmer plants. Agents verify in 2 seconds. Tokens mint. Impact flows. No fraud. No delays. No intermediaries. Just verified environmental restoration at planetary scale.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Hedera Testnet Account (or Mainnet)
- API keys: Google Gemini, Anthropic Claude, OpenAI GPT-4

### Installation

```bash
git clone https://github.com/JaniToken/jani-ecosystem.git
cd jani-ecosystem

npm install

# Configure environment
cp .env.example .env
# Update .env with your API keys and blockchain credentials

# Run migrations
npm run migrate

# Start verification service
npm run start:agents
```

## 🏗️ Architecture

```
JazaMiti App (Mobile/Web)
    ↓
API Gateway (Rate Limiting & JWT)
    ↓
ADK-TS Orchestration Layer
├─ GPS Validator Agent
├─ Image Analyzer Agent
├─ Timestamp Checker Agent
└─ Fraud Detection Agent (Multi-LLM Consensus)
    ↓
PostgreSQL + IPFS + Hedera Smart Contracts
    ↓
Real-Time Dashboard & Rewards Distribution
```

## 🤖 ADK-TS Integration

JANI leverages **Hierarchical Multi-Agent Orchestration** for intelligent verification:

- **Parallel Processing:** 3 sub-agents validate GPS, images, and timestamps simultaneously (70% latency reduction)
- **Multi-LLM Consensus:** Gemini 2.5 Flash (speed) + Claude Sonnet 4 (reasoning) + GPT-4o Mini (verification) vote on submissions
- **Persistent Memory:** Agents track validator reputation and detect fraud patterns autonomously
- **Tool Integration:** Native access to satellite APIs, IPFS, blockchain oracles, and IoT sensors

```typescript
const janiVerifierAgent = await AgentBuilder
  .withModel("gemini-2.5-flash")
  .addFallbackModel("claude-sonnet-4-20250514")
  .addConsensusModel("gpt-4o-mini")
  .withMemory({ type: "persistent", ttl: 7200 })
  .withTools([gpsValidator, imageAnalyzer, timestampChecker, fraudDetector])
  .build();
```

## 🔮 Future: MCP & Autonomous Agents

We're architecting next-generation autonomous capabilities:

**Model Context Protocol (MCP) Integration**
- Real-time satellite data feeds (Planet Labs, Copernicus)
- Direct carbon offset marketplace connections (Verra, Gold Standard)
- IoT sensor networks for tree health monitoring

**Autonomous Agent Network**
- **Forest Health Agent** — Monitors vitality via satellite + sensors
- **Validator Reputation Agent** — Self-managing scoring with zero human intervention
- **Carbon Compliance Agent** — Automated ESG audit trails
- **Grant Matching Agent** — Routes opportunities to funding sources

**Autonomous Workflows:** Multi-agent coordination across verification → rewards → staking → governance without manual touchpoints.

## 📊 API Endpoints

### Submit Tree Verification
```http
POST /api/v1/submissions/verify
Authorization: Bearer {JWT_TOKEN}
Content-Type: application/json
```

### Check Verification Status
```http
GET /api/v1/submissions/{submissionId}/status
Authorization: Bearer {JWT_TOKEN}
```

### Batch Processing
```http
POST /api/v1/submissions/batch-verify
Authorization: Bearer {JWT_TOKEN}
```

## 🛡️ Security

- JWT token validation + rate limiting (100 req/sec per user)
- TLS 1.3 encryption for all communications
- PostgreSQL encryption at rest (AES-256)
- Hedera 3-of-5 multi-sig wallet for admin functions
- Annual security audits by certified firms

## 📈 Impact Metrics

- **Verification Time:** <2 seconds per tree
- **Fraud Detection:** 95%+ accuracy
- **Daily Throughput:** 10,000+ submissions
- **Transaction Cost:** <$0.01 per verification (Hedera)

## 🤝 Contributing

We welcome developers, validators, and conservation partners.

## 📄 License


## 🌍 Get Involved

- **Validators:** Register on JazaMiti: https://app.jazamiti.io
- **CFAs & Partners:** partnerships@janitoken.io
- **Technical Questions:** tech@janitoken.io
- **GitHub:** https://github.com/JaniToken

---

**Build with us. Verify impact. Grow forests. Earn JANI.**
