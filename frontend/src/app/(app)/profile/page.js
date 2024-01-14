'use client';

import React from 'react';
import { useAuth } from '@/hooks/auth';
import WorkerProfile from './workerProfile';
import CompanyProfile from './companyProfile';
import { useFetch } from '@/hooks/fetch';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Profile() {
    const { user } = useAuth({ middleware: 'auth' });
    let { data, error, mutate, isLoading } = useFetch(
        user?.is_company ? 'api/company/me' : '/api/worker/me',
    );

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="bg-white shadow-sm sm:rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white p-6 h-[calc(100vh-128px)]">
            {data ? (
                <>
                    {user.is_company ? (
                        <CompanyProfile data={data} mutate={mutate} />
                    ) : (
                        <WorkerProfile data={data} mutate={mutate} />
                    )}
                </>
            ) : (
                <div className="flex items-center justify-center h-full">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : error ? (
                        error?.message
                    ) : (
                        ''
                    )}
                </div>
            )}
        </div>
    );
}
