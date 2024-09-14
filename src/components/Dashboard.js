import React from 'react';
import './Dashboard.css'; 
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreateTemplate = () => {
    navigate('/create-template');
  };

  const handleViewTemplates = () => {
    navigate('/view-templates');
  };

  return (
    
    <div className="dashboard">
     
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleCreateTemplate}>Create Template</button>
      <button onClick={handleViewTemplates}>View Templates</button>
    
  
    </div>
  );
  
};

export default Dashboard;
