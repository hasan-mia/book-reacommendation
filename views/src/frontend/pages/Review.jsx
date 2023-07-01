import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import recommend from '../../store/api/recommend';

export default function Review() {
    const { recommends } = useSelector((state) => state.recommend);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!recommends) {
            dispatch(recommend.getAllRecommend());
        }
    }, [recommends, dispatch]);
    console.log(recommends);
    return <div>Review</div>;
}
