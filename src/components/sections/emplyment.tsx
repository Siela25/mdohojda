import { PORTFOLIO_SECTIONS } from "@/lib/site-map";
import { EmploymentTable } from "@/components/elements/employment-table";
import { HAVE_A_BOOK_EMPLOYMENT } from "@/lib/employment";

export function Employment() {
    return (
        <section id={PORTFOLIO_SECTIONS.employment} className="flex flex-col gap-6 scroll-mt-20">
            <h2 className="text-2xl">Employment</h2>
            <EmploymentTable data={HAVE_A_BOOK_EMPLOYMENT} />
        </section>
    );
}