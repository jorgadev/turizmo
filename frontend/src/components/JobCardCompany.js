import React from 'react';
import Button from '@/components/Button';
import axios from '@/lib/axios';

export default function JobCardCompany({ job, setModal, setJobForm, mutate }) {
    const {
        id,
        title,
        description,
        location,
        wage_rate,
        date,
        is_active,
    } = job;

    const handleJobStatus = async e => {
        e.preventDefault();

        try {
            const response = await axios.put(`/api/jobs/${id}`, {
                is_active: !is_active,
            });

            if (response.status === 200) {
                mutate();
            } else {
                console.error('Error updating application');
            }
        } catch (error) {
            console.error('Error updating application', error);
        }
    };

    const handleDeleteJob = async e => {
        try {
            const response = await axios.delete(`/api/jobs/${id}`);

            if (response.status === 200) {
                mutate();
            } else {
                console.error('Error deleting job');
            }
        } catch (error) {
            console.error('Error deleting job', error);
        }
    };

    const handleEditJob = async e => {
        e.preventDefault();
    };

    return (
        <div
            className={`max-w p-4 border border-gray-300 rounded-md mb-4 ${
                !is_active && 'bg-gray-100'
            }`}>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2 text-sm">{description}</p>
            <p className="text-gray-600 mb-2 text-sm">Location: {location}</p>
            <p className="text-gray-600 mb-2 text-sm">
                Wage Rate: €{wage_rate}
            </p>

            <Button
                className="!bg-blue-500"
                onClick={() => {
                    setModal({ open: true, view: 'edit' });
                    setJobForm({
                        title,
                        description,
                        location,
                        date,
                        wage_rate,
                    });
                }}>
                Edit
            </Button>
            <Button
                className={`${is_active ? 'bg-gray-500' : 'bg-green-500'}`}
                onClick={handleJobStatus}>
                {is_active ? 'Deactivate' : 'Activate'}
            </Button>

            <Button className="bg-red-500" onClick={handleDeleteJob}>
                Delete
            </Button>
        </div>
    );
}
