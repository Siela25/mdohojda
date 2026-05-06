import { PROJECTS } from "@/lib/projects";
import { CvSectionHeading } from "./cv-section-heading";

export function CvProjects() {
    return (
        <section className="mb-6">
            <CvSectionHeading>Projects</CvSectionHeading>
            <div className="flex flex-col gap-3">
                {PROJECTS.map((project) => (
                    <div key={project.name}>
                        <div className="flex items-baseline justify-between">
                            <span className="font-semibold text-gray-900">{project.name}</span>
                            <span className="text-xs text-gray-500">{project.stack.join(", ")}</span>
                        </div>
                        <p className="text-sm text-gray-700">{project.description}</p>
                        {project.repoUrl && (
                            <a href={project.repoUrl} className="text-xs text-gray-500">
                                {project.repoUrl}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
