import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import "./List_of_Chat.css";

export default function List_of_Chat() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [array_of_chat, setArray_of_chat] = React.useState([{
    id: 0, name: 'chat_0'
  },
  { id: 1, name: 'chat_1' },
  { id: 2, name: 'chat_2' }]);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="secondary mailbox folder">
        {array_of_chat.map((chat) =>
          <ListItemButton
            selected={selectedIndex === chat.id}
            onClick={(event) => handleListItemClick(event, chat.id)}
          >
            <ListItemText primary={chat.name} />
          </ListItemButton>)}
      </List>
    </Box>

  );
}
/*<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(event) => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Trash" />
            </ListItemButton>
            <ListItemButton
              selected={selectedIndex === 3}
              onClick={(event) => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Spam" />
            </ListItemButton>
          </List>
    </Box>*/