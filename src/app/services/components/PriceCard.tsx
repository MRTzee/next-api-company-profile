import React from "react";

const PriceCard = () => {
  const plans = [
    {
      title: "Basic",
      description: "Perfect for individuals",
      price: "9",
      features: [
        { text: "Unlimited access to courses", available: true },
        { text: "10 projects per month", available: true },
        { text: "Premium support", available: true },
        { text: "Forum access", available: false },
      ],
      buttonText: "Choose Plan",
    },
    {
      title: "Standard",
      description: "Great for small teams",
      price: "19",
      features: [
        { text: "Unlimited access to courses", available: true },
        { text: "50 projects per month", available: true },
        { text: "Premium support", available: true },
        { text: "Forum access", available: true },
      ],
      buttonText: "Choose Plan",
    },
    {
      title: "Premium",
      description: "Ideal for large organizations",
      price: "49",
      features: [
        { text: "Unlimited access to courses", available: true },
        { text: "Unlimited projects per month", available: true },
        { text: "VIP support", available: true },
        { text: "Priority forum access", available: true },
      ],
      buttonText: "Choose Plan",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {plan.title}
            </h2>
            <p className="text-gray-600 mb-6">{plan.description}</p>
            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-semibold text-gray-800">$</span>
              <span className="text-3xl font-semibold text-gray-800">
                {plan.price}
              </span>
              <span className="text-lg text-gray-600 ml-1">/month</span>
            </div>
            <ul className="text-sm text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="mb-3 flex items-center">
                  <svg
                    className={`w-5 h-5 inline-block mr-1 ${
                      feature.available ? "text-green-500" : "text-gray-400"
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature.text}
                </li>
              ))}
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
              {plan.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PriceCard;
