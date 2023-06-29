import React from 'react';
import { Toaster } from 'react-hot-toast';
import Footer from '../frontend/components/Footer';
import Navigation from '../frontend/components/Navigation';

function AppLayout({ children }) {
    return (
        <>
            <Navigation />
            <div className="container mx-auto min-h-screen">{children}</div>
            <Footer />
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </>
    );
}

export default AppLayout;
