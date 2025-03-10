import React, { useEffect, useRef } from 'react';
import {
  LayoutDashboard,
  Users,
  TrendingUp,
  Settings2,
  Building,
  Wallet,
  Building2,
  BarChart3,
  DollarSign,
  LucideIcon
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const featureTrackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clear any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(st => st.kill());
    
    const container = containerRef.current;
    const featureTrack = featureTrackRef.current;
    const section = sectionRef.current;
    
    if (!container || !featureTrack || !section) return;
    
    // Set initial state - all features should be visible
    gsap.set('.feature-item', { opacity: 1, x: 0 });
    
    // Set up the horizontal scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        start: "top top+=100", // Start 100px from the top
        end: "+=1200", // Fixed scroll distance 
        scrub: 1,
        pinSpacing: true,
        onUpdate: (self) => {
          // For debugging
          console.log("Progress:", self.progress.toFixed(2));
        }
      }
    });
    
    // Calculate the distance to move based on the width of the feature track
    const distanceToScroll = featureTrack.scrollWidth - container.offsetWidth + 64; // Adding some padding
    
    // Add the animation to the timeline
    tl.to(featureTrack, {
      x: -distanceToScroll,
      ease: "none",
      duration: 1
    });
    
    return () => {
      // Clean up
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const stats: StatItem[] = [
    { icon: Building2, value: '20M+', label: 'Sq Ft Managed' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: BarChart3, value: '30%', label: 'Cost Reduction' },
    { icon: DollarSign, value: '$50M+', label: 'Client Savings' },
  ];

  const features: FeatureItem[] = [
    {
      icon: LayoutDashboard,
      title: 'Real-time Analytics Dashboard',
      description:
        'Monitor space utilization with intuitive dashboards showing real-time occupancy data and historical trends.',
    },
    {
      icon: Users,
      title: 'Occupancy Tracking',
      description:
        'Advanced sensors and AI algorithms track space usage patterns to optimize workplace layouts.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description:
        'AI-powered predictions help you anticipate future space needs and optimize resource allocation.',
    },
    {
      icon: Settings2,
      title: 'Automated Optimization',
      description:
        'Get AI-generated recommendations for optimal office layouts based on your unique needs.',
    },
    {
      icon: Building,
      title: 'Multi-location Management',
      description:
        'Manage multiple office locations from a single platform with unified reporting and analytics.',
    },
    {
      icon: Wallet,
      title: 'Cost Optimization',
      description:
        'Reduce real estate costs by up to 30% through data-driven space optimization strategies.',
    },
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Workplaces
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our comprehensive platform provides everything you need to optimize your workspace and reduce costs.
          </p>
        </div>

        {/* Section for pinning with added space */}
        <div ref={sectionRef} className="relative pt-16 pb-16">
          {/* Horizontal Scroll Container */}
          <div 
            ref={containerRef} 
            className="relative h-96 overflow-hidden"
          >
            {/* Feature Track - This is what moves horizontally */}
            <div 
              ref={featureTrackRef} 
              className="absolute flex space-x-8 px-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-80 flex-shrink-0"
                >
                  <div className="inline-block p-4 bg-blue-50 rounded-lg mb-6">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-black/5 backdrop-blur-sm transform transition-all duration-500 hover:scale-105"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;