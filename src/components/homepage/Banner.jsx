

import React from 'react';

import bannerImg from '../../assets/banner.png'
import playImg from '../../assets/Play.png'
const Banner = () => {
    return (
        <div className="flex justify-between items-center gap-10 py-20 px-4 max-w-7xl mx-auto">
            <div className="space-y-6 flex-1">
                <span className="bg-[#E1E7FF] p-2 rounded-full inline-block">
                    <span className="p-2 rounded-full gradient-text">
                        New: AI-Powered Tools Available
                    </span>
                </span>

                <h2 className="text-[#101727] font-extrabold text-7xl">
                    Supercharge Your Digital Workflow
                </h2>

                <p className="text-gray-500 max-w-xl text-start">
                    Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                </p>

                <div className="flex gap-4">
                     {/* Explore Products button */}
                <button className="bg-purple-600 hover:bg-purple-700 p-4 rounded-full text-white cursor-pointer">
                   Explore Products
                  </button>

                    <button className="p-4 rounded-full border-2 border-purple-500 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer">
             <span className="flex items-center justify-center gap-2">
             <span>
          <img src={playImg} alt="Play" />
       </span>
        <span className="font-bold">Watch Demo</span>
       </span>
      </button>
                </div>
            </div>

            <div className="">
                <img
                    src={bannerImg}
                    alt="Banner"
                    className="w-full max-w-[500px] h-auto"
                />
            </div>
        </div>

    );
};

export default Banner;
