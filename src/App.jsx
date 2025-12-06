import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTask]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const allCompleted =
    todos.length > 0 && todos.every((todo) => todo.completed);

  return (
    <div className="container">
      <h1>To-Do List App ✨</h1>

      <div className="inputBox">
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {allCompleted && (
        <div className="appreciation">
          🎉 Amazing! You completed all your tasks! Keep it up! 🚀


           <div className="badge">
      🏆 Achievement Unlocked: Task Master!
    </div>
        </div>
        
      )}

      <ul className="todoList">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="left" onClick={() => toggleComplete(todo.id)}>
              <input type="checkbox" checked={todo.completed} readOnly />
              <span>{todo.text}</span>
            </div>

            <button className="deleteBtn" onClick={() => deleteTask(todo.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
