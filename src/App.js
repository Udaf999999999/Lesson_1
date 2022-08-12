import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [messageList, setmessageList] = useState([]);
  const [value, setValue] = useState('');


  const handleClick = (event) => {
    setmessageList([...messageList, { author: "author1", text: value, date: new Date }]);
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (messageList.length !== 0 && messageList[messageList.length - 1].author != "robot1") {
      setTimeout(() => {
        setmessageList([...messageList, { author: "robot1", text: messageList[messageList.length - 1].author + " send message.", date: new Date }])
      }, 1500);

    }
  }, [messageList]);


  return (
    <div>
      <span>message: </span>
      <input type="text" value={value} onChange={handleChange} />
      <button className="btn" onClick={handleClick}>Send Message</button>

      {messageList.map((element) => (
        <div key={element.author + element.date.getTime()}>
          {element.author + " (" + element.date.toTimeString().split(' ')[0] + "): " + element.text}
        </div>))
      }
    </div>
  )
}

export default App;
