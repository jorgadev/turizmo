'use client';

import React from 'react';
import { useFetch } from '@/hooks/fetch';
import { useAuth } from '@/hooks/auth';
import ApplicationCard from '@/components/ApplicationCard';

export default function WorkerApplications() {
    const { user, userDetails, mutateUserDetails } = useAuth({
        middleware: 'auth',
    });
    const { data, error, mutate, isLoading } = useFetch(
        '/api/worker/applications',
    );

    console.log(data);

    return (
        <div className="py-8 h-[calc(100vh-65px)]">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg p-6 mt-1">
                    {data?.applications?.length > 0 ? (
                        <>
                            {data.applications.map(application => (
                                <ApplicationCard
                                    key={application.id}
                                    application={application}
                                />
                            ))}
                        </>
                    ) : (
                        <div className="flex items-center justify-center">
                            {isLoading
                                ? 'Loading...'
                                : error
                                ? error?.message
                                : 'No applications found...'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
