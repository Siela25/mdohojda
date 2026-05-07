import { CvHeader } from "./cv-header";
import { CvSummary } from "./cv-summary";
import { CvExperience } from "./cv-experience";
import { CvProjects } from "./cv-projects";
import { CvSkills } from "./cv-skills";
import { CvLanguages } from "./cv-languages";
import { CvEducation } from "./cv-education";
import { CvConsent } from "./cv-consent";

export function CvDocument() {
    return (
        <div id="cv-document" className="mx-auto max-w-3xl bg-white px-12 py-10 font-mono text-sm shadow-lg">
            <CvHeader />
            <CvSummary />
            <CvExperience />
            <CvProjects />
            <CvSkills />
            <CvLanguages />
            <CvConsent />
        </div>
    );
}
