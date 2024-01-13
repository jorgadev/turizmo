'use client';

import React, { useState } from 'react';
import Button from '@/components/Button';
import { useFetch } from '@/hooks/fetch';
import Input from '@/components/Input';
import Label from '@/components/Label';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';

export default function CompanyJobs() {
    const { user } = useAuth({ middleware: 'auth' });
    const { data, error, mutate, isLoading } = useFetch('/api/jobs');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [jobForm, setJobForm] = useState({
        title: '',
        description: '',
        location: '',
        date: '',
        wage_rate: '',
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = e => {
        const { name, value } = e.target;
        setJobForm(prevJobForm => ({
            ...prevJobForm,
            [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            // Use Axios for the POST request
            const response = await axios.post('/api/jobs', {
                ...jobForm,
                company_id: user.id,
            });

            if (response.status === 200) {
                mutate();
                closeModal();
            } else {
                // Handle error
                console.error('Error creating job');
            }
        } catch (error) {
            console.error('Error creating job', error);
        }
    };

    return (
        <div className="py-8 h-[calc(100vh-65px)]">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg h-full">
                    {data?.jobs?.length > 0 ? (
                        <></>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            {isLoading ? (
                                'Loading...'
                            ) : error ? (
                                error?.message
                            ) : (
                                <>
                                    <Button onClick={openModal}>
                                        + Create New Job
                                    </Button>
                                    {/* Modal */}
                                    {isModalOpen && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                                            <div className="relative bg-white rounded-lg shadow-md p-5 max-w-md mx-auto">
                                                {/* Modal content */}
                                                <form
                                                    onSubmit={handleSubmit}
                                                    className="grid gap-4">
                                                    {/* Job Title */}
                                                    <div className="col-span-2">
                                                        <Label htmlFor="title">
                                                            Job Title
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="title"
                                                            name="title"
                                                            value={
                                                                jobForm.title
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>

                                                    {/* Description */}
                                                    <div className="col-span-2">
                                                        <Label htmlFor="description">
                                                            Description
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="description"
                                                            name="description"
                                                            value={
                                                                jobForm.description
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>

                                                    {/* Location */}
                                                    <div className="col-span-2">
                                                        <Label htmlFor="location">
                                                            Location
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            id="location"
                                                            name="location"
                                                            value={
                                                                jobForm.location
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                        />
                                                    </div>

                                                    {/* Date */}
                                                    <div className="col-span-2">
                                                        <Label htmlFor="date">
                                                            Date
                                                        </Label>
                                                        <Input
                                                            id="date"
                                                            name="date"
                                                            value={jobForm.date}
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            type="date"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Wage Rate */}
                                                    <div className="col-span-2">
                                                        <Label htmlFor="wageRate">
                                                            Wage Rate
                                                        </Label>
                                                        <Input
                                                            id="wageRate"
                                                            name="wage_rate"
                                                            value={
                                                                jobForm.wageRate
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            type="number"
                                                            required
                                                        />
                                                    </div>

                                                    {/* Submit button */}
                                                    <div className="col-span-2">
                                                        <Button type="submit">
                                                            Create Job
                                                        </Button>
                                                    </div>
                                                </form>

                                                {/* Close button */}
                                                <button
                                                    onClick={closeModal}
                                                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-400 hover:text-gray-600">
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
