import React from "react";

const TodoItem = ({ text, todos, setTodos, todo }) => {
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  };

  const deleteHandler = () => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <div className="todo-card">
      <div className={`todo-item ${todo.completed ? "completed-todo" : ""}`}>
        {text}
      </div>
      <div className="btn-container">
        <button onClick={completeHandler} className="btn-complete">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteHandler} className="btn-delete">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
