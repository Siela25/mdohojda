

export function CvConsent() {
    return (
        <div className="mt-8 border-t border-gray-200 pt-4">
            <p className="text-xs leading-relaxed text-gray-400">
                I hereby give consent for my personal data to be processed by {process.env.NEXT_PUBLIC_CV_COMPANY || "[COMPANY_NAME]"} for the purpose of conducting recruitment for the position
                for which I am applying.
            </p>
        </div>
    );
}