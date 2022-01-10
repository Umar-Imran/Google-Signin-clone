import React , {useState} from 'react'
import "../components/email.css";
import Card from '@mui/material/Card';
import { Grid, TextField, Typography ,Button } from '@mui/material';
import  Password from '../components/password';

const Email = () => {
    const [state, setstate] = useState(false)
    const passwordpage =()=>{
    setstate(true);
    }
    if(state){
        return <Password/>
    }
    return (
        <div className='login'>
            <Card variant="outlined">
                <Grid container rowSpacing={2}  className='grid'>
                    <Grid item md={12} sm={12} className='Item'>
                    <img className='img' src='Google-logo.png' alt='picture'/>
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                    <Typography variant='h5'>Sign in</Typography>
                    </Grid> 
                    <Grid item md={12} sm={12} className='Item'>
                    <Typography variant='h7'>Use your Google Account</Typography>
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                    <TextField required fullWidth id="email" label="Email or phone" variant="outlined" />
                    </Grid>
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>
                    <a href='#'>Forgot email?</a>
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>                    
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>                    
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>
                    <Typography style={{fontSize:'14px' , color:'#5f6368'}}>Not your computer? Use Guest mode to sign in privately.</Typography>
                    <a href='#'>Learn more</a>
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>                    
                    <Grid item md={12} sm={12} className='Item'>
                    </Grid>                    
                    <Grid item md={6} sm={6} >
                    <a href='#'>Create account</a>
                    </Grid>
                    <Grid item md={3} sm={3} >
                    </Grid>
                    <Grid item md={3} sm={3} >
                    <Button variant="contained" onClick={passwordpage}>Next</Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    )
}

export default Email
