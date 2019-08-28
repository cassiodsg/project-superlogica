import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import FormButton from '../inputs/FormButton'
import Inputs from '../inputs/Inputs'
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      minWidth:'auto' ,
      boxShadow: '0px 10px 14px -8px #1b7ed1',
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
  
  export default function SimpleCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardContent>
            <div className="form-title">
                <p>Preencha o formulário e<br/> receba um kit exclusivo</p>
            </div>
            <Inputs></Inputs>
            <FormButton>Enviar</FormButton>
        </CardContent>
        
      </Card>
    );
  }