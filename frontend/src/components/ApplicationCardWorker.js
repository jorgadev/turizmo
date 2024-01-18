import React from 'react';
import dayjs from 'dayjs';

export default function ApplicationCardWorker({ application, color }) {
    const { job, status } = application;
    const { title, description, location, wage_rate, date, company } = job;

    return (
        <div className="w-full mx-auto mb-4 sm:mb-12 flex items-center">
            <div
                className={`hidden sm:block sm:w-20 sm:h-20 bg-${color} mr-4 rounded-lg`}></div>

            <div
                className={`border-l-4 border-${color} pl-2 sm:pl-0 sm:border-none flex flex-row justify-between flex-1 sm:h-20`}>
                <div className="flex flex-col justify-between w-9/12">
                    <div>
                        <h2 className="font-semibold text-sm sm:text-base">
                            {company.company_name} → {title}{' '}
                            <span className="text-xs  text-gray-500 font-normal">
                                ({location})
                            </span>
                        </h2>
                    </div>

                    <div className="hidden sm:grid grid-cols-1 ">
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
                    <div className="flex justify-center items-center text-xs sm:text-sm sm:pr-6">
                        <p>{company?.contact_number}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
