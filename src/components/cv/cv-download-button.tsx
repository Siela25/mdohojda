"use client"

import { TerminalButton } from "@/components/elements/terminal-button";

const CV_FILENAME = "mateusz-dohojda-cv";

export function CvDownloadButton() {
    const handlePrint = () => {
        const original = document.title;
        document.title = CV_FILENAME;
        window.print();
        document.title = original;
    };

    return (
        <TerminalButton onClick={handlePrint}>
            &gt; download as pdf
        </TerminalButton>
    );
}
