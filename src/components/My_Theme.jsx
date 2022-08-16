import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AUTHOR, BOT } from './../constants';
import { useEffect, useState } from 'react';
import { Messages } from './messages/Messages';
import List_of_Chat from './List_of_chat/List_of_Chat';
import { Form } from './form/Form';
import "./My_Theme.css";

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

let timer;

function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);



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
        <Box
            sx={{
                display: 'flex',
                flexDirection: "column",
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >

            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode} mode
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <div className="app">
                <List_of_Chat />
                <div className='MessageBox' >
                    <Messages messageList={messageList} />
                    <Form onSendMessage={handleSendMessage} />
                </div>
            </div>

        </Box>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <MyApp />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
