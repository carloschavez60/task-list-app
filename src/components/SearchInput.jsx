export default function SearchInput({ searchInputValue, setSearchInputValue }) {
  return (
    <input
      type="text"
      placeholder="Search Task"
      value={searchInputValue}
      className="w-48 rounded border p-1"
      onChange={(e) => {
        setSearchInputValue(e.target.value);
      }}
    />
  );
}
