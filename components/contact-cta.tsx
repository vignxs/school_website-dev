"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

export default function ContactCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact-cta")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="contact-cta"
      className={`py-20 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-16 left-16 w-14 h-14 bg-blue-200 opacity-30 transform rotate-45 rounded-lg"></div>
      <div className="absolute top-32 right-20 w-10 h-10 bg-blue-100 opacity-40 rounded-xl"></div>
      <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-blue-200 opacity-35 transform rotate-12 rounded-md"></div>
      <div className="absolute bottom-16 right-16 w-16 h-16 bg-blue-100 opacity-25 rounded-2xl"></div>
      <div className="absolute top-1/2 left-8 w-8 h-8 bg-blue-150 opacity-40 transform rotate-30 rounded-sm"></div>
      <div className="absolute bottom-1/2 right-8 w-18 h-18 bg-blue-200 opacity-30 transform rotate-45 rounded-xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Admissions Open – Contact us now to secure your child's future
          </h2>
          <p className="text-lg text-gray-600">
            Don't miss the opportunity to be part of our educational excellence. Limited seats available for the
            upcoming academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
