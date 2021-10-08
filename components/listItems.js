import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import { AccountCircle, Announcement, CalendarToday, ExitToApp, LibraryBooks, TimeToLeave } from '@mui/icons-material';

import theme from '../src/theme'

import Link from 'next/link'

const listTextStyle ={
  fontSize: 24,
  fontWeight: 800,
  
}

export const mainListItems = (
  <div>
    <Link href='/'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon color='secondary' sx={{fontSize:26,}}/>
        </ListItemIcon>
        <ListItemText primary="Dashboard"  sx = {{fontWeight:600, fontSize:20}}/>
      </ListItem>
    </Link>
    <Link href = '/profile'>
      <ListItem button sx = {{backgroundColor:'primary'}}>
          <ListItemIcon>
            <AccountCircle color='secondary' sx={{fontSize:26,}}/>
          </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
    <Link href = '/profile'>
      <ListItem button>
          <ListItemIcon sx={{backgroundColor: 'primary'}}>
            <CalendarToday color='secondary' sx={{fontSize:26,}}/>
          </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItem>
    </Link>
    <Link href='/apply-for-leave'>
      <ListItem button>
        <ListItemIcon>
          <TimeToLeave color='secondary' sx={{fontSize:26,}}/>
        </ListItemIcon>
        <ListItemText primary="Apply For Leave" />
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <LibraryBooks color='secondary' sx={{fontSize:26,}}/>
      </ListItemIcon>
      <ListItemText primary="Study Material" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon color='secondary' sx={{fontSize:26,}} />
      </ListItemIcon>
      <ListItemText primary="Team Tree" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon color='secondary' sx={{fontSize:26,}}/>
      </ListItemIcon>
      <ListItemText primary="Certificates" />
    </ListItem>
    
    <ListItem button>
      <ListItemIcon>
        <Announcement color='secondary' sx={{fontSize:26,}}/>
      </ListItemIcon>
      <ListItemText primary="Announcements" />
    </ListItem>
  </div>
);
