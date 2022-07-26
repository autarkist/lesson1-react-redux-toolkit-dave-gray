import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns";


const initialState = [
  {
    id: '1',
    title: 'Learning Redux Toolkit',
    content: "I've heard good title",
    date: sub(new Date(), {minutes: 5}).toISOString()
  },
  {
    id: '2',
    title: 'Slices...',
    content: "The more I say slice, the more....",
    date: sub(new Date(), {minutes: 8}).toISOString()
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
            date: new Date().toISOString(),
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