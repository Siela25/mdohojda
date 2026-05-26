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
    position: "Software Engineer - responsible for all technical decisions, architecture, and delivery",
    startDate: "08-2019",
    endDate: "04-2026",
    description: "Responsible for the full technical stack — from designing and building internal business systems, to managing cloud infrastructure and creating automation tooling for document processing.",
    duties: [
        {
            title: "REST API design",
            description: "Designed and maintained RESTful APIs powering both internal tools and client-facing applications, including authentication, role-based access, data validation, and error handling patterns."
        },
        {
            title: "Internal management system",
            description: "Designed and built a full-stack internal system (NestJS + PostgreSQL + React) for managing projects, clients, and time tracking — used daily by the entire company"
        },
        {
            title: "EPUB generation platform",
            description: "Built a web application (used both internally and by external clients) for generating EPUB files and AI-generated alternative texts via external AI APIs."
        },
        {
            title: "AI integration",
            description: "Integrated Anthropic API for automated generation of alternative texts for images in EPUB files, improving accessibility compliance (WCAG)."
        },
        {
            title: "Asynchronous processing pipeline",
            description: "Implemented job queue system using BullMQ backed by Redis for batch processing of EPUB files. Managed file lifecycle through AWS S3, ensuring reliable delivery across async stages."
        },
        {
            title: "Payment integration",
            description: "Implemented payment processing with Stripe, including invoicing and webhook handling."
        },
        {
            title: "Infrastructure & monitoring",
            description: "Managed the company's cloud infrastructure and Microsoft 365 services, including email, domain configuration, and user management. Set up application monitoring and error tracking via Sentry.io."
        },
    ]
};