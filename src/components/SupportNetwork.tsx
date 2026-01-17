import React, { useState } from 'react';

interface SupportNetworkProps {}

const SupportNetwork: React.FC<SupportNetworkProps> = () => {
  const [showAddForm, setShowAddForm] = useState(false);

  const supportContacts = [
    {
      name: "Recovery Sponsor - Sarah M.",
      type: "Sponsor",
      contact: "(555) 123-4567",
      availability: "Available 24/7"
    },
    {
      name: "Therapist - Dr. Johnson",
      type: "Professional",
      contact: "(555) 234-5678",
      availability: "Mon-Fri, 9AM-5PM"
    },
    {
      name: "Support Group - Friday Meetings",
      type: "Community",
      contact: "Community Center, 6PM",
      availability: "Every Friday"
    },
    {
      name: "Family Support - Mom",
      type: "Family",
      contact: "(555) 345-6789",
      availability: "Anytime"
    }
  ];

  return (
    <div className="content-section">
      <h2 className="section-title">Support Network</h2>
      
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
        Your support network is crucial for successful recovery. Stay connected with people who understand and support your journey.
      </p>

      <div style={{ marginBottom: '30px' }}>
        <button className="button" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : '+ Add New Contact'}
        </button>
      </div>

      {showAddForm && (
        <div className="card" style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '20px' }}>Add Support Contact</h3>
          <div className="input-group">
            <label>Contact Name</label>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className="input-group">
            <label>Contact Type</label>
            <select>
              <option>Sponsor</option>
              <option>Professional</option>
              <option>Community</option>
              <option>Family</option>
              <option>Friend</option>
            </select>
          </div>
          <div className="input-group">
            <label>Contact Information</label>
            <input type="text" placeholder="Phone, email, or location" />
          </div>
          <div className="input-group">
            <label>Availability</label>
            <input type="text" placeholder="When are they available?" />
          </div>
          <button className="button">Save Contact</button>
        </div>
      )}

      <div className="card-grid">
        {supportContacts.map((contact, index) => (
          <div key={index} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <h3>{contact.name}</h3>
              <span className="badge">{contact.type}</span>
            </div>
            <p style={{ marginTop: '10px' }}>
              📞 {contact.contact}
            </p>
            <p style={{ marginTop: '5px', color: '#888' }}>
              🕐 {contact.availability}
            </p>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
              <button className="button" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Contact
              </button>
              <button className="button button-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
        <h4 style={{ color: '#667eea', marginBottom: '10px' }}>💡 Building Your Network</h4>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#666' }}>
          <li>Connect with people who support your recovery goals</li>
          <li>Attend regular support group meetings</li>
          <li>Keep emergency contacts readily available</li>
          <li>Don't hesitate to reach out when you need support</li>
        </ul>
      </div>
    </div>
  );
};

export default SupportNetwork;
