import { PORTFOLIO_SECTIONS } from "@/lib/site-map";
import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

const LINKS = [
    {
        icon: Mail,
        label: "mateusz.jan.dohojda@gmail.com",
        href: "mailto:mateusz.jan.dohojda@gmail.com",
    },
    {
        icon: GithubIcon,
        label: "github.com/siela25",
        href: "https://github.com/siela25",
    },
    {
        icon: LinkedinIcon,
        label: "linkedin.com/in/mateusz-dohojda-932185177",
        href: "https://www.linkedin.com/in/mateusz-dohojda-932185177",
    },
];

export function Contact() {
    return (
        <section id={PORTFOLIO_SECTIONS.contact} className="flex flex-col gap-6">
            <h2 className="text-2xl">Contact</h2>
            <p className="text-muted-foreground">Get in touch.</p>
            <div className="flex flex-col gap-3 font-mono text-sm">
                {LINKS.map(({ icon: Icon, label, href }) => (
                    <a
                        key={href}
                        href={href}
                        target={href.startsWith("mailto") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground w-fit"
                    >
                        <Icon size={14} />
                        {label}
                    </a>
                ))}
            </div>
        </section>
    );
}