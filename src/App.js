
import { useEffect, useState } from 'react';
import { Form } from './components/form/Form';
import { Messages } from './components/messages/Messages';

import { AUTHOR, BOT } from './constants';
import './App.css';
import List_of_Chat from './components/List_of_chat/List_of_Chat';

let timer;

function App() {

    const [messageList, setMessageList] = useState([]);

    useEffect(() => {

        if (messageList[messageList.length - 1]?.author === AUTHOR) {
            clearTimeout(timer);

            timer = setTimeout(() => {
                setMessageList((prevList) => (
                    [
                        ...prevList,
                        {
                            author: BOT,
                            text: 'I\'m the bot. Can I help you ?',
                            id: prevList.length
                        }
                    ]
                ));
            }, 3000);
        }

        return () => { clearTimeout(timer); }
    }, [messageList]);

    const handleSendMessage = (msg) => {
        setMessageList((prevList) => (
            [
                ...prevList,
                {
                    author: AUTHOR,
                    text: msg,
                    id: prevList.length
                }
            ]
        ));
    }

    return (
        <div className="app">
            <List_of_Chat />
            <div className='MessageBox' >
                <Messages messageList={messageList} />
                <Form onSendMessage={handleSendMessage} />
            </div>
        </div>
    );
}

export default App;
