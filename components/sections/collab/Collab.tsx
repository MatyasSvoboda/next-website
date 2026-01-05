import React from 'react'

export default function Collab() {
  return (
    <div className="min-h-screen bg-[#ffff] py-32 px-8 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between">
                {/* Label vlevo nahoře */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#ff6b4a]"></div>
                    <h4 className="text-xs md:text-sm font-medium tracking-[0.1em] uppercase text-black">PARTNERS</h4>
                </div>
                
                {/* Velký nadpis vpravo/uprostřed */}
                <div className="flex-1 md:max-w-2xl lg:max-w-3xl">
                    <h2 className="text-3xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-black leading-[1.1] tracking-[-0.02em]">
                        We collaborate with forward-thinking<br />
                        brands to build lasting creative impact.
                    </h2>
                </div>
            </div>
        </div>
    </div>
  )
}