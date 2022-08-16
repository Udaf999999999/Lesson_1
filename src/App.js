
import { useEffect, useState } from 'react';
import { Form } from './components/form/Form';
import { Messages } from './components/messages/Messages';

import { AUTHOR, BOT } from './constants';
import './App.css';
import List_of_Chat from './components/List_of_chat/List_of_Chat';
import ToggleColorMode from './components/My_Theme';

let timer;

function App() {


    return (
        <div>
            <ToggleColorMode />

            
        </div>
    );
}

export default App;
