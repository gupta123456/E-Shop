import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PrimarySearchAppBar from '../navbar/Navbar';


const defaultTheme = createTheme();

export default function AddProduct() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data);
    var addProductRequest = {
      "id": "12345",
      "name": data.get('Name'),
      "category": data.get('category'),
      "price": data.get('price'),
      "description": data.get('description'),
      "manufacturer": data.get('manufacturer'),
      "availableItems": data.get('availableItems'),
      "imageUrl": data.get('image')
    };
    console.log(addProductRequest);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <PrimarySearchAppBar/>
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select...</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select..."
                  >
                    <MenuItem value="Apparel">Apparel</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Footware">Footwear</MenuItem>
                    <MenuItem value="Personal Care">Personal Care</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="manufacture"
                  label="Manufacture"
                  name="manufacture"
                  autoComplete="manufacture"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="items"
                  label="Available Items"
                  name="items"
                  autoComplete="items"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="price"
                  label="Price"
                  id="price"
                  autoComplete="price"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="image"
                  label="Image URL"
                  id="image"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="description"
                  label="Product Description"
                  id="description"
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
        </Box>
      </Container>
    </ThemeProvider>
  );
}