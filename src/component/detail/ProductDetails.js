import { Button, Chip, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect,useState } from "react";
import axios from 'axios';

export default function ProductDetails() {

  const [data,setData] = useState({});
  const id = sessionStorage.getItem('id');

  useEffect(() => {
    if (id) {
      getProductDetail();
    }
  }, [id]);

  function getProductDetail() {
    const token = sessionStorage.getItem('token');
    const SIGNIN_URL = `http://localhost:8080/api/products/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    try {
      axios.get(SIGNIN_URL, config).then((response) => {
        sessionStorage.setItem('productDetails',JSON.stringify(response.data));
        setData(response.data);
      });
    } catch (err) {
      console.log(err.response);
    }
  }

  function handleChange(event){
    sessionStorage.setItem('quantity',event.target.value);
  }

  return (
    <div style={{ margin: 0 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <img src={data.imageUrl} alt="product_image" height="250em" width="200em" style={{ marginRight: "40%" }} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4" gutterBottom>
            iPhone 12 <Chip label="Available Quantity: 148" style={{ background: '#3f51b5', color: "white" }} />
          </Typography>
          <Typography variant="p">
            Category: {data.category}
          </Typography> <br /><br />
          <Typography variant="p" fontSize="12px"><i>{data.description}</i></Typography><br /><br />
          <Typography variant="p" fontSize="22px" color="red"> {data.price} </Typography> <br /><br />
          <div style={{ width: "20em" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="quantity"
              label="Enter Quantity"
              name="quantity"
              autoComplete="quantity"
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div style={{ width: "8em" }}>
            <Button type="submit" fullWidth variant="contained" style={{ background: '#3f51b5' }} href='/placeOrder'>PLACE ORDER</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}