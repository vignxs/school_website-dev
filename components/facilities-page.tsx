"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Monitor,
  FlaskConical,
  Building,
  Snowflake,
  Users,
  Library,
  Computer,
  Trophy,
  GraduationCap,
  School,
  UserCheck,
} from "lucide-react"
import Image from "next/image"
import Header from "./header"
import Footer from "./footer"

export default function FacilitiesPage() {
  const [isVisible, setIsVisible] = useState({})

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

  const mainFacilities = [
    {
      icon: BookOpen,
      title: "Child Education",
      description:
        "Comprehensive educational programs designed for holistic child development with modern teaching methodologies.",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Monitor,
      title: "Smart Classroom",
      description: "Technology-integrated classrooms equipped with interactive displays and multimedia learning tools.",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: FlaskConical,
      title: "School Laboratory",
      description: "State-of-the-art science laboratories for practical learning and hands-on experiments.",
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
  ]

  const additionalFacilities = [
    {
      icon: Building,
      title: "A Spacious Campus",
      description: "Expansive campus providing ample space for learning, recreation, and extracurricular activities.",
      image: "/placeholder.svg?height=250&width=350",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      icon: Snowflake,
      title: "AC Class rooms for KG Sections",
      description: "Air-conditioned classrooms ensuring comfortable learning environment for our youngest students.",
      image: "/placeholder.svg?height=250&width=350",
      color: "bg-cyan-100",
      iconColor: "text-cyan-600",
    },
    {
      icon: Users,
      title: "Well qualified, experienced and dedicated team of teachers",
      description: "Expert faculty committed to providing quality education and nurturing student potential.",
      image: "/placeholder.svg?height=250&width=350",
      color: "bg-indigo-100",
      iconColor: "text-indigo-600",
    },
    {
      icon: Library,
      title: "Well-equipped library with more than 5000 books",
      description: "Extensive collection of books, journals, and digital resources for comprehensive learning.",
      image: "/placeholder.svg?height=250&width=350",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
    },
    {
      icon: Computer,
      title: "Computer Centre with more than 20 Multi-media computers",
      description: "Modern computer lab with latest technology for digital literacy and programming skills.",
      image: "/placeholder.svg?height=250&width=350",
      color: "bg-teal-100",
      iconColor: "text-teal-600",
    },
    {
      icon: Trophy,
      title: "Motivational Physical Education teachers and special coach in the field of sports",
      description: "Dedicated sports faculty and specialized coaches to develop athletic skills and sportsmanship.",
      image: "/placeholder.svg?height=250&width=350",
      color: "bg-yellow-100",
      iconColor: "text-yellow-600",
    },
  ]

  const classLevels = [
    {
      icon: School,
      title: "KG Class",
      description:
        "Kindergarten classes focused on foundational learning through play-based activities and creative exploration.",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      icon: BookOpen,
      title: "Primary Class",
      description: "Primary education emphasizing core subjects, basic skills development, and character building.",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: UserCheck,
      title: "Secondary Class",
      description:
        "Secondary education preparing students for higher studies with comprehensive curriculum and skill development.",
      image: "/placeholder.svg?height=200&width=300",
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: GraduationCap,
      title: "Higher Class",
      description: "Higher secondary education with specialized streams and career guidance for future success.",
      image: "/placeholder.svg?height=200&width=300",
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
        <div className="absolute top-1/3 left-1/4 w-14 h-14 bg-blue-100 opacity-35 transform rotate-30 rounded-lg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">School Facilities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our world-class infrastructure and comprehensive facilities designed to enhance learning and
            development
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section
        id="main-facilities"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["main-facilities"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Core Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Essential infrastructure that forms the foundation of our educational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mainFacilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Decorative elements on image */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 transform rotate-45 rounded-md"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-sm"></div>

                      {/* Icon overlay */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 ${facility.color} backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <facility.icon className={`w-6 h-6 ${facility.iconColor}`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities */}
      <section
        id="additional-facilities"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible["additional-facilities"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-blue-100 opacity-50 transform rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-16 w-10 h-10 bg-blue-50 opacity-60 rounded-md"></div>
        <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-blue-100 opacity-40 transform rotate-12 rounded-xl"></div>
        <div className="absolute bottom-16 right-8 w-18 h-18 bg-blue-50 opacity-50 rounded-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Additional Facilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive amenities that support holistic education and student development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFacilities.map((facility, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                      {/* Icon overlay */}
                      <div
                        className={`absolute bottom-3 right-3 w-10 h-10 ${facility.color} backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <facility.icon className={`w-5 h-5 ${facility.iconColor}`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">{facility.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class Levels */}
      <section
        id="class-levels"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["class-levels"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Class Levels</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Structured education programs tailored for different age groups and learning stages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {classLevels.map((level, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="relative h-36 overflow-hidden">
                      <Image
                        src={level.image || "/placeholder.svg"}
                        alt={level.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Icon overlay */}
                      <div
                        className={`absolute bottom-3 right-3 w-10 h-10 ${level.color} backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <level.icon className={`w-5 h-5 ${level.iconColor}`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{level.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{level.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        id="stats"
        data-animate
        className={`py-20 bg-blue-600 text-white relative overflow-hidden transition-all duration-1000 ${
          isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 left-16 w-16 h-16 bg-white/10 transform rotate-45 rounded-xl"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-white/10 rounded-lg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Facilities by Numbers</h2>
            <p className="text-xl text-blue-100">Quantifying our commitment to quality education</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Library className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-blue-100">Books in Library</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Computer className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Multimedia Computers</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">AC KG Classrooms</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1</div>
                <div className="text-blue-100">Spacious Campus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
