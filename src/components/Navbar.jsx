import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  // Handle scroll effect + active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect which section is in view
      const sections = ['home', 'about', 'projects', 'certifications', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveLink(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 72; // tinggi navbar
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-slate-900/30 backdrop-blur-sm shadow-sm border-b border-slate-700/20'
        : 'bg-gradient-to-r from-slate-900 to-slate-800 shadow-lg border-b border-slate-700'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3 transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Syamsul Amilien
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, -1).map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                  activeLink === item.id
                    ? 'text-white bg-slate-800/50'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ${
                  activeLink === item.id ? 'w-8' : 'w-0 group-hover:w-8'
                }`}></span>
              </button>
            ))}

            {/* Contact Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`ml-4 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg ${
                activeLink === 'contact'
                  ? 'bg-gradient-to-r from-blue-700 to-purple-700 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors duration-300 hover:bg-slate-800/30 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="py-4 space-y-2 border-t border-slate-700/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeLink === item.id
                    ? 'text-white bg-slate-800/50 border-l-4 border-blue-500'
                    : item.name === 'Contact'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-center'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div className="pt-4 mt-4 border-t border-slate-700/50">
              <p className="text-slate-400 text-sm mb-3 px-4">Follow me:</p>
              <div className="flex justify-center space-x-4">
                <a href="https://github.com/Syamsulamilien" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-gray-700 transition-all duration-300">
                  <span className="text-sm font-semibold">GH</span>
                </a>
                <a href="https://www.linkedin.com/in/syamsul-amilien" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
                  <span className="text-sm font-semibold">LI</span>
                </a>
                <a href="https://www.instagram.com/syceliii" target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-300">
                  <span className="text-sm font-semibold">IG</span>
                </a>
              </div>
            </div>

            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-lg p-3 text-center">
                <p className="text-slate-300 text-sm mb-2">Ready to work together?</p>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                >
                  Get in touch →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;