import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'book/';
const book = {};

// get all category
book.getAllBook = createAsyncThunk(`${name}getAllBook`, async () => {
    const res = await axios.get(url.getAllBook, config.simpleHeader);
    return res;
});

// get book details
book.getBookDetails = createAsyncThunk(`${name}getBookDetails`, async (id) => {
    const res = await axios.get(url.getBookDetails, config.paramsWithHeader({ id }));
    return res;
});

export default book;
