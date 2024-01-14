import React from 'react';
import Button from '@/components/Button';
import axios from '@/lib/axios';

export default function JobCardCompany({ job }) {
    const { id, title, description, location, wage_rate, company_id } = job;

    const onDelete = () => {};
    const onEdit = () => {};
    const onDone = async e => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/job-done/${id}`);

            if (response.status === 200) {
                // mutate();
            } else {
                console.error('Error updating application');
            }
        } catch (error) {
            console.error('Error updating application', error);
        }
    };

    return (
        <div className="max-w p-4 border border-gray-300 rounded-md mb-4">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2 text-sm">{description}</p>
            <p className="text-gray-600 mb-2 text-sm">Location: {location}</p>
            <p className="text-gray-600 mb-2 text-sm">
                Wage Rate: €{wage_rate}
            </p>
            <p className="text-gray-600 mb-2 text-sm">Company: {company_id}</p>

            <Button className="!bg-red-500" onClick={onDelete}>
                Delete
            </Button>
            <Button className="!bg-blue-500" onClick={onEdit}>
                Edit
            </Button>
            <Button className="!bg-green-500" onClick={onDone}>
                Done
            </Button>
        </div>
    );
}
