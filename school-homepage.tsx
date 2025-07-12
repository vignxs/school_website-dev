"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Bus,
  BookOpen,
  Library,
  GraduationCap,
  Users,
  Building,
  UserCheck,
  Trophy,
  Monitor,
  FlaskConical,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SchoolHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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

  const navItems = ["Home", "About", "Academic", "Facilities", "Curriculum", "Gallery", "Careers", "Contact"]

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

  const events = [
    {
      icon: BookOpen,
      title: "Child Education",
      description: "Comprehensive educational programs designed for holistic child development",
      date: "Dec 15, 2024",
    },
    {
      icon: Monitor,
      title: "Smart Classroom",
      description: "Technology-integrated classrooms for enhanced learning experiences",
      date: "Dec 20, 2024",
    },
    {
      icon: FlaskConical,
      title: "School Laboratory",
      description: "State-of-the-art science laboratories for practical learning",
      date: "Dec 25, 2024",
    },
  ]

  const stats = [
    { icon: Users, number: "500+", label: "Students" },
    { icon: Building, number: "35", label: "Classrooms" },
    { icon: UserCheck, number: "40+", label: "Teachers" },
    { icon: Trophy, number: "100%", label: "Results" },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Vailankanni Silver Jubilee</h1>
                <p className="text-xs text-gray-600">Matriculation Higher Secondary School</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                Admission Open
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white mx-3 mt-4">Admission Open</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Welcome to
                  <span className="text-blue-600 block">Excellence in Education</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nurturing young minds for over 25 years with quality education, modern facilities, and dedicated
                  faculty. Join our legacy of academic excellence.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                  Contact Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
                >
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-blue-100 rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="School Building"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">About Our School</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Vailankanni Silver Jubilee Matriculation Higher Secondary School has been a beacon of educational
              excellence for 25 years. We are committed to providing holistic education that nurtures intellectual,
              emotional, and social development of every student. Our experienced faculty and modern infrastructure
              create an environment where students thrive and achieve their full potential.
            </p>
            <Link href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Read More <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible.features ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the exceptional facilities and services that make our school the perfect choice for your child&apos;s
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

      {/* Events/Blog Section */}
      <section
        id="events"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.events ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest educational initiatives and school developments
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

      {/* Gallery Preview */}
      <section
        id="gallery"
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible.gallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">School Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a glimpse into our vibrant school life and modern facilities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-video bg-gray-200 rounded-xl overflow-hidden group">
                <Image
                  src={`/placeholder.svg?height=300&width=400`}
                  alt={`Gallery Image ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
            >
              View More
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section
        id="stats"
        data-animate
        className={`py-20 bg-blue-600 text-white transition-all duration-1000 ${
          isVisible.stats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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

      {/* Contact CTA Banner */}
      <section
        id="cta"
        data-animate
        className={`py-20 bg-gradient-to-r from-blue-50 to-white transition-all duration-1000 ${
          isVisible.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Admissions Open – Contact us now to secure your child&apos;s future
            </h2>
            <p className="text-lg text-gray-600">
              Don&apos;t miss the opportunity to be part of our educational excellence. Limited seats available for the
              upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full bg-transparent"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* School Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold">Vailankanni Silver Jubilee</h3>
                  <p className="text-sm text-gray-400">Matriculation Higher Secondary School</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Committed to excellence in education for over 25 years, nurturing future leaders.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                  <div>
                    <p>123 Education Street,</p>
                    <p>Knowledge City, Tamil Nadu - 600001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <p>+91 98765 43210</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <p>info@vailankannischool.edu.in</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Vailankanni Silver Jubilee Matriculation Higher Secondary School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
