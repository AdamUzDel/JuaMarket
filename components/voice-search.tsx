"use client"

import { useState } from "react"
import { Mic } from "lucide-react"
import { toast } from "sonner"

export default function VoiceSearch() {
  const [isListening, setIsListening] = useState(false)

  const handleVoiceSearch = () => {
    setIsListening(true)

    // Simulate voice recognition
    setTimeout(() => {
      setIsListening(false)
      toast.success("Voice search activated", {
        description: "Searching for 'matooke near me'",
      })
    }, 2000)
  }

  return (
    <button
      onClick={handleVoiceSearch}
      className={`fixed bottom-20 right-4 p-3.5 rounded-full shadow-lg z-20 transition-all duration-300 ${
        isListening ? "bg-red-500 animate-pulse" : "bg-gradient-to-r from-jua-orange to-jua-yellow"
      }`}
    >
      <Mic className="h-6 w-6 text-white" />
    </button>
  )
}
