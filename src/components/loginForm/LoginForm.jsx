import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { TimePicker } from 'material-ui-pickers';
import { DatePicker } from 'material-ui-pickers';
import { Icon, Button } from '@material-ui/core';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },  
  button: {
    height: theme.spacing.unit * 6
    // margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

const LoginForm = props => {
  const { classes } = props
  
  return (
    <div className={classes.margin}>

      <TextField
        id="standard-name"
        label="Nome"
        margin="normal"
        fullWidth
      />

      <TextField
        id="standard-name"
        label="Rodovia"
        margin="normal"
        fullWidth
      />

      <TextField
        id="standard-name"
        label="Trecho"
        margin="normal"
        fullWidth
      />

      <TextField
        id="standard-name"
        label="SubTrecho"
        margin="normal"
        fullWidth
      />

      <TextField
        id="standard-name"
        label="Posto"
        margin="normal"
        fullWidth
      />

      <TextField
        id="standard-name"
        label="Localização"
        margin="normal"
        fullWidth
      />

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker 
          margin="normal"
          label="Data"
          fullWidth
        />

        <TimePicker 
          margin="normal"
          label="Hora Inicial"
          fullWidth
        />

        <TimePicker 
          margin="normal"
          label="Hora Final"
          fullWidth
        />
      </MuiPickersUtilsProvider>

      <Button variant="contained" color="primary" className={classes.button} fullWidth>
        SALVAR
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
        
    </div>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object,
}

export default withStyles(styles)(LoginForm)
