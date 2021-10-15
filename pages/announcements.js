import React from 'react'

import Layout from '../components/layout'
import Head from 'next/head'

import {Typography} from '@mui/material'

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
              
        </Layout>  
        </>
    )
}

export default Notifications
