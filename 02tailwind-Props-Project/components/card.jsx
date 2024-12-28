import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Card({img,title="hello",imgName="Name",graph="Lorem ipsum dolor, sit amet consectetur adipisicing elit."}) {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 180 }}
        image={img}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {imgName}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {graph}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Card;
