import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    
    button: {
        margin: theme.spacing(1),
        textTransform: 'none',
        backgroundColor: '#fff',
        color: '#006aff',
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
        <div>
            <Button variant="contained" className={classes.button}>
                {props.children}
            </Button>
        </div>
    );
}

