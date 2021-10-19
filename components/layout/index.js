import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar'
import Copyright from './footer';

import {css, jsx} from '@emotion/styled'

import Image from 'next/image'
import Link from 'next/link'

import { MainListItems} from '../listItems';

import theme from '../../src/theme'

const drawerWidth = 240;

export default function Layout({children}) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box open={open} sx ={{backgroundColor: theme.palette.secondary.main1, position: 'fixed', top:0, width: '100%', zIndex:10}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
              maxHeight: '100',
              overflowY: 'hidden',
            }}
          >
            <Box
              noWrap
              sx={{ flexGrow: 1, maxHeight: 50, alignItems: 'center'}}
            >
              
              <Box sx={{top:-45, left: -25, position: 'absolute'}}>
                <Link href = '/'>
                  <a>
                    <Image
                      src='/logo.svg'
                      alt="NeyX Logo"
                      width={150}
                      height={150}                
                      // blurDataURL="data:..." automatically provided
                      // placeholder="blur" // Optional blur-up while loading
                    />
                    
                  </a>
                </Link>
              </Box>
            </Box>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Typography
                component='p'
                variant="p"
                color="inherit"
                noWrap
                sx={{
                  px: .8,
                  fontSize: 14
                }}>
                username
              </Typography>
            <Box>              
              <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/50x50/" />
            </Box>
          </Toolbar>
        </Box>
        <Box sx={{
            paddingTop:'63px',
            backgroundColor: theme.palette.primaryLighter.main,
            color: theme.palette.secondary.main1,
            fontWeight: '600',
            flexGrow: 0,
        }}>
            <Box sx={{position: 'relative', height: '100%'}}>
                <Box sx = {{
                    height: '100%',
                    width:60, 
                    position: 'absolute',
                    top: 0,
                    backgroundColor: theme.palette.primary.main
                }}></Box>
                <List>
                  {MainListItems}
                  </List>
            </Box>

        </Box>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[50]
                : theme.palette.grey[400],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4, minHeight:'67.7vh',display: 'flex', flexDirection: 'column'}}>
            {children}
          </Container>
            <Copyright contact='neyx.in@example.com' number='83273747' />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

