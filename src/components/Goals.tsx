import React, { useState } from 'react';

interface Goal {
  id: number;
  title: string;
  description: string;
  progress: number;
  completed: boolean;
}

interface GoalsProps {}

const Goals: React.FC<GoalsProps> = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [goals] = useState<Goal[]>([
    {
      id: 1,
      title: "Complete 90 Days Sober",
      description: "Maintain sobriety for 90 consecutive days",
      progress: 52,
      completed: false
    },
    {
      id: 2,
      title: "Attend Weekly Support Meetings",
      description: "Participate in support group meetings every week",
      progress: 85,
      completed: false
    },
    {
      id: 3,
      title: "Rebuild Family Relationships",
      description: "Have regular meaningful conversations with family members",
      progress: 40,
      completed: false
    },
    {
      id: 4,
      title: "Complete Initial Assessment",
      description: "Finish comprehensive recovery assessment",
      progress: 100,
      completed: true
    }
  ]);

  const milestones = [
    { day: 1, title: "Day 1: First Step", achieved: true },
    { day: 7, title: "Week 1: One Week Strong", achieved: true },
    { day: 30, title: "Month 1: 30 Days Milestone", achieved: true },
    { day: 60, title: "Month 2: 60 Days Progress", achieved: false },
    { day: 90, title: "Month 3: 90 Days Success", achieved: false },
    { day: 180, title: "6 Months: Half Year Achievement", achieved: false },
    { day: 365, title: "Year 1: One Year Anniversary", achieved: false }
  ];

  return (
    <div className="content-section">
      <h2 className="section-title">Goals & Milestones</h2>
      
      <div style={{ marginBottom: '30px' }}>
        <button className="button" onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : '+ Set New Goal'}
        </button>
      </div>

      {showAddForm && (
        <div className="card" style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '20px' }}>Set a New Goal</h3>
          <div className="input-group">
            <label>Goal Title</label>
            <input type="text" placeholder="What do you want to achieve?" />
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea rows={3} placeholder="Describe your goal in detail..." />
          </div>
          <div className="input-group">
            <label>Target Date</label>
            <input type="date" />
          </div>
          <button className="button">Save Goal</button>
        </div>
      )}

      <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>Active Goals</h3>
      <div style={{ marginBottom: '30px' }}>
        {goals.filter(g => !g.completed).map((goal) => (
          <div key={goal.id} className="card" style={{ marginBottom: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
              <h4 style={{ color: '#667eea' }}>{goal.title}</h4>
              <span style={{ color: '#888', fontSize: '0.9rem' }}>{goal.progress}%</span>
            </div>
            <p style={{ color: '#666', marginBottom: '15px' }}>{goal.description}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${goal.progress}%` }}>
                {goal.progress}%
              </div>
            </div>
            <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
              <button className="button" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Update Progress
              </button>
              <button className="button button-secondary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                Edit Goal
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>Completed Goals</h3>
      <div style={{ marginBottom: '30px' }}>
        {goals.filter(g => g.completed).map((goal) => (
          <div key={goal.id} className="card" style={{ marginBottom: '15px', background: '#f0fdf4', borderColor: '#22c55e' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <h4 style={{ color: '#22c55e' }}>✅ {goal.title}</h4>
            </div>
            <p style={{ color: '#666', marginTop: '10px' }}>{goal.description}</p>
          </div>
        ))}
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>Recovery Milestones</h3>
      <div className="card-grid">
        {milestones.map((milestone, idx) => (
          <div 
            key={idx} 
            className="card" 
            style={{ 
              background: milestone.achieved ? '#f0fdf4' : '#f9f9f9',
              borderColor: milestone.achieved ? '#22c55e' : '#e0e0e0'
            }}
          >
            <h4 style={{ color: milestone.achieved ? '#22c55e' : '#667eea', marginBottom: '10px' }}>
              {milestone.achieved ? '✅' : '🎯'} Day {milestone.day}
            </h4>
            <p style={{ color: '#666' }}>{milestone.title}</p>
            {!milestone.achieved && (
              <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '10px' }}>
                Keep pushing forward!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Goals;
