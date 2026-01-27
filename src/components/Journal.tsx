import React, { useState, useEffect } from 'react';

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  mood?: string;
}

interface JournalProps {}

const Journal: React.FC<JournalProps> = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [selectedMood, setSelectedMood] = useState('neutral');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  // Load entries from localStorage on mount
  useEffect(() => {
    try {
      const savedEntries = localStorage.getItem('journalEntries');
      if (savedEntries) {
        setEntries(JSON.parse(savedEntries));
      }
    } catch (error) {
      console.error('Failed to load journal entries:', error);
      localStorage.removeItem('journalEntries');
    }
  }, []);

  // Save entries to localStorage whenever they change
  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem('journalEntries', JSON.stringify(entries));
    }
  }, [entries]);

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        content: newEntry,
        mood: selectedMood
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
      setSelectedMood('neutral');
    }
  };

  const handleDeleteEntry = (id: string) => {
    setEntries(entries.filter(entry => entry.id !== id));
    if (entries.filter(entry => entry.id !== id).length === 0) {
      localStorage.removeItem('journalEntries');
    }
  };

  const handleEditEntry = (id: string) => {
    setEditingId(id);
    const entry = entries.find(e => e.id === id);
    if (entry) {
      setEditContent(entry.content);
    }
  };

  const handleSaveEdit = (id: string) => {
    setEntries(entries.map(entry => 
      entry.id === id ? { ...entry, content: editContent } : entry
    ));
    setEditingId(null);
    setEditContent('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditContent('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getMoodEmoji = (mood: string) => {
    const moods: Record<string, string> = {
      'great': '😄',
      'good': '🙂',
      'neutral': '😐',
      'struggling': '😟',
      'difficult': '😞'
    };
    return moods[mood] || '😐';
  };

  return (
    <div className="content-section">
      <h2 className="section-title">Recovery Journal</h2>
      
      <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
        Journaling is a powerful tool for self-reflection and tracking your recovery journey. 
        Write about your experiences, feelings, challenges, and victories.
      </p>

      <div className="card" style={{ marginBottom: '30px' }}>
        <h3 style={{ marginBottom: '20px' }}>New Journal Entry</h3>
        
        <div className="input-group">
          <label>How are you feeling today?</label>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '15px' }}>
            {['great', 'good', 'neutral', 'struggling', 'difficult'].map((mood) => (
              <button
                key={mood}
                className={`button ${selectedMood === mood ? '' : 'button-secondary'}`}
                onClick={() => setSelectedMood(mood)}
                style={{ padding: '8px 16px', fontSize: '0.9rem' }}
              >
                {getMoodEmoji(mood)} {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label>Write your thoughts...</label>
          <textarea
            rows={6}
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="What's on your mind? Share your thoughts, feelings, challenges, or victories..."
            style={{ width: '100%' }}
          />
        </div>

        <button 
          className="button" 
          onClick={handleAddEntry}
          disabled={!newEntry.trim()}
          style={{ opacity: newEntry.trim() ? 1 : 0.5 }}
        >
          💾 Save Entry
        </button>
      </div>

      <h3 style={{ color: '#667eea', marginBottom: '20px', fontSize: '1.5rem' }}>
        Your Journal Entries ({entries.length})
      </h3>

      {entries.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.1rem', color: '#888' }}>
            📝 No journal entries yet. Start writing to track your recovery journey!
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {entries.map((entry) => (
            <div key={entry.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#667eea' }}>
                    {getMoodEmoji(entry.mood || 'neutral')} {formatDate(entry.date)}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {editingId !== entry.id && (
                    <>
                      <button 
                        className="button button-secondary" 
                        onClick={() => handleEditEntry(entry.id)}
                        style={{ padding: '6px 12px', fontSize: '0.85rem' }}
                      >
                        ✏️ Edit
                      </button>
                      <button 
                        className="button button-secondary" 
                        onClick={() => handleDeleteEntry(entry.id)}
                        style={{ padding: '6px 12px', fontSize: '0.85rem', background: '#ffebee', color: '#c62828' }}
                      >
                        🗑️ Delete
                      </button>
                    </>
                  )}
                </div>
              </div>

              {editingId === entry.id ? (
                <div>
                  <textarea
                    rows={6}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    style={{ width: '100%', marginBottom: '10px' }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                      className="button" 
                      onClick={() => handleSaveEdit(entry.id)}
                      style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                    >
                      💾 Save
                    </button>
                    <button 
                      className="button button-secondary" 
                      onClick={handleCancelEdit}
                      style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                    >
                      ❌ Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', color: '#333' }}>
                  {entry.content}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f9ff', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
        <h4 style={{ color: '#667eea', marginBottom: '10px' }}>💡 Journaling Tips</h4>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#666' }}>
          <li>Write regularly - even a few sentences can be valuable</li>
          <li>Be honest with yourself about your feelings and experiences</li>
          <li>Use your journal to identify patterns and triggers</li>
          <li>Celebrate your victories, no matter how small</li>
          <li>Review past entries to see how far you've come</li>
        </ul>
      </div>
    </div>
  );
};

export default Journal;
