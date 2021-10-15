import React from 'react'

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import MonthPicker from '@mui/lab/MonthPicker';
import Grid from '@mui/material/Grid';
import {Typography} from '@mui/material'

import Head from 'next/head'
import { isWeekend } from 'date-fns';

import Layout from '../components/layout'
import theme from '../src/theme'

const minDate = new Date('2020-01-01T00:00:00.000');
const maxDate = new Date('2034-01-01T00:00:00.000');



const Calendar = () => {
    const [date, setDate] = React.useState(new Date());
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
                    <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <CalendarPicker date={date} shouldDisableDate={isWeekend} onChange={(newDate) => setDate(newDate)} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <MonthPicker
                        date={date}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={(newDate) => setDate(newDate)}
                        sx={{
                            backgroundColor: theme.palette.primary.main, 
                            p: .5,
                            borderRadius: 1
                        }}
                        />
                    </Grid>
                    
                    </Grid>
                </LocalizationProvider>
        </Layout> 
        </>
    )
}

export default Calendar
