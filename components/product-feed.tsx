"use client"

import { useState } from "react"
import { ChevronUp, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const products = [
  {
    id: 1,
    name: "Matooke Fresh Bundle",
    price: "15,000 UGX",
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=200",
    seller: "Kampala Farmers Co-op",
    discount: "20% OFF",
  },
  {
    id: 2,
    name: "Kitenge Fabric - 2 Yards",
    price: "25,000 UGX",
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200",
    seller: "Dar Textiles",
    discount: "Buy 1 Get 1 Free",
  },
  {
    id: 3,
    name: "Solar Power Bank 20000mAh",
    price: "75,000 UGX",
    rating: 4.7,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=200",
    seller: "TechHub Nairobi",
    discount: "New Arrival",
  },
  {
    id: 4,
    name: "Handmade Sisal Basket",
    price: "18,500 UGX",
    rating: 5.0,
    reviews: 56,
    image: "/placeholder.svg?height=200&width=200",
    seller: "Rwanda Crafts Association",
    discount: "Limited Stock",
  },
]

export default function ProductFeed() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleSwipeUp = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const handleAddToCart = (productName: string) => {
    toast(`Added ${productName} to cart`, {
      description: "Continue shopping or checkout now",
      action: {
        label: "View Cart",
        onClick: () => console.log("View cart clicked"),
      },
    })
  }

  const currentProduct = products[currentIndex]

  return (
    <section className="py-4">
      <h2 className="text-lg font-semibold mb-3 font-poppins text-jua-blue">Discover Deals</h2>

      <div className="feed-container relative overflow-hidden rounded-xl">
        <Card className="product-card border-0 shadow-md h-full">
          <CardContent className="p-0 h-full flex flex-col">
            <div className="relative">
              <div className="absolute top-2 left-2 z-10 bg-jua-orange text-white px-2 py-1 rounded-full text-xs font-medium">
                {currentProduct.discount}
              </div>
              <img
                src={currentProduct.image || "/placeholder.svg"}
                alt={currentProduct.name}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-4 flex-grow">
              <h3 className="font-semibold text-lg">{currentProduct.name}</h3>
              <p className="text-jua-blue font-bold text-xl">{currentProduct.price}</p>

              <div className="flex items-center mt-1 mb-2">
                <Star className="h-4 w-4 fill-jua-yellow text-jua-yellow" />
                <span className="ml-1 text-sm font-medium">{currentProduct.rating}</span>
                <span className="ml-1 text-sm text-gray-500">({currentProduct.reviews} reviews)</span>
              </div>

              <p className="text-sm text-gray-600">Seller: {currentProduct.seller}</p>

              <div className="mt-4">
                <Button
                  className="w-full bg-jua-orange hover:bg-jua-orange/90 text-white"
                  onClick={() => handleAddToCart(currentProduct.name)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <button
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md animate-pulse-soft"
          onClick={handleSwipeUp}
        >
          <ChevronUp className="h-5 w-5 text-jua-blue" />
        </button>
      </div>

      <div className="flex justify-center mt-3">
        {products.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-1.5 rounded-full mx-1 ${idx === currentIndex ? "bg-jua-orange" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  )
}
