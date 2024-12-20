import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css';
import chatbot_icon from '../assets/icons/chatbot.png';

const API_BASE_URL = 'http://localhost:8080/api';

const Chatbot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRateLimited, setIsRateLimited] = useState(false);
    const messagesEndRef = useRef(null);
    const sessionId = useRef(Date.now().toString());

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
        if (!isChatOpen && messages.length === 0) {
            setMessages([{
                type: 'bot',
                content: "Welcome to CalmHaven! I'm here to support you on your journey. How can I assist you today?"
            }]);
        }
    };

    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim() || isRateLimited) return;

        const userMessage = inputMessage.trim();
        setInputMessage('');
        
        // Add user message to chat
        setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch(`${API_BASE_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage,
                    sessionId: sessionId.current
                }),
            });

            const data = await response.json();
            
            if (response.ok) {
                setMessages(prev => [...prev, { type: 'bot', content: data.response }]);
            } else if (response.status === 429) {
                // Rate limit hit
                setIsRateLimited(true);
                const retryAfter = data.retryAfter || 60; // Default to 60 seconds
                
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: data.error || "Rate limit exceeded. Please wait a moment before sending another message."
                }]);

                // Reset rate limit after the specified time
                setTimeout(() => {
                    setIsRateLimited(false);
                }, retryAfter * 1000);
            } else {
                throw new Error(data.error || 'Failed to get response');
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                type: 'bot',
                content: "I apologize, but I'm having trouble responding right now. Please try again later."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <div className="chat-popup">
                <button className="chat-button" onClick={toggleChat}>
                    <img src={chatbot_icon} alt="chatbot icon" className="chat-bot-icon" />
                </button>
            </div>

            {isChatOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        Chat with CalmHaven Assistant
                        <button className="close-button" onClick={toggleChat}>✖</button>
                    </div>
                    <div className="chat-body">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.type}`}>
                                <div className="message-content">{message.content}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="message bot">
                                <div className="message-content typing-indicator">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <form className="chat-input" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={handleInputChange}
                            placeholder={isRateLimited ? "Please wait before sending another message..." : "Type your message..."}
                            disabled={isLoading || isRateLimited}
                        />
                        <button 
                            type="submit" 
                            disabled={isLoading || isRateLimited || !inputMessage.trim()}
                            title={isRateLimited ? "Please wait before sending another message" : ""}
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;