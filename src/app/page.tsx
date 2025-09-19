'use client'

import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'

// Dynamically import components with heavy client-side dependencies
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false })
const CompanyOverview = dynamic(() => import('@/components/CompanyOverview'), { ssr: false })
const ServicesShowcase = dynamic(() => import('@/components/ServicesShowcase'), { ssr: false })
const CurrentProjects = dynamic(() => import('@/components/CurrentProjects'), { ssr: false })
const ClientPortfolio = dynamic(() => import('@/components/ClientPortfolio'), { ssr: false })
const ProductCatalog = dynamic(() => import('@/components/ProductCatalog'), { ssr: false })
const Achievements = dynamic(() => import('@/components/Achievements'), { ssr: false })
const ContactSection = dynamic(() => import('@/components/ContactSection'), { ssr: false })

export default function Home() {
  useEffect(() => {
    // Import GSAP on the client side only
    const initGSAP = async () => {
      if (typeof window !== 'undefined') {
        const { gsap } = await import('gsap')
        const { ScrollTrigger } = await import('gsap/ScrollTrigger')
        
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.refresh()
      }
    }
    
    initGSAP()
    
    return () => {
      // Clean up GSAP ScrollTrigger instances
      if (typeof window !== 'undefined') {
        // Use a safer approach to access ScrollTrigger from window
        const gsapInstance = window as any;
        if (gsapInstance.ScrollTrigger && gsapInstance.ScrollTrigger.getAll) {
          gsapInstance.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
        }
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-deep-black">
      <Navigation />
      <HeroSection />
      <CompanyOverview />
      <ServicesShowcase />
      <CurrentProjects />
      <ClientPortfolio />
      <ProductCatalog />
      <Achievements />
      <ContactSection />
    </main>
  )
}
