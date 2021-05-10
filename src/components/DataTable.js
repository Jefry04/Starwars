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
    minWidth: 650,
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function DataTable({ people }) {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">NAME</TableCell>
                  <TableCell align="right">AGE</TableCell>
                  <TableCell align="right">GENDER</TableCell>
                  <TableCell align="right">MORE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {people.map((person, index) => (
                  <TableRow key={index}>
                    <TableCell align="right">{index + 1}</TableCell>
                    <TableCell align="right">{person.name}</TableCell>
                    <TableCell align="right">{person.birth_year}</TableCell>
                    <TableCell align="right">{person.gender}</TableCell>
                    <TableCell align="right">
                      <SingleModal name={person.name} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

/* import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Birth year', width: 130 },
  { field: 'gender', headerName: 'gender', width: 90 },
];

export default function DataTable({ people }) {
  let rows = createArray(people);

  const characters = rows.map((row) => {
    const { id, name, age, gender } = row;
    return (
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{gender}</td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>
          {characters}
        </tbody>
      </table>
    </>
    ///OTRA FORMA DE HACERLO   <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onPageChange={() => console.log('hola')}
      />
    // HASTA ACA</div>
  );
}

function createArray(people) {
  return people.map((person, index) => {
    return {
      id: index,
      name: person.name,
      age: person.birth_year,
      gender: person.gender,
    };
  });
}
 */
