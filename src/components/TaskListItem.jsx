import { IconSquare } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { IconSquareCheck } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';

import UpdateTaskModal from '../modals/UpdateTaskModal';

export default function TaskLIstItem({
  task,
  updateTask,
  deleteTask,
  setAppModal,
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
              <UpdateTaskModal
                task={task}
                updateTask={updateTask}
                setAppModal={setAppModal}
              />,
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
