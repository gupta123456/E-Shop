import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card1 = (
    <Box sx = {{width:600 , display: "inline-flex", flexDirection: "row", flexWrap: "wrap"}}>
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
        <Box sx = {{color: 'error.main' }}> Total Price : ₹1000  </Box>
            
        </Typography>
    </CardContent>
  </React.Fragment>
  </Box>
);
const card2 = (
    <Box sx = {{width : 'auto' ,display: "inline-flex", flexDirection: "row", flexWrap: "wrap"}}>
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
        
    <Box sx={{ justifyContent : 'flex-start',display: "inline-flex", flexDirection: "row", maxWidth: 'auto',maxheight:'auto'}}>
            <Card variant="outlined" >{card1}</Card>
            <Card variant="outlined">{card2}</Card> 
    </Box>
    
    
   
  );
}