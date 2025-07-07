"use client"

import { useState, useEffect } from "react"
import { Users, Building, UserCheck, Trophy } from "lucide-react"

export default function Stats() {
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

    const section = document.getElementById("stats")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, number: "500+", label: "Students" },
    { icon: Building, number: "35", label: "Classrooms" },
    { icon: UserCheck, number: "40+", label: "Teachers" },
    { icon: Trophy, number: "100%", label: "Results" },
  ]

  return (
    <section
      id="stats"
      className={`py-20 bg-blue-600 text-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
