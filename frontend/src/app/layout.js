import '@/app/global.css';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body className="antialiased">{children}</body>
        </html>
    );
};

export default RootLayout;
