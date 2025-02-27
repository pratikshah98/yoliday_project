import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative p-4">
      <input
        type="text"
        placeholder="Search a project"
        className="w-full p-3 pl-10 border rounded-lg shadow-sm"
      />
      <FaSearch className="absolute top-7 left-6 text-gray-500" />
    </div>
  );
};

export default SearchBar;
