import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

import Button from '../components/Button';
import type { Task } from '../components/App';

export default function TaskModal({
  setAppModal,
  children,
  createTask,
  updateTask,
  task,
}: {
  setAppModal: React.Dispatch<React.SetStateAction<React.JSX.Element | null>>;
  children: React.ReactNode;
  createTask?: (taskBody: Omit<Task, 'id'>) => void;
  updateTask?: (
    taskId: number,
    nextTaskBody: Partial<Omit<Task, 'id'>>,
  ) => void;
  task?: Task;
}) {
  const [textareaValue, setTextareaValue] = useState(task?.text ?? '');

  function onClick() {
    setAppModal(null);
    if (createTask !== undefined) {
      createTask({ text: textareaValue, isCompleted: false });
    } else if (updateTask !== undefined && task !== undefined) {
      if (task.text === textareaValue) return;
      updateTask(task.id, { text: textareaValue });
    }
  }

  return (
    <div className="relative flex w-5/6 max-w-xl flex-col items-center justify-center gap-4 rounded bg-zinc-700 p-4 text-white">
      <p className="text-xl">{children}</p>
      <textarea
        className="w-full resize-none rounded p-1 text-black"
        placeholder="Do homework"
        rows={4}
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.target.value);
        }}
      ></textarea>
      <Button onClick={onClick}>Done</Button>

      <div
        className="absolute right-0 top-0 cursor-pointer p-2"
        onClick={() => {
          setAppModal(null);
        }}
      >
        <IconX color="white" />
      </div>
    </div>
  );
}
