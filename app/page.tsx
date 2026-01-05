import Collab from "@/components/sections/collab/Collab";
import Hero from "@/components/sections/hero/Hero";
import Projects from "@/components/sections/projects/Projects";
import Services from "@/components/sections/services/Services";

export default function Home() {
  return (
  <>
    <Hero />
    <Collab />
    <Services />
    <Projects />
  </>);
}
