import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Shoes from "../../img/shoes.jpg";

export default function MediaCard() {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image= {Shoes}
        title="Addidas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Addidas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try the all new Addidas sports shoes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}