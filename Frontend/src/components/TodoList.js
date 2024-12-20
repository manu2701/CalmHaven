import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoList.css';
import Footer from './Footer';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        fetchTodos();
    }, [navigate]);

    const fetchTodos = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Please login again');
            }

            const response = await fetch('http://localhost:8080/api/todos', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to load your tasks');
            }

            const data = await response.json();
            console.log('Fetched todos:', data);
            setTodos(data);
            setError(null);
        } catch (error) {
            console.error('Error fetching todos:', error);
            setError('Failed to load your tasks. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleRetry = () => {
        setLoading(true);
        setError(null);
        fetchTodos();
    };

    const handleToggleTodo = async (todoId) => {
        try {
            const token = localStorage.getItem('token');
            const todo = todos.find(t => t._id === todoId);
            
            const response = await fetch(`http://localhost:8080/api/todos/${todoId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update task');
            }

            setTodos(todos.map(todo => 
                todo._id === todoId 
                    ? { ...todo, completed: !todo.completed }
                    : todo
            ));
        } catch (error) {
            console.error('Error updating todo:', error);
            setError('Failed to update task. Please try again.');
        }
    };

    const getCategoryColor = (category) => {
        switch (category.toLowerCase()) {
            case 'wellness':
                return '#4ECDC4';
            case 'meditation':
                return '#FF6B6B';
            case 'exercise':
                return '#45B7D1';
            case 'social':
                return '#96CEB4';
            default:
                return '#6c757d';
        }
    };

    const getPriorityLabel = (priority) => {
        switch (priority.toLowerCase()) {
            case 'high':
                return '⚡ High';
            case 'medium':
                return '◉ Medium';
            case 'low':
                return '○ Low';
            default:
                return priority;
        }
    };

    const formatDueTime = (dueDate) => {
        const date = new Date(dueDate);
        return date.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });
    };

    if (loading) {
        return (
            <div className="todo-container loading">
                <div className="loading-spinner"></div>
                <p>Loading your tasks...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="todo-container error">
                <p className="error-message">{error}</p>
                <button onClick={handleRetry} className="retry-button">
                    Try Again
                </button>
            </div>
        );
    }

    if (todos.length === 0) {
        return (
            <div className="todo-container empty">
                <h2>No Tasks Yet</h2>
                <p>Take the daily survey to get personalized tasks!</p>
                <button onClick={() => navigate('/survey')} className="survey-button">
                    Take Survey
                </button>
            </div>
        );
    }

    return (
        <>
            <div className="todo-container">
                <h2 className="todo-header">Your Daily Tasks</h2>
                
                <div className="todos-list">
                    {todos.map(todo => (
                        <div key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                            <label className="todo-label">
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggleTodo(todo._id)}
                                    className="todo-checkbox"
                                />
                                <div className="todo-content">
                                    <span className="todo-title">{todo.title}</span>
                                    <span className="todo-description">{todo.description}</span>
                                    <div className="todo-meta">
                                        <span 
                                            className="category-badge"
                                            style={{ backgroundColor: getCategoryColor(todo.category) }}
                                        >
                                            {todo.category}
                                        </span>
                                        <span className="priority-badge">
                                            {getPriorityLabel(todo.priority)}
                                        </span>
                                        <span className="due-time">
                                            Due by {formatDueTime(todo.dueDate)}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TodoList;
