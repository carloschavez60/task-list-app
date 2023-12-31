import { useState } from 'react';

import Input from './Input';
import TaskListItem from './TaskListItem';
import Button from './Button';
import Modal from '../modals/Modal';
import TaskModal from '../modals/TaskModal';

export interface Task {
  id: number;
  text: string;
  isCompleted: boolean;
}

let nextId = 100;
const defaultTasks: Task[] = [
  { id: 0, text: 'Chat with Elon Musk', isCompleted: true },
  { id: 1, text: 'Cut Onions', isCompleted: false },
  { id: 2, text: 'Review math', isCompleted: true },
  { id: 3, text: 'Do homework', isCompleted: false },
];

export default function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [appModal, setAppModal] = useState<React.JSX.Element | null>(null);

  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce(
    (acc, task) => acc + (task.isCompleted ? 1 : 0),
    0,
  );

  const searchedTasks = tasks.filter((task) => {
    return task.text
      .toLocaleLowerCase()
      .includes(searchInputValue.toLocaleLowerCase());
  });

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((curTask) => curTask.id !== taskId));
  }

  function createTask(taskBody: Omit<Task, 'id'>) {
    if (taskBody.text === '') return;
    setTasks([...tasks, { id: nextId++, ...taskBody }]);
  }

  function updateTask(taskId: number, nextTaskBody: Partial<Omit<Task, 'id'>>) {
    setTasks(
      tasks.map((curTask) =>
        curTask.id === taskId ? { ...curTask, ...nextTaskBody } : curTask,
      ),
    );
  }

  return (
    <div className="min-h-screen bg-zinc-800 p-2">
      <h1 className="py-2 text-center text-5xl font-bold text-blue-400">
        Task List
      </h1>

      <p className="text-center text-2xl text-white">
        {completedTasks} of {totalTasks} completed
      </p>

      <div className="mx-auto flex max-w-2xl items-center justify-between py-2">
        <Input
          placeholder={'Search Task'}
          inputValue={searchInputValue}
          setInputValue={setSearchInputValue}
        />
        <Button
          onClick={() => {
            setAppModal(
              <TaskModal setAppModal={setAppModal} createTask={createTask}>
                Write your new task
              </TaskModal>,
            );
          }}
        >
          Create Task
        </Button>
      </div>

      <ul className="flex flex-col gap-2 pt-2">
        {searchedTasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            setAppModal={setAppModal}
          />
        ))}
      </ul>

      {appModal !== null ? <Modal>{appModal}</Modal> : null}
    </div>
  );
}
