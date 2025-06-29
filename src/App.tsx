import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-blue-500">
              MyDemoProject
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-0">
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
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Welcome to <span className="text-blue-600">MyDemoProject</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-8">
          Experience the future of hospitality with AI-powered solutions
          tailored for hotels and residences. From smart room booking and
          personalized guest services to real-time concierge support and
          intelligent pricing optimization — our platform helps you deliver
          seamless, efficient, and unforgettable stays. Built with React and
          Tailwind CSS, this responsive landing page is the perfect foundation
          for your next-generation hospitality app.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
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
        <section className="mt-16 w-full max-w-4xl text-center mx-auto px-4">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Our Services
          </h3>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
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
