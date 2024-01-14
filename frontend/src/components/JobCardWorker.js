import React from 'react';
import Button from '@/components/Button';

export default function JobCardWorker({ job, isCompany, onApply, onDelete }) {
    const {
        title,
        description,
        location,
        wage_rate,
        company_id,
        company,
    } = job;
    const { company_name } = company;

    return (
        <div className="max-w p-4 border border-gray-300 rounded-md mb-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2 text-sm">{description}</p>
            <p className="text-gray-600 mb-2 text-sm">Location: {location}</p>
            <p className="text-gray-600 mb-2 text-sm">
                Wage Rate: €{wage_rate}
            </p>
            <p className="text-gray-600 mb-2 text-sm">
                Company: {company_name}
            </p>

            {isCompany ? (
                <Button className="!bg-red-500" onClick={onDelete}>
                    Delete
                </Button>
            ) : (
                <Button onClick={onApply}>Apply</Button>
            )}
        </div>
    );
}
