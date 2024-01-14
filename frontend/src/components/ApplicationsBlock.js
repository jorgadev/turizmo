import React from 'react';
import ApplicationCardWorker from './ApplicationCardWorker';
import { APPLICATION_TYPES } from '@/constants/constants';

export default function ApplicationsBlock({
    applications = [],
    type = 'pending',
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
            {applications.map(application => (
                <ApplicationCardWorker
                    key={application.id}
                    application={application}
                    color={color}
                />
            ))}
        </div>
    );
}
