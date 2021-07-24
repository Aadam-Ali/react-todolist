import './App.css';
import React, { useState } from 'react';
import Form from "./components/Form"
import TodoList from "./components/TodoContainer"
import Header from "./components/Header"

const App = () => {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className="app">
      <Header />
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App