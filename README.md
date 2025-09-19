# Industrial Fabricators Website

A premium industrial fabrication company website built with Next.js 14, featuring immersive 3D animations, modern UI/UX, and comprehensive business showcase.

## 🚀 Features

- **Cinematic Hero Section** with 3D steel beam model and welding spark animations
- **Interactive Services Showcase** with 7 specialized fabrication services
- **Current Projects Carousel** featuring real client work
- **Infinite Client Logo Carousel** with smooth animations
- **3D Product Catalog** with interactive model viewer
- **Achievement Timeline** showcasing company milestones
- **Advanced Contact Form** with file upload and validation
- **Fully Responsive Design** optimized for all devices
- **Performance Optimized** with lazy loading and code splitting

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js + React Three Fiber
- **Form Handling**: React Hook Form
- **TypeScript**: Full type safety
- **Deployment**: Vercel-ready

## 📦 Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd fabricator-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

This project is configured for easy deployment to Vercel. Use our deployment script:

```bash
npm run deploy
```

This will guide you through the deployment process, including:
- Checking for build errors
- Installing Vercel CLI if needed
- Deploying to preview or production environment

## 🏗 Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── HeroSection.tsx    # Hero with 3D animations
│   ├── CompanyOverview.tsx # About section
│   ├── ServicesShowcase.tsx # Services grid
│   ├── CurrentProjects.tsx # Projects carousel
│   ├── ClientPortfolio.tsx # Client logos
│   ├── ProductCatalog.tsx # 3D product viewer
│   ├── Achievements.tsx   # Timeline component
│   └── ContactSection.tsx # Contact form
├── hooks/                 # Custom React hooks
│   └── useScrollAnimation.ts # GSAP scroll animations
└── lib/                   # Utility functions
    └── utils.ts           # Helper functions
```

## 🎨 Design System

### Color Palette
- **Primary**: Steel Blue (#1B365D)
- **Secondary**: Bright Orange (#FF6B35)
- **Neutral Dark**: Charcoal Black (#1A1A1A)
- **Neutral Light**: Steel Gray (#5A6C7D)
- **Accent**: Electric Blue (#00D4FF)
- **Background**: Deep Black (#0D0D0D)

### Typography
- **Headlines**: Inter/Orbitron (Bold, Industrial)
- **Body Text**: Inter (Clean, Readable)
- **Accent Text**: Orbitron (Tech/Industrial)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## ⚡ Performance Features

- **Lazy Loading**: 3D models and heavy animations
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Bundle Optimization**: Tree shaking and minification
- **SEO Ready**: Meta tags and structured data

## 🎯 Key Sections

### 1. Hero Section
- Full-screen cinematic experience
- 3D rotating steel beam model
- Animated welding spark particles
- Typography reveal animations
- Prominent call-to-action buttons

### 2. Services Showcase
Interactive cards for:
- Fabrication of Steel Structure
- Erection of Steel Structure
- Storage Tank
- Pipeline (Gas, Water & Underground)
- Chimney
- Hopper
- Conveyor Line

### 3. Current Projects
Featured projects from:
- Kirby Building Private Limited
- Shree Umiya Steel Structure
- Smith Structure Private Limited

### 4. Product Catalog
- Interactive 3D model viewer
- Product filtering and search
- Detailed specifications
- Quote request integration

### 5. Contact Form
- Advanced validation
- File upload capability
- Multiple contact methods
- Real-time form feedback

## 🔧 Customization

### Adding New Services
Edit `src/components/ServicesShowcase.tsx` and add to the services array:

```typescript
{
  id: 8,
  title: 'Your New Service',
  description: 'Service description',
  icon: YourIcon,
  features: ['Feature 1', 'Feature 2'],
  // ...
}
```

### Modifying 3D Models
3D models are defined in `src/components/ProductCatalog.tsx`. Add new models:

```typescript
function YourNewModel() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#5A6C7D" />
    </mesh>
  )
}
```

### Updating Company Information
Edit contact details in `src/components/ContactSection.tsx` and navigation in `src/components/Navigation.tsx`.

## 📊 Analytics & Monitoring

The website is ready for:
- Google Analytics 4
- Performance monitoring
- Error tracking
- User behavior analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Industrial Fabricators.

## 🆘 Support

For technical support or customization requests:
- Email: dev@industrialfabricators.com
- Phone: +1 (234) 567-8900

---

Built with ❤️ for Industrial Excellence
