import React, { useState } from 'react';
import Header from './components/Header';
import Task1 from './components/Task1';
import Task2 from './components/Task2';
import Task3 from './components/Task3';
import Task4 from './components/Task4';
import Task5 from './components/Task5';
import './styles/App.css';

function App() {
  const [activeTask, setActiveTask] = useState(1);

  const tasks = [
    { id: 1, title: 'Cloud Setup Planning' },
    { id: 2, title: 'Virtualization Design' },
    { id: 3, title: 'Cloud Platform Implementation' },
    { id: 4, title: 'Security & Cost Analysis' },
    { id: 5, title: 'Virtualization & Cloud Computing' }
  ];

  return (
    <div className="App">
      <Header />
      
      <nav className="task-nav">
        {tasks.map(task => (
          <button
            key={task.id}
            className={`nav-btn ${activeTask === task.id ? 'active' : ''}`}
            onClick={() => setActiveTask(task.id)}
          >
            Task {task.id}: {task.title}
          </button>
        ))}
      </nav>

      <main className="task-container">
        {activeTask === 1 && <Task1 />}
        {activeTask === 2 && <Task2 />}
        {activeTask === 3 && <Task3 />}
        {activeTask === 4 && <Task4 />}
        {activeTask === 5 && <Task5 />}
      </main>
    </div>
  );
}

export default App;