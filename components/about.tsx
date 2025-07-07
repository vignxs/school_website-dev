"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function About() {
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

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">About Our School</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vailankanni Silver Jubilee Matriculation Higher Secondary School has been a beacon of educational
              excellence for 25 years. We are committed to providing holistic education that nurtures intellectual,
              emotional, and social development of every student.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our experienced faculty and modern infrastructure create an environment where students thrive and achieve
              their full potential. We believe in fostering creativity, critical thinking, and character development
              alongside academic excellence.
            </p>
            <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-lg">
              Read More <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-blue-100 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.vailankannisilverjubileeschool.com/images/wel-come/5.JPG?height=600&width=800"
                alt="About Our School"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600 opacity-20 transform rotate-45 rounded-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 opacity-10 rounded-2xl"></div>
            {/* Additional Decorative elements */}
            <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-200 opacity-20 transform -translate-x-20 -translate-y-10 rotate-12 rounded-md"></div>
            <div className="absolute top-20 right-1/4 w-6 h-6 bg-blue-300 opacity-30 rounded-sm"></div>
            <div className="absolute bottom-1/3 left-10 w-10 h-10 bg-blue-100 opacity-25 transform rotate-45 rounded-lg"></div>
            <div className="absolute top-10 left-1/3 w-12 h-12 bg-blue-200 opacity-20 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
