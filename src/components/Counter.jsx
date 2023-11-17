import { useContext } from 'react';

import { AppContext } from './../contexts/AppContext';

export function Counter() {
  const { completedTasks, totalTasks } = useContext(AppContext);

  return (
    <p className="text-center text-2xl text-white">
      {completedTasks} of {totalTasks} completed
    </p>
  );
}
