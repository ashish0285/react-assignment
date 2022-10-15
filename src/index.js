import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const tasks = [
  { id: "todo:0", name: "Coding", completed: true },
  { id: "todo:1", name: "Meeting", completed: false },
  { id: "todo:2", name: "Sleep", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App taskList={tasks}/>
  </React.StrictMode>
);

