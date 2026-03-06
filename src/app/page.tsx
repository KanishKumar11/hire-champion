import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Stats } from "@/components/Stats"
import { Services } from "@/components/Services"
import { Trial } from "@/components/Trial"
import { HowItWorks } from "@/components/HowItWorks"
import { Testimonials } from "@/components/Testimonials"
import { TalentShowcase } from "@/components/TalentShowcase"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Trial />
      <HowItWorks />
      <Testimonials />
      <TalentShowcase />
      <Footer />
    </main>
  );
}
