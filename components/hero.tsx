"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://www.vailankannisilverjubileeschool.com/images/banner/1.webp?height=800&width=1200",
      title: "Welcome to Excellence in Education",
      subtitle: "Nurturing young minds for over 25 years",
    },
    {
      image: "https://www.vailankannisilverjubileeschool.com/images/banner/3.webp?height=800&width=1200",
      title: "Modern Facilities & Expert Faculty",
      subtitle: "State-of-the-art infrastructure for holistic development",
    },
    {
      image: "https://www.vailankannisilverjubileeschool.com/images/banner/6.webp?height=800&width=1200",
      title: "Shaping Future Leaders",
      subtitle: "Join our legacy of academic excellence",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">{slides[currentSlide].title}</h1>
          <p className="text-xl lg:text-2xl mb-8 opacity-90">{slides[currentSlide].subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg">
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg bg-transparent"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 opacity-60 z-5 transform rotate-45 rounded-lg"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 bg-white/10 opacity-40 z-5 rounded-md"></div>
      <div className="absolute top-1/3 right-10 w-8 h-8 bg-white/10 opacity-50 z-5 transform rotate-12 rounded-sm"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/10 opacity-30 z-5 transform rotate-45 rounded-xl"></div>
      <div className="absolute top-1/2 left-20 w-10 h-10 bg-white/10 opacity-45 z-5 rounded-lg"></div>
      <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-white/10 opacity-35 z-5 transform rotate-30 rounded-md"></div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
