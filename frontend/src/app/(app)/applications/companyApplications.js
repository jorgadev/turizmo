'use client';

import React from 'react';
import { useFetch } from '@/hooks/fetch';
import LoadingSpinner from '@/components/LoadingSpinner';
import ApplicationsBlock from '@/components/ApplicationsBlock';

export default function WorkerApplications() {
    const { data, error, mutate, isLoading } = useFetch(
        '/api/company/applications',
    );

    const acceptedApplications = data?.applications.filter(
        application => application.status === 'accepted',
    );
    const rejectedApplications = data?.applications.filter(
        application => application.status === 'rejected',
    );
    const pendingApplications = data?.applications.filter(
        application => application.status === 'pending',
    );

    return (
        <div className="bg-white shadow-sm sm:rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white p-6 h-[calc(100vh-128px)]">
            {data?.applications?.length > 0 ? (
                <React.Fragment>
                    <ApplicationsBlock
                        role="company"
                        type="accepted"
                        mutate={mutate}
                        applications={acceptedApplications}
                    />
                    <ApplicationsBlock
                        role="company"
                        type="pending"
                        mutate={mutate}
                        applications={pendingApplications}
                    />
                    <ApplicationsBlock
                        role="company"
                        type="rejected"
                        mutate={mutate}
                        applications={rejectedApplications}
                    />
                </React.Fragment>
            ) : (
                <div className="flex items-center justify-center w-full h-full">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : error ? (
                        error?.message
                    ) : (
                        'No applications found...'
                    )}
                </div>
            )}
        </div>
    );
}
