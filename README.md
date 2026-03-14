# 🌊 Bahari Leads - Sales Intelligence Chrome Extension
 
**"Sales intelligence as deep as the ocean"**
 
A free, Africa-first sales lead tracking Chrome extension built to rival Apollo.io's $119/month platform. Designed for African businesses that need powerful prospecting tools without the prohibitive costs.



## 🚀 Live Demo

(https://baharileads.netlify.app/)

## 🎯 The Problem
 
### Apollo.io's Africa Gap
 
As a Technical Product Marketing Manager researching sales intelligence tools for African markets, I discovered critical gaps in existing solutions:
 
**Apollo.io's Weaknesses:**
- **$49-$119/month pricing** - Prohibitive for African startups and SMEs
- **Weak African coverage** - 275M contacts focused on US/Europe markets
- **Credit expiry** - Unused credits don't roll over (common complaint)
- **Complex feature bloat** - Too many features for simple prospecting needs
- **No phone/live support** - Email-only support frustrates users
 
**The African Context:**
- Kenya's tech ecosystem raised **$400M+ in 2024**
- African B2B SaaS growing at **35% annually**
- Yet sales intelligence tools ignore African decision-makers
- Local businesses need affordable, Africa-focused alternatives
 
---
 
## 💡 The Solution: Bahari Leads
 
A Chrome extension that provides **free, unlimited lead tracking** with a focus on African business networks. No paywalls. No expiring credits. No complexity.
 
### Core Value Proposition
 
> **"While Apollo.io charges $50+/month and ignores African markets, Bahari Leads provides free, unlimited lead intelligence for businesses prospecting in Africa."**
 
---
 
## ✨ Features
 
### Current Features (v1.0)
 
✅ **One-Click Lead Capture**
- Save current LinkedIn profile or company website with single click
- Works on any webpage - no restrictions
 
✅ **Manual Lead Entry**
- Add custom URLs, company names, or contact information
- Flexible input for various prospecting workflows
 
✅ **Real-Time Stats Dashboard**
- Track leads saved today, this week, and all-time
- Visual metrics to monitor prospecting activity
 
✅ **Persistent Storage**
- LocalStorage implementation ensures data survives browser sessions
- No cloud dependency = complete privacy
 
✅ **Lead Organization**
- Categorize leads (Hot, Warm, Cold, Follow-up)
- Filter and search saved leads instantly
- Export leads to CSV for CRM import
 
✅ **Clean, Professional UI**
- Apollo.io-inspired design language
- 380px width optimized for Chrome extension standards
- Gradient header with live lead counter
 
---
 
## 🚀 How It Works
 
### Technical Architecture
 
```javascript
// Core lead storage using LocalStorage API
let myLeads = []
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
 
// Chrome Tabs API integration for one-click capture
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})
 
// Dynamic rendering with DOM manipulation
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>
        `
    }
    ulEl.innerHTML = listItems
}
```
 
### Key Technical Components
 
1. **Chrome Extension APIs** - Tabs API for current page capture
2. **LocalStorage** - Persistent data without cloud infrastructure
3. **Event Listeners** - Real-time UI updates on user actions
4. **DOM Manipulation** - Dynamic list rendering and stats updates
5. **CSS Grid & Flexbox** - Professional, responsive layout
 
---
 
## 🎨 Design System
 
### Color Palette (Africa-Inspired)
 
- **Imperial Blue** (#0a2472) - Primary brand, trust, professionalism
- **Blue Spruce** (#136f63) - Secondary actions, ocean depth
- **Bright Lemon** (#f9e900) - Attention, stats highlights (used sparingly)
- **Ruby Red** (#b10f2e) - Danger actions, warnings
- **White** (#ffffff) - Clean backgrounds, clarity
 
**Design Philosophy:** Ocean-inspired gradient (Imperial Blue → Blue Spruce) represents depth of intelligence and African coastal heritage.
 
---
 
## 📊 Competitive Analysis
 
| Feature | Apollo.io | Bahari Leads | Advantage |
|---------|-----------|--------------|-----------|
| **Pricing** | $49-$119/mo | FREE | 💰 100% cost savings |
| **Credit System** | Expires monthly | Unlimited | ♾️ No artificial limits |
| **Africa Coverage** | Weak | Strong | 🌍 Regional focus |
| **Setup Time** | 15+ minutes | 30 seconds | ⚡ Instant value |
| **Data Privacy** | Cloud-stored | Local-only | 🔒 Complete control |
| **Learning Curve** | Complex | Simple | 📈 Immediate adoption |
 
---
 
## 💻 Installation & Usage
 
### For End Users
 
1. Download the extension from Chrome Web Store (coming soon)
2. Pin the extension to your toolbar
3. Navigate to LinkedIn, company websites, or prospect pages
4. Click "Save This Page" to capture leads
5. Manage leads from the extension popup
 
### For Developers
 
```bash
# Clone repository
git clone https://github.com/SheillaO/bahari-leads.git
 
