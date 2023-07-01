import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';

export default function BookCard() {
    const data = [0, 1, 2, 3, 4];
    return data.map((index) => (
        <Card className="flex-col justify-center" key={index}>
            <CardHeader shadow={false} floated={false} className="mt-6">
                <div className="animate-pulse">
                    <div className="h-52 bg-gray-300 rounded w-full" />
                </div>
            </CardHeader>
            <CardBody>
                <Typography variant="h2" color="blue-gray" className="mb-2 text-lg">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    </div>
                </Typography>
                <Typography variant="h6" color="blue" className="mb-2 text-sm">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    </div>
                </Typography>
                <Typography variant="h6" color="green" className="mb-2 text-sm">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    </div>
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                        <div className="h-4 bg-gray-300 rounded w-11/12 mb-2" />
                        <div className="h-4 bg-gray-300 rounded w-10/12 mb-2" />
                        <div className="h-4 bg-gray-300 rounded w-11/12 mb-2" />
                        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    </div>
                </Typography>
                <div className="animate-pulse flex flex-col items-center justify-center">
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    <div className="h-6 bg-gray-300 rounded w-1/2 mb-2" />
                </div>
            </CardBody>
        </Card>
    ));
}
