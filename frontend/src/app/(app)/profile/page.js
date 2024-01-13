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
        <div className="py-8 h-[calc(100vh-64px)]">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg flex justify-center p-6 h-full">
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
            </div>
        </div>
    );
}
