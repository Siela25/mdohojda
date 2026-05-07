import { CvSectionHeading } from "./cv-section-heading";

export function CvSummary() {
    return (
        <section className="mb-6">
            <CvSectionHeading>Summary</CvSectionHeading>
            <p className="text-sm leading-relaxed text-gray-700">
                Software Engineer with 7+ years of commercial experience in TypeScript/Node.js, with hands-on Rust and Go in personal projects.
                I've been responsible for designing and implementing full production systems from the ground up — database schema, backend API, deployment. 
                On top of that, I built internal tools that automated repetitive workflows around document processing and graphic assets. 
                I live by Feynman's rule: <em>"What I cannot create, I do not understand"</em> — which is why I learn by building, not just reading.
            </p>
        </section>
    );
}
