import React from 'react';
import Button from '@/components/Button';

const JobCard = ({ job, isCompany, onApply, onDelete }) => {
    const { title, description, location, wage_rate, company_name } = job;

    return (
        <div className="max-w p-4 border border-gray-300 rounded-md mb-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">{description}</p>
            <p className="text-gray-600 mb-2">Location: {location}</p>
            <p className="text-gray-600 mb-2">Wage Rate: €{wage_rate}</p>
            <p className="text-gray-600 mb-2">Company: {company_name}</p>

            {isCompany ? (
                <Button className="!bg-red-500" onClick={onDelete}>
                    Delete
                </Button>
            ) : (
                <Button onClick={onApply}>Apply</Button>
            )}
        </div>
    );
};

export default JobCard;
