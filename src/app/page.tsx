import { AboutMe } from "@/components/sections/about-me";
import { Contact } from "@/components/sections/contact";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}
