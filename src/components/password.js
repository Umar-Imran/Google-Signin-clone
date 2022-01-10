import React from 'react'
import "../components/email.css";
import Card from '@mui/material/Card';
import { Grid, TextField, Typography, Button, Checkbox } from '@mui/material';
import { Password } from '@mui/icons-material';

const Email = () => {
    return (
        <div className='login'>
            <Card variant="outlined">
                <Grid container rowSpacing={2} className='grid'>
                    <Grid item md={12} sm={12} className='Item'>
                        <img className='img' src='Google-logo.png' alt='picture' />
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                        <Typography variant='h5'>Your Name</Typography>
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                        <Card variant='outlined' sx={{ borderRadius: 16, padding: 0.5 }}>sample@gmail.com</Card>
                    </Grid>
                    <Grid item md={12} sm={12}>
                        <Typography style={{ fontSize: '14px' }}>To continue, first verify that it's you</Typography>
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                        <TextField fullWidth type="password" id="outlined-basic" label="Enter your password" variant="outlined" />
                    </Grid>
                    <Grid item md={12} sm={12} >
                        <Checkbox />
                        Show password
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>
                    <Grid item md={6} sm={6} >
                        <a href='#'>Forgot password?</a>
                    </Grid>
                    <Grid item md={3} sm={3} >
                    </Grid>
                    <Grid item md={3} sm={3} >
                        <Button variant="contained">Next</Button>
                    </Grid>


                </Grid>
            </Card>
        </div>
    )
}

export default Email
