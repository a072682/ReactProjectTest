import { createSlice } from "@reduxjs/toolkit";

export const testSlice = createSlice({
    name: "test",
    initialState: {
      data: 0 //你想要的元件的初始內容
    },
  });

export default testSlice.reducer;