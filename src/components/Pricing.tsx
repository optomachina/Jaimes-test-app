import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    href: '#',
    priceMonthly: 49,
    description: 'All the basics for starting a new business',
    includedFeatures: ['Basic automation', '5 custom workflows', 'Email support', 'Basic SolidWorks integration'],
  },
  {
    name: 'Pro',
    href: '#',
    priceMonthly: 99,
    description: 'Everything in Starter, plus advanced features',
    includedFeatures: [
      'Advanced automation',
      'Unlimited custom workflows',
      'Priority email and chat support',
      'Full SolidWorks integration',
      'Team collaboration tools',
    ],
  },
  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 'Custom',
    description: 'Dedicated support and infrastructure for your company',
    includedFeatures: [
      'Advanced automation with AI customization',
      'Unlimited custom workflows',
      '24/7 phone and email support',
      'Full SolidWorks integration with API access',
      'Advanced team collaboration and management tools',
      'Custom feature development',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100" id="pricing">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">Plans for teams of all sizes</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect plan to streamline your drafting process and boost productivity.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              {tiers.map((tier) => (
                <div key={tier.name} className="flex-1 bg-white px-6 py-8 lg:p-12">
                  <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">{tier.name}</h3>
                  <p className="mt-6 text-base text-gray-500">{tier.description}</p>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        What's included
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                      {tier.includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-start lg:col-span-1">
                          <div className="flex-shrink-0">
                            <Check className="h-5 w-5 text-green-400" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-sm text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8">
                    <div className="flex items-center">
                      <h4 className="flex-shrink-0 pr-4 bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600">
                        Price
                      </h4>
                      <div className="flex-1 border-t-2 border-gray-200" />
                    </div>
                    <p className="mt-8">
                      <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                      <span className="text-base font-medium text-gray-500">/month</span>
                    </p>
                    <a
                      href={tier.href}
                      className="mt-8 block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                    >
                      Get started with {tier.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;