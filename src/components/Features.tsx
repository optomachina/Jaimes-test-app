import React from 'react';
import { Zap, Clock, Shield, Repeat } from 'lucide-react';

const features = [
  {
    name: 'Lightning-fast automation',
    description: 'Our AI-powered engine automates repetitive tasks, dramatically reducing drafting time.',
    icon: Zap,
  },
  {
    name: 'Time-saving workflows',
    description: 'Streamline your design process with custom workflows tailored to your needs.',
    icon: Clock,
  },
  {
    name: 'Error reduction',
    description: 'Minimize human errors with our intelligent checking and validation systems.',
    icon: Shield,
  },
  {
    name: 'Seamless SolidWorks integration',
    description: 'Overdraft integrates smoothly with SolidWorks, enhancing your existing workflow.',
    icon: Repeat,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to draft
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Overdraft brings cutting-edge automation to your mechanical drafting process, saving you time and improving accuracy.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;