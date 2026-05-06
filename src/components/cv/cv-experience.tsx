import { HAVE_A_BOOK_EMPLOYMENT } from "@/lib/employment";
import { CvSectionHeading } from "./cv-section-heading";

export function CvExperience() {
    const { company, position, startDate, endDate, duties } = HAVE_A_BOOK_EMPLOYMENT;
    const period = `${startDate} – ${endDate ?? "present"}`;

    return (
        <section className="mb-6">
            <CvSectionHeading>Professional Experience</CvSectionHeading>
            <div>
                <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-gray-900">{company}</span>
                    <span className="text-xs text-gray-500">{period}</span>
                </div>
                <div className="mb-2 text-sm italic text-gray-600">{position}</div>
                <ul className="flex flex-col gap-1">
                    {duties.map((duty) => (
                        <li key={duty.title} className="flex gap-2 text-sm text-gray-700">
                            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-gray-400" />
                            <span>
                                <span className="font-medium text-gray-900">{duty.title}</span>
                                {" — "}
                                {duty.description}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
