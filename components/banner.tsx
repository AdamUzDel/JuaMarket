import { ShoppingBag } from "lucide-react"

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-jua-blue to-jua-blue/90 text-white py-4 px-4 relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <ShoppingBag className="h-7 w-7 mr-2 text-jua-yellow" />
          <h1 className="text-2xl font-bold font-poppins">JuaMarket</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">Sign In</button>
        </div>
      </div>

      <div className="relative h-10 overflow-hidden">
        <div className="absolute w-full animate-rotate-messages">
          <p className="h-10 flex items-center text-lg font-medium">
            <span className="bg-jua-yellow text-jua-blue px-2 py-0.5 rounded-md mr-2">New</span>
            Tinda by Voice
          </p>
          <p className="h-10 flex items-center text-lg font-medium">
            <span className="bg-jua-yellow text-jua-blue px-2 py-0.5 rounded-md mr-2">New</span>
            Shop in Luganda
          </p>
          <p className="h-10 flex items-center text-lg font-medium">
            <span className="bg-jua-yellow text-jua-blue px-2 py-0.5 rounded-md mr-2">New</span>
            Get trusted sellers
          </p>
          <p className="h-10 flex items-center text-lg font-medium">
            <span className="bg-jua-yellow text-jua-blue px-2 py-0.5 rounded-md mr-2">New</span>
            Tinda by Voice
          </p>
        </div>
      </div>

      <div className="mt-4 relative">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full py-2.5 px-4 rounded-full bg-white/90 text-jua-blue placeholder:text-jua-blue/60 focus:outline-none focus:ring-2 focus:ring-jua-yellow"
        />
      </div>
    </div>
  )
}
