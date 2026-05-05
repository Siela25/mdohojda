import Link from "next/link";
import { TerminalButton } from "./elements/terminal-button";
import { PORTFOLIO_SECTIONS } from "@/lib/site-map";

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex items-center gap-2 border-b border-border bg-background/90 px-8 py-3 backdrop-blur-sm">
            <span className="text-emerald-400 shrink-0">
                mdohojda@portfolio:~$
            </span>
            <nav className="flex items-center gap-1">
                <Link href={PORTFOLIO_SECTIONS.about}>
                    <TerminalButton>about</TerminalButton>
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link href={PORTFOLIO_SECTIONS.skills}>
                    <TerminalButton>skills</TerminalButton>
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link href={PORTFOLIO_SECTIONS.projects}>
                    <TerminalButton>projects</TerminalButton>
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link href={PORTFOLIO_SECTIONS.contact}>
                    <TerminalButton>contact</TerminalButton>
                </Link>
                <span className="text-muted-foreground">/</span>
                <Link href="/resume">
                    <TerminalButton>resume</TerminalButton>
                </Link>
            </nav>
        </header>
    )

}