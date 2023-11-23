export default function Button({
  onClick,
  children,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  return (
    <button
      className="rounded bg-blue-400 px-4 py-2 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
