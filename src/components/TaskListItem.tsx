import { IconSquare } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { IconSquareCheck } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';

import TaskModal from '../modals/TaskModal';
import type { Task } from './App';

export default function TaskLIstItem({
  task,
  updateTask,
  deleteTask,
  setAppModal,
}: {
  task: Task;
  updateTask: (taskId: number, nextTaskBody: Partial<Omit<Task, 'id'>>) => void;
  deleteTask: (taskId: number) => void;
  setAppModal: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
}) {
  return (
    <li className="mx-auto flex min-h-full w-full max-w-2xl items-center justify-between gap-1 rounded bg-zinc-700">
      <div className="flex items-center">
        <div
          className="cursor-pointer p-2"
          onClick={() => {
            updateTask(task.id, { isCompleted: !task.isCompleted });
          }}
        >
          {task.isCompleted ? (
            <IconSquareCheck color={'white'} size={32} />
          ) : (
            <IconSquare color={'white'} size={32} />
          )}
        </div>

        <p className={`text-white ${task.isCompleted ? 'line-through' : ''}`}>
          {task.text}
        </p>
      </div>
      <div className="flex items-center">
        <div
          className="cursor-pointer p-2"
          onClick={() => {
            setAppModal(
              <TaskModal
                task={task}
                updateTask={updateTask}
                setAppModal={setAppModal}
              >
                Edit your task
              </TaskModal>,
            );
          }}
        >
          <IconEdit color={'white'} size={32} />
        </div>

        <div
          className="cursor-pointer p-2"
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          <IconTrash color={'white'} size={32} />
        </div>
      </div>
    </li>
  );
}
