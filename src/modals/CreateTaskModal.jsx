import { useState } from 'react';

import { IconX } from '@tabler/icons-react';
import Button from '../components/Button';

export default function CreateTaskModal({ createTask, setAppModal }) {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="relative flex w-5/6 max-w-xl flex-col items-center justify-center gap-4 rounded bg-zinc-700 p-4 text-white">
      <p className="text-xl">Write your new task</p>
      <textarea
        className="w-full resize-none rounded p-1 text-black"
        placeholder="Do homework"
        rows="4"
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.target.value);
        }}
      ></textarea>
      <Button
        onClick={() => {
          createTask({ text: textareaValue, isCompleted: false });
          setAppModal(null);
        }}
      >
        Done
      </Button>

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
