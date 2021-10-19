import React from 'react';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import Grid from '@mui/material/Grid';
import {Typography, Box} from '@mui/material';

import Head from 'next/head';
import { isWeekend } from 'date-fns';

import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import events from '../data/occurences';
import moment from 'moment';


import * as dates from '../utils/dates';

import Layout from '../components/layout';
import theme from '../src/theme';

let allViews = Object.keys(Views).map(k => Views[k])


const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');

const months = [0, 1, 2, 3, 4 ,5 ,6, 7, 8, 9, 10, 11]
const localizer = momentLocalizer(moment);

const Calendar2 = () => {
    
    return (
        <>
            <Head>
                <title>calendar</title>
            </Head>
           <Layout>
           <Typography
                component = 'h1' variant="h5" color="text.primary" sx = {{
                    textTransform:'uppercase',
                    fontWeight:700,

                }}>
                    Calendar
            </Typography>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid container>
                    {months.map(month=>{
                        return(
                        <Grid item xs={12} md={4} sm={6}>
                            {/* <CalendarPicker date={new Date().setMonth(month)} shouldDisableDate={isWeekend} onchange={null}/> */}
                        </Grid>
                        )})
                    }  
                    
                    </Grid>
                </LocalizationProvider>
                <Box sx={{height: 600}}>
                <Calendar
                    events={events}
                    views={allViews}
                    step={60}
                    showMultiDayTimes
                    max={dates.add(dates.endOf(new Date(), 'day'), -1, 'hours')}
                    defaultDate={new Date()}
                    localizer={localizer}
                    />
                </Box>
        </Layout> 
        </>
    )
}

export default Calendar2
