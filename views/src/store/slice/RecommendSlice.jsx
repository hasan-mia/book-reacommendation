/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import recommend from '../api/recommend';

const RecommendSlice = createSlice({
    name: 'recommend',
    initialState: {
        isLoading: false,
        isError: false,
        recommends: null,
        isRatingLoading: false,
        isRatingError: false,
        ratings: 0,
    },
    extraReducers: (builder) => {
        // get all post
        builder.addCase(recommend.getAllRecommend.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(recommend.getAllRecommend.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isLoading = false;
            state.recommends = data.data;
        });

        builder.addCase(recommend.getAllRecommend.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
        // get avarage rating
        builder.addCase(recommend.getAllRating.pending, (state) => {
            state.isRatingLoading = true;
        });

        builder.addCase(recommend.getAllRating.fulfilled, (state, action) => {
            const { data } = action.payload;
            state.isRatingLoading = false;
            state.ratings = data.data.averageRating;
        });

        builder.addCase(recommend.getAllRating.rejected, (state) => {
            state.isRatingLoading = false;
            state.isRatingError = true;
        });
    },
});

export default RecommendSlice.reducer;
