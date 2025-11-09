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
          "px-8 relative mb-6 max-w-2xl text-center text-7xl font-regular tracking-tight text-black md:text-7xl dark:text-zinc-100",
        )}
        layout
      >
        <span className="inline-block">
          Make your digitals <ContainerTextFlip words={words} />
          {/* <Blips /> */}
        </span>
      </motion.h1>
    </>
  );
}

