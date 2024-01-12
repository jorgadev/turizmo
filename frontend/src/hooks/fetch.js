import useSWR from 'swr';
import axios from '@/lib/axios';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export const useFetch = (url, options = {}) => {
    const router = useRouter();

    const { data, error, mutate, isValidating } = useSWR(
        url,
        () =>
            axios
                .get(url)
                .then(res => res.data)
                .catch(error => {
                    if (error.response.status !== 409) throw error;

                    router.push('/verify-email');
                }),
        options,
    );

    useEffect(() => {
        // You can add any additional logic here based on your requirements
    }, [data, error]);

    return { data, error, mutate, isLoading: isValidating };
};
