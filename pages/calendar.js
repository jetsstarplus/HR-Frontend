import React from 'react';
import {Typography, Box} from '@mui/material';
import {useState} from 'react'

import Head from 'next/head';
import { isWeekend } from 'date-fns';

import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import events from '../data/occurences';
import moment from 'moment';


import * as dates from '../utils/dates';

import Layout from '../components/layout';
import theme from '../src/theme';
import RenderModal from '../components/CalendarModal'

let allViews = Object.keys(Views).map(k => Views[k])
const localizer = momentLocalizer(moment);

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


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
                
            <Box sx={{height: 600}}>
                <Calendar
                events={events}
                views={allViews}
                step={60}
                showMultiDayTimes
                max={dates.add(dates.endOf(new Date(), 'day'), -1, 'hours')}
                defaultDate={new Date()}
                localizer={localizer}
                onSelectEvent={RenderModal}
                onSelectSlot={RenderModal}
                />
            </Box>
        </Layout> 
        
        </>
    )
}


export default Calendar2
