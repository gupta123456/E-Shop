import React,{useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl } from '@mui/base';
import axios from 'axios';

const defaultTheme = createTheme();

export default function AddAddress(props) {

  const [] = useState(getAddresses);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = sessionStorage.getItem('id');
    const data = new FormData(event.currentTarget);
    const formData = Object.fromEntries(data);
    formData.id= Math.random();
    formData.user= id
    userAddressRequest(formData);
  };

  const userAddressRequest = async(formData) => {
    const token = sessionStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const SIGNIN_URL = "http://localhost:8080/api/addresses";
    try{
      var response = await axios.get(SIGNIN_URL, formData,config);
      console.log(response.data);
    }catch(err){
      console.log(err.response);
    }
  }

  async function getAddresses() {
    const token = sessionStorage.getItem('token');
    const SIGNIN_URL = "http://localhost:8080/api/addresses";
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    try {
      var response = await axios.get(SIGNIN_URL, config);
      console.log(response)
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6" sx={{ padding: 5 }}>
            - OR -
          </Typography>
          <Typography component="h1" variant="h5">
            Add Address
          </Typography>
          <FormControl>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="contactNumber"
                  label="Contact Number"
                  type="number"
                  id="number"
                  autoComplete="contact-number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="street"
                  label="Street"
                  name="street"
                  autoComplete="street"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  autoComplete="city"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="State"
                  id="state"
                  autoComplete="state"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="landmark"
                  label="Landmark"
                  id="landmark"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="zipcode"
                  label="Zip Code"
                  type="number"
                  id="zipcode"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Address
            </Button>
          </Box>
          </FormControl>
        </Box>
      </Container>
    </ThemeProvider>
  );
}