import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Rating,
    Spinner,
    Textarea,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import recommend from '../../store/api/recommend';

export default function Sidebar({ bookId, image, title, description, author, source }) {
    const { userInfo } = useSelector((state) => state.auth);
    const { ratings } = useSelector((state) => state.recommend);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [text, setText] = useState('');
    const rating = ratings.toFixed(1);
    const [rated, setRated] = useState(Math.trunc(ratings));
    const dispatch = useDispatch();

    const credentialHandler = (name, data) => {
        if (name === 'text') {
            setText(data);
        }
    };
    const handleReview = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!userInfo) {
            toast.error('please login first');
            navigate('/signin', { replace: false });
        } else if (!rated) {
            toast.error("rating can't be empty");
        } else if (text === '') {
            toast.error("reivew can't be empty");
        } else {
            const data = {
                userId: userInfo.id,
                bookId,
                userName: userInfo.name,
                title,
                author,
                description,
                image,
                source,
                review: text,
                ratings: [
                    {
                        rating: rated,
                    },
                ],
            };
            const res = await recommend.createRecommend(data);
            if (res.status === 201) {
                setText('');
                setLoading(false);
                toast.success(`You rating this book ${rated}`);
                dispatch(recommend.getAllRating(bookId));
            } else {
                toast.error(`${res.data.error}`);
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        if (!ratings) {
            dispatch(recommend.getAllRating(bookId));
        }
    }, [dispatch, bookId, ratings]);
    return (
        <Card className="flex-col justify-center items-center mt-5 lg:mt-0 p-0">
            <CardHeader
                shadow={false}
                floated={false}
                className="w-full flex justify-between p-2 shrink-0 mt-2 rounded-r-none py-0"
            >
                <Rating value={rated} onChange={(value) => setRated(value)} />
                <p className="text-xl">{rating || '0.0'}</p>
            </CardHeader>
            <CardBody>
                <form className="grid gap-2" onSubmit={handleReview}>
                    <Textarea
                        label="Review"
                        type="text"
                        value={text}
                        name="text"
                        className="p-0 m-0"
                        onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                    />
                    <Button color="red" type="submit" disabled={loading}>
                        Submit
                    </Button>
                </form>
            </CardBody>
            <CardFooter>
                {loading && (
                    <div className="flex justify-center">
                        <Spinner color="amber" />
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
