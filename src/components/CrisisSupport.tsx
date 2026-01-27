import React from 'react';

interface CrisisSupportProps {}

const CrisisSupport: React.FC<CrisisSupportProps> = () => {
  const hotlines = [
    {
      name: "SAMHSA National Helpline",
      number: "1-800-662-4357",
      description: "Free, confidential, 24/7 treatment referral and information service",
      availability: "24/7",
      isCallable: true
    },
    {
      name: "National Suicide Prevention Lifeline",
      number: "988",
      description: "Free and confidential support for people in distress",
      availability: "24/7",
      isCallable: true
    },
    {
      name: "Crisis Text Line",
      number: "Text HOME to 741741",
      description: "Free, 24/7 support for those in crisis via text message",
      availability: "24/7",
      isCallable: false
    },
    {
      name: "NIDA Drug Abuse Hotline",
      number: "1-800-662-4357",
      description: "Information about substance abuse and treatment options",
      availability: "24/7",
      isCallable: true
    }
  ];

  const copingStrategies = [
    {
      title: "Deep Breathing Exercise",
      description: "Take slow, deep breaths for 5 minutes to calm your nervous system",
      icon: "🫁"
    },
    {
      title: "Call Your Sponsor",
      description: "Reach out to your support network immediately",
      icon: "📞"
    },
    {
      title: "Remove Yourself from Triggers",
      description: "Change your environment to a safe, supportive space",
      icon: "🚪"
    },
    {
      title: "Practice Grounding Techniques",
      description: "Use the 5-4-3-2-1 method: identify 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste",
      icon: "🧘"
    },
    {
      title: "Write in Your Journal",
      description: "Express your feelings and thoughts on paper",
      icon: "📝"
    },
    {
      title: "Physical Activity",
      description: "Go for a walk, do some stretches, or exercise to release tension",
      icon: "🏃"
    }
  ];

  return (
    <div className="content-section">
      <h2 className="section-title">Crisis Support</h2>
      
      <div className="crisis-alert">
        <h3>🚨 Need Immediate Help?</h3>
        <p style={{ marginBottom: '10px' }}>If you're in crisis, please reach out now. You're not alone.</p>
        <a href="tel:988">Call 988 - Crisis Lifeline</a>
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>24/7 Support Hotlines</h3>
      <div className="card-grid" style={{ marginBottom: '30px' }}>
        {hotlines.map((hotline, idx) => (
          <div key={idx} className="card">
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>{hotline.name}</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', margin: '15px 0' }}>
              {hotline.number}
            </p>
            <p style={{ color: '#666', marginBottom: '10px' }}>{hotline.description}</p>
            <span className="badge">{hotline.availability}</span>
            <div style={{ marginTop: '15px' }}>
              {hotline.isCallable ? (
                <a href={`tel:${hotline.number.replace(/[^0-9]/g, '')}`}>
                  <button className="button" style={{ width: '100%' }}>
                    Call Now
                  </button>
                </a>
              ) : (
                <button className="button" style={{ width: '100%' }}>
                  Text Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>
        Immediate Coping Strategies
      </h3>
      <p style={{ marginBottom: '20px', color: '#666' }}>
        When you're feeling overwhelmed, try these evidence-based techniques:
      </p>
      
      <div className="card-grid">
        {copingStrategies.map((strategy, idx) => (
          <div key={idx} className="card">
            <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{strategy.icon}</div>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>{strategy.title}</h4>
            <p style={{ color: '#666' }}>{strategy.description}</p>
          </div>
        ))}
      </div>

      <div className="card" style={{ marginTop: '30px', background: '#fff3cd', borderLeft: '4px solid #ffc107' }}>
        <h4 style={{ color: '#856404', marginBottom: '15px' }}>⚠️ Warning Signs to Watch For</h4>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#856404' }}>
          <li>Intense cravings that won't subside</li>
          <li>Thoughts of using substances</li>
          <li>Isolation from support network</li>
          <li>Engaging with old triggers or environments</li>
          <li>Feelings of hopelessness or despair</li>
          <li>Neglecting self-care routines</li>
        </ul>
        <p style={{ marginTop: '15px', fontWeight: 'bold', color: '#856404' }}>
          If you recognize these signs, reach out for help immediately. It's a sign of strength, not weakness.
        </p>
      </div>

      <div className="card" style={{ marginTop: '20px', background: '#d1ecf1', borderLeft: '4px solid #0c5460' }}>
        <h4 style={{ color: '#0c5460', marginBottom: '10px' }}>💡 Remember</h4>
        <p style={{ color: '#0c5460', lineHeight: '1.6' }}>
          Recovery is a journey with ups and downs. Having difficult moments doesn't mean you've failed. 
          Reaching out for help is a crucial part of the recovery process. Your support network is here for you.
        </p>
      </div>
    </div>
  );
};

export default CrisisSupport;
