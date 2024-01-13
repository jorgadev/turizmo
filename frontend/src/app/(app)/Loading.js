import LoadingSpinner from '@/components/LoadingSpinner';

const Loading = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-white">
            <LoadingSpinner />
        </div>
    );
};

export default Loading;
