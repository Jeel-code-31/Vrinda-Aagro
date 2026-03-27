import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { ProductSlider } from '@/components/ProductSlider'
import { Highlights } from '@/components/Highlights'
import { Clientele } from '@/components/Clientele'
import { Newsletter } from '@/components/Newsletter'
import { Footer } from '@/components/Footer'

// ✅ Import your animation section
import AnimationSection from '@/components/animation'

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <HeroSection />
        <ProductSlider />
          {/* 🔥 ADD HERE (best placement visually) */}
        <AnimationSection />
        <Highlights />
        <Clientele />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}