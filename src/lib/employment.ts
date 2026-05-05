type EmploymentDuty = {
    title: string;
    description: string;
}

export type EmploymentData = {
    company: string;
    position: string;
    startDate: string;
    endDate: string | null; // null if currently employed
    description: string;
    duties: EmploymentDuty[];
};

export const HAVE_A_BOOK_EMPLOYMENT: EmploymentData = {
    company: "Have a Book",
    position: "Full Stack Developer",
    startDate: "08-2019",
    endDate: "04-2026",
    description: "Responsible for the full technical stack — from designing and building internal business systems, to managing cloud infrastructure and creating automation tooling for document processing.",
    duties: [
        {
            title: "Internal management system",
            description: "Designed and built a full internal system for managing projects, clients, and employee time tracking — from database schema to frontend UI."
        },
        {
            title: "EPUB generation platform",
            description: "Built a web application (used both internally and by external clients) for generating EPUB files and AI-generated alternative texts via external AI APIs."
        },
        {
            title: "Infrastructure administration",
            description: "Managed the company's DigitalOcean cloud infrastructure and Microsoft 365 services, including email, domain configuration, and user management."
        },
        {
            title: "Document automation tooling",
            description: "Built internal tools to automate repetitive workflows involving graphic files and electronic documents, reducing manual processing time significantly."
        }
    ]
};