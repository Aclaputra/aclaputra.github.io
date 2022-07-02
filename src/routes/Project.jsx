import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <div className="list__project">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/sc_codingtopia.PNG"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectName}
            </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              {props.stacksUsed}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.dateBuilt}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href="">
            Demo
          </Button>
          <Button size="small" color="primary" href="">
            Source Code
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}