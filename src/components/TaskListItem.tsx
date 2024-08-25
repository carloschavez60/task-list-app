import { IconSquare } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import { IconSquareCheck } from '@tabler/icons-react';
import { IconEdit } from '@tabler/icons-react';

export function TaskListItem(props: {
  text: string;
  isCompleted: boolean;
  onComplete: React.MouseEventHandler<HTMLDivElement>;
  onEdit: React.MouseEventHandler<HTMLDivElement>;
  onDelete: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <li className="mx-auto flex min-h-full w-full max-w-2xl items-center justify-between gap-1 rounded bg-zinc-700">
      <div className="flex items-center">
        <div className="cursor-pointer p-2" onClick={props.onComplete}>
          {props.isCompleted ? (
            <IconSquareCheck color={'white'} size={32} />
          ) : (
            <IconSquare color={'white'} size={32} />
          )}
        </div>

        <p className={`text-white ${props.isCompleted ? 'line-through' : ''}`}>
          {props.text}
        </p>
      </div>
      <div className="flex items-center">
        <div className="cursor-pointer p-2" onClick={props.onEdit}>
          <IconEdit color={'white'} size={32} />
        </div>

        <div className="cursor-pointer p-2" onClick={props.onDelete}>
          <IconTrash color={'white'} size={32} />
        </div>
      </div>
    </li>
  );
}
