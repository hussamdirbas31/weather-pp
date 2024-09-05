import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="shadow rounded-md outline-none px-5 py-3 focus:ring-1 focus:ring-purple-300"
        placeholder="Enter location"
      />
    </div>
  );
};

export default SearchInput;
