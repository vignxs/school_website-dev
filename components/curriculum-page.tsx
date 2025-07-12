"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Target, Users, MessageCircle, Activity, GraduationCap, School, Trophy } from "lucide-react"
import Image from "next/image"
import Header from "./header"
import Footer from "./footer"

export default function CurriculumPage() {
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

  const curriculumFeatures = [
    {
      icon: BookOpen,
      title: "Samacher Kalvi Curriculum",
      description: "Comprehensive curriculum for classes L.K.G. to Std X following the latest educational standards.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      image: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/l2.jpg?height=250&width=350",
    },
    {
      icon: GraduationCap,
      title: "Higher Secondary Board",
      description: "Tamil Nadu State Government Board curriculum for classes XI and XII with specialized streams.",
      color: "bg-green-100",
      iconColor: "text-green-600",
      image: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/l1.jpg?height=250&width=350",
    },
    {
      icon: Target,
      title: "Talent Development",
      description: "Focus on identifying and nurturing inner talents of students for holistic personality development.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      image: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery24.jpg?height=250&width=350",
    },
    {
      icon: Users,
      title: "Character Building",
      description: "Emphasis on good health, conduct, and moral values to shape responsible citizens.",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      image: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery15.JPG?height=250&width=350",
    },
    {
      icon: MessageCircle,
      title: "Communication Skills",
      description: "Developing powerful communicative skills through interactive learning methodologies.",
      color: "bg-cyan-100",
      iconColor: "text-cyan-600",
      image: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery1.JPG?height=250&width=350",
    },
    {
      icon: Activity,
      title: "Activity-Based Learning",
      description: "Dynamic curriculum implementation focusing on practical knowledge and hands-on experience.",
      color: "bg-pink-100",
      iconColor: "text-pink-600",
      image: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/e2.jpg?height=250&width=350",
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
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">School Curriculum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture talents and develop well-rounded personalities
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section
        id="curriculum-overview"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["curriculum-overview"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl overflow-hidden py-0">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-84 lg:h-auto">
                  <Image
                    src="https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/l1.jpg?height=500&width=600"
                    alt="School Curriculum"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                  {/* Decorative overlay elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 transform rotate-45 rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-md"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12 bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <School className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Our Curriculum Approach</h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      <strong>
                        The School provides the curriculum of Samacher Kalvi for the classes L.K.G. to Std X.
                      </strong>
                      It provides the curriculum of the Board of Higher Secondary, Tamil Nadu State Govt. for classes XI
                      and XII.
                    </p>
                    <p>
                      The School aims to tap inner talents of the students and provides ample opportunities to develop
                      his/her personality to serve the nation.
                    </p>
                    <p>
                      The School motivates the students to have good health, good conduct. The students are exposed to
                      powerful communicative skills. Activity based curriculum is implemented to make the student
                      dynamic and good at practical knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Curriculum Features */}
      <section
        id="curriculum-features"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible["curriculum-features"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-blue-100 opacity-50 transform rotate-45 rounded-lg"></div>
        <div className="absolute top-32 right-16 w-10 h-10 bg-blue-50 opacity-60 rounded-md"></div>
        <div className="absolute bottom-24 left-1/3 w-12 h-12 bg-blue-100 opacity-40 transform rotate-12 rounded-xl"></div>
        <div className="absolute bottom-16 right-8 w-18 h-18 bg-blue-50 opacity-50 rounded-2xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Curriculum Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key aspects of our educational approach that ensure comprehensive student development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumFeatures.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Icon overlay */}
                      <div
                        className={`absolute bottom-3 right-3 w-10 h-10 ${feature.color} backdrop-blur-sm rounded-full flex items-center justify-center`}
                      >
                        <feature.icon className={`w-5 h-5 ${feature.iconColor}`} />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section
        id="goals"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.goals ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Educational Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive objectives that guide our curriculum design and implementation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Academic Excellence</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Samacher Kalvi curriculum for foundational classes (L.K.G. to Std X)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Tamil Nadu State Board curriculum for higher secondary (XI & XII)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Activity-based learning for practical knowledge application</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Holistic Development</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Talent identification and personality development programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Focus on good health, conduct, and moral values</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Communication skills development for confident expression</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
