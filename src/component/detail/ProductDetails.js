import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import image from "../../img/iphone.jpg";

export default function ProductDetails(){
  return (
    <div style={{margin: 0}}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
            <img src={image} alt="product_image" height="250em" width="200em" style={{marginRight:"40%"}} />
        </Grid>
        <Grid item xs={8}>
            <Typography variant="h4" gutterBottom>
                iPhone 12 <Chip label="Available Quantity: 148" style={{ background: '#3f51b5', color: "white" }} />
            </Typography>
            <Typography variant="p">
                Category: Electronics
            </Typography> <br/><br/>
            <Typography variant="p" fontSize="12px"><i>A14 Bionic Display, the fastest chip in a smartphone. An edge-to-edge OLED Display</i></Typography><br/><br/>
            <Typography variant="p" fontSize="22px" color="red"> ₹100000 </Typography> <br/><br/>
            <div style={{ width: "20em"}}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="quantity"
                    label="Enter Quantity"
                    name="quantity"
                    autoComplete="quantity"
                    autoFocus
                />
            </div>
            <div style={{ width: "8em"}}>
                <Button type="submit" fullWidth variant="contained" style={{ background: '#3f51b5' }}>PLACE ORDER</Button>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}