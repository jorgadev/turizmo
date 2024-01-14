'use client';
import React from 'react';

import { useFetch } from '@/hooks/fetch';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';
import JobCardWorker from '@/components/JobCardWorker';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function WorkerJobs() {
    const { user, userDetails, mutateUserDetails } = useAuth({
        middleware: 'auth',
    });
    const { data, error, mutate, isLoading } = useFetch('/api/worker/jobs');

    const handleApply = async jobId => {
        try {
            const response = await axios.post('/api/application', {
                job_id: jobId,
                worker_id: user.id,
            });

            if (response.status === 200) {
                mutate();
                mutateUserDetails();
            } else {
                console.error('Error creating job');
            }
        } catch (error) {
            console.error('Error creating job', error);
        }
    };

    return (
        <React.Fragment>
            <div className="bg-white shadow-sm sm:rounded-lg p-6 mb-1">
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
            <div className="bg-white shadow-sm sm:rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white p-6 h-[calc(100vh-204px)]">
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
                    <div className="flex items-center justify-center w-full h-full">
                        {isLoading ? (
                            <LoadingSpinner />
                        ) : error ? (
                            error?.message
                        ) : (
                            'No jobs found...'
                        )}
                    </div>
                )}
            </div>
        </React.Fragment>
    );
}
