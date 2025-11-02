"use client";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContainerTextFlipDemo() {
  const words = ["better", "modern", "beautiful", "awesome"];
  return (
    <>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        className={cn(
          "px-8 relative mb-6 max-w-2xl text-left text-7xl font-bold tracking-tight text-black md:text-7xl dark:text-zinc-100",
        )}
        layout
      >
        <span className="inline-block">
          Make your digitals look 10x <ContainerTextFlip words={words} />
          {/* <Blips /> */}
        </span>
      </motion.h1>
      <motion.p
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
        }}
        className={cn(
          "px-8 max-w-2xl text-left text-lg md:text-xl text-zinc-600 dark:text-zinc-400",
        )}
      >
        Vytváříme moderní webové aplikace a digitální produkty, které vaše zákazníky zaujmou.
      </motion.p>
    </>
  );
}

