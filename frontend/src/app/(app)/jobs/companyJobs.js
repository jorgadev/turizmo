'use client';
import React, { useState } from 'react';
import Button from '@/components/Button';
import { useFetch } from '@/hooks/fetch';
import Input from '@/components/Input';
import Label from '@/components/Label';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';
import JobCardCompany from '@/components/JobCardCompany';
import dayjs from 'dayjs';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function CompanyJobs() {
    const { user } = useAuth({ middleware: 'auth' });
    const { data, error, mutate, isLoading } = useFetch('/api/company/jobs');

    const [modal, setModal] = useState({
        open: false,
        view: 'create',
    });

    const [jobForm, setJobForm] = useState({
        title: '',
        description: '',
        location: '',
        date: dayjs(Date.now()).format('YYYY-MM-DD'),
        wage_rate: '',
    });

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
            const response = await axios.post('/api/jobs', {
                ...jobForm,
                company_id: user.id,
            });

            if (response.status === 200) {
                mutate();
                setModal({ open: false, view: 'create' });
                setJobForm({
                    title: '',
                    description: '',
                    location: '',
                    date: '',
                    wage_rate: '',
                });
            } else {
                console.error('Error creating job');
            }
        } catch (error) {
            console.error('Error creating job', error);
        }
    };

    return (
        <div className="bg-white shadow-sm sm:rounded-lg overflow-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white p-6 h-[calc(100vh-128px)]">
            {data?.jobs?.length > 0 ? (
                <>
                    {data.jobs.map(job => (
                        <JobCardCompany
                            key={job.id}
                            job={job}
                            mutate={mutate}
                            setModal={setModal}
                            setJobForm={setJobForm}
                        />
                    ))}
                    <div className="text-center mt-6">
                        <Button
                            onClick={() =>
                                setModal({ open: true, view: 'create' })
                            }>
                            + Create New Job
                        </Button>
                    </div>
                </>
            ) : (
                <div className="flex items-center justify-center w-full h-full">
                    {isLoading ? (
                        <LoadingSpinner />
                    ) : error ? (
                        error?.message
                    ) : (
                        <Button
                            onClick={() =>
                                setModal({ open: true, view: 'create' })
                            }>
                            + Create New Job
                        </Button>
                    )}
                </div>
            )}
            {modal.open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="relative bg-white rounded-lg shadow-md p-5 max-w-md mx-auto w-96">
                        {/* Modal content */}
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <div className="col-span-2">
                                <Label htmlFor="title">Job Title</Label>
                                <Input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={jobForm.title}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    rows={4}
                                    id="description"
                                    name="description"
                                    value={jobForm.description}
                                    onChange={handleInputChange}
                                    required
                                    className={`rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full`}></textarea>
                            </div>

                            <div className="col-span-2">
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    type="text"
                                    id="location"
                                    name="location"
                                    value={jobForm.location}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <Label htmlFor="date">Date</Label>
                                <Input
                                    min={dayjs(Date.now()).format('YYYY-MM-DD')}
                                    id="date"
                                    name="date"
                                    value={jobForm.date}
                                    onChange={handleInputChange}
                                    type="date"
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <Label htmlFor="wageRate">Wage Rate</Label>
                                <Input
                                    id="wageRate"
                                    name="wage_rate"
                                    value={jobForm.wage_rate}
                                    onChange={handleInputChange}
                                    type="number"
                                    required
                                />
                            </div>

                            <div className="col-span-2">
                                <Button type="submit">Create Job</Button>
                            </div>
                        </form>

                        <button
                            onClick={() =>
                                setModal({
                                    open: false,
                                    view: 'create',
                                })
                            }
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
        </div>
    );
}
