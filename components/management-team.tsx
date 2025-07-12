"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  User,
  Users,
  GraduationCap,
  Shield,
  BookOpen,
  Home,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Header from "./header";
import Footer from "./footer";

type SectionKeys =
  | "correspondent"
  | "principal"
  | "authorities"
  | "teaching-staff"
  | "support-staff";
type VisibilityState = Partial<Record<SectionKeys, boolean>>;

export default function ManagementTeam() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

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

  const administrativeAuthorities = [
    {
      name: "Mr. M. Abu Bucker",
      position: "Chairman",
      icon: Shield,
      image:
        "https://www.vailankannisilverjubileeschool.com/images/team-3/chair%20man.jpg?height=300&width=300",
      description:
        "Leading the institution with vision and strategic guidance for educational excellence.",
      email: "chairman@vailankannischool.edu.in",
      phone: "+91 98765 43210",
    },
    {
      name: "Mr. M.A. Musthafa",
      position: "Correspondent",
      icon: User,
      image:
        "https://www.vailankannisilverjubileeschool.com/images/team-3/Correspondent.jpg?height=300&width=300",
      description:
        "Ensuring smooth operations and maintaining high standards of academic quality.",
      email: "correspondent@vailankannischool.edu.in",
      phone: "+91 98765 43211",
    },
    {
      name: "Mrs. S.N. Fathima Gani",
      position: "Coordinator Deputy",
      icon: Users,
      image:
        "https://www.vailankannisilverjubileeschool.com/images/team-3/Deputy%20Correspondent.jpg?height=300&width=300",
      description:
        "Coordinating academic activities and supporting institutional development.",
      email: "coordinator@vailankannischool.edu.in",
      phone: "+91 98765 43212",
    },
    {
      name: "Mrs. Kanmani T",
      position: "Principal",
      icon: GraduationCap,
      image:
        "https://www.vailankannisilverjubileeschool.com/images/team-3/Principal.jpg?height=300&width=300",
      description:
        "Inspiring educational leadership and fostering a culture of academic excellence.",
      email: "principal@vailankannischool.edu.in",
      phone: "+91 98765 43213",
    },
  ];

  const teachingStaff = [
    "Mrs. Chandra S - B.Com.,M.A.,B.Ed.",
    "Mrs. Helen Mary - M.Sc.,B.Ed.",
    "Mrs. Sangeetha S - M.Sc.,B.Ed.",
    "Mrs. Nandhini M - M.A.,B.Ed.",
    "Mrs. Raim Sowmi C - M.Sc.,B.Ed.",
    "Mr. Sudhakar C D - M.Sc.,B.Ed.",
    "Mrs. Muneeswari G - M.Sc.,B.Ed.",
    "Mrs. Deepa B - M.Sc.,B.Ed.",
    "Mr. Nagarajan R - M.A, B.Ed.",
    "Mrs. Jayalakshmi - M.A, B.Ed.",
    "Mrs. Amsavalli A - M.A, B.Ed.",
    "Mrs. Asha C - M.A, B.Ed.",
    "Mrs. Beulah Prince G S - B.Sc.,DTEd.",
    "Mrs. Pradeepa A - B.Sc.,DTEd.",
    "Mrs. Lakshmi S - B.A.,B.Ed.",
    "Mrs. Sudha M - B.A.,B.Ed.",
    "Mrs. Sridevi K - B.A.,B.Ed.",
    "Mrs. Vini R - B.Sc.,B.Ed.",
    "Mrs. Gomathi M - B.Sc.,B.Ed.",
    "Mrs. Jayasudha L - Montessori Trained",
    "Mrs. Shamim Fathima K - Montessori Trained",
    "Mrs. Thamayandi - B.A., Montessori Trained",
  ];

  const nonTeachingStaff = [
    "Mrs. Sujatha B - M.A.",
    "Mrs. Sujatha S - B.Sc.",
    "Mrs. Subashini J - B.A.",
  ];

  const houseKeeping = ["Mrs. Manimegalai R", "Mrs. Jaya", "Mrs. Malliga L"];

  const watchmen = ["Mr. Iyappan G", "Mr. Velu R"];

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
            Management Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated leadership and faculty who guide our institution
            towards excellence in education
          </p>
        </div>
      </section>

      {/* Correspondent's Message */}
      <section
        id="correspondent"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.correspondent
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
                    src="https://www.vailankannisilverjubileeschool.com/images/team-3/Correspondent.jpg?height=500&width=300"
                    alt="Correspondent"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                  {/* Decorative overlay elements */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 transform rotate-45 rounded-lg"></div>
                  <div className="absolute bottom-6 left-6 w-8 h-8 bg-white/30 rounded-md"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      From The Correspondent&apos;s Desk
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      VMSJ School founded in 2004 has never failed to
                      demonstrate its spirit of constant search for excellence
                      in every dimension and relevant to the needs of the time.
                      It imports sound education to students based on spiritual
                      and human value. I wish that the school will continue to
                      aim at all round development of the students.
                    </p>
                    <p>
                      Most of our children are first generation learners. Even
                      though they have learning difficulties we make them to
                      learn easily and they also achieve more marks in X and XII
                      board exams.
                    </p>
                    <p>
                      This year is worked particularly on the focus of the value
                      based quality education and information of the children in
                      the spheres such as sports and other extra-curricular
                      activities, developing competitiveness, motivation for
                      success in career and life.
                    </p>
                    <p className="font-medium text-blue-600">
                      With all the best wishes.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Principal's Message */}
      <section
        id="principal"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible.principal
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-16 left-8 w-14 h-14 bg-blue-100 opacity-50 transform rotate-45 rounded-lg"></div>
        <div className="absolute bottom-24 right-12 w-18 h-18 bg-blue-50 opacity-40 rounded-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Section */}
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Principal Message
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
                    <p>
                      First and foremost, I extend my heartfelt gratitude to all
                      of you for your continued dedication and commitment to our
                      institution. Our school is more than just a building; it
                      is a community of learners, teachers, and support staff
                      who work together to create a nurturing and inspiring
                      environment for everyone.
                    </p>
                    <p>
                      To our students, I urge you to approach your studies with
                      curiosity and a thirst for knowledge. Education is not
                      merely about grades; it is about developing critical
                      thinking, creativity, and a lifelong passion for learning.
                    </p>
                    <p>
                      In conclusion, let us make this academic year one of
                      growth, resilience, and unity. Together, we can overcome
                      any challenges that come our way and achieve greatness as
                      a school community.
                    </p>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="font-semibold text-gray-900">
                        Warm regards,
                      </p>
                      <p className="font-bold text-blue-600 text-lg">
                        KANMANI T
                      </p>
                      <p className="text-sm text-gray-500">Principal</p>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                  <Image
                    src="https://www.vailankannisilverjubileeschool.com/images/team-3/Principal.jpg?height=500&width=600"
                    alt="Principal"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 to-transparent"></div>
                  {/* Decorative overlay elements */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-white/20 transform rotate-45 rounded-lg"></div>
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-white/30 rounded-md"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Administrative Authorities */}
      <section
        id="authorities"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible.authorities
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Administrative Authorities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team committed to educational excellence and
              institutional growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administrativeAuthorities.map((authority, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 overflow-hidden bg-gradient-to-b from-white to-blue-50/30"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={authority.image || "/placeholder.svg"}
                        alt={authority.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                      {/* Decorative elements on image */}
                      <div className="absolute top-3 right-3 w-6 h-6 bg-white/20 transform rotate-45 rounded-sm"></div>
                      <div className="absolute bottom-3 left-3 w-4 h-4 bg-white/30 rounded-sm"></div>

                      {/* Icon overlay */}
                      <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <authority.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4">
                      <div className="text-center mb-3">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">
                          {authority.name}
                        </h3>
                        <p className="text-blue-600 font-semibold text-sm mb-2">
                          {authority.position}
                        </p>
                      </div>

                      <p className="text-gray-600 text-xs leading-relaxed mb-4 text-center">
                        {authority.description}
                      </p>

                      {/* Contact Information */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                          <Mail className="w-3 h-3 text-blue-500" />
                          <span className="truncate">{authority.email}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                          <Phone className="w-3 h-3 text-blue-500" />
                          <span>{authority.phone}</span>
                        </div>
                      </div>

                      {/* School name */}
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-400 text-center leading-tight">
                          Vailankanni Silver Jubilee Matriculation Higher
                          Secondary School
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

      {/* Teaching Staff */}
      <section
        id="teaching-staff"
        data-animate
        className={`py-20 bg-gray-50 relative overflow-hidden transition-all duration-1000 ${
          isVisible["teaching-staff"]
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
              Teaching Staff
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our qualified and experienced educators dedicated to student
              success
            </p>
          </div>
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teachingStaff.map((teacher, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                  >
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-gray-700 text-sm">{teacher}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Support Staff */}
      <section
        id="support-staff"
        data-animate
        className={`py-20 transition-all duration-1000 ${
          isVisible["support-staff"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Support Staff
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated support team ensuring smooth school operations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Non-Teaching Staff */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Non-Teaching Staff
                  </h3>
                </div>
                <div className="space-y-3">
                  {nonTeachingStaff.map((staff, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {staff}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* House Keeping */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Home className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    House Keeping
                  </h3>
                </div>
                <div className="space-y-3">
                  {houseKeeping.map((staff, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {staff}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Watchmen */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Security
                  </h3>
                </div>
                <div className="space-y-3">
                  {watchmen.map((staff, index) => (
                    <p key={index} className="text-gray-600 text-sm">
                      {staff}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
