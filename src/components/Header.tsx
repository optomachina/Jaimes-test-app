import React from 'react';
import { Cpu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Cpu className="h-8 w-8 text-indigo-600" />
              <span className="ml-3 text-xl font-bold text-gray-900">Overdraft</span>
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Features
              </a>
              <a href="#pricing" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </a>
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                About
              </a>
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Start free trial
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;