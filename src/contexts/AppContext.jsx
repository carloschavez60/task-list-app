import { createContext, useState } from 'react';

export const AppContext = createContext();

let nextId = 100;
const defaultTasks = [
  { id: 0, text: 'Chat with Elon Musk', isCompleted: true },
  { id: 1, text: 'Cut Onions', isCompleted: false },
  { id: 2, text: 'Sing on the bath', isCompleted: true },
  { id: 3, text: 'Do homework', isCompleted: false },
  { id: 4, text: 'Do homework', isCompleted: false },
  { id: 5, text: 'Do homework', isCompleted: false },
  { id: 6, text: 'Do homework', isCompleted: false },
  { id: 7, text: 'Do homework', isCompleted: false },
  { id: 8, text: 'Do homework', isCompleted: false },
  { id: 9, text: 'Do homework', isCompleted: false },
  { id: 10, text: 'Do homework 10', isCompleted: false },
  { id: 11, text: 'Do homework', isCompleted: false },
];

export function AppContextProvider({ children }) {
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

  const toggleTaskIsCompleted = (task) => {
    setTasks(
      tasks.map((curTask) =>
        curTask.id === task.id
          ? { ...task, isCompleted: !task.isCompleted }
          : curTask,
      ),
    );
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((curTask) => curTask.id !== task.id));
  };

  const addTask = (text) => {
    if (text === '') return;
    setTasks([...tasks, { id: nextId++, text, isCompleted: false }]);
  };

  return (
    <AppContext.Provider
      value={{
        searchInputValue,
        setSearchInputValue,
        appHasModal,
        setAppHasModal,
        totalTasks,
        completedTasks,
        searchedTasks,
        toggleTaskIsCompleted,
        deleteTask,
        addTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
