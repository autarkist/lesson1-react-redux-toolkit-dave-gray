import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good title",
  },
  {
    id: '2',
    title: 'Slices...',
    content: "The more I say slice, the more....",
  }
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    postAdded : {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          }
        }
      }
    },
  },
});

export const selectedAllPosts = (state) => state.posts;
export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;