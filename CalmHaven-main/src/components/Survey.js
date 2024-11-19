import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Survey.css'; // Optional for styling
import surveylogo from '../assets/logo/logo_color2.png';

const Survey = () => {
    const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
  });

  const questions = [
    {
      question: "Do you have any dietary restrictions or preferences?",
      options: [
        "Vegan",
        "Vegetarian",
        "Eggitarian",
        "Non-Vegetarian",
      ],
      id: "q1",
    },
    {
      question: "How many hours of sleep do you typically get per night?",
      options: [
        "1-3 hours",
        "3-5 hours",
        "No sleep",
      ],
      id: "q2",
    },
    {
      question: "What is your current stress level on a scale of 1-10?",
      input: true,
      id: "q3",
    },
  ];

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      q3: value,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Submit the form or handle final actions here
    console.log('Survey Submitted:', answers);
    navigate("/");
  };

  return (
    <div className="survey-container">
      <header className="survey-header">
        <img src={surveylogo} alt="Survey Logo" className="survey-logo" />
        <p>CALMHAVEN</p>
        <h1 className="survey-title">Take the Survey to Get an Activity List</h1>
      </header>

      <div className="survey-body">
        {questions[currentQuestion] && (
          <div className="question-container">
            <p className="question">{questions[currentQuestion].question}</p>

            {questions[currentQuestion].options ? (
              <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleOptionChange(questions[currentQuestion].id, option)}
                    disabled={answers[questions[currentQuestion].id] !== ''}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <input
                type="number"
                value={answers.q3 || ''}
                onChange={handleInputChange}
                min="1"
                max="10"
                className="input-field"
                placeholder="Enter a number between 1 and 10"
              />
            )}

            {currentQuestion < questions.length - 1 ? (
              <button
                onClick={handleNextQuestion}
                className="next-button"
                disabled={!answers[questions[currentQuestion].id]}
              >
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} className="submit-button">
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Survey;