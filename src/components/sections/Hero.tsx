import React, { useState, useEffect } from 'react';
import { ChevronRight, Building2, Users, BarChart3, DollarSign } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Building2, value: '20M+', label: 'Sq Ft Managed' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: BarChart3, value: '30%', label: 'Cost Reduction' },
    { icon: DollarSign, value: '$50M+', label: 'Client Savings' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Column - Text Content */}
            <div className={`flex-1 text-center md:text-left transition-all duration-1000 bg-white p-5 rounded-xl text-gray-800 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Optimize Your Workspace for the Future
              </h1>
              <p className="text-xl text-gray-500 mb-12">
                Transform your office space utilization with AI-powered analytics. 
                Reduce costs by 30% while maximizing productivity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-16">
                <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center group transition-all">
                  Get Started
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-black/10 hover:bg-black/80 hover:text-white text-gray-700 rounded-lg font-semibold backdrop-blur-sm transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                <img
                  src="/images/space-1.webp" // Replace with your image URL
                  alt="Workspace Optimization"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;