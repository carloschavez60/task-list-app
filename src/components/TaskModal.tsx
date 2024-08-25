import { useState } from 'react';
import { IconX } from '@tabler/icons-react';

import { Button } from './Button';

export function TaskModal({
  title,
  onClose,
  onDone,
  placeholder,
}: {
  title: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onDone: (
    event: React.MouseEvent<HTMLButtonElement>,
    textareaValue: string,
  ) => void;
  placeholder?: string;
}) {
  const [textareaValue, setTextareaValue] = useState(placeholder ?? '');

  return (
    <div className="relative flex w-5/6 max-w-xl flex-col items-center justify-center gap-4 rounded bg-zinc-700 p-4 text-white">
      <p className="text-xl">{title}</p>
      <textarea
        className="w-full resize-none rounded p-1 text-black"
        placeholder="Do homework"
        rows={4}
        value={textareaValue}
        onChange={(e) => setTextareaValue(e.target.value)}
      ></textarea>
      <Button text={'Done'} onClick={(e) => onDone(e, textareaValue)} />

      <div
        className="absolute right-0 top-0 cursor-pointer p-2"
        onClick={onClose}
      >
        <IconX color="white" />
      </div>
    </div>
  );
}
