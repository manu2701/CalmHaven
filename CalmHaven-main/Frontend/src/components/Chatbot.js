import React, { useState } from 'react';
import './Chatbot.css'; // Import the CSS file for styling
import chatbot_icon from '../assets/icons/chatbot.png'

const Chatbot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            {/* Chat button */}
            <div className="chat-popup">
                <button className="chat-button" onClick={toggleChat}>
                    <img src={chatbot_icon} alt='chatbot icon' className='chat-bot-icon' />
                </button>
            </div>

            {/* Chat window */}
            {isChatOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        Chat with us!
                        <button className="close-button" onClick={toggleChat}>✖</button>
                    </div>
                    <div className="chat-body">
                        <p>Welcome! How can I assist you today?</p>
                        {/* Additional chat content can be added here */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;