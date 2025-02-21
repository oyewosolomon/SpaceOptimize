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
      <div className="relative container mx-auto px-4 py-20">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Optimize Your Workspace for the Future
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Transform your office space utilization with AI-powered analytics. 
            Reduce costs by 30% while maximizing productivity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center group transition-all">
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold backdrop-blur-sm transition-all">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl bg-white/5 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;