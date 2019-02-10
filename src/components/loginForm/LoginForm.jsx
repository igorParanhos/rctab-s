import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom'

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
  const { classes, onChange, onDateChange, onTimeChange } = props

  const {
    name,
    roadway,
    segment,
    subsegment,
    post,
    address,
    date,
    startTime,
    endTime
  } = props.loginForm
  
  return (
    <div className={classes.margin}>

      <TextField
        id="standard-name"
        label="Nome"
        margin="normal"
        fullWidth
        name="name"
        value={name}
        onChange={onChange}
      />

      <TextField
        id="standard-name"
        label="Rodovia"
        margin="normal"
        fullWidth
        name="roadway"
        value={roadway}
        onChange={onChange}
      />

      <TextField
        id="standard-name"
        label="Trecho"
        margin="normal"
        fullWidth
        name="segment"
        value={segment}
        onChange={onChange}
      />

      <TextField
        id="standard-name"
        label="SubTrecho"
        margin="normal"
        fullWidth
        name="subsegment"
        value={subsegment}
        onChange={onChange}
      />

      <TextField
        id="standard-name"
        label="Posto"
        margin="normal"
        fullWidth
        name="post"
        value={post}
        onChange={onChange}
      />

      <TextField
        id="standard-name"
        label="Localização"
        margin="normal"
        fullWidth
        name="address"
        value={address}
        onChange={onChange}
      />

      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker 
          margin="normal"
          label="Data"
          fullWidth
          name="date"
          value={date}
          onChange={onDateChange('date')}
        />

        <TimePicker 
          margin="normal"
          label="Hora Inicial"
          fullWidth
          name="startTime"
          value={startTime}
          onChange={onTimeChange('startTime')}
        />

        <TimePicker 
          margin="normal"
          label="Hora Final"
          fullWidth
          name="endTime"
          value={endTime}
          onChange={onTimeChange('endTime')}
        />
      </MuiPickersUtilsProvider>

      <Link to="/dashboard">
        <Button variant="contained" color="primary" className={classes.button} fullWidth>
          SALVAR
          {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </Link>
        
    </div>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func
}

export default withStyles(styles)(LoginForm)
