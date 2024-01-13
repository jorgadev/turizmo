'use client';

import React from 'react';
import { useAuth } from '@/hooks/auth';
import CompanyApplications from './companyApplications';
import WorkerApplications from './workerApplications';

export default function Applications() {
    const { user } = useAuth({ middleware: 'auth' });

    return user.is_company ? <CompanyApplications /> : <WorkerApplications />;
}
