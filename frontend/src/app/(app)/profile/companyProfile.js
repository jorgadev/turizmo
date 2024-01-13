'use client';
import React, { useState } from 'react';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Label from '@/components/Label';
import axios from '@/lib/axios';

export default function CompanyProfile({ data, mutate }) {
    const [companyName, setCompanyName] = useState(
        data?.company?.company_name || '',
    );
    const [contactNumber, setContactNumber] = useState(
        data?.company?.contact_number || '',
    );

    const updateProfile = async e => {
        e.preventDefault();

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
        }
    };

    return (
        <div className="w-64">
            <form>
                {/* Company Name */}
                <div className="mt-4">
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input
                        id="companyName"
                        type="text"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)}
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

                {/* Update Button */}
                <div className="mt-6">
                    <Button onClick={updateProfile}>Update Profile</Button>
                </div>
            </form>
        </div>
    );
}
