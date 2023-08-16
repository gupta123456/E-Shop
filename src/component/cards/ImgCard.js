import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const role = sessionStorage.getItem('role');

export default function MediaCard(props) {
  return (
    <Card>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image= {props.imageUrl}
        title="Addidas"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' style={{ background: '#3f51b5' }}>Buy</Button>
        {role === 'ADMIN' ? <EditIcon sx={{float:'right',fontSize:'small'}}/> : ''}
        {role === 'ADMIN' ?  <DeleteIcon sx={{fontSize:'small'}}/> : ''}
      </CardActions>
    </Card>
  );
}