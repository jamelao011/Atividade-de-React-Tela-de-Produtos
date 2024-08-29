import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() !== '') {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicione uma nova tarefa"
        style={{ padding: '10px', marginRight: '10px', width: '300px' }}
      />
      <button onClick={handleAddTask} style={{ padding: '10px 20px' }}>Adicionar</button>
    </div>
  );
}

export default AddTask;
