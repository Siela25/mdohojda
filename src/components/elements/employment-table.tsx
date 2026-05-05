"use client"

import { useState } from "react";
import { EmploymentData } from "@/lib/employment";
import { TerminalButton } from "@/components/elements/terminal-button";

interface EmploymentTableProps {
    data: EmploymentData;
}

export function EmploymentTable({ data }: EmploymentTableProps) {
    const [selectedDuty, setSelectedDuty] = useState(0);

    const period = `${data.startDate} – ${data.endDate ?? "present"}`;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
                <span className="font-semibold">{data.company}</span>
                <span className="text-sm text-muted-foreground">{data.position} · {period}</span>
            </div>

            <div className="border border-border font-mono text-sm">
                <div className="border-b border-border px-4 py-3 text-muted-foreground">
                    {data.description}
                </div>

                <div className="grid grid-cols-2">
                    <div className="flex flex-col border-r border-border">
                        {data.duties.map((duty, index) => (
                            <div key={index} className="border-b border-border px-2 py-1.5 last:border-b-0">
                                <TerminalButton
                                    active={selectedDuty === index}
                                    onClick={() => setSelectedDuty(index)}
                                >
                                    {duty.title}
                                </TerminalButton>
                            </div>
                        ))}
                    </div>

                    <div className="px-4 py-3 text-muted-foreground">
                        {data.duties[selectedDuty]?.description}
                    </div>
                </div>
            </div>
        </div>
    );
}
