import React from 'react'
import { Button } from "@/components/ui/button"

interface Project {
  id: number;
  title: string;
  category: string;
  imageBg: string;
  content?: React.ReactNode;
  hasAward?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Perlon AI",
    category: "UX STRATEGY, UI DESIGN",
    imageBg: "bg-[#f3f3f3]",
    content: (
      <div className="w-full h-full p-4 md:p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl w-full h-full overflow-hidden border border-gray-100 flex flex-col">
          <div className="h-8 border-b border-gray-100 bg-gray-50 flex items-center px-4 gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex-1 p-4">
            <div className="w-1/3 h-4 bg-gray-100 rounded mb-4"></div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="h-16 bg-gray-50 rounded border border-gray-100"></div>
              <div className="h-16 bg-gray-50 rounded border border-gray-100"></div>
              <div className="h-16 bg-gray-50 rounded border border-gray-100"></div>
            </div>
            <div className="h-32 bg-gray-50 rounded border border-gray-100 w-full"></div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "AeroTrack",
    category: "LOGO DESIGN, BRAND IDENTITY",
    imageBg: "bg-[#e2eeff]",
    hasAward: true,
    content: (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-tr-2xl rounded-bl-2xl rotate-12 flex items-center justify-center shadow-lg">
             <div className="w-6 h-6 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-3xl md:text-5xl font-bold text-[#1a1a1a] tracking-tight">AeroTrack</span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Vizee Studio",
    category: "WEB DESIGN, E-COMMERCE",
    imageBg: "bg-[#faf5ff]",
    content: (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500">
          <div className="w-12 h-12 border-4 border-white rounded-sm rotate-45"></div>
        </div>
        <div className="space-y-2 w-full max-w-[200px]">
          <div className="h-2 bg-purple-200 rounded-full w-full opacity-50"></div>
          <div className="h-2 bg-purple-200 rounded-full w-2/3 mx-auto opacity-50"></div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Launch UI",
    category: "DESIGN SYSTEM, DEVELOPMENT",
    imageBg: "bg-[#fdf2f8]",
    content: (
      <div className="w-full h-full p-6 flex items-center justify-center">
        <div className="grid grid-cols-2 gap-4 w-full h-full">
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 flex flex-col items-center justify-center p-4">
            <div className="w-10 h-10 bg-pink-500 rounded-lg mb-2 shadow-lg shadow-pink-200"></div>
            <div className="w-12 h-2 bg-pink-100 rounded-full"></div>
          </div>
          <div className="bg-pink-500 rounded-2xl shadow-lg border border-pink-400 flex flex-col items-center justify-center p-4">
            <div className="w-10 h-10 bg-white rounded-lg mb-2"></div>
            <div className="w-12 h-2 bg-pink-200 rounded-full"></div>
          </div>
          <div className="col-span-2 bg-white rounded-2xl shadow-sm border border-pink-100 flex items-center justify-between p-4 px-6">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-200"></div>
              <div className="w-2 h-2 rounded-full bg-pink-200"></div>
              <div className="w-2 h-2 rounded-full bg-pink-200"></div>
            </div>
            <div className="w-16 h-6 bg-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }
]

export default function Projects() {
  return (
    <section className="bg-white py-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-black">
            Naše projekty
          </h2>
          <Button variant="rounded" size="lg" className="w-fit px-8 py-4 text-[13px] font-medium tracking-normal normal-case">
            Zobrazit všechny projekty
          </Button>
        </div>

        {/* Projects Grid - Irregular/Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-10 md:gap-y-0">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${
                index % 2 === 1 ? 'md:mt-32' : ''
              } ${index > 1 ? 'md:mt-12' : ''} ${index % 2 === 1 && index > 1 ? 'md:mt-44' : ''}`}
            >
              {/* Image Area */}
              <div className={`relative aspect-[4/3] md:aspect-[1/1] rounded-[24px] overflow-hidden ${project.imageBg} transition-all duration-700 group-hover:shadow-2xl`}>
                <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                  {project.content}
                </div>
                
                {/* Award Badge (W. Honors) */}
                {project.hasAward && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white py-6 px-3 flex flex-col items-center gap-3 rounded-l-2xl shadow-xl">
                    <span className="text-[14px] font-bold">W.</span>
                    <div className="h-[1px] w-full bg-white/20"></div>
                    <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] tracking-[0.2em] font-bold uppercase py-2">
                      Honors
                    </span>
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="mt-8 px-2">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-normal tracking-tight text-black group-hover:translate-x-1 transition-transform duration-500">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

