import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    card: {
      minWidth:'auto' ,
      boxShadow: '0px 10px 14px -8px #ccc',
      border: '1px solid #dcdcdc',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  
  export default function SimpleCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
            {props.children}
        </CardContent>
        
      </Card>
      
    );
  }