import { Home, Search, ShoppingCart, User } from "lucide-react"

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-10">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <button className="flex flex-col items-center">
          <Home className="h-6 w-6 text-jua-blue" />
          <span className="text-xs mt-1 text-jua-blue font-medium">Home</span>
        </button>

        <button className="flex flex-col items-center">
          <Search className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Discover</span>
        </button>

        <button className="flex flex-col items-center">
          <ShoppingCart className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Cart</span>
        </button>

        <button className="flex flex-col items-center">
          <User className="h-6 w-6 text-gray-500" />
          <span className="text-xs mt-1 text-gray-500">Account</span>
        </button>
      </div>
    </div>
  )
}
