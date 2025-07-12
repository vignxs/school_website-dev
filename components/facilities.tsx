"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Monitor, FlaskConical } from "lucide-react"
import Image from "next/image"

export default function Facilities() {
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

    const section = document.getElementById("facilities")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const facilities = [
    {
      icon: BookOpen,
      title: "Child Education",
      description: "A brand-new, fully developed theme in applications is education.",
      image: "https://www.vailankannisilverjubileeschool.com/images/fecilities/fecilities3.jpg?height=300&width=400",
    },
    {
      icon: Monitor,
      title: "Smart Classroom",
      description: "The majority of smart classrooms are instructor-led learning spaces with computers.",
      image: "https://www.vailankannisilverjubileeschool.com/images/fecilities/fecilities2.jpg?height=300&width=400",
    },
    {
      icon: FlaskConical,
      title: "School Laboratory",
      description:
        "When it comes to the teaching of science and computer, a lab is always regarded as an important and relevant component.",
      image: "https://www.vailankannisilverjubileeschool.com/images/fecilities/fecilities3.jpg?height=300&width=400",
    },
  ]

  return (
    <section
      id="facilities"
      className={`py-20 bg-white relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-50 opacity-60 transform rotate-45 rounded-xl"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-100 opacity-40 rounded-2xl"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-50 opacity-50 transform rotate-12 rounded-lg"></div>
      <div className="absolute bottom-40 right-10 w-24 h-24 bg-blue-100 opacity-30 rounded-xl"></div>
      <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-blue-200 opacity-55 transform rotate-45 rounded-md"></div>
      <div className="absolute bottom-1/4 right-1/4 w-14 h-14 bg-blue-50 opacity-40 rounded-lg"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">School Facilities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern infrastructure and advanced facilities designed to enhance the learning experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <facility.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{facility.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
