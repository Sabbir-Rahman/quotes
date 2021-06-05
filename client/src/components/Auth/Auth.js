import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './styles'
import Input from './input'


const Auth = () => {
    const classes = useStyles();  
    //declaring as a state because need to show rhe password with click
    const [showPassword, setShowPassowrd] = useState(false)

    //toggling
    const handleShowPassword = () => setShowPassowrd((prevShowPassword) => !prevShowPassword)

    const isSignUp = false

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            //only if it is signUp then show something
                            isSignUp && (
                                <> 
                                   <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                   <Input name="lastName" label="Last Name" handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword? "text" : "password"} handleShowPassword={handleShowPassword}/>
                    
                        { isSignUp && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                </form>
            </Paper>
        </Container>
    )
}


export default Auth