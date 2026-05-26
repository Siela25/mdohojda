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
        name: "Decay",
        status: "Active development",
        description: "Self-hostable, multi-tenant webhook delivery platform — designed for reliable event delivery with exponential backoff, per-endpoint circuit breakers, HMAC-SHA256 signed payloads, and replay API. Architecturally split into API and Worker apps for independent scaling.",
        stack: ["NestJS", "TypeScript", "BullMQ", "PostgreSQL"],
        repoUrl: "https://github.com/siela25/decay-webhooks"
    },
    {
        name: "Nibblenomicon",
        status: "MVP",
        description: "Full-stack SaaS recipe manager with AI-powered recipe extraction (Anthropic Claude), Stripe payment integration with a points-based freemium model, multi-user workspaces with RBAC, and SSRF-secured URL scraping",
        stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
        repoUrl: "https://github.com/siela25/nibblenomicon"
    },
    {
        name: "V-dok",
        status: "Active development",
        description: "Web application for creating and editing EPUB files, targeting publishing workflows. Client-side PDF processing via pdfium-render compiled to WebAssembly — no server required, everything runs in the browser.",
        stack: ["Rust", "WASM", "Next.js", "TypeScript"],
        repoUrl: "https://github.com/siela25/v-dok"
    },
    {
        name: "Requiem",
        status: "Active development",
        description: "Opinionated backend framework in Rust, built directly on hyper — without Axum or Actix as intermediary layers. Includes a custom SQL builder on top of sqlx and TypeScript type generation from Rust endpoint definitions.",
        stack: ["Rust", "hyper", "sqlx", "tokio"],
        repoUrl: "https://github.com/siela25/requiem",
    },
];
