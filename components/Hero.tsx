import { AuroraBackground } from "@/components/ui/aurora-background";
import Navbar from "@/components/Navbar";


export default function Hero() {
    return (
        <div>
          <Navbar />
          <AuroraBackground>
            <div>
              {/* Hero content */}
            </div>
          </AuroraBackground>
        </div>
      );
}