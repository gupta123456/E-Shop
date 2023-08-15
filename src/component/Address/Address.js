import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/system/Unstable_Grid/Grid';
import { display, fontStyle } from '@mui/system';
import { SignalCellularConnectedNoInternet2BarOutlined } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();
const card1 = (
    <Box sx = {{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
  <React.Fragment>
    <CardContent sx = {{display: 'inline'}}>
      <Typography variant="h5" component="div">
        Shoes
      </Typography>
      
      <Typography variant="body2">
        <br></br>
        <Box sx = {{display: 'inline'}}>Quantity:</Box> 
        <Box sx = {{fontWeight: 'bold',display: 'inline'}}>1 </Box>
        
      </Typography>
      <Typography variant="body2">
        <br></br>
        <Box sx = {{display: 'inline'}}>Category:</Box> 
        <Box sx = {{fontWeight: 'bold',display: 'inline'}}> Footware </Box>
        
      </Typography>
      <Typography variant="body2" sx={{ fontStyle: 'italic'}} >
        <br></br>
        Description
        
      </Typography>
      <Typography variant="h6">
        <br></br>
        <Box sx = {{color: 'error.main' }}> Total Price: $1000  </Box>
            
        </Typography>
    </CardContent>
  </React.Fragment>
  </Box>
);
const card2 = (
    <Box sx = {{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
    <React.Fragment>
      <CardContent sx = {{display: 'inline'}}>
        <Typography variant="h5" component="div">
          Address details :
        </Typography>
        
        <Typography variant="body2">
          <br></br>
          Address name/title
        </Typography>
        <Typography variant="body2">
            <Box sx = {{display: 'inline'}}>Contact Number: </Box> 
            <Box sx = {{display: 'inline'}}> 9999999999 </Box>
          
        </Typography>
        <Typography variant="body2" >
            <Box sx = {{display: 'inline'}}> Street,</Box>
            <Box sx = {{display: 'inline'}}> city</Box>
            <br></br>
            <Box sx = {{display: 'inline'}}> State</Box>
            <br></br>
            <Box sx = {{display: 'inline'}}> Pincode</Box>
        </Typography>
        
      </CardContent>
    </React.Fragment>
    </Box>
  );
  
export default function Address() {
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
    <Box sx={{ minWidth: 275}}>
        <Grid container spacing={0}>
            <Grid xs={8}>
            <Card variant="outlined" >{card1}</Card>
            </Grid>
            <Grid xs={4}>
            <Card variant="outlined">{card2}</Card>
            </Grid>
            
        </Grid>
        
    </Box>
    </Box>
    </Container>
    </ThemeProvider>
  );
}