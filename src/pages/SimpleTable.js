import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, clients, email, number, status) {
  id += 1;
  return { id, name, clients, email, number, status };
}

const data = [
  createData('KFC', 159, 6.0, 24, 4.0),
  createData('OPTP', 237, 9.0, 37, 4.3),
  createData('Fresh corn', 262, 16.0, 24, 6.0),
  createData('Nafees', 305, 3.7, 67, 4.3),
  createData('Safron', 356, 16.0, 49, 3.9),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Companies Name </TableCell>
            <TableCell align="right">Cleient</TableCell>
            <TableCell align="right">Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.client}</TableCell>
              <TableCell align="right">{n.number}</TableCell>
              <TableCell align="right">{n.emial}</TableCell>
              <TableCell align="right">{n.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);