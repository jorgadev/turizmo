import React from 'react';
import Button from '@/components/Button';
import axios from '@/lib/axios';
import dayjs from 'dayjs';

export default function ApplicationCardWorker({ application, color, mutate }) {
    const { id, status, job, worker, created_at } = application;
    const { full_name, cv, hourly_wage } = worker;
    const { title, location } = job;

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
        <div className="w-full mx-auto mb-12 flex items-center">
            <div className={`w-20 h-20 ${color} mr-4`}></div>

            <div className="flex flex-row justify-between flex-1 h-20">
                <div className="flex flex-col justify-between w-full">
                    <h2 className="font-semibold">
                        {full_name} <span className="font-normal"> → </span>
                        {title} ({location})
                    </h2>

                    <div className="grid grid-cols-1">
                        <p className="text-xs">CV: {cv}</p>
                        <p className="text-xs">Hourly Wage: {hourly_wage}€</p>
                        <p className="text-xs">
                            Application Date:{' '}
                            {dayjs(created_at).format('DD MMMM YYYY')}
                        </p>
                    </div>
                </div>

                {status === 'pending' && (
                    <div className="flex justify-center items-center pl-6 ">
                        <Button
                            onClick={() => handleAcceptOrReject('accepted')}
                            className="bg-green-500">
                            Accept
                        </Button>
                        <Button
                            onClick={() => handleAcceptOrReject('rejected')}
                            className="bg-red-500 ml-2">
                            Reject
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
