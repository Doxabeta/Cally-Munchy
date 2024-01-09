import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { IoChatboxEllipsesSharp, IoClose } from 'react-icons/io5';
import './Chatbot.css';

const Chatbot = () => {
    const [showChatbot, setShowChatbot] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const chatContainerRef = useRef(null);

    const sendMessage = async () => {
        if (!input.trim()) {
            // Don't send empty messages
            return;
        }

        const newMessages = [...messages, { text: input, user: 'user' }];
        setMessages(newMessages);
        setInput('');

        try {
            const response = await axios.post('http://localhost:5000/api/chat', { message: input });
            const botResponse = response.data.response;
            setMessages([...newMessages, { text: botResponse, user: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleButtonClick = async (response) => {
        setMessages([...messages, { text: response, user: 'user' }]);
        // Simulate the bot's response after the button click
        try {
            const botResponse = await axios.post('http://localhost:5000/api/chat', { message: response });
            setMessages([...messages, { text: botResponse.data.response, user: 'bot' }]);
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    const closeChatbot = () => {
        setShowChatbot(false);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        // Scroll to the bottom of the chat container when messages change
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <>
            {showChatbot && (
                <div className="chatbot-container">
                    <div className="chat-header">
                        <span>Chatbot</span>
                        <button className="close-button" onClick={closeChatbot}>
                            <IoClose size={24} />
                        </button>
                    </div>
                    <div className="chat-messages" ref={chatContainerRef}>
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.user}`}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="button-container">
                        <button className="button" onClick={() => handleButtonClick('Reservation')}>
                            Reservation
                        </button>
                        <button className="button" onClick={() => handleButtonClick('About Us')}>
                            About Us
                        </button>
                        <button className="button" onClick={() => handleButtonClick('Help')}>
                            Help
                        </button>
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleInputKeyDown}
                        />
                        <button className="send-button" onClick={sendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            )}
            {!showChatbot && (
                <button className="toggle-button" onClick={toggleChatbot}>
                    <IoChatboxEllipsesSharp size={24} />
                </button>
            )}
        </>
    );
};

export default Chatbot;

