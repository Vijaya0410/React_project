import React, {useState} from 'react'


function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div class=" px-4 py-5 sm:max-w-full md:max-w-full bg-gray-800 lg:max-w-screen md:px-24 lg:px-8 ">
      <div class="relative flex items-center justify-between ">
      <img
        src="https://p99soft.com/wp-content/uploads/2023/09/logo-1024x319.png"
        width={200}
        height={75}
        alt="Company Logo"
      />
      <div>
    <ul class="items-center  space-x-8 lg:flex">
    <li>
    <a
    href="/"
    aria-label="WhatsApp"
    title="WhatsApp"
    class="font-medium tracking-wide text-3xl text-green-500 transition-colors duration-200 "
  >
    <img src="https://static.whatsapp.net/rsrc.php/yZ/r/JvsnINJ2CZv.svg" alt="WhatsApp" class="h-20 w-44" />
  </a>
</li>

        <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white  "
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white  "
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white  "
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-white "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white "
            >
              
              For Business            
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white"
            >
              
              WhatsApp Web            
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white "
            >
              
              Download            
            </a>
          </li>
        </ul>
        </div>
        <ul class="flex items-center space-x-8 md:pr-10 lg:flex">
          <li>
            <a
              href="/login"
              class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black bg-white  rounded shadow-md  focus:shadow-outline focus:outline-none"
              aria-label="Login"
              title="Login"
            >
              Login
            </a>
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
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
            <div class="absolute top-0 left-0 w-full">
              <div class="p-5 bg-white border rounded shadow-sm">
                <div class="flex items-center justify-between mb-4">
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
                      class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul class="space-y-4">
                  <li>
  <a
    href="/"
    aria-label="WhatsApp"
    title="WhatsApp"
    class="font-medium tracking-wide text-3xl text-green-500 transition-colors duration-200 "
  >
    <img src="./assets/WhatsApp.svg" alt="WhatsApp" class="h-20 w-44" />
  </a>
</li>

        <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white  "
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white  "
            >
              Privacy
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-white  "
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              class="font-medium tracking-wide text-white "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white "
            >
              
              For Business            
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white"
            >
              
              WhatsApp Web            
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-white "
            >
              
              Download            
            </a>
          </li>
        </ul>
        <ul class="flex items-center space-x-8 pr-10 lg:flex">
          <li>
            <a
              href="/login"
              class="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-black bg-white  rounded shadow-md  focus:shadow-outline focus:outline-none"
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
    </div>
  )
}

export default Navbar
