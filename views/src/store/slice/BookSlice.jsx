/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import book from '../api/book';

const BookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoading: false,
        isError: false,
        books: null,
        isBookLoading: false,
        isBookError: false,
        bookDetails: null,
    },
    extraReducers: (builder) => {
        // get all book
        builder.addCase(book.getAllBook.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(book.getAllBook.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.books = data.data.items;
        });

        builder.addCase(book.getAllBook.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        // get book details
        builder.addCase(book.getBookDetails.pending, (state) => {
            state.isBookLoading = true;
        });

        builder.addCase(book.getBookDetails.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isBookLoading = false;
            state.bookDetails = data.data.volumeInfo;
        });

        builder.addCase(book.getBookDetails.rejected, (state) => {
            state.isBookLoading = false;
            state.isBookError = true;
        });
    },
});

export default BookSlice.reducer;
