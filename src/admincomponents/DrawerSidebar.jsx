import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ToggleButton } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import AdminSidebar from './AdminSidebar';


export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };


  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ToggleButton  onClick={toggleDrawer(anchor, true)} value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >

           <AdminSidebar/>
          
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}