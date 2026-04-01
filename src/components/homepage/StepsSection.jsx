// import React from "react";
// import userImg from "../../assets/user.png";
// import packageImg from "../../assets/package.png";
// import rocketImg from "../../assets/rocket.png";

// const StepsSection = () => {
//   return (
//     <div className="max-w-7xl mx-auto my-16 px-4">
//       <h1 className="text-4xl font-bold text-center">Get Started in 3 Steps</h1>
//       <p className="text-gray-500 text-center mt-2">
//         Start using premium digital tools in minutes, not hours.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
//         {[{
//           id: "01",
//           title: "Create Account",
//           desc: "Sign up for free in seconds. No credit card required to get started.",
//           img: userImg
//         },{
//           id: "02",
//           title: "Choose Products",
//           desc: "Browse our catalog and select the tools that fit your needs.",
//           img: packageImg
//         },{
//           id: "03",
//           title: "Start Creating",
//           desc: "Download and start using your premium tools immediately.",
//           img: rocketImg
//         }].map((step) => (
//           <div key={step.id} className="card bg-base-100 shadow-md">
//             <div className="card-body">
//               <div className="flex justify-end">
//                 <span className="gradient-bg rounded-full w-8 h-8 flex items-center justify-center text-white">
//                   {step.id}
//                 </span>
//               </div>
//               <div className="flex flex-col justify-center items-center space-y-4 text-center">
//                 <div className="bg-[#c8aadf] w-20 h-20 rounded-full overflow-hidden p-4">
//                   <img src={step.img} alt={step.title} />
//                 </div>
//                 <h3 className="text-2xl font-bold">{step.title}</h3>
//                 <p>{step.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
import React from "react";
import { User, Package, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: <User size={40} />,
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: <Package size={40} />,
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: <Rocket size={40} />,
  },
];

const StepsSection = () => {
  return (
    <div className="bg-[#f5f6f8] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900">
          Get Started In 3 Steps
        </h1>
        <p className="text-gray-500 mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4">
                <span className="bg-purple-600 text-white text-sm font-semibold w-10 h-10 flex items-center justify-center rounded-full">
                  {step.id}
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="bg-purple-100 text-purple-600 w-20 h-20 flex items-center justify-center rounded-full">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
