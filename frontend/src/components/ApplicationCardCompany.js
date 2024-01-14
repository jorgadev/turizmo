import React from 'react';
import Button from '@/components/Button';
import axios from '@/lib/axios';

export default function ApplicationCardCompany({
    application,
    isCompany,
    mutate,
}) {
    const { id, status, created_at, worker, job } = application;
    const { full_name, hourly_wage, cv } = worker;

    const { title } = job;

    const handleAcceptOrReject = async status => {
        try {
            const response = await axios.put(`/api/application/${id}`, {
                status,
            });

            if (response.status === 200) {
                mutate();
            } else {
                console.error('Error updating application');
            }
        } catch (error) {
            console.error('Error updating application', error);
        }
    };

    return (
        <div className="max-w p-4 border border-gray-300 rounded-md mb-4">
            <h2 className="text-lg font-semibold mb-2">
                {full_name} <span className="font-normal">applied for</span>{' '}
                {title}
            </h2>
            <p className="text-gray-600 mb-2 text-sm">
                Hourly Wage: €{hourly_wage}
            </p>
            <p className="text-gray-600 mb-2 text-sm">CV: {cv}</p>

            <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 text-sm">
                    Application Status: {status}
                </p>
                <p className="text-gray-600 text-sm">
                    Application Date: {created_at}
                </p>

                {/* Render the "Accept" button only for company */}
                {isCompany && status === 'pending' && (
                    <>
                        <Button
                            onClick={() => handleAcceptOrReject('accepted')}
                            className="!bg-green-500">
                            Accept
                        </Button>
                        <Button
                            onClick={() => handleAcceptOrReject('rejected')}
                            className="!bg-red-500 ml-2">
                            Reject
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}
