import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
// If you want to try the animated variant, swap <Hero /> with <ProductHero />
// import ProductHero from '@/components/ProductHero'
import { KeyCapabilities } from '@/components/KeyCapabilities'
import { WhyChoose } from '@/components/WhyChoose'
import { VideoSection } from '@/components/VideoSection'
import { TechnologyAdvantages } from '@/components/TechnologyAdvantages'
import { Pricing } from '@/components/Pricing'
import { ConsultationForm } from '@/components/ConsultationForm'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      {/** Replace above with <ProductHero /> to use your animated variant */}
      <KeyCapabilities />
      <WhyChoose />
      <VideoSection />
      <TechnologyAdvantages />
      <Pricing />
      <ConsultationForm />
      <Footer />
    </main>
  )
}


