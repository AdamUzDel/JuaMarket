import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const deliveryPoints = [
  {
    id: 1,
    name: "Nakumatt Junction",
    distance: "0.8 km",
    status: "Open",
    hours: "8:00 AM - 8:00 PM",
  },
  {
    id: 2,
    name: "Kenyatta Market",
    distance: "1.2 km",
    status: "Open",
    hours: "7:00 AM - 6:00 PM",
  },
  {
    id: 3,
    name: "Kariakoo Hub",
    distance: "2.5 km",
    status: "Open",
    hours: "8:30 AM - 7:00 PM",
  },
]

export default function CommunityPoints() {
  return (
    <section className="py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold font-poppins text-jua-blue">Nearby Pickup Points</h2>
        <button className="text-sm text-jua-orange font-medium">View All</button>
      </div>

      <div className="space-y-3">
        {deliveryPoints.map((point) => (
          <Card key={point.id} className="overflow-hidden border-0 shadow-sm">
            <CardContent className="p-3">
              <div className="flex items-start">
                <div className="bg-jua-blue/10 p-2 rounded-lg mr-3">
                  <MapPin className="h-5 w-5 text-jua-blue" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{point.name}</h3>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">{point.status}</span>
                  </div>
                  <p className="text-sm text-gray-600">{point.hours}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-jua-orange font-medium">{point.distance} away</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <button className="text-xs text-jua-blue font-medium">Get Directions</button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
