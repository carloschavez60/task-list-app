import { useContext } from 'react';

import { AppContext } from './../contexts/AppContext';

export function CreateTaskButton() {
  const { setAppHasModal } = useContext(AppContext);

  return (
    <button
      className="rounded bg-blue-400 p-2 text-white"
      onClick={() => {
        setAppHasModal((appHasModal) => !appHasModal);
      }}
    >
      Create Task
    </button>
  );
}
