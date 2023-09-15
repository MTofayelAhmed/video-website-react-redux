import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVideos } from "./VideoAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};
// create a Async Thunk Function
const videosAsyncFetch = createAsyncThunk("videos/fetchVideos", async () => {
  const videos = await fetchVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(videosAsyncFetch.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })

      .addCase(videosAsyncFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(videosAsyncFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.videos= [];
        state.isError = true;
        state.error = action.error?.message;
      })

  },
});

export default videosSlice.reducer
