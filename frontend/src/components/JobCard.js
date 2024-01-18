import React from 'react';
import Button from '@/components/Button';
import dayjs from 'dayjs';

export default function JobCard({ job, isCompany, onApply, onDelete }) {
    const { title, description, location, wage_rate, company, date } = job;

    return (
        <div className="w-full mx-auto mb-4 sm:mb-12 flex items-center">
            <div
                className={`hidden sm:block sm:w-20 sm:h-20 bg-blue-500 mr-4 rounded-lg`}></div>
            <div
                className={`border-l-4 border-blue-500 pl-2 sm:pl-0 sm:border-none flex flex-row justify-between flex-1 sm:h-20`}>
                <div className="flex flex-col justify-between w-9/12">
                    <h2 className="font-semibold text-sm sm:text-base">
                        {!isCompany && `${company.company_name} →`} {title}{' '}
                        <span className="text-xs  text-gray-500 font-normal">
                            ({location})
                        </span>
                    </h2>

                    <div className="hidden sm:grid grid-cols-1">
                        <p title={description} className="text-xs truncate">
                            Description: {description}
                        </p>
                        <p className="text-xs">Pay: {wage_rate}€</p>
                        <p className="text-xs">
                            Date: {dayjs(date).format('DD MMMM YYYY')}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center sm:pl-12 ">
                    {isCompany ? (
                        <Button className="bg-red-500" onClick={onDelete}>
                            Delete
                        </Button>
                    ) : (
                        <Button onClick={onApply}>Apply</Button>
                    )}
                </div>
            </div>
        </div>
    );
}
