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
        { category: 'databases', label: 'Databases', skills: ['PostgreSQL', 'Redis'] },
        { category: 'tools', label: 'Tools', skills: ['Docker'] },
    ]
}

const PERSONAL_SKILLS: SkillColumn = {
    label: 'Personal Projects',
    groups: [
        { category: 'languages', label: 'Languages', skills: ['Go', 'Rust', 'C#'] },
        { category: 'frameworks', label: 'Frameworks', skills: ['React', 'Vue.js'] },
        { category: 'databases', label: 'Databases', skills: ['MongoDB'] },
        { category: 'tools', label: 'Tools', skills: ['Git', 'VS Code'] },
    ]
}

const LEARNING_SKILLS: SkillColumn = {
    label: 'Learning',
    groups: [
        { category: "infra", label: "Infra", skills: ["Terraform", "Kubernetes"] },
        { category: "observability", label: "Observability", skills: ["OpenTelemetry", "Grafana"] },
    ]


}

export const SKILLS: Array<SkillColumn> = [
    COMMERCIAL_SKILLS,
    PERSONAL_SKILLS,
    LEARNING_SKILLS
];
