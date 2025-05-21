"use client"

import { useState } from "react"
import { Search, Mic } from "lucide-react"
import { toast } from "sonner"

export default function SearchBar() {
  const [isListening, setIsListening] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const handleVoiceSearch = () => {
    setIsListening(true)

    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false)
      setSearchQuery("matooke near me")
      toast.success("Voice search activated", {
        description: "Searching for 'matooke near me'",
      })
    }, 2000)
  }

  return (
    <div className="relative w-full">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-4 w-4 text-jua-blue/60" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="w-full py-2.5 pl-10 pr-12 rounded-full bg-white/90 text-jua-blue placeholder:text-jua-blue/60 focus:outline-none focus:ring-2 focus:ring-jua-yellow"
        />
        <button
          onClick={handleVoiceSearch}
          className={`absolute right-2 p-1.5 rounded-full ${
            isListening ? "bg-red-500 animate-pulse" : "bg-jua-orange/30"
          }`}
        >
          <Mic className={`h-4 w-4 ${isListening ? "text-white" : "text-jua-orange"}`} />
        </button>
      </div>
    </div>
  )
}
