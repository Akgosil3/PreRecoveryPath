import React, { useState, useEffect } from 'react';

interface MeditationSession {
  id: string;
  date: string;
  duration: number;
  type: string;
}

interface MeditationProps {}

const Meditation: React.FC<MeditationProps> = () => {
  const [time, setTime] = useState(300); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(300);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [sessions, setSessions] = useState<MeditationSession[]>([]);
  const [breathCount, setBreathCount] = useState(0);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  // Load sessions from localStorage
  useEffect(() => {
    try {
      const savedSessions = localStorage.getItem('meditationSessions');
      if (savedSessions) {
        setSessions(JSON.parse(savedSessions));
      }
    } catch (error) {
      console.error('Failed to load meditation sessions:', error);
      localStorage.removeItem('meditationSessions');
    }
  }, []);

  // Timer logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && !isPaused && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && isRunning) {
      handleComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isPaused, time]);

  // Breathing animation logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    
    if (isRunning && !isPaused && selectedExercise === 'breathing') {
      interval = setInterval(() => {
        setBreathPhase((current) => {
          if (current === 'inhale') return 'hold';
          if (current === 'hold') return 'exhale';
          setBreathCount((prev) => prev + 1);
          return 'inhale';
        });
      }, 4000); // Fixed 4-second intervals for each phase
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isPaused, selectedExercise]);

  const handleStart = (exercise: string) => {
    setSelectedExercise(exercise);
    setTime(selectedDuration);
    setIsRunning(true);
    setIsPaused(false);
    setBreathCount(0);
    setBreathPhase('inhale');
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTime(selectedDuration);
    setSelectedExercise(null);
    setBreathCount(0);
    setBreathPhase('inhale');
  };

  const handleComplete = () => {
    const session: MeditationSession = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      duration: selectedDuration,
      type: selectedExercise || 'meditation'
    };
    const newSessions = [session, ...sessions];
    setSessions(newSessions);
    localStorage.setItem('meditationSessions', JSON.stringify(newSessions));
    
    setIsRunning(false);
    setIsPaused(false);
    setTime(selectedDuration);
    setSelectedExercise(null);
    setBreathCount(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTotalMinutes = () => {
    return sessions.reduce((total, session) => total + session.duration, 0) / 60;
  };

  const getBreathingCircleSize = () => {
    if (breathPhase === 'inhale') return '200px';
    if (breathPhase === 'hold') return '200px';
    return '150px';
  };

  const getBreathingText = () => {
    if (breathPhase === 'inhale') return 'Breathe In...';
    if (breathPhase === 'hold') return 'Hold...';
    return 'Breathe Out...';
  };

  const exercises = [
    {
      id: 'breathing',
      name: 'Box Breathing',
      description: 'A simple breathing technique to reduce stress and anxiety. Breathe in for 4, hold for 4, breathe out for 4.',
      icon: '🫁'
    },
    {
      id: 'body-scan',
      name: 'Body Scan Meditation',
      description: 'Focus attention on different parts of your body, releasing tension and promoting relaxation.',
      icon: '🧘'
    },
    {
      id: 'mindfulness',
      name: 'Mindfulness Meditation',
      description: 'Stay present in the moment, observing thoughts and feelings without judgment.',
      icon: '🧠'
    },
    {
      id: 'gratitude',
      name: 'Gratitude Meditation',
      description: 'Reflect on things you\'re grateful for, cultivating positive emotions and perspective.',
      icon: '🙏'
    },
    {
      id: 'loving-kindness',
      name: 'Loving-Kindness',
      description: 'Send positive thoughts and well-wishes to yourself and others.',
      icon: '💗'
    }
  ];

  return (
    <div className="content-section">
      <h2 className="section-title">Meditation & Mindfulness</h2>
      
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
        Regular meditation and mindfulness practice can reduce stress, improve emotional regulation, 
        and support your recovery journey.
      </p>

      {/* Stats */}
      <div className="card-grid" style={{ marginBottom: '30px' }}>
        <div className="metric-card">
          <div className="metric-label">Total Sessions</div>
          <div className="metric-value">{sessions.length}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Total Minutes</div>
          <div className="metric-value">{getTotalMinutes().toFixed(0)}</div>
        </div>
      </div>

      {/* Timer Section */}
      {!isRunning && !selectedExercise ? (
        <div className="card" style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '20px' }}>⏱️ Set Your Timer</h3>
          
          <div className="input-group">
            <label>Duration</label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[180, 300, 600, 900, 1200].map((duration) => (
                <button
                  key={duration}
                  className={`button ${selectedDuration === duration ? '' : 'button-secondary'}`}
                  onClick={() => setSelectedDuration(duration)}
                  style={{ padding: '10px 20px' }}
                >
                  {duration / 60} min
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="card" style={{ marginBottom: '30px', textAlign: 'center' }}>
          <h3 style={{ color: '#667eea', marginBottom: '20px' }}>
            {exercises.find(e => e.id === selectedExercise)?.name || 'Meditation'}
          </h3>
          
          {selectedExercise === 'breathing' && (
            <div style={{ margin: '30px 0' }}>
              <div 
                style={{ 
                  width: getBreathingCircleSize(),
                  height: getBreathingCircleSize(),
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  transition: 'all 4s ease-in-out',
                  opacity: breathPhase === 'hold' ? 1 : 0.8
                }}
              >
                {getBreathingText()}
              </div>
              <p style={{ marginTop: '20px', fontSize: '1.1rem', color: '#666' }}>
                Breath Cycle: {breathCount}
              </p>
            </div>
          )}

          {selectedExercise !== 'breathing' && (
            <div style={{ margin: '40px 0' }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>
                {exercises.find(e => e.id === selectedExercise)?.icon}
              </div>
              <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '500px', margin: '0 auto' }}>
                {exercises.find(e => e.id === selectedExercise)?.description}
              </p>
            </div>
          )}
          
          <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#667eea', margin: '30px 0' }}>
            {formatTime(time)}
          </div>
          
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="button" onClick={handlePause}>
              {isPaused ? '▶️ Resume' : '⏸️ Pause'}
            </button>
            <button className="button button-secondary" onClick={handleReset}>
              🔄 Reset
            </button>
            {time === 0 && (
              <button className="button" onClick={handleComplete} style={{ background: '#4caf50' }}>
                ✅ Complete
              </button>
            )}
          </div>
        </div>
      )}

      {/* Meditation Exercises */}
      {!isRunning && (
        <div style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '1.5rem' }}>
            Choose a Practice
          </h3>
          <div className="card-grid">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="card">
                <div style={{ fontSize: '3rem', marginBottom: '10px' }}>{exercise.icon}</div>
                <h4 style={{ color: '#667eea', marginBottom: '10px' }}>{exercise.name}</h4>
                <p style={{ color: '#666', marginBottom: '15px', minHeight: '60px' }}>
                  {exercise.description}
                </p>
                <button 
                  className="button" 
                  onClick={() => handleStart(exercise.id)}
                  style={{ width: '100%' }}
                >
                  ▶️ Start
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Session History */}
      {sessions.length > 0 && !isRunning && (
        <div className="card">
          <h3 style={{ color: '#667eea', marginBottom: '15px' }}>📊 Recent Sessions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {sessions.slice(0, 5).map((session) => (
              <div 
                key={session.id} 
                style={{ 
                  padding: '12px', 
                  background: '#f9f9f9',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span style={{ fontWeight: '500' }}>
                    {exercises.find(e => e.id === session.type)?.icon || '🧘'}{' '}
                    {exercises.find(e => e.id === session.type)?.name || 'Meditation'}
                  </span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', color: '#667eea' }}>
                    {session.duration / 60} min
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#888' }}>
                    {formatDate(session.date)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
        <h4 style={{ color: '#667eea', marginBottom: '10px' }}>💡 Meditation Tips</h4>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#666' }}>
          <li>Find a quiet, comfortable space where you won't be disturbed</li>
          <li>Start with shorter sessions and gradually increase duration</li>
          <li>It's normal for your mind to wander - gently bring focus back</li>
          <li>Practice at the same time each day to build a habit</li>
          <li>Be patient with yourself - meditation is a skill that improves with practice</li>
          <li>Even a few minutes of daily practice can have significant benefits</li>
        </ul>
      </div>
    </div>
  );
};

export default Meditation;
