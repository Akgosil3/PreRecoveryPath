import React, { useState } from 'react';

interface AssessmentProps {}

const Assessment: React.FC<AssessmentProps> = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "How would you rate your current overall well-being?",
      options: ["Poor", "Fair", "Good", "Very Good", "Excellent"]
    },
    {
      id: 2,
      question: "How often do you engage with your support network?",
      options: ["Never", "Rarely", "Sometimes", "Often", "Daily"]
    },
    {
      id: 3,
      question: "Do you have clear recovery goals set?",
      options: ["No goals", "Vague goals", "Some goals", "Clear goals", "Detailed plan"]
    },
    {
      id: 4,
      question: "How confident do you feel about your recovery journey?",
      options: ["Not confident", "Slightly confident", "Moderately confident", "Very confident", "Extremely confident"]
    }
  ];

  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="content-section">
        <h2 className="section-title">Assessment Results</h2>
        <div className="card">
          <h3>Your Recovery Assessment is Complete! 🎉</h3>
          <p style={{ marginTop: '15px', fontSize: '1.1rem' }}>
            Based on your responses, you're making positive progress in your recovery journey. 
            Here are your personalized recommendations:
          </p>
          
          <div style={{ marginTop: '30px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Strengths:</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
              <li>Active engagement with support systems</li>
              <li>Clear goal-setting practices</li>
              <li>Positive confidence in recovery process</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h4 style={{ color: '#667eea', marginBottom: '10px' }}>Recommended Focus Areas:</h4>
            <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
              <li>Continue building your support network</li>
              <li>Maintain regular check-ins with support groups</li>
              <li>Set specific, measurable milestones</li>
              <li>Practice daily self-care routines</li>
            </ul>
          </div>

          <div style={{ marginTop: '30px' }}>
            <button className="button" onClick={resetAssessment}>
              Take Assessment Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="content-section">
      <h2 className="section-title">Recovery Assessment</h2>
      
      <div className="card">
        <p style={{ marginBottom: '10px', color: '#888' }}>
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <div className="progress-bar" style={{ marginBottom: '20px' }}>
          <div 
            className="progress-fill" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>{question.question}</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {question.options.map((option) => (
            <label key={option} className="checkbox-group" style={{ padding: '12px', background: '#f9f9f9', borderRadius: '8px', cursor: 'pointer' }}>
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={answers[currentQuestion] === option}
                onChange={() => handleAnswer(option)}
              />
              <span style={{ fontSize: '1.1rem' }}>{option}</span>
            </label>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
          {currentQuestion > 0 && (
            <button className="button button-secondary" onClick={handlePrevious}>
              Previous
            </button>
          )}
          <button 
            className="button" 
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
            style={{ opacity: answers[currentQuestion] ? 1 : 0.5 }}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next'}
          </button>
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <p style={{ color: '#666', fontSize: '0.95rem' }}>
          💡 This assessment helps track your progress and identify areas for growth in your recovery journey.
        </p>
      </div>
    </div>
  );
};

export default Assessment;
