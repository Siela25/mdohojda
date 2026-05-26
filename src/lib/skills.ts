type SkillCategory = "languages" | "frameworks" | "databases" | "tools" | "infra" | "observability";

export type SkillColumn = {
    label: string;
    groups: Array<{
        category: SkillCategory;
        label: string;
        skills: string[];
    }>;
}

const COMMERCIAL_SKILLS: SkillColumn = {
    label: 'Commercial',
    groups: [
        { category: 'languages', label: 'Languages', skills: ['TypeScript', 'Node.js'] },
        { category: 'frameworks', label: 'Frameworks', skills: ['React', 'Next.js', 'Express.js', 'NestJS', 'Zustand', 'Tanstack Query'] },
        { category: 'databases', label: 'Databases', skills: ['PostgreSQL', 'Redis', 'Prisma'] },
        { category: 'tools', label: 'Tools', skills: ['Docker', 'Git', 'AWS S3', 'Sentry', 'Stripe'] },
    ]
}

const PERSONAL_SKILLS: SkillColumn = {
    label: 'Personal Projects',
    groups: [
        { category: 'languages', label: 'Languages', skills: ['C#', 'Rust', 'Go'] },
        { category: 'frameworks', label: 'Frameworks', skills: ["ASP.NET Core", 'Axum', 'Go Gin'] },
        { category: 'databases', label: 'Databases', skills: ['MongoDB'] },
    ]
}

const LEARNING_SKILLS: SkillColumn = {
    label: 'Familiar with',
    groups: [
        { category: "languages", label: "Languages", skills: [] },
        { category: "frameworks", label: "Frameworks", skills: ['GraphQL'] },
        { category: "infra", label: "Infra", skills: [ "Kubernetes", "RabbitMQ", "GitHub Actions"] },
        { category: "observability", label: "Observability", skills: ["Prometheus", "Grafana"] },
    ]


}

export const SKILLS: Array<SkillColumn> = [
    COMMERCIAL_SKILLS,
    PERSONAL_SKILLS,
    LEARNING_SKILLS
];
