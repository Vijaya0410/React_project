import React, { useState } from 'react';
import Private from "../assets/private.png"
import EarthImg from "../assets/earth.png"
import Business from "../assets/business.png"
import Express from "../assets/express.png"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCards, setShowCards] = useState(false);

  const handleFeaturesClick = () => {
    setShowCards(!showCards); // Toggle the display of cards
  };

  return (
    <div className="relative px-4 py-5 sm:max-w-full md:max-w-full bg-gray-800 lg:max-w-screen md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between ">
        <img
          src="https://p99soft.com/wp-content/uploads/2023/09/logo-1024x319.png"
          width={200}
          height={75}
          alt="Company Logo"
        />
        <div>
          <ul className="items-center space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="font-medium tracking-wide text-3xl text-green-500 transition-colors duration-200"
              >
                <img
                  src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
                  alt="WhatsApp"
                  className="h-20 w-44"
                />
              </a>
            </li>

            <li
              className="text-white font-medium cursor-pointer"
              onClick={handleFeaturesClick}
            >
              Features
              <span className="ml-1">
                {showCards ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </span>
            </li>
            <li>
              <a
                href="/"
                aria-label="Privacy"
                title="Privacy"
                className="font-medium tracking-wide text-white"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Help Center"
                title="Help Center"
                className="font-medium tracking-wide text-white"
              >
                Help Center
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Blog"
                title="Blog"
                className="font-medium tracking-wide text-white"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="For Business"
                title="For Business"
                className="font-medium tracking-wide text-white"
              >
                For Business
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="WhatsApp Web"
                title="WhatsApp Web"
                className="font-medium tracking-wide text-white"
              >
                WhatsApp Web
              </a>
            </li>
          </ul>
        </div>
        <ul className="flex items-center space-x-8 md:pr-10 lg:flex">
          <li>
            <a
              href="/login"
              className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black bg-white rounded shadow-md focus:shadow-outline focus:outline-none"
              aria-label="Login"
              title="Login"
            >
              Login
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <img
                      src="https://p99soft.com/wp-content/uploads/2023/09/logo-1024x319.png"
                      width={200}
                      height={75}
                      alt="Company Logo"
                    />
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="WhatsApp"
                        title="WhatsApp"
                        className="font-medium tracking-wide text-3xl text-green-500 transition-colors duration-200"
                      >
                        <img
                          src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg"
                          alt="WhatsApp"
                          className="h-20 w-44"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Features"
                        title="Features"
                        className="font-medium tracking-wide text-white"
                      >
                        Features
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Privacy"
                        title="Privacy"
                        className="font-medium tracking-wide text-white"
                      >
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Help Center"
                        title="Help Center"
                        className="font-medium tracking-wide text-white"
                      >
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Blog"
                        title="Blog"
                        className="font-medium tracking-wide text-white"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="For Business"
                        title="For Business"
                        className="font-medium tracking-wide text-white"
                      >
                        For Business
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="WhatsApp Web"
                        title="WhatsApp Web"
                        className="font-medium tracking-wide text-white"
                      >
                        WhatsApp Web
                      </a>
                    </li>
                  </ul>
                  <ul className="flex items-center space-x-8 pr-10 lg:flex">
                    <li>
                      <a
                        href="/login"
                        className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black bg-white rounded shadow-md focus:shadow-outline focus:outline-none"
                        aria-label="Login"
                        title="Login"
                      >
                        Login
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
      {showCards && (
        <div className=" absolute z-50 bg-gray-400 top-full left-0 w-full mt-2 p-4 rounded">
          <div className="flex space-x-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
           <div className="mb-4 flex justify-start ">
           <img
            src={Private}
            alt="Icon Description"
            className="w-10 h-10"
            />
           </div>
              <h3 className="text-2xl font-bold mb-2">Message Privately</h3>
              <p className='text-lg'>End-to-end encryption ensures privacy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <div className="mb-4 flex justify-start ">
      <img
        
        src={Express}
        alt="Icon Description"
        className="w-10 h-10"
      />
      </div>
              <h3 className="text-2xl font-bold mb-2">Express Yourself</h3>
              <p className='text-lg'>Say it with stickers, voice, GIFs, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <div className="mb-4 flex justify-start ">
            <img
              src={EarthImg}
              alt="Icon Description"
              className="w-10 h-10"
            />
            </div>
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className='text-lg'>Instantly connect with anyone across the world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/4">
            <div className="mb-4 flex justify-start ">
            <img
              src={Business}
              alt="Icon Description"
              className="w-10 h-10"
            />
            </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp Business</h3>
              <p className='text-lg'>All conversations are encrypted and protected.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
