"use client"
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{}
})
export default cartSlice.reducer;
