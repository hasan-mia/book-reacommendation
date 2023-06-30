/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import book from '../api/book';

const CategorySlice = createSlice({
    name: 'book',
    initialState: {
        isLoading: false,
        isError: false,
        books: null,
    },
    extraReducers: (builder) => {
        // get all post
        builder.addCase(book.getAllBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(book.getAllBook.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.books = data.data;
        });

        builder.addCase(book.getAllBook.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default CategorySlice.reducer;
