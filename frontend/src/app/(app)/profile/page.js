'use client';
import React, { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import { useFetch } from '@/hooks/fetch';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';

// Profile component
export default function Profile() {
    const { user } = useAuth({ middleware: 'auth' });

    const { data, error, mutate, isLoading } = useFetch(
        user.is_company ? '/api/company/me' : '/api/worker/me',
    );

    // State to manage form inputs
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

    // Update user profile function
    const updateProfile = () => {
        // Call the backend API to update the profile
        // Make sure to handle errors and update the state accordingly
        // You can use the `mutate` function to refresh the data after the update
        // Example:
        // updateProfileApiCall({ fullName, contactNumber, hourlyWage })
        //     .then(() => {
        //         mutate(); // Refresh data after successful update
        //     })
        //     .catch((error) => {
        //         // Handle errors
        //     });
    };

    const toggleAvailability = dayIndex => {
        const updatedAvailability = [...availability];
        updatedAvailability[dayIndex] = !updatedAvailability[dayIndex];
        setAvailability(updatedAvailability);
    };

    return (
        <div className="py-8">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        {/* Check if data is still loading */}
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : // Check if there's an error
                        error ? (
                            <p>Error loading data</p>
                        ) : (
                            // Display profile form
                            <form>
                                {/* Full Name */}
                                <div className="mt-4">
                                    <Label htmlFor="fullName">
                                        {user.is_company
                                            ? 'Company Name'
                                            : 'Full Name'}
                                    </Label>
                                    <Input
                                        id="fullName"
                                        type="text"
                                        value={fullName}
                                        onChange={e =>
                                            setFullName(e.target.value)
                                        }
                                    />
                                </div>

                                {/* Contact Number */}
                                <div className="mt-4">
                                    <Label htmlFor="contactNumber">
                                        Contact Number
                                    </Label>
                                    <Input
                                        id="contactNumber"
                                        type="text"
                                        value={contactNumber}
                                        onChange={e =>
                                            setContactNumber(e.target.value)
                                        }
                                    />
                                </div>

                                {!user.is_company && (
                                    <>
                                        {/* Hourly Wage */}
                                        <div className="mt-4">
                                            <Label htmlFor="hourlyWage">
                                                Hourly Wage
                                            </Label>

                                            <Input
                                                id="hourlyWage"
                                                type="text"
                                                value={hourlyWage}
                                                onChange={e =>
                                                    setHourlyWage(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <Label>Availability</Label>
                                            <div className="flex space-x-4">
                                                {availability.map(
                                                    (available, index) => (
                                                        <span
                                                            key={index}
                                                            className={`cursor-pointer inline-block w-6 h-6 rounded-full text-center leading-6 ${
                                                                available
                                                                    ? 'bg-green-500 text-white'
                                                                    : 'bg-red-500 text-white'
                                                            }`}
                                                            onClick={() =>
                                                                toggleAvailability(
                                                                    index,
                                                                )
                                                            }>
                                                            {
                                                                [
                                                                    'M',
                                                                    'T',
                                                                    'W',
                                                                    'T',
                                                                    'F',
                                                                    'S',
                                                                    'S',
                                                                ][index]
                                                            }
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                    </>
                                )}

                                {/* Update Button */}
                                <div className="mt-6">
                                    <Button onClick={updateProfile}>
                                        Update Profile
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
