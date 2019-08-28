import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import letter from '../../assets/images/letter-black.svg';
import face from '../../assets/images/face.jpg';
import phone from '../../assets/images/phone.jpg';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));

export default function OutlinedTextFields(props) {
    const classes = useStyles();

    // const handleChange = name => event => {
    //     setValues({ ...values, [name]: event.target.value });
    // };

    return (
        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-name-input"
            placeholder="Nome"
            // label="Nome"
            className={classes.textField}
            type="text"
            name="nome"
            autoComplete="nome"
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"><img src={face} alt="face" /></InputAdornment>,
            }}
          />
          <TextField
            id="filled-email-input"
            placeholder="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"><img src={letter} alt="letter" /></InputAdornment>,
            }}
          />
          <TextField
           id="filled-phone-input"
           placeholder="Telefone"
           className={classes.textField}
           type="text"
           name="phone"
           autoComplete="phone"
           margin="normal"
           variant="outlined"
            InputProps={{
              startAdornment: <InputAdornment position="start"><img src={phone} alt="phone" /></InputAdornment>,
            }}
          />
        </form>
    );
}