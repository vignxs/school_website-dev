"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Award, Star, Medal, Crown } from "lucide-react";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

export default function Academic() {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const class12Toppers = [
    {
      name: "VAISHNAVI K",
      rank: "1st Rank",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Vaishnavi.jpg?height=200&width=200",
    },
    {
      name: "PRAVEENA S V",
      rank: "2nd Rank",
      icon: Medal,
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Praveena.jpg?height=200&width=200",
    },
    {
      name: "LILLY SUDHA R",
      rank: "3rd Rank",
      icon: Award,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Lilly%20Sudha.jpg?height=200&width=200",
    },
  ];

  const class10Toppers = [
    {
      name: "BHUVANESHWARI B",
      rank: "1st Rank",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Bhavaneswari.jpg?height=200&width=200",
    },
    {
      name: "NETHRA R",
      rank: "1st Rank",
      icon: Crown,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Nethra.jpg?height=200&width=200",
    },
  ];

  const centumStudents = [
    {
      name: "VAISHNAVI K",
      subject: "Computer Science",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Vaishnavi.jpg?height=200&width=200",
    },
    {
      name: "ABINAYA K",
      subject: "Computer Science",
      image:
        "https://www.vailankannisilverjubileeschool.com/images/Abinaya.jpg?height=200&width=200",
    },
  ];

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
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating outstanding achievements and academic milestones of our
            students
          </p>
        </div>
      </section>

      {/* Academic Year Information */}
      <section
        id="academic-year"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["academic-year"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src="https://www.vailankannisilverjubileeschool.com/images/gallery/gallery19.JPG?height=500&width=600"
                    alt="Academic Year"
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
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Academic Year
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      <strong>The Academic Year is from June to May.</strong>{" "}
                      From the year 2013-2014, the school will have the
                      following compartment system.
                    </p>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Important Guidelines:
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• No student is permitted to go home for lunch.</li>
                        <li>
                          • The School office will remain closed on all
                          Government holidays and Sundays.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Class 12 Toppers */}
      <section
        id="class12-toppers"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible["class12-toppers"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-yellow-100 opacity-50 transform rotate-45 rounded-lg"></div>
        <div className="absolute bottom-24 right-12 w-18 h-18 bg-yellow-50 opacity-40 rounded-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Class 12 - Board Exam 2023
            </h2>
            <p className="text-lg text-gray-600">Our School Toppers</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-20 max-w-4xl mx-auto justify-center">
            {class12Toppers.map((topper, index) => (
              <Card
                key={index}
                className="w-64 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Student Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={topper.image || "/placeholder.svg"}
                        alt={topper.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Rank Badge */}
                      <div
                        className={`absolute top-4 left-4 ${topper.bgColor} text-gray-800 px-3 py-1 rounded-full text-sm font-bold`}
                      >
                        {topper.rank}
                      </div>

                      {/* Rank Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 ${topper.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <topper.icon className={`w-6 h-6 ${topper.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="px-5 pt-6 pb-4 text-center">
                      <h3 className="text-lg font-extrabold text-gray-800 tracking-wide uppercase mb-1">
                        {topper.name}
                      </h3>

                      <p
                        className={`text-base font-semibold ${topper.color} mb-2`}
                      >
                        {topper.rank}
                      </p>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-500 font-medium tracking-tight">
                          Class 12 Board Exam 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Centum Achievers */}
      <section
        id="centum"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.centum
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Centum in Computer Science
            </h2>
            <p className="text-lg text-gray-600">Perfect Score Achievers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {centumStudents.map((student, index) => (
              <Card
                key={index}
                className="w-64 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Student Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={student.image || "/placeholder.svg"}
                        alt={student.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Perfect Score Badge */}
                      <div className="absolute top-4 left-4 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                        100%
                      </div>

                      {/* Star Icon */}
                      <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-green-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 text-center bg-gradient-to-br from-green-50 to-white">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {student.name}
                      </h3>
                      <p className="text-green-600 font-semibold mb-3">
                        100% in {student.subject}
                      </p>
                      <div className="pt-3 border-t border-green-100">
                        <p className="text-sm text-gray-500">
                          Perfect Score Achievement
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Class 10 Toppers */}
      <section
        id="class10-toppers"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible["class10-toppers"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-16 w-16 h-16 bg-blue-100 opacity-40 transform rotate-30 rounded-xl"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-50 opacity-60 rounded-lg"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Class 10 - Board Exam 2023
            </h2>
            <p className="text-lg text-gray-600">Our School Toppers</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {class10Toppers.map((topper, index) => (
              <Card
                key={index}
                className="w-64 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white overflow-hidden py-0"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Student Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={topper.image || "/placeholder.svg"}
                        alt={topper.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Rank Badge */}
                      <div
                        className={`absolute top-4 left-4 ${topper.bgColor} text-gray-800 px-3 py-1 rounded-full text-sm font-bold`}
                      >
                        {topper.rank}
                      </div>

                      {/* Crown Icon */}
                      <div
                        className={`absolute bottom-4 right-4 w-12 h-12 ${topper.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <topper.icon className={`w-6 h-6 ${topper.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                <div className="px-5 pt-6 pb-4 text-center">
                      <h3 className="text-lg font-extrabold text-gray-800 tracking-wide uppercase mb-1">
                        {topper.name}
                      </h3>

                      <p
                        className={`text-base font-semibold ${topper.color} mb-2`}
                      >
                        {topper.rank}
                      </p>

                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-500 font-medium tracking-tight">
                          Class 10 Board Exam 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
