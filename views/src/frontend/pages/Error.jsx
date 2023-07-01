import React from 'react';

function Error() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Error 500 - Internal Server Error</h1>
                <p className="text-gray-600 mb-4">
                    Oops! Something went wrong on our end. Please try again later.
                </p>
                <p className="text-gray-600 mb-4">
                    If you believe this is an error, please contact support.
                </p>
                <a
                    href="/"
                    className="px-4 py-2 bg-green-600 text-white text-center rounded hover:bg-green-700"
                >
                    Go Back to Homepage
                </a>
            </div>
        </div>
    );
}
export default Error;
