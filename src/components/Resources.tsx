import React from 'react';

interface ResourcesProps {}

const Resources: React.FC<ResourcesProps> = () => {
  const resources = [
    {
      category: "Educational Materials",
      items: [
        { title: "Understanding Addiction", type: "Article", link: "#" },
        { title: "Recovery Science Basics", type: "Video", link: "#" },
        { title: "Coping Strategies Guide", type: "PDF", link: "#" },
        { title: "Mindfulness Techniques", type: "Audio", link: "#" }
      ]
    },
    {
      category: "Support Organizations",
      items: [
        { title: "SAMHSA National Helpline", type: "Hotline: 1-800-662-4357", link: "#" },
        { title: "Alcoholics Anonymous", type: "Organization", link: "#" },
        { title: "Narcotics Anonymous", type: "Organization", link: "#" },
        { title: "SMART Recovery", type: "Organization", link: "#" }
      ]
    },
    {
      category: "Tools & Apps",
      items: [
        { title: "Recovery Tracking Journal", type: "Tool", link: "#" },
        { title: "Meditation & Relaxation Apps", type: "App", link: "#" },
        { title: "Trigger Management Worksheets", type: "Worksheet", link: "#" },
        { title: "Goal Setting Templates", type: "Template", link: "#" }
      ]
    }
  ];

  return (
    <div className="content-section">
      <h2 className="section-title">Recovery Resources</h2>
      
      <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: '#666' }}>
        Access educational materials, support organizations, and helpful tools to support your recovery journey.
      </p>

      {resources.map((category, idx) => (
        <div key={idx} style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>
            {category.category}
          </h3>
          <div className="card-grid">
            {category.items.map((item, itemIdx) => (
              <div key={itemIdx} className="card">
                <h4 style={{ color: '#667eea', marginBottom: '8px' }}>{item.title}</h4>
                <span className="badge">{item.type}</span>
                <p style={{ marginTop: '15px' }}>
                  <a href={item.link} className="resource-link">
                    Access Resource →
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="card" style={{ marginTop: '30px', background: '#f9f9f9' }}>
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📚 Recommended Reading</h3>
        <div className="list-item">
          <h4>"The Recovery Book" by Al J. Mooney</h4>
          <p>Comprehensive guide to addiction recovery and maintaining sobriety</p>
        </div>
        <div className="list-item">
          <h4>"In the Realm of Hungry Ghosts" by Dr. Gabor Maté</h4>
          <p>Deep exploration of addiction from a medical and compassionate perspective</p>
        </div>
        <div className="list-item">
          <h4>"Recovery: Freedom from Our Addictions" by Russell Brand</h4>
          <p>Personal journey and practical guidance for recovery</p>
        </div>
      </div>
    </div>
  );
};

export default Resources;
