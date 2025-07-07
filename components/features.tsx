"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Bus, BookOpen, Library, GraduationCap } from "lucide-react"

export default function Features() {
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

    const section = document.getElementById("features")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Bus,
      title: "Transport Services",
      description: "Safe and reliable transportation for all students across the city",
    },
    {
      icon: BookOpen,
      title: "Active Learning",
      description: "Interactive teaching methods that engage students in the learning process",
    },
    {
      icon: Library,
      title: "Advanced Library",
      description: "Modern library with extensive collection of books and digital resources",
    },
    {
      icon: GraduationCap,
      title: "Expert Teachers",
      description: "Highly qualified and experienced faculty dedicated to student success",
    },
  ]

  return (
    <section
      id="features"
      className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-16 left-8 w-14 h-14 bg-blue-100 opacity-50 transform rotate-45 rounded-lg"></div>
      <div className="absolute top-32 right-16 w-10 h-10 bg-blue-50 opacity-60 rounded-md"></div>
      <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-blue-100 opacity-40 transform rotate-12 rounded-xl"></div>
      <div className="absolute bottom-16 right-8 w-18 h-18 bg-blue-50 opacity-50 rounded-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-200 opacity-45 transform rotate-30 rounded-sm"></div>
      <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-blue-100 opacity-35 transform rotate-45 rounded-lg"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the exceptional facilities and services that make our school the perfect choice for your child's
            education
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
