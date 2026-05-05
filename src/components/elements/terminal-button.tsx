import { cn } from "@/lib/utils";

interface TerminalButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    active?: boolean;
}

export function TerminalButton({ children, onClick, active }: TerminalButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-1 text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                active
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground"
            )}
        >
            {active ? "> " : "  "}{children}
        </button>
    );
}