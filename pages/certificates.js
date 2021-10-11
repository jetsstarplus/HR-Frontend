import { Typography, Grid, Box, Button } from '@mui/material'
import React from 'react'
import Head from 'next/head'

import Layout from '../components/layout'

const Certificates = () => {
    return (
        <Layout>
            <Head>
                <title>Certificates</title>
                <meta name="description" content="See Certificates, Apply for Certificates" />
            </Head>
            <Typography
                component = 'h1' variant="h5" color="text.primary" sx = {{
                    textTransform:'uppercase',
                    fontWeight:700,

                }}>
                    Apply for Certificate
            </Typography>
            <Grid container my={3} sx={{px:5}}>
                <Grid item md={6} xs={12} my={1}>
                   <Box sx={{display: 'flex', columnGap:9}}>
                       <Typography variant="h6" color="text.primary" sx={{fontSize: 14, fontWeight:700}} >Job Id:</Typography> 
                       <Typography> xxxxxxxxxxxxxxxxx </Typography>
                    </Box> 
                    <Box>
                        <Typography sx={{fontSize: 12, width: '85%'}} py={2}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item my={1} md={6} xs={12} sx={{display: 'flex', flexDirection: 'column', rowGap:4}}>
                    <Box sx={{display: 'flex', justifyContent:'space-between', paddingRight:14}}>
                        <Typography color="text.primary" sx={{fontSize: 14, fontWeight:700}}>Starting Date:</Typography>
                        <Typography>10-02-2020</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent:'space-between', paddingRight:14}}>
                        <Typography color="text.primary" sx={{fontSize: 14, fontWeight:700}}>Completion Date:</Typography>
                        <Typography>10-02-2020</Typography>
                    </Box>
                    <Box sx={{display: 'flex', justifyContent:'space-between', paddingRight: 14}}>
                        <Typography color="text.primary" sx={{fontSize: 14, fontWeight:700}}>Status Date:</Typography>
                        <Typography>10-02-2020</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{display: 'flex', justifyContent:'flex-end', paddingRight:14, paddingTop:1}}>
                        <Button variant="contained">
                            Submit Request
                        </Button>
                </Box>
        </Layout>
    )
}

export default Certificates
