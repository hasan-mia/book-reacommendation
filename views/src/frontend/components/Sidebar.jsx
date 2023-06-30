import { Button, Card, CardBody, CardHeader, Rating, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Sidebar({ bookId, image, title, description, author, source }) {
    const { userInfo } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const [rated, setRated] = useState(null);
    const credentialHandler = (name, data) => {
        if (name === 'text') {
            setText(data);
        }
    };
    console.log(userInfo);
    const handleReview = (e) => {
        e.preventDefault();
        if (!userInfo) {
            toast.error('please login first');
            navigate('/signin', { replace: false });
        } else if (!rated) {
            toast.error("rating can't be empty");
        } else {
            const data = {
                userId: userInfo.id,
                bookId,
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
            console.log(data);
        }
    };

    return (
        <Card className="flex-col justify-center items-center">
            <CardHeader
                shadow={false}
                floated={false}
                className="w-full flex justify-between px-4 shrink-0 m-0 rounded-r-none"
            >
                <Rating value={rated} onChange={(value) => setRated(value)} />
                <p className="text-xl">4.5</p>
            </CardHeader>
            <CardBody>
                <form className="grid gap-2" onSubmit={handleReview}>
                    <Textarea
                        label="Review"
                        type="text"
                        value={text}
                        name="text"
                        size="lg"
                        onChange={(e) => credentialHandler(e.target.name, e.target.value)}
                    />
                    <Button color="red" type="submit">
                        Submit
                    </Button>
                </form>
            </CardBody>
        </Card>
    );
}
