"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Library, Trophy, GraduationCap, Target } from "lucide-react"
import Image from "next/image"
import Header from "./header"
import Footer from "./footer"

export default function AboutSchool() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Target,
      title: "Active Learning",
      description:
        "A teaching strategy that involves students actively participating in the learning process rather than merely passively listening.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Library,
      title: "Advanced Library",
      description: "All of our campuses have libraries with books, CD-ROMs, and DVDs for learning.",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Trophy,
      title: "Results",
      description: "Our students have achieved an outstanding results this year with 100% pass percentage.",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
    {
      icon: GraduationCap,
      title: "Expert Teachers",
      description: "Instructors who have devoted their entire, illustrious lives to the subject.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 opacity-40 transform rotate-45 rounded-xl"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-blue-50 opacity-60 rounded-2xl"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-blue-200 opacity-30 transform rotate-12 rounded-lg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">About Our School</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our commitment to educational excellence and holistic development since 2004
          </p>
        </div>
      </section>

      {/* Little About Us */}
      <section
        id="about-us"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["about-us"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Little About Us</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                VMSJ School founded in 2004 has never failed to demonstrate its spirit of constant search for excellence
                in every dimension and relevant to the needs of the time. It imports sound education to students based
                on spiritual and human value. I wish that the school will continue to aim at all round development of
                the students.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Founded in 2004</p>
                  <p className="text-sm text-gray-600">20+ Years of Educational Excellence</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-blue-100 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://www.vailankannisilverjubileeschool.com/images/fecilities/pc.jpg?height=600&width=800"
                  alt="About Our School"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 opacity-20 transform rotate-45 rounded-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 opacity-10 rounded-2xl"></div>
              <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-200 opacity-20 transform -translate-x-20 -translate-y-10 rotate-12 rounded-md"></div>
              <div className="absolute top-20 right-1/4 w-6 h-6 bg-blue-300 opacity-30 rounded-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-blue-100 opacity-50 transform rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-16 w-10 h-10 bg-blue-50 opacity-60 rounded-md"></div>
        <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-blue-100 opacity-40 transform rotate-12 rounded-xl"></div>
        <div className="absolute bottom-16 right-8 w-18 h-18 bg-blue-50 opacity-50 rounded-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Makes Us Special</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the key features that set our educational approach apart and drive student success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white"
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision-mission"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["vision-mission"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading educational institution that nurtures young minds, fostering excellence in academics,
                  character development, and spiritual growth, preparing students to become responsible global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide quality education based on spiritual and human values, ensuring holistic development of
                  every student through innovative teaching methods, modern facilities, and dedicated faculty support.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
