import React from 'react';
import { UserListResponse, Sex } from '../../../types'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface TableProps {
    dataSource: UserListResponse[] | undefined
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



export default (props:TableProps)=> {
  const classes = useStyles();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a table">
        <TableHead>
          <TableRow>
            <TableCell>UID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align='center'>Sex</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
              props.dataSource 
                ? props.dataSource.length > 0 
                    ? props.dataSource.map((row) => (
                        <TableRow key={row.uid}>
                          <TableCell component="th" scope="row">
                            {row.uid}
                          </TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell align='center'>
                              {
                                row.sex === Sex.women ? 'women' : row.sex === Sex.men ? 'men' : '-'
                              }
                          </TableCell>
                        </TableRow>
                      ))
                    : <TableRow>
                        <TableCell colSpan={3} align='center'>
                            no data
                        </TableCell>
                      </TableRow>
                : <TableRow>
                    <TableCell colSpan={3} align='center'>
                        loading...
                    </TableCell>
                  </TableRow> 

          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
