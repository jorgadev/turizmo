'use client';

import React from 'react';
import { useFetch } from '@/hooks/fetch';
import LoadingSpinner from '@/components/LoadingSpinner';
import ApplicationsBlock from '@/components/ApplicationsBlock';

export default function WorkerApplications() {
    const { data, error, isLoading } = useFetch('/api/worker/applications');

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
                        type="accepted"
                        applications={acceptedApplications}
                    />
                    <ApplicationsBlock
                        type="pending"
                        applications={pendingApplications}
                    />
                    <ApplicationsBlock
                        type="rejected"
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
