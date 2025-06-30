import { Link } from "react-router-dom";


const PrivateHeader = () => {

  return (
    <header className="bg-gray-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Logo / Title */}
        <div className="flex items-center justify-between">
          <Link to="/dashboard" className="text-xl font-semibold text-green-400">
            MyDashboard
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
          <Link to="/dashboard" className="hover:text-green-300 font-medium">
            Dashboard
          </Link>
          <Link to="/profile" className="hover:text-green-300 font-medium">
            Profile
          </Link>
          <Link to="/logout" className="text-red-400 hover:text-red-500 font-medium">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default PrivateHeader;
