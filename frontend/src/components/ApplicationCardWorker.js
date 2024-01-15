import React from 'react';
import Button from '@/components/Button';
import dayjs from 'dayjs';

export default function ApplicationCardWorker({ application, color }) {
    const { job, status } = application;
    const { title, description, location, wage_rate, date } = job;

    return (
        <div className="w-full mx-auto mb-12 flex items-center">
            <div className={`w-20 h-20 ${color} mr-4 rounded-lg`}></div>

            <div className="flex flex-row justify-between flex-1 h-20">
                <div className="flex flex-col justify-between w-9/12">
                    <div>
                        <h2 className="font-semibold">
                            {title} ({location}){' '}
                            <span className="text-xs  text-gray-500 font-normal">
                                {' '}
                                - company_name
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1">
                        <p title={description} className="text-xs truncate">
                            Description: {description}
                        </p>
                        <p className="text-xs">Pay: {wage_rate}€</p>
                        <p className="text-xs">
                            Date: {dayjs(date).format('DD MMMM YYYY')}
                        </p>
                    </div>
                </div>

                {status === 'accepted' && (
                    <div className="flex justify-center items-center text-sm pr-6">
                        <p>contact_number</p>
                    </div>
                )}
            </div>
        </div>
    );
}
