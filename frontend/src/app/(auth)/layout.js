import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <div>
            <div className="font-sans text-gray-900 antialiased">
                <div className="min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>

                    <Link
                        href="/"
                        className="underline text-sm text-gray-600 hover:text-gray-900 mt-6">
                        Back to Home?
                    </Link>
                </div>
            </div>
        </div>
    );
}
