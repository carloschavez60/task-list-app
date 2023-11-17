import { useContext } from 'react';
import { IconSquare } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { IconSquareCheck } from '@tabler/icons-react';

import { AppContext } from './../contexts/AppContext';

export function Task({ task }) {
  const { toggleTaskIsCompleted, deleteTask } = useContext(AppContext);

  return (
    <li className="mx-auto flex min-h-full w-full max-w-2xl items-center justify-start gap-1 rounded bg-zinc-700">
      <div
        className="p-2"
        onClick={() => {
          toggleTaskIsCompleted(task);
        }}
      >
        {task.isCompleted ? (
          <IconSquareCheck color="white" size={32} />
        ) : (
          <IconSquare color="white" size={32} />
        )}
      </div>
      <p className={`text-white ${task.isCompleted ? 'line-through' : ''}`}>
        {task.text}
      </p>
      <div
        className="ml-auto p-2"
        onClick={() => {
          deleteTask(task);
        }}
      >
        <IconTrash color="white" size={32} />
      </div>
    </li>
  );
}
