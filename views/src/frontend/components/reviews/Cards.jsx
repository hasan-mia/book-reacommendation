/* eslint-disable no-unused-vars */
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import recommend from '../../../store/api/recommend';

export default function Cards({ review, id }) {
    const { ratings } = useSelector((state) => state.recommend);
    const dispatch = useDispatch();
    const rating = ratings.toFixed(1);
    useEffect(() => {
        if (!ratings) {
            dispatch(recommend.getAllRating(id));
        }
    }, [dispatch, id, ratings]);
    return (
        <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img src={review.image} className="w-full h-full object-cover" alt={review.title} />
            </CardHeader>
            <CardBody>
                <div className="flex items-center justify-between mb-2">
                    <Typography color="blue-gray" className="font-medium">
                        {review.title}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        {rating} by {review.userName.split(' ')[0]}
                    </Typography>
                </div>
                <Typography variant="small" color="gray" className="font-normal opacity-75">
                    {review.review}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
                <a
                    href={`/details/${id}`}
                    className="bg-blue-gray-900/10 rounded-md p-2 text-center text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                >
                    View Book
                </a>
            </CardFooter>
        </Card>
    );
}
