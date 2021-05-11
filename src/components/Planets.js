import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { Button, makeStyles } from '@material-ui/core';
import Search from './Search';

const fetchPlanets = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Planets = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanets] = useState([]);
  const [state, setState] = useState({
    count: undefined,
    next: true,
    previous: false,
    results: [],
  });
  let rows = createArray(planets);
  const classes = useStyles();

  useEffect(() => {
    fetchPlanets(page).then((response) => {
      const characters = response.results;
      setPlanets(characters);
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
          <Search />
        </div>
      </div>
    </>
  );
};

function createArray(planets) {
  return planets.map((planet, index) => {
    return {
      id: index,
      nombre: planet.name,
      clima: planet.climate,
      poblacion: planet.population,
    };
  });
}
export default Planets;