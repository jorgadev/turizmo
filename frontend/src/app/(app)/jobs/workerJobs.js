'use client';

import React from 'react';
import { useFetch } from '@/hooks/fetch';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';
import JobCardWorker from '@/components/JobCardWorker';

export default function WorkerJobs() {
    const { user, userDetails, mutateUserDetails } = useAuth({
        middleware: 'auth',
    });
    const { data, error, mutate, isLoading } = useFetch('/api/worker/jobs');

    const handleApply = async jobId => {
        try {
            // Use Axios for the POST request
            const response = await axios.post('/api/application', {
                job_id: jobId,
                worker_id: user.id,
            });

            if (response.status === 200) {
                mutate();
                mutateUserDetails();
            } else {
                // Handle error
                console.error('Error creating job');
            }
        } catch (error) {
            console.error('Error creating job', error);
        }
    };

    return (
        <div className="py-8 h-[calc(100vh-65px)]">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg p-6">
                    👋 Hey{' '}
                    <span className="font-semibold">
                        {userDetails?.worker.full_name}
                    </span>
                    ! You have{' '}
                    <span className="font-semibold">
                        {userDetails?.worker.daily_application_limit}
                    </span>{' '}
                    applications left for today. Keep it up!
                </div>
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg p-6 mt-1">
                    {data?.jobs?.length > 0 ? (
                        <>
                            {data.jobs.map(job => (
                                <JobCardWorker
                                    key={job.id}
                                    job={job}
                                    isCompany={user.is_company}
                                    onApply={() => handleApply(job.id)}
                                />
                            ))}
                        </>
                    ) : (
                        <div className="flex items-center justify-center">
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
