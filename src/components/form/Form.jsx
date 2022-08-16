import { useState, useEffect,useRef } from "react";
import './Form.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export const Form = ({ onSendMessage }) => {
    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSendMessage = (msg) => () => {

        onSendMessage(msg);
        setMessage('');
        inputRef.current?.focus();
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div className="form">
            <TextField
                style={{ margin: '20px' }}
                id="outlined-basic"
                required
                label="message"
                variant="outlined"
                placeholder="еnter your message"
                value={message}
                onChange={handleChange}
                inputRef={inputRef}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={handleSendMessage(message)}>
                Send
            </Button>
        </div>
    );
}