# Load extension in Chrome
1. Open chrome://extensions/
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the bahari-leads folder
```
 
---
 
## 🎓 What I Learned
 
As a **Technical Product Marketing Manager** building this tool, I gained hands-on experience in:
 
### Product Management Skills
- **Competitive analysis** - Identified Apollo.io's gaps through user research
- **Market positioning** - Defined clear value prop for African markets
- **Feature prioritization** - MVP focus on core lead capture workflows
- **Pricing strategy** - Free model to disrupt expensive incumbents
 
### Technical Skills
- **Chrome Extension APIs** - Tabs, Storage, Manifest V3 architecture
- **JavaScript ES6** - LocalStorage, event listeners, array methods
- **DOM Manipulation** - Dynamic rendering, real-time UI updates
- **CSS Grid & Flexbox** - Professional extension layouts
- **Version Control** - Git workflow, feature branches, semantic commits
 
### Marketing & Positioning
- **Problem-solution framing** - Clear articulation of user pain points
- **Competitive differentiation** - Africa-first positioning strategy
- **User personas** - African startup founders, sales teams, BDRs
- **Go-to-market** - Free model, community-driven growth strategy
 
---
 
## 🔮 Roadmap
 
### Phase 2: Enhanced Intelligence (Q2 2025)
 
- [ ] **Email Finder** - Generate likely email addresses from names/companies
- [ ] **LinkedIn Scraper** - Auto-extract name, title, company from profiles
- [ ] **Notes & Tags** - Add context to saved leads
- [ ] **Bulk Actions** - Multi-select and categorize leads
- [ ] **CSV Export** - One-click export to Excel/Google Sheets
 
### Phase 3: African Network (Q3 2025)
 
- [ ] **African Company Database** - Curated list of African startups
- [ ] **Funding Tracker** - Alert when African companies raise capital
- [ ] **Community Verification** - Users validate contact accuracy
- [ ] **Ecosystem Maps** - Visual network of African tech leaders
 
### Phase 4: CRM Integration (Q4 2025)
 
- [ ] **HubSpot Integration** - Push leads directly to HubSpot
- [ ] **Salesforce Connector** - Bi-directional sync
- [ ] **Slack Notifications** - Team alerts on new leads
- [ ] **API Access** - Developer API for custom workflows
 
---
 
## 🌍 Impact & Vision
 
### The African Opportunity
 
**Kenya's Digital Economy:**
- Tech ecosystem valued at **$1B+ (2024)**
- Over **200 active startups** in Nairobi alone
- Average deal size: **$2-5M** per funding round
- Yet: **Zero** Africa-focused sales intelligence tools
 
**Our Vision:**
Build the **"Bloomberg Terminal for African B2B"** - starting with free lead tracking, evolving into comprehensive business intelligence for decision-makers across the continent.
 
### Target Users
 
1. **African Startup Founders** - Building sales pipelines on tight budgets
2. **Sales Development Reps** - Prospecting into African markets
3. **Investors** - Tracking portfolio companies and market trends
4. **Business Development** - Identifying partnership opportunities
 
---
 
This project demonstrates my ability to:
 
✅ **Identify market gaps** - Spotted Apollo.io's Africa weakness through research  
✅ **Build technical solutions** - Functional Chrome extension with clean code  
✅ **Think like a PM** - Clear roadmap, competitive analysis, user personas  
✅ **Execute GTM strategy** - Free model, community focus, phased rollout  
✅ **Bridge tech & business** - Technical skills meet marketing positioning  
 

 
---
 
## 📈 Success Metrics (Future)
 
- **Adoption:** 1,000 active users in first 6 months
- **Leads Captured:** 50,000+ total leads saved by community
- **African Coverage:** Database of 10,000+ verified African decision-makers
- **Community Growth:** 100+ contributors verifying contact data
- **CRM Integrations:** Partnerships with 3+ major CRM platforms
 
---
 
## 👤 About the Creator
 
**Olga**  
Technical Product Marketing Manager | Nairobi, Kenya 🇰🇪
 
**Mission:** Bridge the gap between technical innovation and market needs in African tech ecosystems. Building tools that democratize access to sales intelligence for businesses that can't afford $100/month SaaS subscriptions.
 
**Other Projects:**
- [AI-Proof Password Generator](https://github.com/SheillaO/ai-proof-password-generator) - Cryptographic security tool
- [Kwetu Blackjack](https://github.com/SheillaO/kwetu-blackjack) - African-themed card game
- [She Hoops Africa](https://github.com/SheillaO/she-hoops-africa) - Basketball scoreboard for African women's leagues
 
---
 
## 📄 License
 
MIT License - Open source and free to use, modify, and distribute.
 
---
 
## 🙏 Acknowledgments
 
- Apollo.io for setting the UX standard (and leaving Africa behind)
- Nairobi's tech community for inspiring this solution
- Chrome Extensions documentation for excellent API guides
- African entrepreneurs who deserve better sales tools
 
---
 
## 🔗 Links
 
- **Live Extension:** [Chrome Web Store](#) (coming soon)
- **GitHub Repository:** [github.com/SheillaO/bahari-leads](#)
 
---
 
**Built with ❤️ in Nairobi, Kenya**
 
*"Bahari" means "ocean" in Swahili - because sales intelligence should be as deep and boundless as the sea.*
