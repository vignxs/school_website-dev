"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Gallery() {
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

    const section = document.getElementById("gallery")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gallery"
      className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-12 w-16 h-16 bg-blue-100 opacity-40 transform rotate-45 rounded-xl"></div>
      <div className="absolute top-40 right-24 w-12 h-12 bg-blue-50 opacity-60 rounded-lg"></div>
      <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-blue-100 opacity-50 transform rotate-12 rounded-md"></div>
      <div className="absolute bottom-20 right-12 w-20 h-20 bg-blue-50 opacity-30 rounded-2xl"></div>
      <div className="absolute top-1/2 right-1/3 w-14 h-14 bg-blue-200 opacity-45 transform rotate-30 rounded-xl"></div>
      <div className="absolute bottom-1/3 left-16 w-8 h-8 bg-blue-100 opacity-50 rounded-sm"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">School Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our vibrant school life and modern facilities
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="aspect-video bg-gray-200 rounded-xl overflow-hidden group">
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={`Gallery Image ${item}`}
                width={400}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
          >
            View More
          </Button>
        </div>
      </div>
    </section>
  )
}
