import React from 'react';

const ApplicationCard = ({ application }) => {
    const { status, created_at, job } = application;
    const { title, description, location, wage_rate, company_id } = job;

    return (
        <div className="max-w p-4 border border-gray-300 rounded-md mb-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2 text-sm">{description}</p>
            <p className="text-gray-600 mb-2 text-sm">Location: {location}</p>
            <p className="text-gray-600 mb-2 text-sm">
                Wage Rate: €{wage_rate}
            </p>
            <p className="text-gray-600 mb-2 text-sm">Company: {company_id}</p>

            <div className="flex items-center justify-between mt-4">
                <p className="text-gray-600 text-sm">
                    Application Status: {status}
                </p>
                <p className="text-gray-600 text-sm">
                    Application Date: {created_at}
                </p>
            </div>
        </div>
    );
};

export default ApplicationCard;
