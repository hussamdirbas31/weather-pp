import React, { FormEvent } from "react";

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="flex items-center space-x-2   ">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="shadow rounded-lg outline-none px-5 py-3 focus:ring-1 md:w-[40rem]"
        placeholder="Enter location"
      />
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded-md glass-button backdrop-blur-md bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-50"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;

// import React, { FormEvent } from "react";

// interface SearchInputProps {
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onSubmit: (e: FormEvent<HTMLFormElement>) => void;
// }

// const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSubmit }) => {
//   return (
//     <form onSubmit={onSubmit} className="flex items-center space-x-2 relative sm:first-letter:bottom-[52%]">
//       <input
//         type="text"
//         value={value}
//         onChange={onChange}
//         className="shadow rounded-lg outline-none px-5 py-3 focus:ring-1 md:w-[40rem] "
//         placeholder="Enter location"
//       />
//       <button
//         type="submit"
//         className="bg-blue-700 text-white px-4 py-2 rounded-md glass-button backdrop-blur-md bg-opacity-30 shadow-lg transition duration-300 ease-in-out hover:bg-opacity-50"
//       >
//         Search
//       </button>
//     </form>
//   );
// };

// export default SearchInput;
