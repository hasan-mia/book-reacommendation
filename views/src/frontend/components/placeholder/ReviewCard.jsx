import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';

export default function ReviewCard() {
    const data = [0, 1, 2, 3];
    return data.map((index) => (
        <div className="bg-gray-40 p-2 rounded-md flex flex-row justify-center" key={index}>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false}>
                    <div className="animate-pulse">
                        <div className="h-52 bg-gray-300 rounded w-full" />
                    </div>
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                        <Typography color="blue-gray" className="font-medium">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                            </div>
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            <div className="animate-pulse">
                                <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                            </div>
                        </Typography>
                    </div>
                    <Typography variant="small" color="gray" className="font-normal opacity-75">
                        <div className="animate-pulse">
                            <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                            <div className="h-4 bg-gray-300 rounded w-11/12 mb-2" />
                            <div className="h-4 bg-gray-300 rounded w-10/12 mb-2" />
                            <div className="h-4 bg-gray-300 rounded w-11/12 mb-2" />
                            <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                        </div>
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 text-center">
                    <div className="animate-pulse flex flex-col items-center justify-center">
                        <div className="h-4 bg-gray-300 rounded w-full mb-2" />
                        <div className="h-6 bg-gray-300 rounded w-1/2 mb-2" />
                    </div>
                </CardFooter>
            </Card>
        </div>
    ));
}
