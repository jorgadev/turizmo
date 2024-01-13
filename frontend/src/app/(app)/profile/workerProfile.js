'use client';
import React, { useState } from 'react';
import { useAuth } from '@/hooks/auth';
import { useFetch } from '@/hooks/fetch';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import axios from '@/lib/axios';

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

    const updateProfile = async e => {
        e.preventDefault();

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
        }
    };

    const toggleAvailability = dayIndex => {
        const updatedAvailability = [...availability];
        updatedAvailability[dayIndex] = !updatedAvailability[dayIndex];
        setAvailability(updatedAvailability);
    };

    return (
        <div className="w-64">
            <form>
                {/* Full Name */}
                <div className="mt-4">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                    />
                </div>

                {/* Contact Number */}
                <div className="mt-4">
                    <Label htmlFor="contactNumber">Contact Number</Label>
                    <Input
                        id="contactNumber"
                        type="text"
                        value={contactNumber}
                        onChange={e => setContactNumber(e.target.value)}
                    />
                </div>

                {/* Hourly Wage */}
                <div className="mt-4">
                    <Label htmlFor="hourlyWage">Hourly Wage</Label>

                    <Input
                        id="hourlyWage"
                        type="text"
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
                    <div className="flex space-x-4">
                        {availability.map((available, index) => (
                            <span
                                key={index}
                                className={`cursor-pointer inline-block w-6 h-6 rounded-full text-center leading-6 ${
                                    available
                                        ? 'bg-green-500 text-white'
                                        : 'bg-red-500 text-white'
                                }`}
                                onClick={() => toggleAvailability(index)}>
                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Update Button */}
                <div className="mt-6">
                    <Button onClick={updateProfile}>Update Profile</Button>
                </div>
            </form>
        </div>
    );
}
