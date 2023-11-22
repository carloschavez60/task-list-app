export default function Input({ placeholder, inputValue, setInputValue }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      className="w-48 rounded border p-1"
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
    />
  );
}
