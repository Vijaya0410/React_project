import React from 'react';


function Home() {
  return (
    <div className="relative w-full h-full py-18 flex justify-center items-center overflow-hidden">
      <img 
        className="w-full h-full rounded-xl md:px-10 object-cover py-6 "
        src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className='w-full px-20 top-0  '>
        <div className="text-black w-[50%] text-4xl font-bold  bg-opacity-50 py-4 rounded-lg">
        Grow Your Business by Connecting with Us on WhatsApp Meta!
        </div>
        {/* <div className='text-2xl  w-[30%] text-black'>
        Simple, reliable, private messaging and calling for free*, available all over the world.
        </div>  */}
        </div>
      </div>
    </div>
  );
}

export default Home;
