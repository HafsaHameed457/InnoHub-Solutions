import React, { useState } from "react";
const services = [
  {
    title: "Custom Software Development",
    icon: "💻",
    description: "Tailored solutions for your unique business needs.",
    buttonText: "Learn More",
  },
  {
    title: "AI & Machine Learning",
    icon: "🤖",
    description: "Harness the power of AI for smarter decision-making.",
    buttonText: "Discover AI",
  },
  {
    title: "Cloud Integration",
    icon: "☁️",
    description: "Seamless integration with cloud platforms.",
    buttonText: "Explore Cloud",
  },
  {
    title: "IoT Solutions",
    icon: "📡",
    description: "Innovative IoT solutions to connect your devices.",
    buttonText: "Learn About IoT",
  },
];

const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex overflow-hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={prevCard}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ❮
      </button>
      <button
        onClick={nextCard}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
      >
        ❯
      </button>
    </div>
  );
};

export default Solution;
