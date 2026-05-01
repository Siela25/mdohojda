

interface TerminalButtonProps {
    children: React.ReactNode;
}

export function TerminalButton({ children }: TerminalButtonProps) {
    return (
        <button className="bg-taupe-300 text-gray-900 px-1 hover:bg-primary hover:text-gray-100 focus:ring-primary">
            {children}
        </button>
    );
}