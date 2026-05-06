export function CvSectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-3 border-b border-gray-200 pb-1 text-xs font-bold uppercase tracking-widest text-gray-400">
            {children}
        </h2>
    );
}
