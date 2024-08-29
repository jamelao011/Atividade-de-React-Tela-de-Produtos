import React from 'react';

function TaskList({ tasks, onToggleTask, onRemoveTask }) {
  return (
    <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
      {tasks.map((task, index) => (
        <li key={index} style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(index)}
            style={{ marginRight: '10px' }}
          />
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              flexGrow: 1,
            }}
          >
            {task.text}
          </span>
          <button onClick={() => onRemoveTask(index)} style={{ marginLeft: '10px', padding: '5px 10px' }}>
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
