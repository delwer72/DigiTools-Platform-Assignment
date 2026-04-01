import React from "react";

const WorkflowSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Ready To Transform Your Workflow?
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-purple-100 text-lg">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Explore Products
          </button>

          <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-purple-600 transition">
            View Pricing
          </button>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-sm text-purple-200">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default WorkflowSection;