import { FaHome, FaFolder, FaPlus, FaUser } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-md flex justify-around text-gray-500">
      <button className="flex flex-col items-center">
        <FaHome size={20} />
        <span className="text-xs">Home</span>
      </button>
      <button className="text-orange-500 flex flex-col items-center">
        <FaFolder size={20} />
        <span className="text-xs">Portfolio</span>
      </button>
      <button className="flex flex-col items-center">
        <FaPlus size={20} />
        <span className="text-xs">Input</span>
      </button>
      <button className="flex flex-col items-center">
        <FaUser size={20} />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
};

export default BottomNav;
