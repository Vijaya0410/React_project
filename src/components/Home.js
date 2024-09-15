import React from 'react';


function Home() {
  return (
    <div className="relative w-full h-full py-18 flex justify-center items-center overflow-hidden">
      <img 
        className="w-full h-[50%] rounded-xl md:px-10 object-cover py-6"
        src="https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=73b08c&_nc_ohc=Av3MiRD9ZLAQ7kNvgF57Uv3&_nc_ht=scontent.whatsapp.net&_nc_gid=A2Et8WzYBTiyfGd1wfYuPD1&oh=01_Q5AaICWnL-z_G0Pog7Rf7RAeay3ZWDSQCdZY0DJrmGV5xoDA&oe=66EC3D25"
        alt="Demo Image"
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className='w-full px-20 top-0  '>
        <div className="text-white w-[20%] text-6xl font-bold  bg-opacity-50 py-4 rounded-lg">
          Message Privately
        </div>
        <div className='text-2xl  w-[30%] text-white'>
        Simple, reliable, private messaging and calling for free*, available all over the world.
        </div> 
        </div>
      </div>
    </div>
  );
}

export default Home;
