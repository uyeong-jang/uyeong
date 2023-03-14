import { BlogPost } from '@app/services/blog/postApi';
import { createSlice } from '@reduxjs/toolkit';

//initialState type
interface initialState {
  isPublishing: boolean;
  blogPostDataById: BlogPost | null;
}

//initialState
const initialState: initialState = {
  isPublishing: false,
  blogPostDataById: null,
};

//slice
const writeSlice = createSlice({
  name: 'write',
  initialState,
  reducers: {
    startPuslishing: (state) => {
      state.isPublishing = true;
    },
    cancelPublishing: (state) => {
      state.isPublishing = false;
    },
    getPostById: (state, action) => {
      state.blogPostDataById = action.payload;
    },
  },
});

//reducer, actions 내보내기
export default writeSlice.reducer;
export const { startPuslishing, cancelPublishing, getPostById } = writeSlice.actions;
