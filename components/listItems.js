import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import { AccountCircle, Announcement, CalendarToday, ExitToApp, LibraryBooks, TimeToLeave } from '@mui/icons-material';

import theme from '../src/theme'

import Link from 'next/link';
import ActiveLink from './ActiveLink';

const listTextStyle ={
  fontSize: 24,
  fontWeight: 800,
  
}

const LinkStyle = {
  ':hover':{
    bgcolor: theme.palette.primary.main,
  }
}

export const MainListItems = (
  <div>
    <style jsx>{`
      .nav-link {
        text-decoration: none;
      }
      .active{
        background-color: #292f45;
      }
    `}</style>
    <ActiveLink href='/' passHref activeClassName='active' sx={LinkStyle}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon color='secondary' sx={{fontSize:26,}}/>
          </ListItemIcon>
          <ListItemText primary="Home"  sx = {{fontWeight:600, fontSize:20}}/>
        </ListItem>
    </ActiveLink>
    <ActiveLink href = '/profile' passHref activeClassName='active'>
        <ListItem button sx = {{backgroundColor:'primary'}}>
            <ListItemIcon>
              <AccountCircle color='secondary' sx={{fontSize:26,}}/>
            </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
    </ActiveLink>
    <ActiveLink href = '/calendar' passHref activeClassName='active'>
        <ListItem button>
            <ListItemIcon sx={{backgroundColor: 'primary'}}>
              <CalendarToday color='secondary' sx={{fontSize:26,}}/>
            </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItem>
    </ActiveLink>
    <ActiveLink href='/apply-for-leave' passHref activeClassName='active'>
        <ListItem button>
          <ListItemIcon>
            <TimeToLeave color='secondary' sx={{fontSize:26,}}/>
          </ListItemIcon>
          <ListItemText primary="Apply For Leave" />
        </ListItem>
    </ActiveLink>
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
    <ActiveLink href = '/certificates' passHref activeClassName='active'>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon color='secondary' sx={{fontSize:26,}}/>
          </ListItemIcon>
          <ListItemText primary="Certificates" />
        </ListItem>
    </ActiveLink>
    <ActiveLink href="/announcements" passHref activeClassName='active'>
      <ListItem button>
        <ListItemIcon>
          <Announcement color='secondary' sx={{fontSize:26,}}/>
        </ListItemIcon>
        <ListItemText primary="Announcements" />
      </ListItem>
    </ActiveLink>
  </div>
);
