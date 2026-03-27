# Vrinda Aagro - Premium Food Manufacturing Website

A modern, responsive website for Vrinda Aagro, a leading food manufacturing company specializing in chutneys, pastes, and sauces.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Multiple Pages**:
  - Home - Hero section with product showcase
  - Products - Detailed product information
  - About - Company history and mission
  - Services - Manufacturing and quality services
  - Contact - Contact form and location information
  - Career - Join our team opportunities
  - Standards - Quality certifications and compliance
  - News & Events - Latest updates
  - Articles - Knowledge base
  - Privacy Policy

- **Key Sections**:
  - Hero section with call-to-action
  - Product showcase with three main categories
  - Highlights of company capabilities
  - About section with key statistics
  - Newsletter subscription
  - Professional footer with links and social media

## 🛠️ Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - Component library
- **Lucide React** - Icons

## 📁 Project Structure

```
app/
├── page.tsx                 # Home page
├── products/page.tsx        # Products listing
├── about/page.tsx          # About company
├── contact/page.tsx        # Contact form
├── career/page.tsx         # Career opportunities
├── services/page.tsx       # Services offered
├── standards/page.tsx      # Quality standards
├── news/page.tsx          # News & events
├── articles/page.tsx      # Articles
├── privacy-policy/page.tsx # Privacy policy
├── layout.tsx             # Root layout
└── globals.css            # Global styles

components/
├── header.tsx             # Navigation header
├── footer.tsx             # Footer with links
├── hero.tsx               # Hero section
├── products-section.tsx   # Products showcase
├── highlights.tsx         # Features/highlights
├── about-section.tsx      # About section
├── newsletter.tsx         # Newsletter signup
└── ui/                    # Shadcn UI components

public/
├── products/              # Product images
├── robots.txt             # SEO robots file
└── sitemap.xml           # XML sitemap
```

## 🎨 Design System

- **Primary Color**: Organic green-brown (#35 0.12 70)
- **Accent Color**: Warm rust (#45 0.15 40)
- **Background**: Light cream/white
- **Dark Mode**: Full dark mode support

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Component Details

### Header
- Sticky navigation bar with logo
- Mobile-responsive menu
- Quick links to all main pages

### Footer
- Company information
- Quick links grouped by category
- Contact information
- Social media links
- Copyright notice

### Hero Section
- Eye-catching banner
- Company tagline
- Call-to-action buttons
- Decorative background elements

### Products Section
- Three main product categories
- Descriptions for each
- Hover effects

### Features/Highlights
- 4 key highlights with icons
- Grid layout for easy scanning

### Newsletter
- Email subscription form
- Form validation
- Success feedback

## 🔧 Customization

### Update Company Information
Edit the following files to customize:
- `components/footer.tsx` - Contact details, social links
- `components/hero.tsx` - Main messaging
- `app/layout.tsx` - Metadata and SEO

### Add New Pages
1. Create a new directory under `app/`
2. Add `page.tsx` file
3. Use the Header and Footer components
4. Add navigation link in `components/header.tsx`

### Change Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.12 70);
  --accent: oklch(0.45 0.15 40);
  /* ... other colors */
}
```

## 📱 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Main landing page |
| Products | `/products` | Product catalog |
| About | `/about` | Company information |
| Contact | `/contact` | Contact form & info |
| Services | `/services` | Service offerings |
| Career | `/career` | Job opportunities |
| Standards | `/standards` | Quality certifications |
| News | `/news` | Latest updates |
| Articles | `/articles` | Knowledge base |
| Privacy | `/privacy-policy` | Privacy policy |

## 🌐 SEO

- XML sitemap included
- Robots.txt for search engines
- Semantic HTML structure
- Meta tags in layout.tsx
- Open Graph ready

## 📞 Contact Information

**Vrinda Aagro**
- Address: Gut No. 45, Sharda Warehousing Compound, Ozar Airport Road, Jaulke, Nashik, Maharashtra
- Email: jagdish@vrindaaagro.com
- Founded: 2023

## 📊 Key Statistics

- 5000+ MT monthly production capacity
- Fully automated manufacturing lines
- 3 dedicated laboratories (IPQA, Central, Micro)
- Employee-centric safety protocols

## 🔐 Privacy & Security

- Privacy policy included
- Form data handling ready
- Secure contact form

## 📄 License

This website is created for Vrinda Aagro.

---

Built with ❤️ using Next.js and React
