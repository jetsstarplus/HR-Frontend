import React from 'react'
import Layout from '../components/layout'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import theme from '../src/theme';
import Head from 'next/head';

import TextField from '@mui/material/TextField';
import { Button} from '@mui/material';
import {styled} from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const Profile = () => {
    const detailStyle = {
        fontWeight: 600,
        fontSize: 13.5,
    }


const Input = styled('input')({
    display: 'none',
  });
    const [values, setValues] = React.useState({
        fullname: '',
        mailid: '',
        contactno: '',
        altcontactno: '',
        bankname:'',
        accountno:'',
        accountholdersname:'',
        upiid:'',
        ifsno:'',
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    const uploadStyle = {
        width:'70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 'auto',
        py: 2.3,
    }
    return (
        <>
         <Head>
            <title>Update Profile</title>
            <meta name="description" content="Update Your Profile" />
        </Head>
            <Layout>
                <Typography
                component = 'h1' variant="h5" color="text.primary" sx = {{
                    textTransform:'uppercase',
                    fontWeight:700,

                }}>
                    Profile
                </Typography>
                <Box sx = {{
                    justifyContent: 'space-between',
                    backgroundColor: theme.palette.secondary.main1,
                    display: 'flex',
                    flexDirection: 'row',
                    my: 1,
                    py: 1.5,
                    px: 5,
                }}>
                    <Typography sx = {detailStyle}>Joining Date: <Typography sx={{fontWeight: 500}}>10/2/2020</Typography></Typography>
                    <Typography sx= {detailStyle}>Employee ID: <Typography sx={{fontWeight: 500}}>38273873</Typography></Typography>
                    <Typography sx = {detailStyle}>Employment Type: <Typography sx={{fontWeight: 500}}>Internship</Typography></Typography>
                </Box>
                <Box>
                    <Box sx = {{my: 1}}>
                        <Divider textAlign="left">
                            <Typography sx={{fontWeight: 600, fontSize: 14}}>
                            personal details
                            </Typography>
                        </Divider>
                    </Box>

                    <Grid container component = 'personal' sx={{px: 5}}>
                       <Grid item xs={12} md={6}>
                            <TextField
                            label="Full Name"
                            id="fullname"
                            variant="filled"
                            sx={{ my: 1, width: '100%'}}
                            value={values.fullname}
                            onChange = {handleChange('fullname')}
                            
                            />
                            <TextField
                            label="Mail Id"
                            id="mailid"
                            sx={{ my: 1, width: '100%' }}
                            variant="filled"
                            value={values.mailid}
                            onChange = {handleChange('mailid')}
                            
                            />
                            <TextField
                            label="Contact Number"
                            id="contactno"
                            sx={{ my: 1, width: '100%' }}
                            variant="filled"
                            value={values.contactno}
                            onChange = {handleChange('contactno')}
                            
                            />
                            <TextField
                            label="Alternate Contact Number"
                            id="altcontactno"
                            sx={{ my: 1, width: '100%' }}
                            variant="filled"
                            value={values.altcontactno}
                            onChange = {handleChange('altcontactno')}                            
                            />
                        </Grid>
                        <Grid xs={12} md={6}>
                            
                            
                            <Box sx={{
                                width: '100%',
                            }}>
                                <Box sx = {uploadStyle}>
                                    <Typography sx={{
                                        py:1.3,
                                        fontSize: 14,
                                        color: theme.palette.text.secondary,
                                    }}>
                                        Profile Picture
                                    </Typography>
                                    <Box sx={{
                                        marginLeft: 'auto'
                                    }}>
                                        <label htmlFor="profile_photo">
                                            <Input accept="image/*" id="profile_photo" type="file" />
                                            <Button variant='outlined'>
                                                Upload File
                                            </Button>
                                        </label>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: '100%',
                            }}>
                                <Box sx = {uploadStyle}>
                                    <Typography sx={{
                                        py:1.3,
                                        fontSize: 14,
                                        color: theme.palette.text.secondary,
                                    }}>
                                        My NDA
                                    </Typography>
                                    <Box sx={{
                                        marginLeft: 'auto'
                                    }}>
                                        <label htmlFor="nda_file">
                                            <Input accept="document/*" id="nda_file" type="file" />
                                            <Button variant='outlined'>
                                                Upload file
                                            </Button>
                                        </label>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{
                                width: '100%',
                            }}>
                                <Box sx = {uploadStyle}>
                                    <Typography sx={{
                                        py:1.3,
                                        fontSize: 14,
                                        color: theme.palette.text.secondary,
                                    }}>
                                        My ID
                                    </Typography>
                                    
                                    <Box sx={{
                                        marginLeft: 'auto'
                                    }}>
                                        <label htmlFor="id_file">
                                            <Input accept="image/*" id="id_file" type="file" />
                                            <Button variant='outlined'>
                                                Upload file
                                            </Button>
                                        </label>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* Statutory details information */}
                    <Box sx={{my: 1}}>
                        <Divider textAlign="left">
                            <Typography sx={{fontWeight: 600, fontSize: 14}}>
                            statutory details
                            </Typography>
                        </Divider>
                    </Box>
                    <Grid container component="statutory" sx={{px:5}}>
                       <Grid  item xs={12} sm={12} md={6}>
                            <TextField
                            label="Bank Name"
                            id="bankname"
                            variant="filled"
                            sx={{ my: 1, width: '100%'}}
                            value={values.bankname}
                            onChange = {handleChange('bankname')}
                            
                            />
                            <TextField
                            label="Account Number"
                            id="accountno"
                            sx={{ my: 1, width: '100%' }}
                            variant="filled"
                            value={values.accountno}
                            onChange = {handleChange('accountno')}
                            
                            />
                            <TextField
                            label="IFSC Number"
                            id="ifscno"
                            sx={{ my: 1, width: '100%' }}
                            variant="filled"
                            value={values.ifscno}
                            onChange = {handleChange('ifscno')}
                            
                            />
                            
                        </Grid>
                        <Grid item xs={false} sm={false} md={1}></Grid>
                        <Grid item xs={12} sm={12} md={5} >                           
                            
                            <Box sx={{
                                width: '100%',
                            }}>
                                <TextField
                                    label="Account Holders Name"
                                    id="accountholdersname"
                                    sx={{ my: 1, width: '100%' }}
                                    variant="filled"
                                    value={values.accountholdersname}
                                    onChange = {handleChange('accountholdersname')}                            
                                    />
                            </Box>
                            <Box sx={{
                                width: '100%',
                            }}>                                    
                                <TextField
                                label="UPI ID"
                                id="upiid"
                                sx={{ my: 1, width: '100%' }}
                                variant="filled"
                                value={values.upiid}
                                onChange = {handleChange('upiid')}                            
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    {/* submit button */}
                    <Box sx = {{px: 5, display: 'flex', justifyContent: 'flex-end'}}>
                        <Button variant="contained" size='large'>
                            Update
                        </Button>
                    </Box>
                </Box>

            </Layout>
        </>
    )
}

export default Profile
