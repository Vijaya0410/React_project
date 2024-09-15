import React from 'react';
import './Dashboard.css'; 
import { useNavigate } from 'react-router-dom';
import sampleVideo from "../assets/background.mp4";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateTemplate = () => {
    navigate('/create-template');
  };

  const handleSampleTemplates = () => {
    navigate('/sample-templates');
  };

  return (
    <div className='bg-gray-800'>
    <div className="dashboard-container flex flex-col items-center bg-gray-800">
      <div className="dashboard-content">
        <h2 className='text-4xl font-bold'>Welcome to the Dashboard</h2>
        <button onClick={handleCreateTemplate}>Create Template</button>
        <button onClick={handleSampleTemplates}>Sample Templates</button>
      </div>
      
      <div className="video-container">
        <video controls>
          <source src={sampleVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
