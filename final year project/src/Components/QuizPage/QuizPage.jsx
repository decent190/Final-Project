import React, { useState } from 'react';
import imagegal from '../../assets/imagegal.png';

const questions = [
  {
    question: 'Which HTML tag is used to create a hyperlink?',
    options: [
      { label: 'A', value: 'A', text: '<a>' },
      { label: 'B', value: 'B', text: '<h1>' },
      { label: 'C', value: 'C', text: '<img>' },
      { label: 'D', value: 'D', text: '<p>' },
      { label: 'E', value: 'E', text: '<div>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used for inserting an image?',
    options: [
      { label: 'A', value: 'A', text: '<img>' },
      { label: 'B', value: 'B', text: '<a>' },
      { label: 'C', value: 'C', text: '<h2>' },
      { label: 'D', value: 'D', text: '<span>' },
      { label: 'E', value: 'E', text: '<div>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used for the largest heading?',
    options: [
      { label: 'A', value: 'A', text: '<h1>' },
      { label: 'B', value: 'B', text: '<h6>' },
      { label: 'C', value: 'C', text: '<h3>' },
      { label: 'D', value: 'D', text: '<h4>' },
      { label: 'E', value: 'E', text: '<h2>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to create a numbered list?',
    options: [
      { label: 'A', value: 'A', text: '<ol>' },
      { label: 'B', value: 'B', text: '<ul>' },
      { label: 'C', value: 'C', text: '<li>' },
      { label: 'D', value: 'D', text: '<dl>' },
      { label: 'E', value: 'E', text: '<dt>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to display a horizontal line?',
    options: [
      { label: 'A', value: 'A', text: '<hr>' },
      { label: 'B', value: 'B', text: '<br>' },
      { label: 'C', value: 'C', text: '<div>' },
      { label: 'D', value: 'D', text: '<span>' },
      { label: 'E', value: 'E', text: '<h1>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to break a line?',
    options: [
      { label: 'A', value: 'A', text: '<br>' },
      { label: 'B', value: 'B', text: '<hr>' },
      { label: 'C', value: 'C', text: '<div>' },
      { label: 'D', value: 'D', text: '<span>' },
      { label: 'E', value: 'E', text: '<h1>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to create a table row?',
    options: [
      { label: 'A', value: 'A', text: '<tr>' },
      { label: 'B', value: 'B', text: '<td>' },
      { label: 'C', value: 'C', text: '<th>' },
      { label: 'D', value: 'D', text: '<table>' },
      { label: 'E', value: 'E', text: '<tbody>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to define a cell in a table?',
    options: [
      { label: 'A', value: 'A', text: '<td>' },
      { label: 'B', value: 'B', text: '<tr>' },
      { label: 'C', value: 'C', text: '<th>' },
      { label: 'D', value: 'D', text: '<table>' },
      { label: 'E', value: 'E', text: '<tbody>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to define a table header?',
    options: [
      { label: 'A', value: 'A', text: '<th>' },
      { label: 'B', value: 'B', text: '<tr>' },
      { label: 'C', value: 'C', text: '<td>' },
      { label: 'D', value: 'D', text: '<table>' },
      { label: 'E', value: 'E', text: '<tbody>' },
    ],
    correct: 'A',
  },
  {
    question: 'Which tag is used to define a table body?',
    options: [
      { label: 'A', value: 'A', text: '<tbody>' },
      { label: 'B', value: 'B', text: '<tr>' },
      { label: 'C', value: 'C', text: '<td>' },
      { label: 'D', value: 'D', text: '<table>' },
      { label: 'E', value: 'E', text: '<th>' },
    ],
    correct: 'A',
  },
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (value) => {
    const updated = [...selectedOptions];
    updated[currentQuestion] = value;
    setSelectedOptions(updated);
  };

  const goToPrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) setCurrentQuestion(currentQuestion + 1);
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const goToQuestion = (index) => {
    setCurrentQuestion(index);
  };

  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#171728' }}>
        <div className='d-flex'>
          <div className="container-fluid d-flex align-items-center gap-4">
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <i className="bi bi-box-arrow-right" style={{ fontSize: '1.5rem', color: '#dc3545' }}></i>
              <span className='text-white' style={{ marginLeft: '2px' }}>Logout</span>
            </div>
          </div>
        </div>
        <div>
          <img src={imagegal} alt="" className='img-fluid me-5' style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
        </div>
      </nav>

      <div className='container'>
        <div className="row mx-auto align-items-start">
          
          <div className="col-lg-8 col-md-7 col-sm-12 mt-5">
            <div>
              <h5>Quiz | HTML | Responsive Elements design</h5>
              <h5 className='mt-3'>Question {currentQuestion + 1}/{questions.length}</h5>
              <h4 className='mt-4'>{questions[currentQuestion].question}</h4>
              <div className="mt-4 d-flex flex-column gap-3">
                {questions[currentQuestion].options.map(option => (
                  <label
                    key={option.value}
                    style={{
                      border: '1px solid gray',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      cursor: 'pointer',
                      background: selectedOptions[currentQuestion] === option.value ? '#e0e7ff' : '#fff',
                      color: selectedOptions[currentQuestion] === option.value ? '#171728' : '#333',
                      fontWeight: selectedOptions[currentQuestion] === option.value ? 'bold' : 'normal',
                      boxShadow: selectedOptions[currentQuestion] === option.value ? '0 0 0 2px #0d6efd' : 'none',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onClick={() => handleOptionClick(option.value)}
                  >
                    <input
                      type="radio"
                      name={`quiz-option-${currentQuestion}`}
                      value={option.value}
                      checked={selectedOptions[currentQuestion] === option.value}
                      onChange={() => handleOptionClick(option.value)}
                      style={{ marginRight: '12px' }}
                    />
                    <span style={{ marginRight: '8px' }}>{option.label}.</span>
                    <span>{option.text}</span>
                  </label>
                ))}
              </div>
              <div className="mt-4 d-flex gap-3">
                <button
                  className="btn btn-secondary"
                  onClick={goToPrev}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>
                <button
                  className="btn btn-dark px-3"
                  onClick={goToNext}
                  disabled={currentQuestion === questions.length - 1}
                >
                  Next
                </button>
                <button
                  className="btn btn-success"
                  onClick={checkAnswers}
                  disabled={selectedOptions.includes(null)}
                >
                  Check Answers
                </button>
              </div>
              {showResults && (
                <div className="mt-4">
                  <h5>Results:</h5>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {questions.map((q, idx) => {
                      const isCorrect = selectedOptions[idx] === q.correct;
                      return (
                        <li key={idx} style={{ marginBottom: '8px' }}>
                          <span style={{ fontWeight: 'bold' }}>Q{idx + 1}:</span> {q.question}
                          <span style={{ marginLeft: '8px', color: isCorrect ? 'green' : 'red' }}>
                            {isCorrect ? 'Correct' : 'Wrong'}
                          </span>
                          <span style={{ marginLeft: '12px', color: '#0d6efd' }}>
                            Correct Answer: {q.correct}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <h5 className="mt-3">Score: {questions.filter((q, idx) => selectedOptions[idx] === q.correct).length} / {questions.length}</h5>
                </div>
              )}
            </div>
          </div>

          
          <div className="col-lg-4 col-md-5 col-sm-12 mt-5">
            <div className='bg-dark text-white p-3 rounded'>
              <h5>Total Attempted</h5>
              <div className="d-flex flex-wrap gap-2 mt-3">
                {questions.map((_, index) => (
                  <button
                    key={index}
                    className={`btn btn-sm ${selectedOptions[index] ? 'btn-primary' : 'btn-outline-light'}`}
                    onClick={() => goToQuestion(index)}
                    style={{ width: '40px' }}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuizPage;
