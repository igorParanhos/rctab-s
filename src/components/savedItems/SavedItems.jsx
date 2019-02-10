import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
});

const fmtDate = (dateStr, type) => {
  const date = new Date(dateStr)
  const _2digits = num => ("0" + num).slice(-2)

  const day = _2digits(date.getUTCDate())
  const month = _2digits(date.getUTCMonth() + 1)
  const year = date.getUTCFullYear()
  const hour = _2digits(date.getHours())
  const minutes = _2digits(date.getMinutes())

  if (type === 'date')
    return `${day}/${month}/${year} `
  if (type === 'time')
    return `${hour}:${minutes} `
  if (!type)
    return `${day}/${month}/${year} - ${hour}:${minutes} `
}


function SavedItems(props) {
  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Tipo Veículo</TableCell>
            <TableCell align="right">Data - Hora</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.savedItems.map(row => (
            <TableRow key={row.uuid}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{fmtDate(row.createdAt, 'date')}<b>{fmtDate(row.createdAt, 'time')}</b></TableCell>
              <TableCell align="right">
                <IconButton className={classes.button} onClick={_ => props.deleteRegister(row.uuid)} aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SavedItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SavedItems);