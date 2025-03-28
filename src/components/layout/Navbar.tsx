import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  LineChart,
  Users,
  Building2,
  Calendar,
  Lock,
  MessageSquare,
  Icon // Import Icon type from lucide-react
} from 'lucide-react';

// Define types for dropdown items
type DropdownItem = {
  icon: React.ComponentType<{ className?: string }>; 
  title: string;
  description: string;
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features: DropdownItem[] = [
    { 
      icon: LineChart, 
      title: 'Analytics Dashboard', 
      description: 'Real-time space utilization insights' 
    },
    { 
      icon: Users, 
      title: 'Occupancy Tracking', 
      description: 'Monitor space usage patterns' 
    },
    { 
      icon: Building2, 
      title: 'Space Management', 
      description: 'Optimize office layouts' 
    }
  ];

  const solutions: DropdownItem[] = [
    { 
      icon: Calendar, 
      title: 'Desk Booking', 
      description: 'Flexible workspace scheduling' 
    },
    { 
      icon: Lock, 
      title: 'Access Control', 
      description: 'Secure space management' 
    },
    { 
      icon: MessageSquare, 
      title: 'Team Coordination', 
      description: 'Streamline workplace communication' 
    }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 18V7C2 5.34315 3.34315 4 5 4H19C20.6569 4 22 5.34315 22 7V18C22 19.6569 20.6569 21 19 21H5C3.34315 21 2 19.6569 2 18Z" stroke={`${isScrolled?'#000000':'#ffffff'}`} stroke-width="1.7" stroke-linecap="round"></path> <path d="M7 8L7 17" stroke="#DF1463" stroke-width="1.7" stroke-linecap="round"></path> </g></svg>
            <a href="/" className={`mr-8 flex items-center ${isScrolled ?'text-gray-600':'text-white'} space-x-2`}>
          <span className={`font-bold text-2xl ${isScrolled?'hidden':'flex'}`}>SpaceOptimize</span>
        </a>
            
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Features Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                Features
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'features' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg p-6 grid gap-4">
                  {features.map((feature, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <feature.icon className="w-6 h-6 text-blue-500" />
                      <div>
                        <div className="font-medium text-gray-900">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg p-6 grid gap-4">
                  {solutions.map((solution, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <solution.icon className="w-6 h-6 text-blue-500" />
                      <div>
                        <div className="font-medium text-gray-900">{solution.title}</div>
                        <div className="text-sm text-gray-600">{solution.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Links */}
            <a 
              href="#" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Pricing
            </a>
           
            <a 
              href="#contact" 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Contact
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              className={`px-4 py-2 rounded-lg transition-colors ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              Log In
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="grid gap-6">
              {/* Features */}
              <div>
                <div className="font-medium text-gray-900 mb-4">Features</div>
                <div className="grid gap-4">
                  {features.map((feature, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                    >
                      <feature.icon className="w-5 h-5" />
                      {feature.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <div className="font-medium text-gray-900 mb-4">Solutions</div>
                <div className="grid gap-4">
                  {solutions.map((solution, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex items-center gap-3 text-gray-600 hover:text-gray-900"
                    >
                      <solution.icon className="w-5 h-5" />
                      {solution.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Regular Links */}
              <div className="grid gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Case Studies
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="grid gap-4">
                <button className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  Log In
                </button>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;