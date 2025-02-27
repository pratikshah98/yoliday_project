import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBell } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";
import { MdDashboard, MdWork, MdInput, MdPerson } from "react-icons/md";
import FirstImage from "../src/assets/images/first_img.png";

const projects = [
  {
    id: 1,
    image: FirstImage,
    title: "Kemampuan Merangkum Tulisan",
    language: "BAHASA SUNDA",
    author: "Oleh Al-Baiqi Samaan",
  },
  {
    id: 2,
    image: FirstImage,
    title: "Kemampuan Merangkum Tulisan",
    language: "BAHASA SUNDA",
    author: "Oleh Al-Baiqi Samaan",
  },
];

const Sidebar = () => (
  <div className="hidden md:flex flex-col w-64 bg-orange-600 text-white h-screen p-4">
    <h1 className="text-xl font-bold">LOGO</h1>
    <nav className="mt-4 space-y-2">
      <a href="#" className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded">
        <MdDashboard /> <span>Dashboard</span>
      </a>
      <a href="#" className="flex items-center space-x-2 p-2 bg-orange-700 rounded">
        <MdWork /> <span>Portfolio</span>
      </a>
      <a href="#" className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded">
        <MdInput /> <span>Inputs</span>
      </a>
      <a href="#" className="flex items-center space-x-2 p-2 hover:bg-orange-700 rounded">
        <MdPerson /> <span>Profile</span>
      </a>
    </nav>
  </div>
);

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Project");

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 w-full mx-auto">
        <header className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Portfolio</h2>
          <div className="flex space-x-4">
            <FaBell className="text-xl" />
            <FaShoppingCart className="text-xl" />
          </div>
        </header>
        <div className="mt-4">
          <div className="flex border-b mb-4 space-x-4">
            {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
              <button
                key={tab}
                className={`$ {activeTab === tab ? "text-orange-600 font-bold" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:justify-end md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <div className="flex border rounded p-2 w-full max-w-md">
              <input type="text" className="flex-1 outline-none" placeholder="Search a project" />
              <FaSearch className="text-gray-500" />
            </div>
            <button className="bg-orange-600 text-white p-2 rounded flex items-center">
              <HiOutlineFilter className="mr-2" /> Filter
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "Project" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-white p-4 shadow rounded flex w-full">
                    <img src={project.image} alt="project" className="w-24 h-24 object-cover rounded" />
                    <div className="ml-4">
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-500">{project.language}</p>
                      <p className="text-xs text-gray-400">{project.author}</p>
                      <button className="bg-orange-500 text-white mt-2 px-4 py-1 rounded">Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activeTab !== "Project" && <p className="text-center text-gray-500">No items in {activeTab}.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileNav = () => (
  <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-around p-2 md:hidden">
    <a href="#" className="flex flex-col items-center text-orange-600">
      <MdDashboard /> <span className="text-xs">Home</span>
    </a>
    <a href="#" className="flex flex-col items-center text-orange-600">
      <MdWork /> <span className="text-xs">Portfolio</span>
    </a>
    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white p-2 rounded-full shadow-lg">
      <HiOutlineFilter className="text-xl" />
    </div>
    <a href="#" className="flex flex-col items-center text-orange-600">
      <MdInput /> <span className="text-xs">Input</span>
    </a>
    <a href="#" className="flex flex-col items-center text-orange-600">
      <MdPerson /> <span className="text-xs">Profile</span>
    </a>
  </div>
);

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Portfolio />
      <MobileNav />
    </div>
  );
};

export default App;
