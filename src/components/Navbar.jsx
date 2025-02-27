const Navbar = () => {
    return (
      <div className="p-4 bg-white shadow-md">
        <h2 className="text-xl font-bold">Portfolio</h2>
        <div className="flex justify-between items-center mt-3 border-b">
          <div className="flex gap-6">
            <button className="text-orange-500 font-semibold border-b-2 border-orange-500 pb-2">Project</button>
            <button className="text-gray-500">Saved</button>
            <button className="text-gray-500">Shared</button>
            <button className="text-gray-500">Achievement</button>
          </div>
          <div className="flex gap-4 text-gray-600">
            <i className="fas fa-shopping-bag"></i>
            <i className="fas fa-bell"></i>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  