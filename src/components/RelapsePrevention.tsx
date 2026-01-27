import React, { useState, useEffect } from 'react';

interface Trigger {
  id: string;
  name: string;
  category: 'people' | 'places' | 'emotions' | 'situations';
}

interface CopingStrategy {
  id: string;
  trigger: string;
  strategy: string;
}

interface RelapsePreventionProps {}

const RelapsePrevention: React.FC<RelapsePreventionProps> = () => {
  const [triggers, setTriggers] = useState<Trigger[]>([]);
  const [copingStrategies, setCopingStrategies] = useState<CopingStrategy[]>([]);
  const [newTrigger, setNewTrigger] = useState('');
  const [triggerCategory, setTriggerCategory] = useState<'people' | 'places' | 'emotions' | 'situations'>('emotions');
  const [newStrategy, setNewStrategy] = useState('');
  const [strategyTrigger, setStrategyTrigger] = useState('');

  // Load data from localStorage
  useEffect(() => {
    const savedTriggers = localStorage.getItem('relapseTriggers');
    const savedStrategies = localStorage.getItem('copingStrategies');
    if (savedTriggers) setTriggers(JSON.parse(savedTriggers));
    if (savedStrategies) setCopingStrategies(JSON.parse(savedStrategies));
  }, []);

  // Save triggers
  useEffect(() => {
    if (triggers.length > 0) {
      localStorage.setItem('relapseTriggers', JSON.stringify(triggers));
    }
  }, [triggers]);

  // Save strategies
  useEffect(() => {
    if (copingStrategies.length > 0) {
      localStorage.setItem('copingStrategies', JSON.stringify(copingStrategies));
    }
  }, [copingStrategies]);

  const handleAddTrigger = () => {
    if (newTrigger.trim()) {
      const trigger: Trigger = {
        id: Date.now().toString(),
        name: newTrigger,
        category: triggerCategory
      };
      setTriggers([...triggers, trigger]);
      setNewTrigger('');
    }
  };

  const handleDeleteTrigger = (id: string) => {
    setTriggers(triggers.filter(t => t.id !== id));
    if (triggers.filter(t => t.id !== id).length === 0) {
      localStorage.removeItem('relapseTriggers');
    }
  };

  const handleAddStrategy = () => {
    if (newStrategy.trim() && strategyTrigger) {
      const strategy: CopingStrategy = {
        id: Date.now().toString(),
        trigger: strategyTrigger,
        strategy: newStrategy
      };
      setCopingStrategies([...copingStrategies, strategy]);
      setNewStrategy('');
      setStrategyTrigger('');
    }
  };

  const handleDeleteStrategy = (id: string) => {
    setCopingStrategies(copingStrategies.filter(s => s.id !== id));
    if (copingStrategies.filter(s => s.id !== id).length === 0) {
      localStorage.removeItem('copingStrategies');
    }
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'people': '👥',
      'places': '📍',
      'emotions': '💭',
      'situations': '⚠️'
    };
    return icons[category] || '⚠️';
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'people': '#e3f2fd',
      'places': '#f3e5f5',
      'emotions': '#fff3e0',
      'situations': '#ffebee'
    };
    return colors[category] || '#f5f5f5';
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Relapse Prevention Plan</h2>
      
      <div className="crisis-alert" style={{ background: '#2196f3' }}>
        <h3>🛡️ Your Prevention Plan is Your Shield</h3>
        <p>Knowing your triggers and having strategies ready can help you stay on track in your recovery journey.</p>
      </div>

      {/* Warning Signs Section */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>⚠️ Early Warning Signs</h3>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          Be aware of these common warning signs that may indicate increased relapse risk:
        </p>
        <div className="card-grid">
          <div className="list-item">
            <h4>Behavioral Changes</h4>
            <p>Isolating from support network, skipping meetings, returning to old haunts</p>
          </div>
          <div className="list-item">
            <h4>Emotional Changes</h4>
            <p>Increased anxiety, depression, irritability, or mood swings</p>
          </div>
          <div className="list-item">
            <h4>Thinking Changes</h4>
            <p>Romanticizing past use, minimizing consequences, "just one time" thoughts</p>
          </div>
          <div className="list-item">
            <h4>Physical Changes</h4>
            <p>Sleep problems, appetite changes, neglecting self-care</p>
          </div>
        </div>
      </div>

      {/* Identify Triggers Section */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>🎯 Identify Your Triggers</h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Understanding what triggers cravings or urges is the first step in prevention.
        </p>

        <div className="input-group">
          <label>Trigger Category</label>
          <select 
            value={triggerCategory}
            onChange={(e) => setTriggerCategory(e.target.value as any)}
          >
            <option value="emotions">Emotions (stress, anger, sadness)</option>
            <option value="people">People (specific individuals or groups)</option>
            <option value="places">Places (locations or environments)</option>
            <option value="situations">Situations (events or circumstances)</option>
          </select>
        </div>

        <div className="input-group">
          <label>Describe the Trigger</label>
          <input
            type="text"
            value={newTrigger}
            onChange={(e) => setNewTrigger(e.target.value)}
            placeholder="E.g., Feeling overwhelmed at work, Visiting old neighborhood..."
          />
        </div>

        <button 
          className="button" 
          onClick={handleAddTrigger}
          disabled={!newTrigger.trim()}
          style={{ opacity: newTrigger.trim() ? 1 : 0.5 }}
        >
          ➕ Add Trigger
        </button>

        {triggers.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <h4 style={{ marginBottom: '15px' }}>Your Identified Triggers:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {triggers.map((trigger) => (
                <div 
                  key={trigger.id} 
                  style={{ 
                    padding: '12px', 
                    background: getCategoryColor(trigger.category),
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '1.2rem', marginRight: '10px' }}>
                      {getCategoryIcon(trigger.category)}
                    </span>
                    <span style={{ fontWeight: '500' }}>{trigger.name}</span>
                    <span className="badge" style={{ marginLeft: '10px' }}>
                      {trigger.category}
                    </span>
                  </div>
                  <button 
                    className="button button-secondary" 
                    onClick={() => handleDeleteTrigger(trigger.id)}
                    style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Coping Strategies Section */}
      <div className="card" style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#667eea', marginBottom: '15px' }}>🛠️ Your Coping Strategies</h3>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          For each trigger, create specific strategies to help you cope and stay on track.
        </p>

        <div className="input-group">
          <label>For which trigger?</label>
          <input
            type="text"
            value={strategyTrigger}
            onChange={(e) => setStrategyTrigger(e.target.value)}
            placeholder="Name the trigger this strategy addresses..."
            list="trigger-list"
          />
          <datalist id="trigger-list">
            {triggers.map(t => (
              <option key={t.id} value={t.name} />
            ))}
          </datalist>
        </div>

        <div className="input-group">
          <label>Coping Strategy</label>
          <textarea
            rows={3}
            value={newStrategy}
            onChange={(e) => setNewStrategy(e.target.value)}
            placeholder="Describe what you will do when faced with this trigger..."
          />
        </div>

        <button 
          className="button" 
          onClick={handleAddStrategy}
          disabled={!newStrategy.trim() || !strategyTrigger.trim()}
          style={{ opacity: (newStrategy.trim() && strategyTrigger.trim()) ? 1 : 0.5 }}
        >
          ➕ Add Strategy
        </button>

        {copingStrategies.length > 0 && (
          <div style={{ marginTop: '30px' }}>
            <h4 style={{ marginBottom: '15px' }}>Your Coping Strategies:</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {copingStrategies.map((strategy) => (
                <div key={strategy.id} className="list-item">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ color: '#667eea' }}>When: {strategy.trigger}</h4>
                      <p style={{ marginTop: '8px' }}>Then: {strategy.strategy}</p>
                    </div>
                    <button 
                      className="button button-secondary" 
                      onClick={() => handleDeleteStrategy(strategy.id)}
                      style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Emergency Action Plan */}
      <div className="card" style={{ background: '#fff3e0', borderLeft: '4px solid #ff9800' }}>
        <h3 style={{ color: '#e65100', marginBottom: '15px' }}>🚨 Emergency Action Plan</h3>
        <p style={{ marginBottom: '15px', color: '#666' }}>
          If you're experiencing strong cravings or feel at high risk of relapse:
        </p>
        <ol style={{ paddingLeft: '20px', lineHeight: '2', color: '#666' }}>
          <li><strong>Call your sponsor or support person immediately</strong> - Don't wait</li>
          <li><strong>Remove yourself from the situation</strong> - Change your environment</li>
          <li><strong>Practice grounding techniques</strong> - 5-4-3-2-1 sensory exercise</li>
          <li><strong>Review your reasons for recovery</strong> - Remember your "why"</li>
          <li><strong>Call a crisis hotline</strong> - SAMHSA: 1-800-662-4357 (24/7)</li>
          <li><strong>Go to a safe place</strong> - Support group meeting, treatment center, or hospital</li>
        </ol>
        <div style={{ marginTop: '20px', padding: '15px', background: 'white', borderRadius: '8px' }}>
          <p style={{ fontWeight: 'bold', color: '#e65100' }}>
            Remember: A craving is temporary. This feeling will pass. You've overcome challenges before, and you can do it again.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
        <h4 style={{ color: '#667eea', marginBottom: '10px' }}>💡 Prevention Tips</h4>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#666' }}>
          <li>Review and update your plan regularly as you learn more about yourself</li>
          <li>Share your plan with your support network</li>
          <li>Practice your coping strategies before you need them</li>
          <li>Remember that having a plan doesn't mean you're planning to relapse - it means you're prepared</li>
          <li>Be compassionate with yourself - recovery is a journey, not perfection</li>
        </ul>
      </div>
    </div>
  );
};

export default RelapsePrevention;
