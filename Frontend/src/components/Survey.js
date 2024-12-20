import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Survey.css';
import Footer from './Footer';

function Survey() {
    const navigate = useNavigate();
    const [answers, setAnswers] = useState({
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: ''
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const questions = [
        {
            id: 'q1',
            text: 'How are you feeling today?',
            options: ['Very Good', 'Good', 'Neutral', 'Not Good', 'Very Bad']
        },
        {
            id: 'q2',
            text: 'How much sleep did you get last night?',
            options: ['No sleep', '1-3 hours', '3-5 hours', '5-7 hours', '7+ hours']
        },
        {
            id: 'q3',
            text: 'On a scale of 1-10, how stressed do you feel?',
            options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        {
            id: 'q4',
            text: 'Have you experienced any triggers today?',
            options: ['Yes', 'No', 'Not Sure']
        },
        {
            id: 'q5',
            text: 'Would you like to talk to someone today?',
            options: ['Yes', 'No', 'Maybe Later']
        }
    ];

    const handleOptionChange = (questionId, value) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: value
        }));
    };

    const mapAnswersToMetrics = () => {
        // Convert feeling to stress level modifier
        const feelingToStressModifier = {
            'Very Good': -2,
            'Good': -1,
            'Neutral': 0,
            'Not Good': 1,
            'Very Bad': 2
        };

        // Convert sleep hours to quality score
        const sleepToQuality = {
            'No sleep': 1,
            '1-3 hours': 3,
            '3-5 hours': 5,
            '5-7 hours': 7,
            '7+ hours': 9
        };

        // Base stress level from question 3
        let stressLevel = parseInt(answers.q3);
        
        // Modify stress level based on feeling
        stressLevel += feelingToStressModifier[answers.q1] || 0;
        
        // Ensure stress level stays within 1-10 range
        stressLevel = Math.min(Math.max(stressLevel, 1), 10);

        return {
            stressLevel,
            sleepQuality: sleepToQuality[answers.q2] || 5,
            hasTriggers: answers.q4 === 'Yes',
            needsSupport: answers.q5 === 'Yes',
            answers: answers // Include original answers
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!isFormValid) {
            setError('Please answer all questions before submitting.');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
                return;
            }

            const metrics = mapAnswersToMetrics();
            console.log('Submitting metrics:', metrics);

            const response = await fetch('http://localhost:8080/api/todos/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(metrics)
            });

            const data = await response.json();
            console.log('Server response:', data);

            if (!response.ok) {
                if (response.status === 401) {
                    console.log('Token expired, redirecting to login...');
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    navigate('/login');
                    return;
                }
                throw new Error(data.error || 'Failed to submit survey');
            }

            // Clear form and navigate to todo list
            setAnswers({
                q1: '',
                q2: '',
                q3: '',
                q4: '',
                q5: ''
            });
            
            console.log('Survey submitted successfully, navigating to todo list...');
            navigate('/', { replace: true });
        } catch (error) {
            console.error('Survey submission error:', error);
            setError(error.message || 'Failed to submit survey. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const isFormValid = Object.values(answers).every(answer => answer !== '');

    return (
        <>
            <div className="survey-container">
                <div className="survey-header">
                    <h2>Daily Wellness Check</h2>
                    <p>Help us understand how you're doing today</p>
                    {error && <div className="error-message">{error}</div>}
                </div>

                <form onSubmit={handleSubmit} className="survey-form">
                    {questions.map((question) => (
                        <div key={question.id} className="question-container">
                            <h3>{question.text}</h3>
                            <div className="options-container">
                                {question.options.map((option) => (
                                    <label key={option} className="option-label">
                                        <input
                                            type="radio"
                                            name={question.id}
                                            value={option}
                                            checked={answers[question.id] === option}
                                            onChange={() => handleOptionChange(question.id, option)}
                                            className="option-input"
                                            required
                                        />
                                        <span className="option-text">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button 
                        type="submit" 
                        className="submit-button"
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default Survey;