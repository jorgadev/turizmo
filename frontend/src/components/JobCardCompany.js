import React from 'react';
import Button from '@/components/Button';
import axios from '@/lib/axios';
import dayjs from 'dayjs';

export default function JobCardCompany({ job, mutate }) {
    const { id, title, description, location, wage_rate, date } = job;

    const handleDeleteJob = async e => {
        e.preventDefault();
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
            <div className="w-20 h-20 bg-blue-500 mr-4 rounded-lg"></div>

            <div className="flex flex-row justify-between flex-1 h-20">
                <div className="flex flex-col justify-between w-9/12">
                    <h2 className="font-semibold">
                        {title} ({location})
                    </h2>

                    <div className="grid grid-cols-1">
                        <p title={description} className="text-xs truncate">
                            Description: {description}
                        </p>
                        <p className="text-xs">Pay: {wage_rate}€</p>
                        <p className="text-xs">
                            Date: {dayjs(date).format('DD MMMM YYYY')}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center pl-12 ">
                    <Button onClick={handleEditJob} className="bg-blue-500">
                        Edit
                    </Button>
                    <Button
                        onClick={handleDeleteJob}
                        className="bg-red-500 ml-2">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
    );
}
