import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <img
              src="https://via.placeholder.com/32"
              alt="logo"
              className="w-8 h-8 rounded-full"
            /> */}
            <span className="text-xl font-semibold text-blue-500">
              MyDemoProject
            </span>
          </div>

          {/* Navigation */}
          <nav className="space-x-6">
            <a
              href="#home"
              className="hover:text-blue-300 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#signin"
              className="hover:text-blue-300 transition-colors font-medium"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Sign Up
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          Welcome to <span className="text-blue-600">MyDemoProject</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          This is a simple, responsive landing page built with React and
          Tailwind CSS. It’s a great starting point for your next web project.
        </p>
        <div className="space-x-4">
          <a
            href="#signup"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#signin"
            className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50"
          >
            Learn More
          </a>
        </div>

        {/* Our Services Section */}
        {/* Our Services Section */}
        <section className="mt-16 w-full max-w-4xl text-left">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-700 list-disc list-inside">
            <li>🏨 Smart Hotel Room Booking with Real-Time Availability</li>
            <li>🛎️ AI Concierge Support for Guest Inquiries 24/7</li>
            <li>📊 Personalized Stay Recommendations Powered by AI</li>
            <li>📱 Mobile App Integration for Seamless Check-In & Services</li>
            <li>🔍 AI-driven Pricing Optimization for Better Revenue</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; tansenkhan2025
      </footer>
    </div>
  );
}

export default App;
