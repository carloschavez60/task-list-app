import { useContext } from 'react';

import { AppContext } from './../contexts/AppContext';

export function SearchInput() {
  const { searchInputValue, setSearchInputValue } = useContext(AppContext);

  return (
    <input
      type="text"
      placeholder="Search Task"
      className="rounded border p-1"
      value={searchInputValue}
      onChange={(e) => {
        setSearchInputValue(e.target.value);
      }}
    />
  );
}
