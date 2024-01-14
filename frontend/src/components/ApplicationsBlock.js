import React from 'react';
import ApplicationCardWorker from './ApplicationCardWorker';
import { APPLICATION_TYPES } from '@/constants/constants';
import ApplicationCardCompany from './ApplicationCardCompany';

export default function ApplicationsBlock({
    applications = [],
    type = 'pending',
    role = 'worker',
    mutate,
}) {
    if (applications.length === 0) {
        return '';
    }

    const { title, color, svg } = APPLICATION_TYPES[type];

    return (
        <div>
            <div className="flex">
                {svg}
                <h1 className="text-xl font-semibold ml-2">{title}</h1>
            </div>
            <hr className="h-px mt-2 mb-4 bg-gray-300 border-0" />
            {applications.map(application =>
                role === 'worker' ? (
                    <ApplicationCardWorker
                        key={application.id}
                        application={application}
                        color={color}
                    />
                ) : (
                    <ApplicationCardCompany
                        key={application.id}
                        application={application}
                        color={color}
                        mutate={mutate}
                    />
                ),
            )}
        </div>
    );
}
