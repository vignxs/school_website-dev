"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Calendar, Users } from "lucide-react"

export default function AdmissionBanner() {
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

    const section = document.getElementById("admission-banner")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="admission-banner"
      className={`py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">🎓 Admissions Open for 2024-25</h2>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Join our family of excellence! Limited seats available. Secure your child's bright future with quality
              education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Calendar className="w-12 h-12 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold">Application Deadline</h3>
              <p className="text-blue-100">March 31, 2024</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="w-12 h-12 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold">Limited Seats</h3>
              <p className="text-blue-100">Classes LKG to XII</p>
            </div>
            <div className="text-center space-y-2">
              <Phone className="w-12 h-12 mx-auto text-blue-200" />
              <h3 className="text-lg font-semibold">Quick Response</h3>
              <p className="text-blue-100">24/7 Support Available</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Admission
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold bg-transparent"
            >
              <Mail className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
