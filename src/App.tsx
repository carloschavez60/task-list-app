import { useState } from 'react';

import { TaskListItem } from './components/TaskListItem';
import { Button } from './components/Button';
import { ModalBackground } from './ModalBackground';
import { TaskModal } from './components/TaskModal';

interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

let nextId = 100;
const defaultTasks: Task[] = [
  { id: 0, text: 'Chat with friend', isCompleted: true },
  { id: 1, text: 'Cut Onions', isCompleted: false },
  { id: 2, text: 'Review math', isCompleted: true },
  { id: 3, text: 'Do homework', isCompleted: false },
];

export function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [searchInput, setSearchInput] = useState('');
  const [appModal, setAppModal] = useState<React.JSX.Element | null>(null);

  const completedTaskCount = tasks.reduce(
    (count, task) => (task.isCompleted ? count + 1 : count),
    0,
  );

  let searchedTasks: Task[] | undefined;
  if (searchInput) {
    searchedTasks = tasks.filter((task) =>
      task.text.toLowerCase().includes(searchInput.toLowerCase()),
    );
  }

  function createTask(taskBody: Omit<Task, 'id'>) {
    setTasks([...tasks, { id: nextId++, ...taskBody }]);
  }

  function updateTask(taskId: number, taskBody: Partial<Omit<Task, 'id'>>) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...taskBody } : task,
      ),
    );
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function openTaskModalForCreation() {
    setAppModal(
      <TaskModal
        title={'Write your new task'}
        onClose={() => setAppModal(null)}
        onDone={(_, textareaValue) => {
          setAppModal(null);
          if (!textareaValue) return;
          createTask({ text: textareaValue, isCompleted: false });
        }}
      />,
    );
  }

  function toggleTaskCompletion(task: Task) {
    updateTask(task.id, { isCompleted: !task.isCompleted });
  }

  function openTaskModalForEdition(task: Task) {
    setAppModal(
      <TaskModal
        title={'Edit your task'}
        onClose={() => setAppModal(null)}
        onDone={(_, textareaValue) => {
          setAppModal(null);
          if (task.text === textareaValue) return;
          if (!textareaValue) return;
          updateTask(task.id, { text: textareaValue });
        }}
        placeholder={task.text}
      />,
    );
  }

  return (
    <div className="min-h-screen bg-zinc-800 p-2">
      <h1 className="py-2 text-center text-5xl font-bold text-blue-400">
        Task List
      </h1>

      <p className="text-center text-2xl text-white">
        {completedTaskCount} of {tasks.length} completed
      </p>

      <div className="mx-auto flex max-w-2xl items-center justify-between py-2">
        <input
          type="text"
          placeholder={'Search Task'}
          value={searchInput}
          className="w-48 rounded border p-1"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Button text={'Create Task'} onClick={openTaskModalForCreation} />
      </div>

      <ul className="flex flex-col gap-2 pt-2">
        {(searchedTasks ? searchedTasks : tasks).map((task) => (
          <TaskListItem
            key={task.id}
            text={task.text}
            isCompleted={task.isCompleted}
            onComplete={() => toggleTaskCompletion(task)}
            onEdit={() => openTaskModalForEdition(task)}
            onDelete={() => deleteTask(task.id)}
          />
        ))}
      </ul>

      {appModal ? <ModalBackground>{appModal}</ModalBackground> : null}
    </div>
  );
}
