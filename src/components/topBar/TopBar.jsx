import React from 'react'
import PropTypes from 'prop-types'

import { AppBar, Toolbar, Typography } from '@material-ui/core';

const TopBar = props => {
  const { title } = props;
  
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

TopBar.propTypes = {
  title: PropTypes.string
}

export default TopBar
