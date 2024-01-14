'use client';
import React, { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import axios from '@/lib/axios';
import LoadingSpinner from '@/components/LoadingSpinner';

// Profile component
export default function WorkerProfile({ data, mutate }) {
    const [fullName, setFullName] = useState(data?.worker?.full_name || '');
    const [contactNumber, setContactNumber] = useState(
        data?.worker?.contact_number || '',
    );
    const [hourlyWage, setHourlyWage] = useState(
        data?.worker?.hourly_wage || '',
    );
    const [availability, setAvailability] = useState(
        data?.worker?.availability
            ? JSON.parse(data?.worker?.availability)
            : [true, true, true, true, true, true, true],
    );
    const [cv, setCv] = useState(data?.worker?.cv || '');
    const [isLoading, setIsLoading] = useState(false);

    const updateProfile = async e => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.put('/api/worker/update', {
                fullName,
                contactNumber,
                hourlyWage,
                availability,
                cv,
            });

            if (response.status === 200) {
                mutate();
            } else {
                console.error('Error updating profile');
            }
        } catch (error) {
            console.error('Error updating profile', error);
        } finally {
            setIsLoading(false);
        }
    };

    const toggleAvailability = dayIndex => {
        const updatedAvailability = [...availability];
        updatedAvailability[dayIndex] = !updatedAvailability[dayIndex];
        setAvailability(updatedAvailability);
    };

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/3 pr-4">
                <div>
                    <h1 className="text-xl font-semibold mb-2">Details</h1>

                    <hr className="border-t border-gray-300 mb-6" />
                </div>
                <form>
                    <div className="mt-4">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input
                            id="fullName"
                            type="text"
                            value={fullName}
                            onChange={e => setFullName(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="contactNumber">Contact Number</Label>
                        <Input
                            id="contactNumber"
                            type="text"
                            value={contactNumber}
                            onChange={e => setContactNumber(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="hourlyWage">Hourly Wage</Label>

                        <Input
                            id="hourlyWage"
                            type="number"
                            value={hourlyWage}
                            onChange={e => setHourlyWage(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <Label htmlFor="cv">CV</Label>

                        <Input
                            id="cv"
                            type="text"
                            value={cv}
                            onChange={e => setCv(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <Label>Availability</Label>
                        <div>
                            {availability.map((available, index) => (
                                <span
                                    key={index}
                                    className={`cursor-pointer inline-block w-8 h-8 rounded-lg text-center leading-8 mr-1 mb-1 ${
                                        available
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                    }`}
                                    onClick={() => toggleAvailability(index)}>
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6">
                            <Button
                                disabled={isLoading}
                                onClick={updateProfile}>
                                Update Profile
                            </Button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="w-full md:w-2/3 mt-8 md:mt-0">
                <h1 className="text-xl font-semibold mb-2">Reviews</h1>
                <hr className="border-t border-gray-300 mb-6" />
                <div className="flex justify-center items-center w-full h-full">
                    No reviews found...
                </div>
            </div>
        </div>
    );
}
