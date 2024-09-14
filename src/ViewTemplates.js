import React, { useEffect, useState } from 'react';

const ViewTemplates = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('/api/v1/welcome-templates')
      .then(response => response.json())
      .then(data => setTemplates(data))
      .catch(error => console.error('Error fetching templates:', error));
  }, []);

  return (
    <div className="view-templates">
      <h2>Saved Templates</h2>
      {templates.length > 0 ? (
        <ul>
          {templates.map(template => (
            <li key={template.id}>
              <h3>{template.templateName}</h3>
              <p>Type: {template.templateType}</p>
              <p>Body Message: {template.bodyMessage}</p>
              <p>Button Message: {template.buttonMessage}</p>
              <p>Buttons: {template.button1} {template.button2} {template.button3}</p>
              <p>List Items: {template.listItems.join(', ')}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No templates available.</p>
      )}
    </div>
  );
};

export default ViewTemplates;
