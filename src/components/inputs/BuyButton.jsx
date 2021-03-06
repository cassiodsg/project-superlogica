import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    
    button: {
        margin: theme.spacing(1),
        textTransform: 'none',
        backgroundColor: '#006aff',
        color: 'white',
        '&:hover': {
            backgroundColor: '#6a34ce',
            color: 'white',
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

