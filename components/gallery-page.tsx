"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Header from "./header"
import Footer from "./footer"
export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "Learning", "Games", "Events"]


  const galleryImages = [
    { id: 1, category: "Learning", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/l1.jpg", alt: "Students in classroom" },
    { id: 2, category: "Learning", src: "https://www.vailankannisilverjubileeschool.com/images/fecilities/fecilities3.jpg", alt: "Science laboratory" },
    { id: 3, category: "Learning", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/l2.jpg", alt: "Library study session" },
    { id: 4, category: "Learning", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/a2.jpg", alt: "Computer class" },
    { id: 5, category: "Games", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/g2.jpg", alt: "Sports day activities" },
    { id: 6, category: "Games", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/g3.jpg", alt: "Football match" },
    { id: 7, category: "Games", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery17.JPG", alt: "Basketball court" },
    { id: 8, category: "Games", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery18.JPG", alt: "Athletic events" },
    { id: 9, category: "Events", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery15.JPG", alt: "Annual day celebration" },
    { id: 10, category: "Events", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery20.JPG", alt: "Cultural program" },
    { id: 11, category: "Events", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery23.JPG", alt: "Prize distribution" },
    { id: 12, category: "Events", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery12.JPG", alt: "Independence day" },
    { id: 13, category: "Games", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gallery24.jpg", alt: "Chess competition" },
    { id: 14, category: "Events", src: "https://www.vailankannisilverjubileeschool.com/images/gallery/gl-page-one/e2.jpg", alt: "Teachers day" },
  ]

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter)

    return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
            School Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore moments of learning, sports, and celebrations
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="sticky top-0 z-20 py-6 bg-white/80 backdrop-blur-sm border-b">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className="rounded-full px-6"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - shadcn/blocks Gallery 26 Style */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No images found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-white font-medium">{image.alt}</h3>
                        <p className="text-blue-200 text-sm mt-1">{image.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 text-blue-600 px-3 py-1 rounded-full text-xs font-medium backdrop-blur">
                    {image.category}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}