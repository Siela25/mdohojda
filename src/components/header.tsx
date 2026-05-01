import Link from "next/link";
import { TerminalButton } from "./elements/terminal-button";
import { PORTFOLIO_SECTIONS } from "@/lib/site-map";

export function Header() {
    return (
        <header className="flex space-x-1 px-2 my-2.5">
            <div>
                <span className="text-emerald-300">
                    mdohojda@portfolio:
                </span>
            </div>
            <div className="flex space-x-2">
                <Link href={PORTFOLIO_SECTIONS.about}>
                    <TerminalButton>About me</TerminalButton>
                </Link>
                <span> / </span>
                <Link href={PORTFOLIO_SECTIONS.skills}>
                    <TerminalButton>Skills</TerminalButton>
                </Link>
                <span> / </span>
                <Link href={PORTFOLIO_SECTIONS.projects}>
                    <TerminalButton>Projects</TerminalButton>
                </Link>
                <span> / </span>
                <Link href={PORTFOLIO_SECTIONS.contact}>
                    <TerminalButton>Contact</TerminalButton>
                </Link>
                <span> / </span>
                <Link href="/resume">
                    <TerminalButton>Resume</TerminalButton>
                </Link>
            </div>
        </header>
    )

}