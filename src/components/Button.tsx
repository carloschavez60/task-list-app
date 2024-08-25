export function Button(props: {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="rounded-md bg-blue-400 px-4 py-2 text-white"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
