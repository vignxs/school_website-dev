"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import Header from "./header"
import Footer from "./footer"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Message sent successfully!")
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Dr.Ramamoorthy Nagar, Madipakkam,", "Chennai – 600 091"],
      color: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["044 – 22476880"],
      color: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      icon: Mail,
      title: "E-mail Address",
      details: ["vmsjschool@gmail.com"],
      color: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: Globe,
      title: "Website",
      details: ["vailankannisilverjubileeschool.com"],
      color: "bg-orange-100",
      iconColor: "text-orange-600",
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
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or any questions about our school
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section
        id="contact-info"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["contact-info"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re here to help and answer any questions you might have
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-3 border-0 bg-white"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div
                    className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className={`w-8 h-8 ${info.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="contact-form"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible["contact-form"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-blue-100 opacity-50 transform rotate-45 rounded-lg"></div>
        <div className="absolute bottom-24 right-12 w-18 h-18 bg-blue-50 opacity-40 rounded-xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600">Send us a message and we&apos;ll get back to you as soon as possible</p>
          </div>

          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Enter message subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                    rows={6}
                    className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 rounded-full text-lg font-semibold"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      <section
        id="map"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.map ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600">Visit our campus located in the heart of Chennai</p>
          </div>

          <Card className="border-0 shadow-xl overflow-hidden">
  <CardContent className="p-0">
    <div className="aspect-video">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2201020572456!2d80.1902796750762!3d12.957763087356302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dd96171a053%3A0xc6e8ded557a44235!2sVailankanni%20Silver%20Jubilee%20Matriculation%20Higher%20Secondary%20School!5e0!3m2!1sen!2sin!4v1751981214026!5m2!1sen!2sin"
        width="100%"
        height="100%"
        className="w-full h-full border-0"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </CardContent>
</Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
