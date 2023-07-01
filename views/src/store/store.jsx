import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slice/AuthSlice';
import BookSlice from './slice/BookSlice';
import RecommendSlice from './slice/RecommendSlice';

const store = configureStore({
    reducer: {
        auth: AuthSlice,
        book: BookSlice,
        recommend: RecommendSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'auth/allUser/fulfilled',
                    'recommend/allRecommend/fulfilled',
                    'book/getAllBook/fulfilled',
                    'book/getBookDetails/fulfilled',
                    'recommend/getAllRating/fulfilled',
                ],
            },
        }),
});
export default store;
