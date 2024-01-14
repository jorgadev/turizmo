'use client';

import Link from 'next/link';

export default function Home() {
    return (
        <div className="relative flex justify-center min-h-screen bg-gray-900 items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white">
                        Turizmo - elevate{' '}
                        <mark className="px-2 text-white bg-blue-500 rounded-lg">
                            your
                        </mark>{' '}
                        career
                    </h1>
                    <p className="hidden sm:inline-block text-sm md:text-base font-normal lg:text-xl text-gray-400">
                        Unlock Your Potential, Explore New Heights in Your
                        Professional Journey.
                    </p>
                </div>

                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <Link href="/register">
                            <div className="p-6 bg-gray-800 sm:rounded-lg hover:bg-gray-700">
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
                                        <h3 className="text-white">
                                            Continue as Worker
                                        </h3>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 text-sm">
                                        Discover flexible job opportunities. Set
                                        up your profile, input availability, and
                                        choose wages. Find jobs that match your
                                        schedule.
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link href="/register-company">
                            <div className="p-6 bg-gray-800 sm:rounded-lg hover:bg-gray-700">
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
                                        <h3 className="text-white">
                                            Continue as Company
                                        </h3>
                                    </div>
                                </div>

                                <div className="ml-12">
                                    <div className="mt-2 text-gray-400 text-sm">
                                        Streamline staffing needs. Post
                                        temporary jobs with details. Connect
                                        efficiently with skilled workers for a
                                        modern hiring approach.
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
