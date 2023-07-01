import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import book from '../../store/api/book';
import Sidebar from '../components/Sidebar';
import BookDetais from '../components/placeholder/BookDetais';

export default function BookDetails() {
    const { id } = useParams();
    const { bookDetails, isBookLoading } = useSelector((state) => state.book);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!bookDetails) {
            dispatch(book.getBookDetails(id));
        }
    }, [dispatch, id, bookDetails]);

    return isBookLoading ? (
        <BookDetais />
    ) : (
        <div className="flex flex-col lg:flex-row lg:gap-6 my-5">
            <div className="w-12/12 lg:w-8/12">
                <Card className="flex-row justify-center w-full">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="w-1/4 grid items-center shrink-0 m-0 rounded-r-none"
                    >
                        <img
                            src={bookDetails?.imageLinks?.thumbnail}
                            alt={bookDetails?.title}
                            className="boject-fit w-full h-auto"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h2" color="blue-gray" className="mb-2 text-lg">
                            {bookDetails?.title}
                        </Typography>
                        <Typography variant="h6" color="blue" className="mb-2 text-sm">
                            Author: &nbsp;
                            {bookDetails?.authors?.map((item) => (
                                <span key={Math.random()}>{item}</span>
                            ))}
                        </Typography>
                        <Typography variant="h6" color="green" className="mb-2 text-sm">
                            Publisher: &nbsp;{bookDetails?.publisher}
                        </Typography>
                        <Typography variant="h6" color="gray" className="font-normal mb-8">
                            {bookDetails?.description.split('.').map((d) => (
                                <li className="text-md px-0 last:list-none" key={Math.random()}>
                                    {d}
                                </li>
                            ))}
                        </Typography>
                    </CardBody>
                </Card>
            </div>
            <div className="w-12/12 lg:w-3/12">
                <Sidebar
                    bookId={id}
                    image={bookDetails?.imageLinks?.thumbnail}
                    title={bookDetails?.title}
                    description={bookDetails?.description}
                    author={bookDetails?.authors[0]}
                    source={bookDetails?.previewLink}
                />
            </div>
        </div>
    );
}
