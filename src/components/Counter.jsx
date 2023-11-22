export default function Counter({ completedTasks, totalTasks }) {
  return (
    <p className="text-center text-2xl text-white">
      {completedTasks} of {totalTasks} completed
    </p>
  );
}
