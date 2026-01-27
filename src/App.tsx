import { useState, lazy, Suspense } from 'react'
import './App.css'

// Lazy load components for better performance
const Dashboard = lazy(() => import('./components/Dashboard'))
const Assessment = lazy(() => import('./components/Assessment'))
const SupportNetwork = lazy(() => import('./components/SupportNetwork'))
const Resources = lazy(() => import('./components/Resources'))
const Goals = lazy(() => import('./components/Goals'))
const CrisisSupport = lazy(() => import('./components/CrisisSupport'))
const Journal = lazy(() => import('./components/Journal'))
const RelapsePrevention = lazy(() => import('./components/RelapsePrevention'))
const Meditation = lazy(() => import('./components/Meditation'))

type Tab = 'dashboard' | 'assessment' | 'support' | 'resources' | 'goals' | 'crisis' | 'journal' | 'prevention' | 'meditation'

// Loading component
const LoadingSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    fontSize: '1.5rem'
  }}>
    <div style={{
      animation: 'spin 1s linear infinite',
      fontSize: '3rem'
    }}>⏳</div>
  </div>
)

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
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <header className="header">
        <h1>Recovery 360</h1>
        <p>Your Complete Recovery Ecosystem - Supporting Your Journey Every Step of the Way</p>
        
        <nav className="nav-tabs" role="navigation" aria-label="Main navigation">
          <button 
            className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
            aria-label="Navigate to Dashboard"
            aria-current={activeTab === 'dashboard' ? 'page' : undefined}
          >
            📊 Dashboard
          </button>
          <button 
            className={`nav-tab ${activeTab === 'assessment' ? 'active' : ''}`}
            onClick={() => setActiveTab('assessment')}
            aria-label="Navigate to Assessment"
            aria-current={activeTab === 'assessment' ? 'page' : undefined}
          >
            📋 Assessment
          </button>
          <button 
            className={`nav-tab ${activeTab === 'support' ? 'active' : ''}`}
            onClick={() => setActiveTab('support')}
            aria-label="Navigate to Support Network"
            aria-current={activeTab === 'support' ? 'page' : undefined}
          >
            🤝 Support Network
          </button>
          <button 
            className={`nav-tab ${activeTab === 'resources' ? 'active' : ''}`}
            onClick={() => setActiveTab('resources')}
            aria-label="Navigate to Resources"
            aria-current={activeTab === 'resources' ? 'page' : undefined}
          >
            📚 Resources
          </button>
          <button 
            className={`nav-tab ${activeTab === 'goals' ? 'active' : ''}`}
            onClick={() => setActiveTab('goals')}
            aria-label="Navigate to Goals and Milestones"
            aria-current={activeTab === 'goals' ? 'page' : undefined}
          >
            🎯 Goals & Milestones
          </button>
          <button 
            className={`nav-tab ${activeTab === 'crisis' ? 'active' : ''}`}
            onClick={() => setActiveTab('crisis')}
            aria-label="Navigate to Crisis Support"
            aria-current={activeTab === 'crisis' ? 'page' : undefined}
          >
            🚨 Crisis Support
          </button>
          <button 
            className={`nav-tab ${activeTab === 'journal' ? 'active' : ''}`}
            onClick={() => setActiveTab('journal')}
            aria-label="Navigate to Journal"
            aria-current={activeTab === 'journal' ? 'page' : undefined}
          >
            📝 Journal
          </button>
          <button 
            className={`nav-tab ${activeTab === 'prevention' ? 'active' : ''}`}
            onClick={() => setActiveTab('prevention')}
            aria-label="Navigate to Prevention Plan"
            aria-current={activeTab === 'prevention' ? 'page' : undefined}
          >
            🛡️ Prevention Plan
          </button>
          <button 
            className={`nav-tab ${activeTab === 'meditation' ? 'active' : ''}`}
            onClick={() => setActiveTab('meditation')}
            aria-label="Navigate to Meditation"
            aria-current={activeTab === 'meditation' ? 'page' : undefined}
          >
            🧘 Meditation
          </button>
        </nav>
      </header>

      <main id="main-content" role="main">
        <Suspense fallback={<LoadingSpinner />}>
          {renderContent()}
        </Suspense>
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
