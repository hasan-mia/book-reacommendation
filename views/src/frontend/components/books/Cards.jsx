import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { HiArrowRight } from 'react-icons/hi2';

export default function Cards({ book, id }) {
    return (
        <Card className="flex-col justify-center hover:shadow-green-100 transition-all mb-0 pb-0">
            <CardHeader
                shadow={false}
                floated={false}
                className="w-full flex justify-center shrink-0 m-0 rounded-r-none"
            >
                <img
                    src={book?.imageLinks?.thumbnail}
                    alt={book.title}
                    className="boject-cover w-2/3 max-h-48"
                />
            </CardHeader>
            <CardBody className="text-center px-1 mb-0 pb-0" style={{ minHeight: '15rem' }}>
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-2 text-md font-normal text-center px-0"
                >
                    {book.title}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2 text-sm font-thin">
                    By &nbsp;
                    {book.authors?.map((item) => (
                        <span key={Math.random()} className="font-semibold">
                            {item}
                        </span>
                    ))}
                </Typography>
                <Typography variant="h6" color="blue-gray" className="mb-2 text-sm font-thin">
                    Published by &nbsp; <span className="font-semibold">{book.publisher}</span>
                </Typography>
                <Typography variant="h6" color="blue-gray" className="font-thin mb-2">
                    {book.description.length >= 80 && book.description.slice(0, 80)}
                </Typography>
            </CardBody>
            <CardFooter>
                <a
                    href={`/details/${id}`}
                    className="flex items-center justify-center bg-green-700 text-white border rounded-b-md w-full p-2 font-bold gap-x-2"
                >
                    View Details
                    <HiArrowRight strokeWidth={2} className="w-4 h-4" />
                </a>
            </CardFooter>
        </Card>
    );
}
