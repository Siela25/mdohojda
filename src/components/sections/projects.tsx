import { PORTFOLIO_SECTIONS } from "@/lib/site-map";
import { ProjectCard } from "@/components/elements/project-card";
import { PROJECTS } from "@/lib/projects";

export function Projects() {
    return (
        <section id={PORTFOLIO_SECTIONS.projects} className="flex flex-col gap-6">
            <h2 className="text-2xl">Projects</h2>
            <div className="grid grid-cols-2 gap-4">
                {PROJECTS.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </section>
    );
}