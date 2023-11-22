import { useState } from 'react';

import Counter from './Counter';
import SearchInput from './SearchInput';
import Title from './Title';
import TaskList from './TaskList';
import TaskListItem from './TaskListItem';
import CreateTaskButton from './CreateTaskButton';
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
      <Title>Task List</Title>

      <Counter completedTasks={completedTasks} totalTasks={totalTasks} />

      <div className="mx-auto flex max-w-2xl items-center justify-between py-2">
        <SearchInput
          searchInputValue={searchInputValue}
          setSearchInputValue={setSearchInputValue}
        />
        <CreateTaskButton setAppHasModal={setAppHasModal} />
      </div>

      <TaskList>
        {searchedTasks.map((task) => (
          <TaskListItem
            key={task.id}
            task={task}
            toggleTaskIsCompleted={toggleTaskIsCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </TaskList>

      {appHasModal ? (
        <Modal setAppHasModal={setAppHasModal}>
          <CreateTaskModal addTask={addTask} setAppHasModal={setAppHasModal} />
        </Modal>
      ) : null}
    </div>
  );
}
