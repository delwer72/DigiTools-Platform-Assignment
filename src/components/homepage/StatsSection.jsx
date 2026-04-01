import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-purple-600 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-white px-6 gap-8">

        {/* 50K+ Active Users */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-4xl md:text-5xl font-extrabold">50K+</h2>
          <p className="text-sm md:text-lg opacity-80 tracking-wide">Active Users</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/40"></div>

        {/* 200+ Premium Tools */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-4xl md:text-5xl font-extrabold">200+</h2>
          <p className="text-sm md:text-lg opacity-80 tracking-wide">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-white/40"></div>

        {/* 4.9 Rating */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-4xl md:text-5xl font-extrabold">4.9</h2>
          <p className="text-sm md:text-lg opacity-80 tracking-wide">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;