import React, { useEffect } from "react"
import TodoItem from "./TodoItem"

const TodoList = ({ todos, setTodos }) => {

  useEffect(() => { setTodos(JSON.parse(localStorage.getItem("todos"))) }, [])
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)) }, [todos])

  if (!localStorage.setItem("todos", JSON.stringify(todos))) {return}

  return (
    <div className="todo-container">
      {todos.map((todo) => (<TodoItem key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />))}
    </div>
  )
}

export default TodoList