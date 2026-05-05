import { SKILLS, SkillColumn } from "@/lib/skills";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function SkillsView() {
    return (
        <div className="grid grid-cols-3 gap-8">
            {SKILLS.map((column) => (
                <SkillColumnView key={column.label} column={column} />
            ))}
        </div>
    );
}

function SkillColumnView({ column }: { column: SkillColumn }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {column.label}
            </h3>
            <Separator />
            <div className="flex flex-col gap-4">
                {column.groups.map((group) => (
                    <div key={group.category} className="flex flex-col gap-2">
                        <span className="text-xs text-muted-foreground">{group.label}</span>
                        <div className="flex flex-wrap gap-1.5">
                            {group.skills.map((skill) => (
                                <Badge key={skill} variant="outline">{skill}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
