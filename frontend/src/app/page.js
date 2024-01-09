import LoginLinks from '@/app/LoginLinks'
import Link from 'next/link'

export const metadata = {
    title: 'Laravel',
}

const Home = () => {
    return (
        <>
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <LoginLinks />

                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <h1 className="text-white">Turizmo</h1>
                    </div>

                    <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <Link
                                            href="/register"
                                            className="underline text-gray-900 dark:text-white">
                                            Register as Worker
                                        </Link>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laravel has wonderful, thorough
                                        documentation covering every aspect of
                                        the framework. Whether you are new to
                                        the framework or have previous
                                        experience with Laravel, we recommend
                                        reading all of the documentation from
                                        beginning to end.
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="currentColor"
                                        className="w-8 h-8 text-gray-500">
                                        <path d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                                    </svg>

                                    <div className="ml-4 text-lg leading-7 font-semibold">
                                        <Link
                                            href="/register-company"
                                            className="underline text-gray-900 dark:text-white">
                                            Register as Company
                                        </Link>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                        Laracasts offers thousands of video
                                        tutorials on Laravel, PHP, and
                                        JavaScript development. Check them out,
                                        see for yourself, and massively level up
                                        your development skills in the process.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
