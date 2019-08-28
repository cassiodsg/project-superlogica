import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    
    button: {
        width: '13.1rem',
        margin: '5px 0 0 0',
        textTransform: 'none',
        backgroundColor: '#006aff',
       
        color: '#fff',
        '&:hover': {
            backgroundColor: '#006aff',
            color: '#fff',
        },
    },
    input: {
      display: 'none',
    },
}));


export default function ContainedButtons(props) {
    const classes = useStyles();
    
    return (
        <div className="btn">
            <Button variant="contained" className={classes.button}>
                {props.children}
            </Button>
        </div>
    );
}

