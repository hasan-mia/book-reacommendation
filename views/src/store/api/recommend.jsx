import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../config/config';
import url from '../config/url';

const name = 'recommend/';
const recommend = {};
// create recommend
recommend.createRecommend = async (data) => {
    const res = await axios
        .post(url.createRecommend, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// update recommend
recommend.updateRecommend = async (data) => {
    const res = await axios
        .put(url.updateRecommend, data, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// delete recommend
recommend.deleteRecommend = async (payload, id) => {
    const res = await axios
        .delete(`${url.deleteRecommend}/${id}`, config.basicHeader)
        .then((response) => response)
        .catch((err) => err.response);
    return res;
};
// all recommend
recommend.allRecommend = createAsyncThunk(`${name}allRecommend`, async () => {
    const res = await axios.get(url.allRecommend, config.basicHeader);
    return res;
});

export default recommend;
