import React from 'react'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Create from '@material-ui/icons/Create';
import Save from '@material-ui/icons/Save';


const styles = {
  root: {
    flexGrow: 1,
    // maxWidth: 500,
  },
};

const NavigationTabs = props => {
  const { classes, value } = props;

  const paths = [
    '/dashboard',
    '/saved-items',
  ]

  const navigate = index => _ => props.history.push(paths[index])

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={props.onChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab icon={<Create />} label="FORMULÁRIO" onClick={navigate(0)} />
        <Tab icon={<Save />} label="DADOS SALVOS" onClick={navigate(1)} />
      </Tabs>
    </Paper>
  )
}

NavigationTabs.propTypes = {
  classes: PropTypes.object,
  value: PropTypes.number,
}

NavigationTabs.defaultProps = {
  classes: {},
  value: 0,
}

export default withStyles(styles)(withRouter(NavigationTabs))

