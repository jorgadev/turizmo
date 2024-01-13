'use client';

import { useFetch } from '@/hooks/fetch';
import React from 'react';

export default function WorkerJobs() {
    const { data, error, mutate, isLoading } = useFetch('/api/jobs');

    return (
        <div className="py-8 h-[calc(100vh-65px)]">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-full">
                    {data?.jobs?.length > 0 ? (
                        <></>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            {isLoading
                                ? 'Loading...'
                                : error
                                ? error?.message
                                : 'No jobs found...'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
