import React from 'react';

export default function Pricing() {
    return (
        <div className="bg-white shadow-sm sm:rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white p-6 h-[calc(100vh-128px)]">
            <section className="bg-white ">
                <div className="mx-auto max-w-screen-md text-center mb-8">
                    <h2 className="my-4 text-4xl tracking-tight ">
                        Simplifying your workforce management
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl ">
                        At Turizmo, we offer flexible plans to meet your
                        business needs.
                    </p>
                </div>
                <div className="space-y-8 sm:grid sm:grid-cols-2 sm:gap-6 xl:gap-10 sm:space-y-0">
                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 ">
                        <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                        <p className="font-light text-gray-500 sm:text-lg ">
                            Perfect for individuals and small teams.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                Free
                            </span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>20 applications per day</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-red-500">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18 18 6M6 6l12 12"
                                    />
                                </svg>

                                <span>No filters and sorting</span>
                            </li>
                        </ul>
                        <div
                            disabled
                            className="text-white bg-green-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Active
                        </div>
                    </div>

                    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-8 ">
                        <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                        <p className="font-light text-gray-500 sm:text-lg ">
                            Tailored for growing teams and businesses.
                        </p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">
                                €10
                            </span>
                            <span className="text-gray-500 ">/month</span>
                        </div>
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>50 applications per day</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-green-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Helpful filters and sorting</span>
                            </li>
                        </ul>
                        <div
                            href="#"
                            disabled
                            className="text-white bg-gray-300 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Not Available
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
