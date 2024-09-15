import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import Dashboard component
import CreateTemplate from './components/ CreateTemplate';
import ViewTemplates from './ViewTemplates';
import Home from './components/Home';

function App() {
  return (
    
    <Router>
      <Routes>
        
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add Dashboard route */}
     
        <Route path="/" element={<Dashboard />} />
      <Route path="/create-template" element={<CreateTemplate />} />
      <Route path="/view-templates" element={<ViewTemplates />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     
      </Routes>
    </Router>
  );
}

export default App;
