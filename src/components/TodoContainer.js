import React, { useEffect } from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, setTodos }) => {

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")))

    if (JSON.parse(localStorage.getItem("todos")) === null) {setTodos([{text: "Welcome to Progetto", completed: false, id: new Date}])}
  }, [])
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)) }, [todos])



  return (
    <div className="todo-container">
      {todos.map((todo) => (<TodoItem key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />))}
    </div>
  )
}

export default TodoList