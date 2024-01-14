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
        <div className="w-full mx-auto mb-12 flex items-center">
            <div className="w-32 h-32 bg-indigo-500 mr-4"></div>
            <div className="flex flex-row justify-between text-justify flex-1 h-32">
                <div className="flex flex-col justify-between">
                    <div className="overflow-hidden">
                        <h2 className="text-lg font-semibold">{title}</h2>
                        <p className="text-xs  text-gray-500">{description}</p>
                    </div>

                    <div className="pt-6">
                        <p className="text-sm">Location: {location}</p>
                        <p className="text-sm">Pay: {wage_rate}€</p>
                    </div>
                </div>

                <div className="mt-4 pl-10 pr-4 flex flex-col items-center">
                    <Button className="bg-red-500" onClick={handleDeleteJob}>
                        Delete
                    </Button>
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
                </div>
            </div>
        </div>
    );
}
