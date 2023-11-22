export default function Button({ onClick, children }) {
  return (
    <button className="rounded bg-blue-400 p-2 text-white" onClick={onClick}>
      {children}
    </button>
  );
}
