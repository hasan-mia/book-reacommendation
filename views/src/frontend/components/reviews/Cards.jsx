import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { HiArrowRight } from 'react-icons/hi2';

export default function Cards({ review, id }) {
    console.log(review);
    return (
        <Card className="flex-col justify-center">
            <CardHeader
                shadow={false}
                floated={false}
                className="w-full flex justify-center shrink-0 m-0 rounded-r-none"
            >
                {/* <img
                    src={book?.imageLinks?.thumbnail}
                    alt={book.title}
                    className="boject-cover w-2/3"
                /> */}
            </CardHeader>
            <CardBody>
                <Typography variant="h2" color="blue-gray" className="mb-2 text-lg">
                    {/* {book.title} */}
                </Typography>
                <Typography variant="h6" color="blue" className="mb-2 text-sm">
                    {/* Author: &nbsp;
                    {book.authors?.map((item) => (
                        <span key={Math.random()}>{item}</span>
                    ))} */}
                </Typography>
                <Typography variant="h6" color="green" className="mb-2 text-sm">
                    {/* Publisher: &nbsp;{book.publisher} */}
                </Typography>
                <Typography variant="h6" color="gray" className="font-normal mb-8">
                    {/* {book.description.length >= 120 && book.description.slice(0, 120)} */}
                </Typography>
                <a
                    href={`/details/${id}`}
                    className="flex items-center justify-center text-green-700 font-bold gap-2"
                >
                    View
                    <HiArrowRight strokeWidth={2} className="w-4 h-4" />
                </a>
            </CardBody>
        </Card>
    );
}
