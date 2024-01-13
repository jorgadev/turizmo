'use client';

import React from 'react';
import { useAuth } from '@/hooks/auth';
import CompanyJobs from './companyJobs';
import WorkerJobs from './workerJobs';

export default function Jobs() {
    const { user } = useAuth({ middleware: 'auth' });

    return user.is_company ? <CompanyJobs /> : <WorkerJobs />;
}
