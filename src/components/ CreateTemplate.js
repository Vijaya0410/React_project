import React, { useState, useEffect } from 'react';
import './CreateTemplate.css'; // Import the CSS file

const CreateTemplate = () => {
  const [templateId, setTemplateId] = useState('');
  const [templateName, setTemplateName] = useState('');
  const [templateType, setTemplateType] = useState('list');
  const [bodyMessage, setBodyMessage] = useState('');
  const [buttonMessage, setButtonMessage] = useState('');
  const [buttons, setButtons] = useState([{ name: '', id: '' }]);
  const [listItems, setListItems] = useState(['']);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [formSaved, setFormSaved] = useState(false); // Track form submission
  const [templates, setTemplates] = useState([]); // Store fetched templates
  const [viewMode, setViewMode] = useState(false); // Track if viewing templates

  const userId = localStorage.getItem('userId'); // Get the logged-in user's ID

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage('');
    setMessageType('');

    // Validation
    let validationPassed = true;
    let errorMessage = '';

    if (!templateId) {
      errorMessage += 'Template ID is required. ';
      validationPassed = false;
    }

    if (!templateName) {
      errorMessage += 'Template Name is required. ';
      validationPassed = false;
    }

    if (!bodyMessage) {
      errorMessage += 'Body Message is required. ';
      validationPassed = false;
    }

    if (templateType === 'button') {
      if (!buttonMessage) {
        errorMessage += 'Button Message is required. ';
        validationPassed = false;
      }

      if (buttons.every(button => !button.name)) {
        errorMessage += 'At least one button is required. ';
        validationPassed = false;
      } else {
        buttons.forEach((button, index) => {
          if (button.name && !button.id) {
            errorMessage += `Button ${index + 1} ID is required. `;
            validationPassed = false;
          }
        });
      }
    }

    if (!validationPassed) {
      setMessage(errorMessage + 'Template not saved.');
      setMessageType('error');
      return;
    }

    // Prepare template data
    const templateData = {
      templateId,
      templateName,
      templateType,
      bodyMessage,
      buttonMessage: buttonMessage || null,
      button_Data: JSON.stringify(buttons
        .filter(button => button.name && button.id)
        .map(button => ({ id: button.id, title: button.name }))),
      listItems: templateType === 'list' ? listItems.filter(item => item !== '') : null,
      userId: userId, // Pass the userId from localStorage
      phoneNumber: localStorage.getItem('phoneNumber'),
    };

    // Submit the template data
    fetch('http://localhost:9002/api/v1/templates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(templateData),
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(`Error: ${response.status} - ${text}`);
          });
        }
        return response.json();
      })
      .then((data) => {
        setMessage('Template saved successfully!');
        setMessageType('success');
        setFormSaved(true); // Mark the form as saved
      })
      .catch((error) => {
        setMessage(`Failed to save the template. Reason: ${error.message}`);
        setMessageType('error');
      });
  };

  const fetchTemplates = () => {
    // Fetch all templates created by the logged-in user
    fetch(`http://localhost:9002/api/v1/templates/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setTemplates(data);
        setViewMode(true); // Enable view mode
      })
      .catch((error) => {
        console.error('Error fetching templates:', error);
      });
  };

  const handleAddButton = () => {
    if (buttons.length < 3) {
      setButtons([...buttons, { name: '', id: '' }]);
    }
  };

  const handleButtonChange = (index, field, value) => {
    const updatedButtons = buttons.map((button, i) =>
      i === index ? { ...button, [field]: value } : button
    );
    setButtons(updatedButtons);
  };

  const handleAddListItem = () => {
    setListItems([...listItems, '']);
  };

  const handleListItemChange = (index, value) => {
    const updatedItems = listItems.map((item, i) => (i === index ? value : item));
    setListItems(updatedItems);
  };

  const handleNewTemplate = () => {
    setFormSaved(false); // Reset form saved status
    setMessage(''); // Clear success message
    // Reset form fields
    setTemplateId('');
    setTemplateName('');
    setTemplateType('list');
    setBodyMessage('');
    setButtonMessage('');
    setButtons([{ name: '', id: '' }]);
    setListItems(['']);
  };

  const handleViewTemplates = () => {
    fetchTemplates(); // Fetch templates when "View Templates" is clicked
  };

  const handleBackToCreate = () => {
    setViewMode(false); // Hide the template list view
  };

  return (
    <div className="create-template-container">
      <div className="create-template">
        <h2>{formSaved ? 'Template Saved!' : 'Create a New Template'}</h2>
        <form onSubmit={handleSubmit}>
          <label>Template ID:</label>
          <input
            type="text"
            value={templateId}
            onChange={(e) => setTemplateId(e.target.value)}
            required
            disabled={formSaved} // Disable input if form is saved
          />

          <label>Template Name:</label>
          <input
            type="text"
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            required
            disabled={formSaved} // Disable input if form is saved
          />

          <label>Body Message:</label>
          <input
            type="text"
            value={bodyMessage}
            onChange={(e) => setBodyMessage(e.target.value)}
            required
            disabled={formSaved} // Disable input if form is saved
          />

          <label>Template Type:</label>
          <select
            value={templateType}
            onChange={(e) => setTemplateType(e.target.value)}
            disabled={formSaved} // Disable input if form is saved
          >
            <option value="list">List</option>
            <option value="button">Button</option>
          </select>

          {templateType === 'list' && (
            <>
              <label>List Items:</label>
              {listItems.map((item, index) => (
                <input
                  key={index}
                  type="text"
                  value={item}
                  onChange={(e) => handleListItemChange(index, e.target.value)}
                  required
                  disabled={formSaved} // Disable input if form is saved
                />
              ))}
              <button type="button" onClick={handleAddListItem} disabled={formSaved}>
                Add List Item
              </button>
            </>
          )}

          {templateType === 'button' && (
            <>
              <label>Button Message:</label>
              <input
                type="text"
                value={buttonMessage}
                onChange={(e) => setButtonMessage(e.target.value)}
                required
                disabled={formSaved} // Disable input if form is saved
              />

              <label>Buttons:</label>
              {buttons.map((button, index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="Button Name"
                    value={button.name}
                    onChange={(e) => handleButtonChange(index, 'name', e.target.value)}
                    required
                    disabled={formSaved} // Disable input if form is saved
                  />
                  <input
                    type="text"
                    placeholder="Button ID"
                    value={button.id}
                    onChange={(e) => handleButtonChange(index, 'id', e.target.value)}
                    required
                    disabled={formSaved} // Disable input if form is saved
                  />
                </div>
              ))}
              {buttons.length < 3 && (
                <button type="button" onClick={handleAddButton} disabled={formSaved}>
                  Add Button
                </button>
              )}
            </>
          )}

          <button type="submit" disabled={formSaved}>
            {formSaved ? 'Template Saved' : 'Save Template'}
          </button>
        </form>

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        <div className="options">
          <button type="button" onClick={handleViewTemplates}>
            View Templates
          </button>
          <button type="button" onClick={handleNewTemplate}>
            New Template
          </button>
        </div>
      </div>

      {/* View Templates Section */}
      {viewMode && (
        <div className="view-templates">
          <h2>Templates Created by You</h2>
          {templates.length > 0 ? (
            <ul>
              {templates.map((template) => (
                <li key={template.templateId}>
                  <strong>Template Name:</strong> {template.templateName} <br />
                  <strong>Template Type:</strong> {template.templateType} <br />
                  <strong>Body Message:</strong> {template.bodyMessage}
                  {/* Hide Template ID */}
                </li>
              ))}
            </ul>
          ) : (
            <p>No templates found.</p>
          )}
          <button type="button" onClick={handleBackToCreate}>
            Back to Create Template
          </button>
        </div>
          
      )}
        
    </div>
  );
};

export default CreateTemplate;
