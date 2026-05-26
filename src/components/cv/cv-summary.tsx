import { CvSectionHeading } from "./cv-section-heading";

export function CvSummary() {
    return (
        <section className="mb-6">
            <CvSectionHeading>Summary</CvSectionHeading>
            <p className="text-sm leading-relaxed text-gray-700">
                Software Engineer with 7 years of commercial experience building
                backend systems in TypeScript/Node.js (NestJS). I've been responsible
                for designing and implementing full production systems from the ground
                up — REST APIs, database schemas, async processing pipelines, and
                deployment. Comfortable working across the stack when needed — I build
                frontend logic and data-heavy interfaces in React, though my core
                strength is backend architecture. I enjoy exploring different languages
                and paradigms in personal projects. I live by Feynman's rule: <em>"What
                I cannot create, I do not understand"</em> — which is why I learn by building,
                not just reading.
            </p>
        </section>
    );
}
