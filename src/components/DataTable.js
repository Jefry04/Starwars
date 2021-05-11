import { React } from 'react';
import {
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from '@material-ui/core';
import SingleModal from './SingleModal';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DataTable({ data = [] }) {
  const classes = useStyles();
  const columns = data[0] && Object.keys(data[0]);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
              <TableHead>
                <TableRow>
                  {data[0] &&
                    columns.map((tableHead, index) => (
                      <TableCell align="right" key={index}>
                        {tableHead}
                      </TableCell>
                    ))}
                  <TableCell align="right">MAS INFO</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column, index) => (
                      <>
                        <TableCell align="right" key={index}>
                          {row[column]}
                        </TableCell>
                      </>
                    ))}
                    <TableCell align="right">
                      <SingleModal data={row} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          s
        </Grid>
      </Grid>
    </>
  );
}
