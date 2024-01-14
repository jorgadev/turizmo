export const APPLICATION_TYPES = {
    accepted: {
        title: 'Accepted',
        color: 'bg-green-500',
        svg: (
            <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                />
            </svg>
        ),
    },
    pending: {
        title: 'Pending',
        color: 'bg-indigo-500',
        svg: (
            <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
            </svg>
        ),
    },
    rejected: {
        title: 'Rejected',
        color: 'bg-red-500',
        svg: (
            <svg
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
        ),
    },
};
