import React, { useState } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Complete homework', completed: false },
    { id: 2, name: 'Do the laundry', completed: false },
    { id: 3, name: 'Read a book', completed: false },
  ]);

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Task Manager
      </h1>

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="accent-blue-500 w-5 h-5"
            />
            <span
              className={`text-lg ${
                task.completed ? 'line-through text-gray-400' : 'text-gray-800'
              }`}
            >
              {task.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
