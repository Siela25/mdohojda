import { PORTFOLIO_SECTIONS } from "@/lib/site-map";
import { SkillsView } from "@/components/elements/skills-view";

export function Skills() {
    return (
        <section id={PORTFOLIO_SECTIONS.skills} className="flex flex-col gap-6 scroll-mt-20">
            <h2 className="text-2xl">Skills</h2>
            <SkillsView />
        </section>
    );
}