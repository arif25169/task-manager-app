import { Input } from "antd";
import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce"; // Import the debounce hook

const { Search } = Input;

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Use the custom debounce hook
  const debouncedSearch = useDebounce<string>(onSearch, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  return (
    <Search
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={handleChange}
      allowClear
      size="middle"
      style={{padding:5}}
    />
  );
};

