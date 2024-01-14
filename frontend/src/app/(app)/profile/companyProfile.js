'use client';
import React, { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import axios from '@/lib/axios';
import LoadingSpinner from '@/components/LoadingSpinner';

// Profile component
export default function CompanyProfile({ data, mutate }) {
    const [companyName, setCompanyName] = useState(
        data?.company?.company_name || '',
    );
    const [contactNumber, setContactNumber] = useState(
        data?.company?.contact_number || '',
    );
    const [isLoading, setIsLoading] = useState(false);

    const updateProfile = async e => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await axios.put('/api/company/update', {
                companyName,
                contactNumber,
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

    return (
        <div className="flex flex-col md:flex-row w-full">
            <div className="w-full md:w-1/3 pr-4">
                <div>
                    <h1 className="text-xl font-semibold mb-2">Details</h1>

                    <hr className="border-t border-gray-300 mb-6" />
                </div>
                <form>
                    <div className="mt-4">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                            id="companyName"
                            type="text"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)}
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

                    <div className="mt-6">
                        <Button disabled={isLoading} onClick={updateProfile}>
                            Update Profile
                        </Button>
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
