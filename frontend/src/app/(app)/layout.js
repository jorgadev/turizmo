'use client';

import { useAuth } from '@/hooks/auth';
import Navigation from '@/app/(app)/Navigation';
import Loading from '@/app/(app)/Loading';

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' });

    if (!user) {
        return <Loading />;
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation user={user} />

            <main>
                <div className="py-8 h-[calc(100vh-65px)]">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 h-full">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
