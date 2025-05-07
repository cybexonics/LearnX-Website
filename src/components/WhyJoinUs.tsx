
import React from "react";
import { 
  CreditCard, Users, MonitorSmartphone, Layers, Award
} from "lucide-react";

const FeatureCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-teachGrow-muted rounded-lg text-teachGrow-primary mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyJoinUs = () => {
  const features = [
    {
      icon: <CreditCard size={24} />,
      title: "Keep 90% of Earnings",
      description: "Retain 90% of all revenue from student subscriptions, with transparent payment tracking.",
    },
    {
      icon: <MonitorSmartphone size={24} />,
      title: "Flexible Teaching Options",
      description: "Teach live classes or upload pre-recorded content - choose what works best for you.",
    },
    {
      icon: <Users size={24} />,
      title: "Professional Profile",
      description: "Get your own customizable teacher profile to showcase your expertise and courses.",
    },
    {
      icon: <Layers size={24} />,
      title: "Simplified Technology",
      description: "We handle all the technical aspects so you can focus solely on creating quality content.",
    },
    {
      icon: <Award size={24} />,
      title: "Early Access Benefits",
      description: "Join now and receive the exclusive 'Featured Teacher' badge to stand out to students.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teachGrow-dark mb-4">Why Join Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn X provides everything educators need to build their online teaching business without the technical headaches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
