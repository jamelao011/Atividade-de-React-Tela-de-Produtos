// src/App.js
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskChart from './components/TaskChart'; // Importa o componente de gráfico

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const newTask = { text: task, completed: false };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Minha Lista de Tarefas</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} />
      <TaskChart tasks={tasks} /> {/* Exibe o gráfico de tarefas */}
    </div>
  );
}

export default App;
