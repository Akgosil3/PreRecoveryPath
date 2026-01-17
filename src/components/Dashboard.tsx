import React from 'react';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <div className="content-section">
      <h2 className="section-title">Recovery 360 Dashboard</h2>
      
      <div className="card-grid">
        <div className="metric-card">
          <div className="metric-label">Days in Recovery</div>
          <div className="metric-value">47</div>
          <p>Keep going strong! 💪</p>
        </div>
        
        <div className="metric-card">
          <div className="metric-label">Support Sessions</div>
          <div className="metric-value">12</div>
          <p>Great engagement!</p>
        </div>
        
        <div className="metric-card">
          <div className="metric-label">Goals Achieved</div>
          <div className="metric-value">8/15</div>
          <p>53% Complete</p>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '15px', color: '#667eea' }}>Your Recovery Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '53%' }}>53%</div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3 style={{ marginBottom: '15px', color: '#667eea' }}>Recent Milestones</h3>
        <div className="list-item">
          <h4>✅ One Month Milestone</h4>
          <p>Celebrated 30 days of recovery - 3 days ago</p>
        </div>
        <div className="list-item">
          <h4>✅ Completed First Assessment</h4>
          <p>Successfully completed initial recovery assessment - 1 week ago</p>
        </div>
        <div className="list-item">
          <h4>✅ Joined Support Group</h4>
          <p>Connected with local support community - 2 weeks ago</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
