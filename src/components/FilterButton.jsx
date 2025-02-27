import { FaFilter } from "react-icons/fa";

const FilterButton = () => {
  return (
    <button className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-lg">
      <FaFilter /> Filter
    </button>
  );
};

export default FilterButton;
