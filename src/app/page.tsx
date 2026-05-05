import { AboutMe } from "@/components/sections/about-me";
import { Contact } from "@/components/sections/contact";
import { Employment } from "@/components/sections/emplyment";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <main id="main-content" className="container mx-auto flex flex-col gap-24 px-8 py-16">
      <AboutMe/>
      <Skills/>
      <Employment/>
      <Projects/>
      <Contact/>
    </main>
  );
}
