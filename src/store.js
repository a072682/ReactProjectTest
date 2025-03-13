import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/loginSlice";

export const store = configureStore({
    reducer: { // 必要加入 reducer
      login: loginReducer  
      //counter為元件的名稱，可更改 
      //counterReducer為引入的元件改名後的名稱不可更改
    }
  });

export default store;