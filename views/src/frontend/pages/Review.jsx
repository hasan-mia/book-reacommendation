import { Spinner } from '@material-tailwind/react';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import recommend from '../../store/api/recommend';
import url from '../../store/config/url';
import ReviewCard from '../components/placeholder/ReviewCard';
import Cards from '../components/reviews/Cards';

export default function Review() {
    const { recommends, isLoading, nextPage } = useSelector((state) => state.recommend);
    const dispatch = useDispatch();

    const getScrollPosition = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight + 100 >= scrollHeight && nextPage) {
            dispatch(recommend.getAllRecommend(nextPage));
        }
    }, [nextPage, dispatch]);

    useEffect(() => {
        window.addEventListener('scroll', getScrollPosition);
        if (!recommends) {
            dispatch(recommend.getAllRecommend(url.getAllRecommend));
        }
        return () => {
            window.removeEventListener('scroll', getScrollPosition);
        };
    }, [recommends, dispatch, getScrollPosition]);

    return (
        <div className="grid grid-cols-1 gap-4 mt-2">
            {isLoading && !recommends ? (
                <ReviewCard />
            ) : (
                recommends?.map((item) => (
                    <div
                        className="bg-gray-40 p-2 rounded-md flex flex-row justify-center"
                        key={Math.random()}
                    >
                        <Cards review={item} id={item.bookId} />
                    </div>
                ))
            )}
            {isLoading && recommends && (
                <div className="flex justify-center">
                    <Spinner color="amber" />
                </div>
            )}
        </div>
    );
}
