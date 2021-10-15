import React from 'react'

import Layout from '../components/layout'
import Head from 'next/head'

import {Typography, Box, Divider} from '@mui/material'

import theme from '../src/theme'

const Notifications = () => {
    return (
        <>
        <Head>
            <title>Announcements</title>
        </Head>
          <Layout>
          <Typography
                component = 'h1' variant="h5" color="text.primary" sx = {{
                    textTransform:'uppercase',
                    fontWeight:700,
                }}>
                    Announcements
            </Typography>
            <Box sx = {{display: 'flex', flexDirection:'column', gap:1, justifyContent: 'left', py:1}}>
                <Box sx = {{width: '100%', height: 'auto', minHeight: 100, borderRadius:2, p:2}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Announcement one </Typography>
                        <Typography color='text.tertiary' sx={{fontSize: 12}}>12-3-2020 12:00AM</Typography>
                    </Box>
                    <Divider sx={{py: .5,}}></Divider>
                    <Box sx={{py:1}}>
                        <Typography sx={{fontSize: 12}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx = {{width: '100%', height: 'auto', minHeight: 100, borderRadius:2, p:2}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Announcement one </Typography>
                        <Typography color='text.tertiary' sx={{fontSize: 12}}>12-3-2020 12:00AM</Typography>
                    </Box>
                    <Divider sx={{py: .5,}}></Divider>
                    <Box sx={{py:1}}>
                        <Typography sx={{fontSize: 12}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx = {{width: '100%', height: 'auto', minHeight: 100, borderRadius:2, p:2}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Announcement one </Typography>
                        <Typography color='text.tertiary' sx={{fontSize: 12}}>12-3-2020 12:00AM</Typography>
                    </Box>
                    <Divider sx={{py: .5,}}></Divider>
                    <Box sx={{py:1}}>
                        <Typography sx={{fontSize: 12}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx = {{width: '100%', height: 'auto', minHeight: 100, borderRadius:2, p:2}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Announcement one </Typography>
                        <Typography color='text.tertiary' sx={{fontSize: 12}}>12-3-2020 12:00AM</Typography>
                    </Box>
                    <Divider sx={{py: .5,}}></Divider>
                    <Box sx={{py:1}}>
                        <Typography sx={{fontSize: 12}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                    </Box>
                </Box>
                <Box sx = {{width: '100%', height: 'auto', minHeight: 100, borderRadius:2, p:2}}>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography color='text.primary' sx = {{fontWeight: 600,fontSize: 14, }}>Announcement one </Typography>
                        <Typography color='text.tertiary' sx={{fontSize: 12}}>12-3-2020 12:00AM</Typography>
                    </Box>
                    <Divider sx={{py: .5,}}></Divider>
                    <Box sx={{py:1}}>
                        <Typography sx={{fontSize: 12}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Typography>
                    </Box>
                </Box>
                
            </Box>
        </Layout>  
        </>
    )
}

export default Notifications
