import { ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import  Image  from "next/image"

const sellers = [
  {
    id: 1,
    name: "Mama Mboga",
    rating: 4.9,
    description: "Fresh vegetables daily from local farms",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Tech Haven",
    rating: 4.8,
    description: "Quality electronics, competitive prices",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Kitenge Creations",
    rating: 4.7,
    description: "Authentic East African textiles and designs",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Safari Spices",
    rating: 5.0,
    description: "Premium local spices and seasonings",
    image: "/placeholder.svg?height=40&width=40",
  },
]

export default function FeaturedSellers() {
  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold font-poppins text-jua-blue">Featured Sellers</h2>
        <button className="text-jua-orange font-medium flex items-center text-sm">
          See All <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {sellers.map((seller) => (
          <Card key={seller.id} className="border-0 shadow-sm overflow-hidden">
            <CardContent className="p-3">
              <div className="flex items-center mb-2">
                <div className="h-10 w-10 rounded-full bg-jua-blue/10 overflow-hidden flex items-center justify-center">
                  <Image
                    src={seller.image || "/placeholder.svg"}
                    alt={seller.name}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="font-medium text-sm">{seller.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-3 w-3 fill-jua-yellow text-jua-yellow" />
                    <span className="text-xs ml-1">{seller.rating}</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 line-clamp-2">{seller.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
