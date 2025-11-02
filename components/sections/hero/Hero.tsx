import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/sections/navbar/Navbar";
import { ContainerTextFlipDemo } from "@/components/sections/hero/HeroText";

export default function Hero() {
    return (
        <>
          <Navbar />
          <AuroraBackground>
            <ContainerTextFlipDemo />
          </AuroraBackground>
        </>
      );
}

