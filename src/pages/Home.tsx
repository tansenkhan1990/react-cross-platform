import React from "react";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
        Welcome to <span className="text-blue-600">MyDemoProject</span>
      </h2>
      <p className="text-base sm:text-lg text-gray-600 max-w-2xl mb-8">
        <h2>This is home </h2>
        Experience the future of hospitality with AI-powered solutions tailored for hotels and
        residences. From smart room booking and personalized guest services to real-time concierge
        support and intelligent pricing optimization — our platform helps you deliver seamless,
        efficient, and unforgettable stays. Built with React and Tailwind CSS, this responsive
        landing page is the perfect foundation for your next-generation hospitality app.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#signup" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">Get Started</a>
        <a href="#signin" className="text-blue-600 border border-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-50">Learn More</a>
      </div>
    </section>
  );
};

export default Home;
