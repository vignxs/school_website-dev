"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, GraduationCap, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Events() {
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

    const section = document.getElementById("events")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const events = [
    {
      icon: BookOpen,
      title: "Children's Day",
      description:
        "For the students, it was a day full of enjoyment. The teachers made the day unique by planning several enjoyable activities for the students.",
      date: "Nov 14, 2024",
    },
    {
      icon: GraduationCap,
      title: "Teachers Day",
      description:
        "Our pupils welcomed instructors with warm greetings on the occasion of Dr. Radhakrishnan's birthday. A speech expressing gratitude to the teachers and a school hymn.",
      date: "Sep 5, 2024",
    },
    {
      icon: Trophy,
      title: "National Sports Day",
      description:
        "Volleyball, football and running were some of the exercises our students took part in to remember the significance of the day. A speech and a display of the house boards were given.",
      date: "Aug 29, 2024",
    },
  ]

  return (
    <section
      id="events"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our School Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating memorable moments and achievements throughout the academic year
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <event.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-blue-600 font-medium">{event.date}</p>
                  <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
                <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
