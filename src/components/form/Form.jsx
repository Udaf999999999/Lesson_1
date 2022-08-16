import { useState } from "react";
import './Form.css';

export const Form = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSendMessage = (msg) => () => {
        onSendMessage(msg);
        setMessage('');
    }

    return (
        <div className="form">
            <input 
                type="text" 
                className="input" 
                placeholder="еnter your message"
                value={message} 
                onChange={handleChange} 
            />
            <button 
                type="button" 
                className="button"
                onClick={handleSendMessage(message)}
            >
                send message
            </button>
        </div>
    );
}