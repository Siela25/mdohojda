import { CvSectionHeading } from "./cv-section-heading";

export function CvEducation() {
    return (
        <section className="mb-6">
            <CvSectionHeading>Education</CvSectionHeading>
            <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-gray-900">
                    WSB  Gdańsk — Computer Science (without a diploma)
                </span>
                <span className="text-xs text-gray-500">2020 – 2023</span>
            </div>
        </section>
    );
}
