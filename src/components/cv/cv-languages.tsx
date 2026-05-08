import { CvSectionHeading } from "./cv-section-heading";

const LANGUAGES = [
    { name: "Polish", level: "native" },
    { name: "English", level: "B2" },
];

export function CvLanguages() {
    return (
        <section className="mb-6">
            <CvSectionHeading>Languages</CvSectionHeading>
            <div className="flex flex-col gap-1">
                {LANGUAGES.map(({ name, level }) => (
                    <div key={name} className="flex gap-2 text-sm">
                        <span className="w-36 shrink-0 font-medium text-gray-900">{name}</span>
                        <span className="text-gray-700">{level}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
