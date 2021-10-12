import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar'
import Copyright from './footer';

import { MainListItems} from '../listItems';

import theme from '../../src/theme'

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Layout({children}) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box open={open} sx ={{backgroundColor: theme.palette.secondary.main1, position: 'fixed', top:0, width: '100%', zIndex:2}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <Typography
              component="h1"
              variant="h6"
              color={theme.palette.secondary.supp}
              noWrap
              sx={{ flexGrow: 1, fontWeight: 800, fontSize: '2.5rem'}}
            >
              neyX
            </Typography>
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
                  mx: 2
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
                <List>{MainListItems}</List>
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
          <Container maxWidth="lg" sx={{ mt: 2, mb: 4, minHeight:'68vh',display: 'flex', flexDirection: 'column'}}>
            {children}
          </Container>
            <Copyright contact='neyx.in@example.com' number='83273747' />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

