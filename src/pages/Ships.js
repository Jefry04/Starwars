import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { Button, makeStyles } from '@material-ui/core';
import Search from '../components/Search';
import fetchShips from '../utils/getData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Ships = () => {
  const [page, setPage] = useState(1);
  const [ships, setShips] = useState([]);
  const [state, setState] = useState({
    count: undefined,
    next: true,
    previous: false,
    results: [],
  });
  let rows = createArray(ships);
  const classes = useStyles();

  useEffect(() => {
    fetchShips('starships', page).then((response) => {
      const ship = response.results;
      setShips(ship);
      setState(response);
    });
  }, [page]);

  const hasNext = !!state.next;
  const hasPrevious = !!state.previous;
  return (
    <>
      <DataTable data={rows} />
      <div align="right">
        {hasPrevious && (
          <Button
            className={classes.root}
            onClick={() => setPage(page - 1)}
            color="primary"
          >
            Back
          </Button>
        )}
        {hasNext && (
          <Button
            className={classes.root}
            onClick={() => setPage(page + 1)}
            color="primary"
          >
            Next
          </Button>
        )}
        <div align="left">
          <Search path={'starships'} />
        </div>
      </div>
    </>
  );
};

function createArray(ships) {
  return ships.map((ship, index) => {
    return {
      id: index,
      nombre: ship.name,
      Modelo: ship.model,
      Capacidad: ship.passengers,
    };
  });
}
export default Ships;
