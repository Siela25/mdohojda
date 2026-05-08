export type ProjectData = {
    name: string;
    status: string;
    description: string;
    stack: string[];
    repoUrl?: string;
    liveUrl?: string;
}

export const PROJECTS: ProjectData[] = [
    {
        name: "Requiem",
        status: "Active development",
        description: "Opinionated backend framework in Rust, built directly on hyper — without Axum or Actix as intermediary layers. Includes a custom SQL builder on top of sqlx and TypeScript type generation from Rust endpoint definitions.",
        stack: ["Rust", "hyper", "sqlx", "tokio"],
        repoUrl: "https://github.com/siela25/requiem",
    },
    {
        name: "V-dok",
        status: "Active development",
        description: "Web application for creating and editing EPUB files, targeting publishing workflows. Client-side PDF processing via pdfium-render compiled to WebAssembly — no server required, everything runs in the browser.",
        stack: ["Rust", "WASM", "Next.js", "TypeScript"],
        repoUrl: "https://github.com/Siela25/v-dok"
    },
    {
        name: "envik",
        status: "MVP",
        description: "CLI tool written in Rust for managing .env files across environments (dev, staging, prod), with a planned backend for team synchronization with AES-256-GCM encryption and OAuth.",
        stack: ["Rust"],
        repoUrl: "https://github.com/siela25/envik"
    },
    {
        name: "Nibblenomicon",
        status: "MVP",
        description: "Full-stack SaaS recipe manager with AI-powered recipe extraction (Anthropic Claude), Stripe payment integration with a points-based freemium model, multi-user workspaces with RBAC, and SSRF-secured URL scraping",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        repoUrl: "https://github.com/siela25/nibblenomicon"
    },
];
