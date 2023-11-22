import { useState } from 'react';

import Input from './Input';
import TaskListItem from './TaskListItem';
import Button from './Button';
import Modal from '../modals/Modal';
import CreateTaskModal from '../modals/CreateTaskModal';

let nextId = 100;
const defaultTasks = [
  { id: 0, text: 'Chat with Elon Musk', isCompleted: true },
  { id: 1, text: 'Cut Onions', isCompleted: false },
  { id: 2, text: 'Review math', isCompleted: true },
  { id: 3, text: 'Do homework', isCompleted: false },
];

export default function App() {
  const [tasks, setTasks] = useState(defaultTasks);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [appHasModal, setAppHasModal] = useState(false);

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

  function toggleTaskIsCompleted(task) {
    setTasks(
      tasks.map((curTask) =>
        curTask.id === task.id
          ? { ...task, isCompleted: !task.isCompleted }
          : curTask,
      ),
    );
  }

  function deleteTask(task) {
    setTasks(tasks.filter((curTask) => curTask.id !== task.id));
  }

  function addTask(text) {
    if (text === '') return;
    setTasks([...tasks, { id: nextId++, text, isCompleted: false }]);
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
            setAppHasModal((appHasModal) => !appHasModal);
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
            toggleTaskIsCompleted={toggleTaskIsCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </ul>

      {appHasModal ? (
        <Modal>
          <CreateTaskModal addTask={addTask} setAppHasModal={setAppHasModal} />
        </Modal>
      ) : null}
    </div>
  );
}
