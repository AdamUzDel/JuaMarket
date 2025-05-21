"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, X } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const toggleAssistant = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    // In a real app, you would send this message to your AI backend
    console.log("Sending message:", message)
    setMessage("")
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30" onClick={toggleAssistant} />}

      <div
        className={`fixed bottom-20 right-4 z-40 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-[calc(100%+80px)]"
        }`}
      >
        <Card className="w-[320px] shadow-lg border-0 rounded-2xl overflow-hidden">
          <CardHeader className="bg-jua-blue text-white py-3 px-4 flex flex-row justify-between items-center">
            <div className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">JuaMarket Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={toggleAssistant}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-4 h-[300px] overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="bg-jua-blue/10 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">Hello! I&apos;m your JuaMarket assistant. How can I help you today?</p>
              </div>

              <div className="bg-jua-blue/10 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">
                  I can help you find products, track orders, or answer questions about JuaMarket.
                </p>
              </div>

              <div className="flex justify-end">
                <div className="bg-jua-orange/10 p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Do you have fresh matooke?</p>
                </div>
              </div>

              <div className="bg-jua-blue/10 p-3 rounded-lg max-w-[80%]">
                <p className="text-sm">
                  Yes! We have fresh matooke from Kampala Farmers Co-op. Would you like me to show you the available
                  options?
                </p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" className="bg-jua-orange hover:bg-jua-orange/90">
                Send
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>

      {!isOpen && (
        <button
          onClick={toggleAssistant}
          className="fixed bottom-20 right-4 p-3.5 rounded-full shadow-lg z-30 bg-jua-blue"
          style={{ transform: "translateY(80px)" }}
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </button>
      )}
    </>
  )
}
