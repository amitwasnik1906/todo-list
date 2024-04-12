import { createSlice, nanoid } from "@reduxjs/toolkit";

let todos = JSON.parse(localStorage.getItem("localTodos"));

if (!todos) {
  todos = []
}

const initialState = {
  todos: todos,
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
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      state.todos.map((prevTodo) => {
        if (prevTodo.id === action.payload.id) {
          prevTodo.text = action.payload.newText;
        }
      });
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
