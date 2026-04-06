import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-800">
          MyApp
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <a href="#" className="block px-4 py-2 rounded bg-blue-600">
            Home
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
          >
            Analytics
          </a>
          <a
            href="#"
            className="block px-4 py-2 rounded hover:bg-slate-800 transition"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Welcome, Admin</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-all shadow-md active:scale-95"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Stat Cards */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-3xl font-bold">$24,500</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">Active Users</p>
              <h3 className="text-3xl font-bold">1,240</h3>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-500 text-sm">Avg. Session</p>
              <h3 className="text-3xl font-bold">12m 40s</h3>
            </div>
          </div>

          {/* Placeholder for Data */}
          <div className="bg-white h-96 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center text-gray-400">
            Main content / Charts / Table goes here
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
