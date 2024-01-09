'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/auth'

const LoginLinks = () => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
            {user ? (
                <Link
                    href="/dashboard"
                    className="ml-4 text-sm text-white underline">
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="text-sm text-white underline">
                        Login
                    </Link>
                </>
            )}
        </div>
    )
}

export default LoginLinks
