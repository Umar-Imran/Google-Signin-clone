import React from 'react'
import "../components/email.css";
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Grid, TextField, Typography, Button, Checkbox } from '@mui/material';

const Password = () => {

    const [country, setCountry] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

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
            <div className='footer'>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label" style={{ fontSize: '12px', color: 'black' }}>English (USA)</InputLabel>
                    <Select
                        disableUnderline
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={country}
                        onChange={handleChange}
                        label="Country"
                    >
                        <MenuItem value={1}>English (United States)</MenuItem>
                        <MenuItem value={2}>English (United States)</MenuItem>
                        <MenuItem value={3}>English (United States)</MenuItem>
                    </Select>
                </FormControl>

                <div className='footer2'>
                    <a href='#' className='footer1'>Help</a>
                    <a href='#' className='footer1'>Privavy</a>
                    <a href='#' className='footer1'>Terms</a>
                </div>

            </div>

            
        </div>
    )
}

export default Password
