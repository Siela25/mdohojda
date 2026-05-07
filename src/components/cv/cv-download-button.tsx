"use client"

import { TerminalButton } from "@/components/elements/terminal-button";

export function CvDownloadButton() {
    return (
        <TerminalButton onClick={() => window.print()}>
            &gt; download as pdf
        </TerminalButton>
    );
}
