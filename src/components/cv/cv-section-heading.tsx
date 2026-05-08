export function CvSectionHeading({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-3 border-b border-orange-300 pb-1 text-sm font-bold uppercase tracking-widest text-orange-600">
            {children}
        </h2>
    );
}
