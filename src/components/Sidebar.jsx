import { FaHome, FaFolder, FaTools, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-orange-600 h-screen text-white p-5 fixed">
      <h2 className="text-xl font-bold">LOGO</h2>
      <nav className="mt-6">
        <ul className="space-y-4">
          <li className="flex items-center gap-3 cursor-pointer hover:bg-orange-500 p-2 rounded-md">
            <FaHome /> Dashboard
          </li>
          <li className="flex items-center gap-3 cursor-pointer bg-orange-500 p-2 rounded-md">
            <FaFolder /> Portfolio
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-orange-500 p-2 rounded-md">
            <FaTools /> Inputs
          </li>
          <li className="flex items-center gap-3 cursor-pointer hover:bg-orange-500 p-2 rounded-md">
            <FaUser /> Profile
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
