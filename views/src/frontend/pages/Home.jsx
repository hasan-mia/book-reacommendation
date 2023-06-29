import React from 'react';
import Cards from '../components/Cards';

function Home() {
    const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {data.map((index) => (
                <div className="bg-gray-40 p-2 rounded-md" key={index}>
                    <Cards />
                </div>
            ))}
        </div>
    );
}

export default Home;
