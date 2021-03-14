import React, { useState } from "react";
import "App.css";
import TodoForm from "./components/todoForm";
function App() {
  // state
  const [todos, setTodos] = useState([]);

  // functions
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo</p>
        <TodoForm addTodo={addTodo}></TodoForm>
      </header>
    </div>
  );
}

export default App;
