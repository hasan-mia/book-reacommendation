/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import recommend from '../api/recommend';

const RecommendSlice = createSlice({
    name: 'recommend',
    initialState: {
        isLoading: false,
        isError: false,
        recommends: null,
    },
    extraReducers: (builder) => {
        // get all post
        builder.addCase(recommend.allRecommend.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(recommend.allRecommend.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.recommends = data.data;
        });

        builder.addCase(recommend.allRecommend.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default RecommendSlice.reducer;
