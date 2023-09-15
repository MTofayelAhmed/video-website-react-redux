import { configureStore } from '@reduxjs/toolkit';
import videoReducer from '../features/Videos/VideosSlice';

export const store = configureStore({
  reducer: {
    videos: videoReducer,
  },
});
