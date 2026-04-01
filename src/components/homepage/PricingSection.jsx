import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    desc: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    desc: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    desc: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <div className="bg-[#f5f6f8] py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900">
          Simple, Transparent Pricing
        </h1>
        <p className="text-gray-500 mt-3">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border ${
                plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full font-semibold text-black">
                  Most Popular
                </span>
              )}

              {/* Title */}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p
                className={`text-sm mt-1 ${
                  plan.highlight ? "text-purple-100" : "text-gray-500"
                }`}
              >
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`ml-1 ${
                    plan.highlight ? "text-purple-100" : "text-gray-500"
                  }`}
                >
                  /Month
                </span>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-sm">
                {plan.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`mt-8 w-full py-3 rounded-full font-semibold ${
                  plan.highlight
                    ? "bg-white text-purple-600"
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;