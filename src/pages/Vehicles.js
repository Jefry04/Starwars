import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { Button, makeStyles } from '@material-ui/core';
import Search from '../components/Search';
import fetchVehicles from '../utils/getData';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Vehicles = () => {
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState([]);
  const [state, setState] = useState({
    count: undefined,
    next: true,
    previous: false,
    results: [],
  });
  let rows = createArray(vehicles);
  const classes = useStyles();

  useEffect(() => {
    fetchVehicles('vehicles', page).then((response) => {
      const vehicle = response.results;
      setVehicles(vehicle);
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
          <Search path={'vehicles'} />
        </div>
      </div>
    </>
  );
};

function createArray(vehicles) {
  return vehicles.map((vehicle, index) => {
    return {
      id: index,
      nombre: vehicle.name,
      Modelo: vehicle.model,
      Capacidad: vehicle.passengers,
    };
  });
}
export default Vehicles;
