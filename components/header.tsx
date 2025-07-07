"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)

  const navItems = ["Home", "Academic", "Facilities", "Curriculum", "Gallery", "Careers", "Contact"]

  return (
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
                href={
                  item === "Academic" ? "/academic" : item === "Facilities" ? "/facilities" : `#${item.toLowerCase()}`
                }
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </Link>
            ))}

            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsAboutDropdownOpen(true)}
                onMouseLeave={() => setIsAboutDropdownOpen(false)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200 text-sm font-medium"
              >
                About <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {isAboutDropdownOpen && (
                <div
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                >
                  <Link
                    href="/about-school"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    About School
                  </Link>
                  <Link
                    href="/management-team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Management Team
                  </Link>
                </div>
              )}
            </div>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">Admission Open</Button>
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
              <div className="px-3 py-2">
                <p className="text-gray-700 font-medium mb-2">About</p>
                <Link
                  href="#about"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 pl-4 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About School
                </Link>
                <Link
                  href="/management-team"
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200 pl-4 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Management Team
                </Link>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mx-3 mt-4">Admission Open</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
