export function CvHeader() {
    return (
        <div className="mb-8">
            <div className="flex items-baseline justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Mateusz Dohojda</h1>
                <span className="text-xs text-gray-500">Gdynia, Poland</span>
            </div>
            <div className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-gray-200 pt-2 text-xs text-gray-600">
                <a href="mailto:mateusz.jan.dohojda@gmail.com">mateusz.jan.dohojda@gmail.com</a>
                <a href="https://github.com/siela25">github.com/siela25</a>
                {process.env.NEXT_PUBLIC_CV_PHONE ? (
                    <span>{process.env.NEXT_PUBLIC_CV_PHONE}</span>
                ) : (
                    <a href="https://www.linkedin.com/in/mateusz-dohojda-932185177">linkedin.com/in/mateusz-dohojda-932185177</a>
                )}
            </div>
        </div>
    );
}
