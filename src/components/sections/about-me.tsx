import { PORTFOLIO_SECTIONS } from "@/lib/site-map";


export function AboutMe() {
    return (
        <section id={PORTFOLIO_SECTIONS.about} className="space-y-4">
            <h1 className="text-3xl">Hey, I'm Mateusz</h1>
            <p className="text-lg leading-relaxed">
                Backend developer with 7+ years of commercial experience in TypeScript/Node.js, with hands-on Rust and Go in personal projects.
                I&apos;ve been responsible for designing and implementing full production systems from the ground up — database schema, backend API, deployment.
                I live by Feynman&apos;s rule: <em>&quot;What I cannot create, I do not understand&quot;</em> — which is why I learn by building, not just reading.
                Building things yourself also means breaking them yourself — which turns out to be the best way to learn.
            </p>
        </section>
    );
}