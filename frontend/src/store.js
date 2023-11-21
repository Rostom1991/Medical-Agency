import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./redux/jobSlice";
import userReducer from "./redux/userSlice";
const store = configureStore({
  reducer: {
    medical: jobsReducer,
    user: userReducer,
  },
});
export default store;
