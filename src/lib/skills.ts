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
        { category: 'frameworks', label: 'Frameworks', skills: ['React', 'Next.js', 'Express.js', 'NestJS'] },
        { category: 'databases', label: 'Databases', skills: ['PostgreSQL', 'Redis', 'Prisma'] },
        { category: 'tools', label: 'Tools', skills: ['Docker', 'Git', 'AWS S3', 'Sentry', 'Stripe'] },
    ]
}

const PERSONAL_SKILLS: SkillColumn = {
    label: 'Personal Projects',
    groups: [
        { category: 'languages', label: 'Languages', skills: ['Go', 'Rust', 'C#'] },
        { category: 'frameworks', label: 'Frameworks', skills: ['React', 'Tauri'] },
        { category: 'databases', label: 'Databases', skills: ['MongoDB', 'Drizzle ORM'] },
        { category: 'tools', label: 'Tools', skills: ['Git'] },
    ]
}

const LEARNING_SKILLS: SkillColumn = {
    label: 'Familiar with',
    groups: [
        { category: "languages", label: "Languages", skills: ["Python"] },
        { category: "infra", label: "Infra", skills: ["Terraform", "Kubernetes"] },
        { category: "observability", label: "Observability", skills: ["Prometheus", "Grafana"] },
    ]


}

export const SKILLS: Array<SkillColumn> = [
    COMMERCIAL_SKILLS,
    PERSONAL_SKILLS,
    LEARNING_SKILLS
];
