import {createSlice} from "@reduxjs/toolkit";

const initialState = [
  { id:'0', name:'Dude Lebowski'},
  { id:'1', name:'Neil Young'},
  { id:'2', name:'Dave Gray'},
];


export const usersSlice = createSlice ({
  name: 'users',
  initialState: initialState,
  reducers: {},
});


export const selectedAllUsers = (state) => state.users;

export default usersSlice.reducer;