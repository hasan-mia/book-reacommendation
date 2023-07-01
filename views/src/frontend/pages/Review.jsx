import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import recommend from '../../store/api/recommend';
import CardPlaceholder from '../components/placeholder/Cards';
import Cards from '../components/reviews/Cards';

export default function Review() {
    const { recommends, isLoading } = useSelector((state) => state.recommend);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!recommends) {
            dispatch(recommend.getAllRecommend());
        }
    }, [recommends, dispatch]);
    console.log(recommends);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {isLoading ? (
                <CardPlaceholder />
            ) : (
                recommends?.map((item) => (
                    <div className="bg-gray-40 p-2 rounded-md" key={Math.random()}>
                        <Cards review={item} id={item.bookId} />
                    </div>
                ))
            )}
        </div>
    );
}
