import ApplicationLogo from '@/components/ApplicationLogo';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import ResponsiveNavLink, {
    ResponsiveNavButton,
} from '@/components/ResponsiveNavLink';
import { useAuth } from '@/hooks/auth';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Navigation = ({ user }) => {
    const router = useRouter();
    const pathname = usePathname();

    const { logout } = useAuth();

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100">
            {/* Primary Navigation Menu */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/jobs">
                                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink href="/jobs" active={pathname === '/jobs'}>
                                {user.is_company ? 'My Jobs' : 'Jobs'}
                            </NavLink>
                            <NavLink
                                href="/applications"
                                active={pathname === '/applications'}>
                                {user.is_company
                                    ? 'Applications'
                                    : 'My Applications'}
                            </NavLink>
                            {!user.is_company && (
                                <NavLink
                                    href="/pricing"
                                    active={pathname === '/pricing'}>
                                    Pricing
                                </NavLink>
                            )}
                        </div>
                    </div>

                    <div className="hidden space-x-4 sm:-my-px sm:ml-10 sm:flex">
                        <Link
                            href="/profile"
                            className={`inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out text-gray-500 hover:text-gray-700 hover:cursor-pointer`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className={`w-5 h-5 ${
                                    pathname === '/profile' && 'text-blue-500'
                                }`}>
                                <path
                                    fillRule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <div
                            onClick={logout}
                            className={`inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out text-gray-500 hover:text-gray-700 hover:cursor-pointer`}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button
                            onClick={() => setOpen(open => !open)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24">
                                {open ? (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        className="inline-flex"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Navigation Menu */}
            {open && (
                <div className="block sm:hidden">
                    <Link href="/profile">
                        <div className="flex items-center p-4 border border-gray-200 hover:bg-gray-100">
                            <div className="flex-shrink-0">
                                <svg
                                    className="h-10 w-10 fill-current text-gray-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>

                            <div className="ml-3">
                                <div className="font-medium text-base text-gray-800">
                                    {user?.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user?.email}
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink
                            href="/jobs"
                            active={router.pathname === '/jobs'}>
                            Jobs
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href="/applications"
                            active={router.pathname === '/applications'}>
                            Applications
                        </ResponsiveNavLink>
                        {!user.is_company && (
                            <ResponsiveNavLink
                                href="/pricing"
                                active={router.pathname === '/pricing'}>
                                Pricing
                            </ResponsiveNavLink>
                        )}
                        <ResponsiveNavButton onClick={logout}>
                            Logout
                        </ResponsiveNavButton>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
