import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      // console.log(state);
      // console.log(action);
      console.log(state.todos);
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      // console.log(state);
      // console.log(action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      // console.log(state.todos);
      // console.log(action.payload);
      state.todos.map((prevTodo) =>
        prevTodo.id === action.payload.id
          ? (prevTodo.text = action.payload.newText)
          : console.log(prevTodo)
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
