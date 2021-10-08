import React from 'react'
import Layout from '../components/layout'
import { Typography, Box, Divider, Grid,Button,
    FormControl, FormLabel, TextField,
     RadioGroup, FormControlLabel, Radio} from '@mui/material'
import { DateRangePicker } from 'react-date-range';

import { addDays } from 'date-fns';
import {useState} from 'react'
import theme from '../src/theme'

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const applyForLeave = () => {

    const [value, setValue] = useState();
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ]);

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    return (
        <Layout>
            <Typography
                component = 'h1' variant="h5" color="text.primary" sx = {{
                    textTransform:'uppercase',
                    fontWeight:700,

                }}>
                    Apply for leave
            </Typography>

            <Grid container component = 'main' sx = {{my: 1, px:5}}>

                <Grid item md={9}>
                    <FormControl component="fieldset" >
                        <FormLabel component="legend">
                        <Typography color='text.primary' sx = {{
                            fontWeight: 600,
                            fontSize: 14,
                            
                        }}>                            
                            Type of Leave
                        </Typography></FormLabel>
                        <RadioGroup value={value} onChange={handleChange} row aria-label="gender" name="row-radio-buttons-group" sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            my: 1,
                            
                        }}>
                            <Box  sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    flexWrap: false,
                                    py: 2,
                                    my: 1,
                                    width: '47%',
                                    backgroundColor: theme.palette.secondary.main,
                                    px: 1,
                                    borderRadius: 3,
                                    mx: 1,
                                }}>
                                <FormControlLabel value="female" control={<Radio />} label="" />
                                <Box>
                                    <Typography variant='h3' color="text.primary" sx={{
                                        fontWeight: 600,
                                        fontSize: 14,
                                    }}>
                                        Leave Type
                                    </Typography>
                                    <Typography sx={{
                                        fontSize: 11
                                    }}>
                                        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Mi pellentesque varius adipiscing elit. Mi pellentesque varius
                                        nec venenatis. Tempus orci ultrices.
                                    </Typography>
                                </Box>
                            </Box>
                        
                        </RadioGroup>
                    </FormControl>
                    {/* Date range picker */}
                    <Box sx = {{my:2}}>
                        <Typography color='text.primary' sx = {{
                            fontWeight: 600,
                            fontSize: 14,

                        }}>
                            Date Range
                        </Typography>

                        <DateRangePicker
                            onChange={item => setState([item.selection])}
                            showSelectionPreview={false}
                            moveRangeOnFirstSelection={false}
                            months={2}
                            ranges={state}
                            direction="horizontal"
                            />
                    </Box>

                    {/* Text input for further comment */}
                    <Box sx={{
                        my:3,
                        width: '100%'
                    }}>
                        <Typography color='text.primary' sx = {{
                            fontWeight: 600,
                            fontSize: 14,
                            
                        }}>
                            Note To Management
                        </Typography>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Message to Management"
                            multiline
                            maxRows={4}
                            value={value}
                            variant = 'filled'
                            onChange={handleChange}
                            sx={{
                                width: '100%',
                                height: 20,
                            }}
                            />
                    </Box>
                </Grid>
                <Grid item md={3} sx={{display: 'flex', flexDirection:'column', justifyContent:'flex-end', paddingLeft:3, paddingTop:1}}>
                        <Button variant="contained">
                            Submit Request
                        </Button>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default applyForLeave
