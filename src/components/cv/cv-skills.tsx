import { SKILLS } from "@/lib/skills";
import { CvSectionHeading } from "./cv-section-heading";

export function CvSkills() {
    return (
        <section className="mb-6">
            <CvSectionHeading>Skills</CvSectionHeading>
            <div className="flex flex-col gap-1.5">
                {SKILLS.map((column) => (
                    <div key={column.label} className="flex gap-2 text-sm">
                        <span className="w-36 shrink-0 font-medium text-gray-900">{column.label}</span>
                        <span className="text-gray-700">
                            {column.groups.flatMap((g) => g.skills).join(", ")}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
