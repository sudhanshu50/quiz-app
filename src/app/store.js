import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "../reducers/quizslice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
  }
})