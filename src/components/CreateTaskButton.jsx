export default function CreateTaskButton({ setAppHasModal }) {
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
