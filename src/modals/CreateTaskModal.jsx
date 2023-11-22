import { useState } from 'react';

import { IconX } from '@tabler/icons-react';

export default function CreateTaskModal({ addTask, setAppHasModal }) {
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <div className="relative flex w-5/6 max-w-xl flex-col items-center justify-center gap-4 rounded bg-zinc-700 p-4 text-white">
      <p className="text-xl">Write your new task</p>
      <textarea
        className="w-full resize-none rounded p-1 text-black"
        placeholder="Do homework"
        value={textareaValue}
        onChange={(e) => {
          setTextareaValue(e.target.value);
        }}
      ></textarea>
      <button
        className="block rounded bg-blue-400 px-4 py-2"
        onClick={() => {
          addTask(textareaValue);
          setAppHasModal(false);
        }}
      >
        Done
      </button>
      <div
        className="absolute right-0 top-0 cursor-pointer p-2"
        onClick={() => {
          setAppHasModal(false);
        }}
      >
        <IconX color="white" />
      </div>
    </div>
  );
}
