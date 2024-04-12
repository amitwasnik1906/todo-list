import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import TodoItem from "./TodoItem";

function AddTodo() {
  const todos = useSelector(state => state.todos)

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if(input != "")
    dispatch(addTodo(input))
    setInput('')
  }

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos))
  }, [todos])

  return (
    <>
      <div className="  shadow-2xl w-2/3 h-5/6 min-w-96 overflow-y-auto px-5 py-2">

        <form onSubmit={addTodoHandler} className="space-x-3 mt-12 mb-6">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>

        <div className="text-xl text-yellow-200 mb-4">Todos :</div>
        <ul className="list-none">
          {todos.map((todo) => (
            <div key={todo.id}
              className='w-full'
            >
              <TodoItem todo={todo} />
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddTodo