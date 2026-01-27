import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Assessment from './components/Assessment'
import SupportNetwork from './components/SupportNetwork'
import Resources from './components/Resources'
import Goals from './components/Goals'
import CrisisSupport from './components/CrisisSupport'
import Journal from './components/Journal'
import RelapsePrevention from './components/RelapsePrevention'
import Meditation from './components/Meditation'

type Tab = 'dashboard' | 'assessment' | 'support' | 'resources' | 'goals' | 'crisis' | 'journal' | 'prevention' | 'meditation'

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'assessment':
        return <Assessment />
      case 'support':
        return <SupportNetwork />
      case 'resources':
        return <Resources />
      case 'goals':
        return <Goals />
      case 'crisis':
        return <CrisisSupport />
      case 'journal':
        return <Journal />
      case 'prevention':
        return <RelapsePrevention />
      case 'meditation':
        return <Meditation />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app-container">
      <header className="header">
        <h1>Recovery 360</h1>
        <p>Your Complete Recovery Ecosystem - Supporting Your Journey Every Step of the Way</p>
        
        <nav className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            📊 Dashboard
          </button>
          <button 
            className={`nav-tab ${activeTab === 'assessment' ? 'active' : ''}`}
            onClick={() => setActiveTab('assessment')}
          >
            📋 Assessment
          </button>
          <button 
            className={`nav-tab ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
          >
            🤝 Support Network
          </button>
          <button 
            className={`nav-tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
          >
            📚 Resources
          </button>
          <button 
            className={`nav-tab ${activeTab === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveTab('goals')}
          >
            🎯 Goals & Milestones
          </button>
          <button 
            className={`nav-tab ${activeTab === 'crisis' ? 'active' : ''}`}
            onClick={() => setActiveTab('crisis')}
          >
            🚨 Crisis Support
          </button>
          <button 
            className={`nav-tab ${activeTab === 'journal' ? 'active' : ''}`}
            onClick={() => setActiveTab('journal')}
          >
            📝 Journal
          </button>
          <button 
            className={`nav-tab ${activeTab === 'prevention' ? 'active' : ''}`}
            onClick={() => setActiveTab('prevention')}
          >
            🛡️ Prevention Plan
          </button>
          <button 
            className={`nav-tab ${activeTab === 'meditation' ? 'active' : ''}`}
            onClick={() => setActiveTab('meditation')}
          >
            🧘 Meditation
          </button>
        </nav>
      </header>

      <main>
        {renderContent()}
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '20px', 
        color: 'white',
        marginTop: '30px'
      }}>
        <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
          Recovery 360 - Assessment and Prevention of Substance Use Curriculum
        </p>
        <p style={{ fontSize: '0.85rem', opacity: 0.8, marginTop: '5px' }}>
          Your privacy and recovery are our priority. All data is confidential.
        </p>
      </footer>
    </div>
  )
}

export default App
