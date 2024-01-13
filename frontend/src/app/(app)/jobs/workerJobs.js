'use client';

import React from 'react';
import { useFetch } from '@/hooks/fetch';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';
import JobCard from '@/components/JobCard';

export default function WorkerJobs() {
    const { user } = useAuth({ middleware: 'auth' });
    const { data, error, mutate, isLoading } = useFetch('/api/jobs');

    const handleApply = async jobId => {
        try {
            // Use Axios for the POST request
            const response = await axios.post('/api/application', {
                job_id: jobId,
                worker_id: user.id,
            });

            if (response.status === 200) {
                mutate();
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
                <div className="bg-white overflow-auto shadow-sm sm:rounded-lg h-full p-6 mt-2">
                    {data?.jobs?.length > 0 ? (
                        <>
                            {data.jobs.map(job => (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    isCompany={user.is_company}
                                    onApply={() => handleApply(job.id)}
                                />
                            ))}
                        </>
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
