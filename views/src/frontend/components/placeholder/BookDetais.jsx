import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';

export default function BookDetais() {
    return (
        <div className="flex flex-col lg:flex-row lg:gap-6 my-5">
            <div className="w-12/12 lg:w-8/12">
                <Card className="flex-row">
                    <CardHeader shadow={false} floated={false} className="my-6 w-1/3">
                        <div className="animate-pulse">
                            <div className="h-72 bg-gray-300 rounded w-full" />
                        </div>
                    </CardHeader>
                    <CardBody className="my-6 w-2/3">
                        <Typography variant="h6" color="blue-gray" className="mb-2 text-lg">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-10/12 mb-2" />
                            </div>
                        </Typography>
                        <Typography variant="h6" color="blue" className="mb-2 text-sm">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-8/12 mb-2" />
                            </div>
                        </Typography>
                        <Typography variant="h6" color="green" className="mb-2 text-sm">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-6/12 mb-2" />
                            </div>
                        </Typography>
                        <Typography variant="h6" color="gray" className="font-normal mb-8">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                                <div className="h-4 bg-gray-300 rounded w-11/12 mb-2" />
                                <div className="h-4 bg-gray-300 rounded w-10/12 mb-2" />
                                <div className="h-4 bg-gray-300 rounded w-11/12 mb-2" />
                                <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                            </div>
                        </Typography>
                    </CardBody>
                </Card>
            </div>
            <div className="w-12/12 lg:w-3/12">
                <div className="animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                    <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                </div>
            </div>
        </div>
    );
}
