import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

function TaskChart({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;


  const data = {
    labels: ['Concluídas', 'Pendentes'],
    datasets: [
      {
        data: [completedTasks, pendingTasks],
        backgroundColor: ['#4CAF50', '#FF0000'],
        hoverBackgroundColor: ['#66BB6A', '#FF6347'] 
      }
    ]
  };

  return (
    <div style={{ margin: '30px 0', maxWidth: '300px', marginLeft: 'auto', marginRight: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Progresso das Tarefas</h2>
      <Doughnut data={data} />
    </div>
  );
}

export default TaskChart;
