import { Navigation } from "@/components/Navigation"
import { Hero } from "@/components/Hero"
import { BlindFeatures } from "@/components/features/BlindFeatures"
import { DeafFeatures } from "@/components/features/DeafFeatures"
import { AllFeatures } from "@/components/features/AllFeatures"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Hero />
      
      {/* Features Sections */}
      <section className="container mx-auto px-4 py-24 space-y-24">
        <div>
          <h2 className="mb-12 text-center text-3xl font-bold">Features for Blind Users</h2>
          <BlindFeatures />
        </div>
        
        <div>
          <h2 className="mb-12 text-center text-3xl font-bold">Features for Deaf Users</h2>
          <DeafFeatures />
        </div>
        
        <div>
          <h2 className="mb-12 text-center text-3xl font-bold">Features for All Users</h2>
          <AllFeatures />
        </div>
      </section>
    </main>
  )
}