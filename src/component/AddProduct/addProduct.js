import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import PrimarySearchAppBar from '../navbar/Navbar';

// TODO remove, this demo shouldn't need to reset the theme.
async function addProductRequest(addProductRequestData){
  const ADD_PRODUCT_URL = "http://localhost:8080/api/products";
  console.log("Product Request Data :: ");
  console.log(addProductRequestData);
  /*
  const config = {
    headers: { 'Content-Type' : 'application/json' }
  };
  */
  try{
    var response = await axios({
      method: 'post',
      url: ADD_PRODUCT_URL,
      data: addProductRequestData
    });
    console.log(response.data);
  }catch(err){
    console.log(err.response.data);
  }
}

const defaultTheme = createTheme();

export default function AddProduct() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var addProductRequestData = {
      "id": "12345",
      "name": data.get("name"),
      "category": data.get("category"),
      "price": parseInt(data.get("price")),
      "description": data.get("productDescription"),
      "manufacturer": data.get("manufacturer"),
      "availableItems": parseInt(data.get("availableItems")),
      "imageUrl": data.get("imageUrl")
    };
    console.log(addProductRequestData);
    addProductRequest(addProductRequestData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <PrimarySearchAppBar />
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
          <Typography component="h1" variant="h5">
            Add Product
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="category"
              label="category"
              name="category"
              autoComplete="category"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="manufacturer"
              label="Manufacturer"
              name="manufacturer"
              autoComplete="manufacturer"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="availableItems"
              label="Available Items"
              id="availableItems"
              autoComplete="availableItems"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              id="price"
              autoComplete="price"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="imageURL"
              label="Image URL"
              id="imageURL"
              autoComplete="imageURL"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="productDescription"
              label="Product Description"
              id="productDescription"
              autoComplete="productDescription"
            />            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ background: '#3f51b5' }}
            >
              Save Product
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}