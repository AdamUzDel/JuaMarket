import Banner from "@/components/banner"
import Categories from "@/components/categories"
import CommunityPoints from "@/components/community-points"
import Footer from "@/components/footer"
import ProductFeed from "@/components/product-feed"
import VoiceSearch from "@/components/voice-search"
import AIAssistant from "@/components/ai-assistant"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Banner />
      <div className="container px-4 py-2 mx-auto max-w-md">
        <Categories />
        <ProductFeed />
        <CommunityPoints />
      </div>
      <Footer />
      <VoiceSearch />
      <AIAssistant />
    </main>
  )
}
