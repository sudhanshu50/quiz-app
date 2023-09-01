import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  question_category: "",
  score: 0
}

export const quizSlice = createSlice({
  name: "Quiz",
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeCateg: (state, action) => {
      state.question_category = action.payload;
    },
    changeScore: (state, action) => {
      state.score = action.payload;
    }
  }
})

export const { changeName, changeCateg, changeScore } = quizSlice.actions;

export default quizSlice.reducer;