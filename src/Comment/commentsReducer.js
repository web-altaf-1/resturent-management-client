import { createSlice } from "@reduxjs/toolkit";
import db from "src/Database";


const initialState = {
  comments: db.comments,
  comment: { user_id: "1", text: "New Comment" },
};


const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      state.comments = [
        { ...action.payload, _id: new Date().getTime().toString() },
          ...state.comments,
      ];
    },
    deleteComment: (state, action) => {
      state.comments = state.comments.filter(
        (comment) => comment._id !== action.payload
      );
    },
    updateComment: (state, action) => {
      state.comments = state.comments.map((comment) => {
        if (comment._id === action.payload._id) {
          return action.payload;
        } else {
          return comment;
        }
      });
    },
    setComment: (state, action) => {
      state.comment = action.payload;
    },
  },
});


export const { addComment, deleteComment,
  updateComment, setComment } = commentsSlice.actions;
export default commentsSlice.reducer;

