import { useContext } from 'react';

import { AppContext } from './../contexts/AppContext';
import { Counter } from './Counter';
import { SearchInput } from './SearchInput';
import { Title } from './Title';
import { TaskList } from './TaskList';
import { Task } from './Task';
import { CreateTaskButton } from './CreateTaskButton';
import { Modal } from '../modals/Modal';
import { CreateTaskModal } from '../modals/CreateTaskModal';

export function App() {
  const { searchedTasks, appHasModal } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-zinc-800 p-2">
      <Title />
      <Counter />
      <div className="mx-auto flex max-w-2xl items-center justify-between py-2">
        <SearchInput />
        <CreateTaskButton />
      </div>

      <TaskList>
        {searchedTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>

      {appHasModal ? (
        <Modal>
          <CreateTaskModal />
        </Modal>
      ) : null}
    </div>
  );
}
