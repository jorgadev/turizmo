import React from 'react';
import Button from '@/components/Button';
import dayjs from 'dayjs';

export default function JobCardWorker({ job, onApply }) {
    const { title, description, location, wage_rate, company, date } = job;
    const { company_name } = company;

    return (
        <div className="w-full mx-auto mb-12 flex items-center">
            <div className="w-20 h-20 bg-blue-500 mr-4 rounded-lg"></div>
            <div className="flex flex-row justify-between text-justify flex-1 h-20">
                <div className="flex flex-col justify-between w-9/12">
                    <div>
                        <h2 className="font-semibold">
                            {title} ({location}){' '}
                            <span className="text-xs  text-gray-500 font-normal">
                                {' '}
                                - {company_name}
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

                <div className="flex justify-center items-center pl-12 ">
                    <Button onClick={onApply}>Apply</Button>
                </div>
            </div>
        </div>
    );
}
