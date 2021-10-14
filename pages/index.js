import * as React from 'react';
import {useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import Head from 'next/head'

import Layout from '../components/layout'
import theme from '../src/theme'
import { Divider, Box, Avatar, Button, TableContainer, TableRow, 
  Table, TableCell, TableBody, TableHead, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';


import { Image,  Work, BeachAccess} from '@mui/icons-material';
// Date time picker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

function DashboardContent() {

  const [myDate, changeMyDate] = useState(new Date())

  const selectDate = (e) =>{
    changeMyDate(e.target.value)
  }

  const flexStyle = {
    display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'
  }


function createData(name, calories, fat, carbs, protein) {
  return { name, calories};
}

const rows = [
  createData('Frozen yoghurt','7 october 2020'),
  createData('Ice cream sandwich','7 october 2020'),
  createData('Eclair', '7 october 2020'),
  createData('Cupcake','7 october 2020'),
  createData('Gingerbread', '7 october 2020'),
];

  const cardStyling = {
    backgroundColor: 'white', 
    height: 270, 
    py: 1, 
    px: 2,
    borderRadius: 1,
    boxShadow: '0px 1px 4px 1px rgba(0, 0, 0, .1)',
    my: 1,
    width: 330,
  }

  return (
    
          <Layout>
            <Head>
              <title>Dashboard</title>
            </Head>
            <Box sx={flexStyle}>
              <Box sx={cardStyling}>
                <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Birth Days </Typography>
                <Divider sx={{py: .5,}}></Divider>
                <Box sx={{py: 1.5,display: 'flex', flexWrap: 'no-wrap', flexGap: 2}}>
                  <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random/80x80/" sx={{width:50, height:50}}/>
                  <Box sx={{px: 2}}>
                    <Box sx={{display: 'flex', flexWrap: 'no-wrap'}}>
                      <Typography sx={{fontSize: 13, color: theme.palette.text.tertiary}}>
                        9336 -
                      </Typography>
                      <Typography sx={{fontSize: 13, fontWeight: 600, color: theme.palette.text}}>
                          Pankaj Sharma
                      </Typography>
                     </Box>
                     <Box>
                       <Typography sx={{fontSize: 12, color: theme.palette.text.tertiary}}>
                         Trainee-DevOps-AWS-L1.1
                       </Typography>
                       <Typography sx={{fontSize: 12, color: theme.palette.text.tertiary}}>
                         Noida
                       </Typography>
                     </Box>
                  </Box>
                </Box>
              </Box>

              <Box sx={cardStyling}>
                <TableContainer sx={{maxHeight: 250}} >
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableCell colSpan={2} color='text.primary' sx={{fontSize: 14, fontWeight: 700}}>Upcoming Holidays</TableCell>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  </TableContainer>
              </Box>

              <Box sx={cardStyling}>
                <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Leave Report</Typography>
                <Divider sx={{py: .5,}}></Divider>
                <List sx={{ width: '100%', maxHeight:220, overflowY:'scroll',}} dense={true}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Image />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Casual Leave " secondary="Available 1 Day(s) " />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Work />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Loss Of Pay" secondary="Available 0 Day(s) " />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccess />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Optional Holidays" secondary="Available 1 Day(s) " />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccess />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Present" secondary="Available 1 Day(s) " />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccess />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Short Leave" secondary="Available 1 Day(s) " />
                </ListItem>
              </List>
              </Box>

            </Box>

            {/* The next layout */}
            <Box sx={flexStyle} my={2.4}>
              <Box sx = {cardStyling}>
                <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Attendance </Typography>
                <Divider sx={{py: .5,}}></Divider>
                <Box sx={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', alignContent: 'center', py: 4}}>
                    <Typography sx={{fontSize: 35, fontWeight: 600}}>
                      00.00 Hrs
                    </Typography>
                    <Typography sx={{fontSize: 14, color: theme.palette.text.tertiary, marginBottom: 3}}>
                      10th Oct 2021
                    </Typography>
                    <Button variant="contained">
                        CHECKIN
                    </Button>
                </Box>
              </Box>
                <Calendar
                  date={myDate}
                  onChange={selectDate}
                /><Calendar
                  date={myDate}
                  onChange={selectDate}
                />
            </Box>
          </Layout>
        
  );
}



export default function Dashboard() {
  return <DashboardContent />;
}