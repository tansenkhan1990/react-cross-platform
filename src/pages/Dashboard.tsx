import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Dashboard = () => {
  const email = useSelector((state: RootState) => state.auth.email);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome to your Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Here's a quick overview of your activity.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-sm font-medium text-gray-500">Total Users</h2>
            <p className="mt-2 text-2xl font-semibold text-green-600">1,245</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-sm font-medium text-gray-500">SignIn as</h2>
            <p className="mt-2  text-blue-600">{email}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-sm font-medium text-gray-500">New Signups</h2>
            <p className="mt-2 text-2xl font-semibold text-purple-600">32</p>
          </div>
          <div className="bg-white rounded-lg shadow p-5">
            <h2 className="text-sm font-medium text-gray-500">Server Uptime</h2>
            <p className="mt-2 text-2xl font-semibold text-yellow-600">
              99.98%
            </p>
          </div>
        </div>

        {/* Quick Links or Actions */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Recent Activity
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>✅ User JohnDoe signed in</li>
              <li>📦 New deployment completed</li>
              <li>🔔 3 new notifications</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Quick Actions
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Add User
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                View Reports
              </button>
              <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
