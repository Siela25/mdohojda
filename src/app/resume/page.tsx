import { CvDocument } from "@/components/cv/cv-document";
import { CvDownloadButton } from "@/components/cv/cv-download-button";

export default function ResumePage() {
    return (
        <main className="px-8 py-16">
            <div className="mx-auto mb-4 flex max-w-3xl justify-end print:hidden">
                <CvDownloadButton />
            </div>
            <CvDocument />
        </main>
    );
}