import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const fetchData = async (url, method, options) => {
    try {
        const response = await axios({ method, url, ...options });
        return response.data;
    } catch (error) {
        if (error.response.status !== 409) throw error;
        // Handle the 409 status code (or other statuses) as needed
        // For example, redirect to a verification page
        router.push('/verify-email');
    }
};

export const useFetch = (url, method = 'GET', options = {}) => {
    const router = useRouter();

    const { data, error, mutate, isValidating } = useSWR(
        [url, method], // Use both URL and method as key
        () => fetchData(url, method, options),
        options,
    );

    useEffect(() => {
        // You can add any additional logic here based on your requirements
    }, [data, error]);

    return { data, error, mutate, isLoading: isValidating };
};
