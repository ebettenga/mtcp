import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

interface HeaderProps {
  className?: string;
}

const dropdownMenuItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Photos', path: '/photos' },
  { label: 'Joining', path: '/joining' },
  { label: 'Links', path: '/links' },
];

export default function Header({ className = '' }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDiscoverOpen, setIsDiscoverOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const discoverRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);

  const isDiscoverActive = dropdownMenuItems.some(
    (item) => location.pathname === item.path || location.pathname.startsWith(item.path + '/')
  );
  const isHomeActive = location.pathname === '/';
  const isEventsActive = location.pathname === '/events';
  const isDonateActive = location.pathname === '/donations';

  // Close discover menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (discoverRef.current && !discoverRef.current.contains(target)) {
        setIsDiscoverOpen(false);
      }

      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleDiscoverToggle = useCallback(() => {
    setIsDiscoverOpen((prev) => !prev);
  }, []);

  const handleMenuItemClick = useCallback(
    (path: string) => {
      setIsDiscoverOpen(false);
      navigate(path);
    },
    [navigate]
  );

  const handleHomeClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleContactClick = useCallback(() => {
    // TODO: Implement contact functionality
    console.log('Contact Us clicked');
  }, []);

  const activeLinkClass =
    "after:absolute after:bottom-[-10px] after:left-0 after:block after:h-[3px] after:w-full after:rounded-full after:bg-primary-500 after:content-['']";

  // Mobile menu
  const MobileMenuItem = ({ label, onClick, isBold = false, showArrow = true }: {
    label: string;
    onClick: () => void;
    isBold?: boolean;
    showArrow?: boolean;
  }) => (
    <button onClick={onClick} className="flex w-full items-center justify-between py-2.5">
      <span
        className={`font-open text-[20px] leading-[40px] text-black ${isBold ? 'font-bold' : 'font-medium'}`}
      >
        {label}
      </span>
      {showArrow && (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );

  const Divider = () => <div className="h-px w-full bg-accent-500" />;

  return (
    <>
      {/* Mobile Header */}
      <nav
        className={`md:hidden fixed left-0 right-0 top-0 z-[60] flex h-[76px] items-center justify-between border-b ${
          isMobileMenuOpen ? 'border-gray-200' : 'border-gray-100'
        } bg-white px-[30px] ${className}`}
      >
        <div className="h-[46px] w-[165px] cursor-pointer" onClick={handleHomeClick}>
          <img src={logo} alt="Logo" className="h-full w-auto" style={{ imageRendering: 'auto' }} />
        </div>
        <button
          ref={hamburgerButtonRef}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="flex h-6 w-6 items-center justify-center"
        >
          {isMobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] z-[50] bg-white md:hidden" ref={mobileMenuRef}>
          <div className="flex h-[calc(100vh-76px)] flex-col overflow-y-auto">
            <div className="flex flex-col gap-4 px-[30px] pt-6">
              <MobileMenuItem
                label="Events"
                onClick={() => handleMenuItemClick('/events')}
                isBold
              />
              <Divider />
              <MobileMenuItem
                label="Donate"
                onClick={() => handleMenuItemClick('/donations')}
                isBold
              />
              <Divider />

              <div className="flex flex-col gap-3">
                <div className="py-2.5">
                  <span className="font-open text-[20px] font-bold leading-[40px] text-black">Pages</span>
                </div>
                {dropdownMenuItems.map((item) => (
                  <MobileMenuItem
                    key={item.path}
                    label={item.label}
                    onClick={() => handleMenuItemClick(item.path)}
                  />
                ))}
              </div>

              <Divider />
              <MobileMenuItem
                label="Contact Us"
                onClick={handleContactClick}
                showArrow={false}
              />
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <nav
        className={`hidden md:flex h-[100px] items-center border-b border-gray-100 bg-white px-6 py-6 ${className}`}
      >
        <div className="max-w-page flex w-full items-center justify-between gap-5 mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex h-12 items-center cursor-pointer" onClick={handleHomeClick}>
              <img src={logo} alt="Logo" className="h-12 w-auto" style={{ imageRendering: 'auto' }} />
            </div>
            <div className="flex h-8 items-center gap-8">
              <button
                onClick={handleHomeClick}
                className={`relative rounded-md px-0 py-0 font-albert text-xl leading-5 text-black transition-opacity hover:opacity-80 ${
                  isHomeActive ? 'font-bold' : 'font-semibold'
                } ${isHomeActive ? activeLinkClass : ''}`}
              >
                Home
              </button>
              <div ref={discoverRef} className="relative">
                <button
                  onClick={handleDiscoverToggle}
                  className={`relative flex items-center gap-1.5 px-0 py-0 font-albert text-xl leading-5 text-black transition-opacity hover:opacity-80 ${
                    isDiscoverActive ? 'font-bold' : 'font-semibold'
                  } ${!isDiscoverOpen && isDiscoverActive ? activeLinkClass : ''}`}
                >
                  Pages
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isDiscoverOpen && (
                  <div className="absolute left-0 top-full z-10 mt-2 w-[343px] rounded-xl border border-gray-200 bg-white p-2">
                    <div className="flex flex-col gap-1.5">
                      {dropdownMenuItems.map((item) => (
                        <button
                          key={item.path}
                          onClick={() => handleMenuItemClick(item.path)}
                          className="group flex h-8 cursor-pointer items-center gap-1.5 rounded-lg px-2 py-2 text-left transition-colors hover:bg-gray-200"
                        >
                          <span
                            className="font-open text-sm font-medium leading-[14px] text-gray-600 transition-colors group-hover:text-primary-500"
                            style={{ fontStyle: 'normal' }}
                          >
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => handleMenuItemClick('/events')}
                className={`relative rounded-md px-0 py-0 font-albert text-xl leading-5 text-black transition-opacity hover:opacity-80 ${
                  isEventsActive ? 'font-bold' : 'font-semibold'
                } ${isEventsActive ? activeLinkClass : ''}`}
              >
                Events
              </button>
              <button
                onClick={() => handleMenuItemClick('/donations')}
                className={`relative rounded-md px-0 py-0 font-albert text-xl leading-5 text-black transition-opacity hover:opacity-80 ${
                  isDonateActive ? 'font-bold' : 'font-semibold'
                } ${isDonateActive ? activeLinkClass : ''}`}
              >
                Donate
              </button>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={handleContactClick}
              className="flex items-center justify-center gap-1.5 rounded-full bg-gray-100 px-4 py-2.5 transition-colors hover:bg-gray-200"
            >
              <span className="font-albert text-base font-medium leading-5 text-primary-500">Contact Us</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
