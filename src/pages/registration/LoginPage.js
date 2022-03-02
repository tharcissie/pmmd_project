import React, { useState } from 'react'
import { Card, CardContent, Typography, Grid, TextField, InputAdornment, IconButton, Button, FormGroup } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const LoginPage = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  console.log(values)

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };


  return (
    <Grid container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      sx={{ mt: 6 }}>

      <Card sx={{ width: { xs: "100%", lg: "65%", md: "65%", sm: "100%" }, display: 'flex' }}>

        <Grid container>
          <Grid item xs={12} md={5} sx={{ backgroundColor: '#0096C7' }} container direction="row" alignItems="center">
            <CardContent sx={{ color: 'white' }}>
              <Typography variant="h3" sx={{ color: 'white' }}>
                PMMD
              </Typography >
              <Typography variant="h5">
                Performance Management and Monitoring Dashboard
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={12} md={7} > <CardContent sx={{ m: 6, mt: 3 }}>

            <Typography variant="h4">
              Login in PMMD
            </Typography>
            <Typography sx={{ mt: 2 }}>
              Welcome Back! Login with data that you entered during registration.
            </Typography>
            <FormGroup>
              <TextField
                sx={{ mt: 4 }}
                label="Email"
                id="email"
                type='email'
                value={values.email}
                onChange={handleChange('email')}
                InputProps={{
                  endAdornment: (<InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>),
                }}
                variant="standard"
              />
              <TextField
                sx={{ mt: 4 }}
                label="Password"
                id="password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                InputProps={{
                  endAdornment: (<InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>),
                }}

                variant="standard"
              />

              <Typography align='right' style={{ fontSize: '14px' }} sx={{ mt: 3 }}><a href='#'>Forgot password?</a></Typography>
              <Button sx={{ width: '100%', mt: 4, backgroundColor: "#0096C7"  }} variant="contained" >Login</Button>
            </FormGroup>
            <Typography align='center' sx={{ mt: 3, fontSize: '14px' }}>Don't have an account?<a href='/signup'>SignUp</a></Typography>

          </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Grid >
  )
}

export default LoginPage