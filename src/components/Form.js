import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: todos.length },
    ]);
    setInputText("");
  };

  return (
    <form className="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Enter Todo Here..."
      />
      <button
        onClick={submitTodoHandler}
        className="btn-add-todo"
        type="submit"
      >
        <i className="fas fa-plus"></i>
      </button>
    </form>
  );
};

export default Form;
