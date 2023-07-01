import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import book from '../../store/api/book';
import Cards from '../components/books/Cards';
import BookCard from '../components/placeholder/BookCard';

function Home() {
    const { books, isLoading } = useSelector((state) => state.book);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!books) {
            dispatch(book.getAllBook());
        }
    }, [books, dispatch]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-10 my-2">
            {isLoading ? (
                <BookCard />
            ) : (
                books?.map((item) => (
                    <div className="bg-gray-40 px-1 rounded-md" key={Math.random()}>
                        <Cards book={item.volumeInfo} id={item.id} />
                    </div>
                ))
            )}
        </div>
    );
}

export default Home;
