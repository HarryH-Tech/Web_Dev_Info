import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import '../styles/main.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { height, width } = useWindowDimensions();

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions([getWindowDimensions()]);
        if (window.innerWidth > 640) {
          setIsOpen(false);
        }
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  return (
    <>
      <div>
        <nav className="bg-blue-200 mb-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link
                      className="text-xl duration-500 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/frameworks"
                    >
                      Frameworks + Other Technologies
                    </Link>

                    <Link
                      className="text-xl duration-500 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/aws"
                    >
                      AWS
                    </Link>

                    <Link
                      className="text-xl duration-500 hover:bg-red-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to="/javascript"
                    >
                      Javascript
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex sm:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-red-300 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white duration-500"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-750 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-750 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  className="text-center w-2/5 m-auto text-xl duration-500 hover:bg-red-300 hover:text-white px-3 block py-2 rounded-md text-sm font-medium"
                  to="/frameworks"
                >
                  Frameworks + Other Technologies
                </Link>

                <Link
                  className="text-center w-2/5 m-auto test-xl duration-500 hover:bg-ref-300 hover:bg-red-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  to="/aws"
                >
                  AWS
                </Link>

                <Link
                  className="text-center w-2/5 m-auto text-xl duration-500 hover:bg-red-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
                  to="/javascript"
                >
                  Javascript
                </Link>
              </div>
            </div>
          </Transition>
        </nav>
      </div>
    </>
  );
}

export default Header;
