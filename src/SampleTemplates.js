import React from 'react';
import Sample1 from './assets/Image1.jpeg';
import Sample2 from './assets/Image2.jpeg';
import Sample3 from './assets/Image3.jpeg';
import sampleVideo from "./assets/background.mp4"

const SampleTemplates = () => {
  return (
    <div className="sample-templates p-6 overflow-y-auto max-h-screen">
      <div className="flex flex-wrap justify-center space-x-4">
        <img
          src={Sample1}
          alt="Sample 1"
          className="w-[20%] md:w-[20%] lg:w-[20%] h-auto object-contain"
        />
        <img
          src={Sample2}
          alt="Sample 2"
          className="w-[20%] md:w-[20%] lg:w-[20%] h-auto object-contain"
        />
        <img
          src={Sample3}
          alt="Sample 3"
          className="w-[20%] md:w-[20%] lg:w-[20%] h-auto object-contain"
        />
        
      </div>
      
      
      
    </div>
  );
};

export default SampleTemplates;
