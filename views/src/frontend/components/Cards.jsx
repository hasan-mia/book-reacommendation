import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { HiArrowRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

export default function Cards() {
    return (
        <Card className="flex-row w-full max-w-[48rem]">
            <CardHeader
                shadow={false}
                floated={false}
                className="w-2/5 shrink-0 m-0 rounded-r-none"
            >
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="img"
                    className="w-full h-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="blue" className="uppercase mb-4">
                    startups
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    Lyft launching cross-platform service this week
                </Typography>
                <Typography color="gray" className="font-normal mb-8">
                    Like so many organizations these days, Autodesk is a company in transition. It
                    was until recently a traditional boxed software company selling licenses. Yet
                    its own business model disruption is only part of the story
                </Typography>
                <Link
                    to="/"
                    className="flex items-center justify-center text-green-700 font-bold gap-2"
                >
                    <p>Learn More</p>
                    <HiArrowRight strokeWidth={2} className="w-4 h-4" />
                </Link>
            </CardBody>
        </Card>
    );
}
