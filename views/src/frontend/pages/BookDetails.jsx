import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import book from '../../store/api/book';

export default function BookDetails() {
    const { id } = useParams();
    const { bookDetails } = useSelector((state) => state.book);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!bookDetails) {
            dispatch(book.getBookDetails(id));
        }
    }, [dispatch, id, bookDetails]);

    console.log(bookDetails);

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">data</div>;
}
