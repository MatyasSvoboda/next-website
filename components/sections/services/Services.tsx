"use client";

import React, { useState } from "react";
import { ArrowDownLeft, ArrowUpRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "apps",
    title: "Aplikace.",
    description: "Chcete mít vlastní app v App Store / Google Play? Nebo vás snad víc láká Apple TV app? Maličkost.",
  },
  {
    id: "web-apps",
    title: "Web Apps.",
    description: "Sofistikovaná webová platforma, která pokryje díru na trhu, kterou vidíte jen vy? Pojďme to postavit..",
  },
  {
    id: "weby/e-shopy",
    title: "Weby / E-shopy.",
    description: "Naprostá klasika digitální tvorby. Produkt na kterém začínal snad každý z nás.",
  },
  {
    id: "creative-acceleration",
    title: "Creative acceleration.",
    description: "Speed up your creative process and deliver faster results.",
  },
  {
    id: "positioning",
    title: "Positioning.",
    description: "Establish your unique position in the market and stand out.",
  },
  {
    id: "leadership-enablement",
    title: "Leadership enablement.",
    description: "Empower your leaders to drive transformation and growth.",
  },
];

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(
    "strategic-clarity"
  );

  const handleServiceClick = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Section - Services Grid */}
          <div className="flex-1 lg:flex-[2]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 tracking-[-0.02em]">
              Our services.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => {
                const isExpanded = expandedService === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => handleServiceClick(service.id)}
                    className={`
                      relative p-6 md:p-8 cursor-pointer transition-all duration-300
                      ${
                        isExpanded
                          ? "bg-black text-white"
                          : "bg-white text-black hover:bg-gray-50"
                      }
                    `}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3
                          className={`text-xl md:text-2xl font-semibold mb-3 ${
                            isExpanded ? "text-white" : "text-black"
                          }`}
                        >
                          {service.title}
                        </h3>
                        {isExpanded && (
                          <p className="text-white/90 text-base md:text-lg leading-relaxed">
                            {service.description}
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                            <ArrowUpRight className="w-4 h-4 text-black" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                            <ArrowDownLeft className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Section - Text and CTA */}
          <div className="flex-1 lg:flex-[1] lg:max-w-md">
            <div className="sticky top-32">
              <p className="text-black/80 text-base md:text-lg leading-relaxed mb-8">
                Every transformation starts with the right foundations. These are
                the capabilities we use to help you sharpen your strategy, align
                your teams, and create market momentum that lasts.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-black hover:text-black/80 transition-colors group"
              >
                <span className="text-base md:text-lg font-medium">
                  Talk to us
                </span>
                <div className="w-10 h-10 bg-[#ffb3c1] rounded-full flex items-center justify-center group-hover:bg-[#ff9db0] transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

