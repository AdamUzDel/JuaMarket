import Banner from "@/components/banner"
import Categories from "@/components/categories"
import CommunityPoints from "@/components/community-points"
import FeaturedSellers from "@/components/featured-sellers"
import Footer from "@/components/footer"
import ProductFeed from "@/components/product-feed"
import AIAssistant from "@/components/ai-assistant"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white pb-16">
      <Banner />
      <div className="container px-4 py-2 mx-auto max-w-md">
        <Categories />
        <ProductFeed />
        <CommunityPoints />
        <FeaturedSellers />
      </div>
      <Footer />
      <AIAssistant />
    </main>
  )
}
