import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import book from '../../store/api/book';
import Cards from '../components/Cards';
import CardPlaceholder from '../components/placeholder/Cards';

function Home() {
    const { books, isLoading } = useSelector((state) => state.book);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!books) {
            dispatch(book.getAllBook());
        }
    }, [books, dispatch]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {isLoading ? (
                <CardPlaceholder />
            ) : (
                books?.map((item) => (
                    <div className="bg-gray-40 p-2 rounded-md" key={Math.random()}>
                        <Cards book={item.volumeInfo} id={item.id} />
                    </div>
                ))
            )}
        </div>
    );
}

export default Home;
