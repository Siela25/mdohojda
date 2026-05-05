import { ProjectData } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
    project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col border border-border font-mono text-sm">
            <div className="flex items-center justify-between border-b border-border px-4 py-2">
                <span className="font-semibold">{project.name}</span>
                <Badge variant="outline">{project.status}</Badge>
            </div>

            <div className="flex-1 px-4 py-3 text-muted-foreground">
                {project.description}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-border px-4 py-2">
                {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
            </div>

            {(project.repoUrl || project.liveUrl) && (
                <div className="flex gap-6 border-t border-border px-4 py-2">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            &gt; github
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            &gt; live
                        </a>
                    )}
                </div>
            )}
        </div>
    );
}
