"use client";

import React from "react";

type TextTone = "dark" | "light";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  contributors: number;
  gradientClass: string; // tailwind gradient classes
  tone: TextTone;
}

const cards: ServiceCard[] = [
  {
    id: "apps",
    title: "Aplikace",
    description:
      "Chcete mít vlastní app v App Store / Google Play? Nebo vás snad víc láká Apple TV app? Maličkost.",
    contributors: 8,
    gradientClass: "from-sky-200 via-sky-300 to-fuchsia-300",
    tone: "dark",
  },
  {
    id: "web-apps",
    title: "Web Apps",
    description:
      "Sofistikovaná webová platforma, která pokryje díru na trhu, kterou vidíte jen vy? Pojďme to postavit.",
    contributors: 2,
    // podobné detailu: tmavá horní část -> modrá spodní část
    gradientClass: "from-[#2b0603] via-[#3b0b06] to-[#2f6fae]",
    tone: "light",
  },
  {
    id: "weby-e-shopy",
    title: "Weby / E‑shopy",
    description:
      "Naprostá klasika digitální tvorby. Produkt na kterém začínal snad každý z nás.",
    contributors: 5,
    gradientClass: "from-yellow-200 via-yellow-200 to-orange-400",
    tone: "dark",
  },
  {
    id: "product-design",
    title: "Product Design",
    description:
      "Produkt na kterém začínal snad každý z nás.",
    contributors: 3,
    gradientClass: "from-violet-300 via-fuchsia-300 to-rose-300",
    tone: "dark",
  },
];

function contributorsLabel(n: number) {
  if (n === 1) return "přispěvatel";
  if (n >= 2 && n <= 4) return "přispěvatelé";
  return "přispěvatelů";
}

function AvatarStack({ tone }: { tone: TextTone }) {
  const ring = tone === "light" ? "ring-white/80" : "ring-black/15";
  const border = tone === "light" ? "border-white/80" : "border-black/10";

  // Faux avatars – blíž „profilovkám“ z detailu (gradient + fotko-like tečka)
  return (
    <div className="flex -space-x-2">
      <div
        className={[
          "size-9 rounded-full border-2",
          border,
          "bg-gradient-to-br from-orange-300 via-pink-400 to-indigo-400",
          "shadow-sm",
        ].join(" ")}
      />
      <div
        className={[
          "size-9 rounded-full border-2",
          border,
          "bg-white/95",
          "grid place-items-center",
          "shadow-sm",
        ].join(" ")}
      >
        <div className={["size-4 rounded-full bg-black/80 ring-2", ring].join(" ")} />
      </div>
    </div>
  );
}

function ServiceCardView({ card }: { card: ServiceCard }) {
  const toneText = card.tone === "light" ? "text-white" : "text-black";
  const descText = card.tone === "light" ? "text-white/85" : "text-black/75";
  const glow = card.tone === "light" ? "shadow-black/20" : "shadow-black/5";

  return (
    <div className="group relative w-[280px] md:w-[320px] lg:w-[340px]">
      {/* The Stack - White cards underneath with slight offsets */}
      <div className="absolute inset-0 translate-y-2 translate-x-1 rotate-[2deg] rounded-[32px] bg-white shadow-sm transition-transform duration-500 group-hover:translate-y-3 group-hover:translate-x-2 group-hover:rotate-[3deg]" />
      <div className="absolute inset-0 translate-y-1 translate-x-0.5 rotate-[-1.5deg] rounded-[32px] bg-white shadow-md transition-transform duration-500 group-hover:translate-y-1.5 group-hover:translate-x-1 group-hover:rotate-[-2.5deg]" />

      {/* Main colored card on top */}
      <div
        className={[
          "relative rounded-[32px] p-6 md:p-7",
          "bg-gradient-to-b",
          card.gradientClass,
          "transition-all duration-500 ease-out",
          "shadow-lg",
          glow,
          "group-hover:-translate-y-2 group-hover:shadow-xl",
          "min-h-[320px] md:min-h-[360px]",
          "flex flex-col justify-between overflow-hidden",
        ].join(" ")}
      >
        <div>
          <h3
            className={[
              toneText,
              "text-[32px] md:text-[40px] font-light leading-[1.05] tracking-[-0.03em] whitespace-pre-line",
            ].join(" ")}
          >
            {card.title.replace(" / ", " /\n")}
          </h3>
          <p className={[descText, "mt-4 text-[15px] leading-snug font-normal"].join(" ")}>
            {card.description}
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3">
            <AvatarStack tone={card.tone} />
            <span className={[descText, "text-[15px] font-medium"].join(" ")}>
              {card.contributors} {contributorsLabel(card.contributors)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-black/90">
            Naše služby
          </h2>
        </div>

        <div className="flex justify-center">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-16 px-4 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {cards.map((card) => (
              <ServiceCardView key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
