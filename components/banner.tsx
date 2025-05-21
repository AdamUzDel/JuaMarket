"use client"

import { useState, useEffect } from "react"
import { ShoppingBag, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import SearchBar from "./search-bar"

const messages = ["Tinda by Voice", "Shop in Luganda", "Get trusted sellers", "Free delivery on first order"]

const countries = [
  { name: "Kenya", code: "KE", currency: "KES" },
  { name: "Uganda", code: "UG", currency: "UGX" },
  { name: "Tanzania", code: "TZ", currency: "TZS" },
  { name: "Rwanda", code: "RW", currency: "RWF" },
]

export default function Banner() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isSticky, setIsSticky] = useState(false)

  // Handle message rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Handle sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className="bg-gradient-to-r from-jua-blue to-jua-blue/90 text-white py-4 px-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <ShoppingBag className="h-7 w-7 mr-2 text-jua-yellow" />
            <h1 className="text-2xl font-bold font-poppins">JuaMarket</h1>
          </div>
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm">
                <Globe className="h-3.5 w-3.5 mr-1" />
                {selectedCountry.code}
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {countries.map((country) => (
                  <DropdownMenuItem key={country.code} onClick={() => setSelectedCountry(country)}>
                    {country.name} ({country.currency})
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <button className="text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">Sign In</button>
          </div>
        </div>

        <div className="relative h-10 overflow-hidden bg-jua-blue/30 rounded-lg px-2 mb-4">
          <div className="h-10 flex items-center text-lg font-medium">
            <span className="bg-jua-yellow text-jua-blue px-2 py-0.5 rounded-md mr-2">New</span>
            {messages[currentMessage]}
          </div>
        </div>

        <div className="mt-2 relative">
          <SearchBar />
        </div>
      </div>

      {/* Sticky header that appears on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-jua-blue text-white py-2 px-4 shadow-md transition-transform duration-300 ${
          isSticky ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2 text-jua-yellow" />
            <h1 className="text-lg font-bold font-poppins">JuaMarket</h1>
          </div>
          <div className="w-1/2">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  )
}
