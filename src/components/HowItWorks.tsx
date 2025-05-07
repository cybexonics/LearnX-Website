
import React from "react";

const StepCard = ({ number, title, description }: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-teachGrow-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Register & Pay ₹999",
      description: "Complete the simple registration process and make a one-time payment to join our platform.",
    },
    {
      number: 2,
      title: "Create Your Courses",
      description: "Design your course structure, upload videos, or schedule live classes using our intuitive tools.",
    },
    {
      number: 3,
      title: "Start Teaching Online",
      description: "Begin teaching students through live sessions or let them access your pre-recorded content.",
    },
    {
      number: 4,
      title: "Earn From Every Student",
      description: "Get paid for every student enrollment, with 80% of subscription fees going directly to you.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-teachGrow-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teachGrow-dark mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy to start your online teaching journey in just a few simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
