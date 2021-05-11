import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { Button, makeStyles } from '@material-ui/core';
import Search from './Search';

const fetchPeople = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
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

const People = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  const [state, setState] = useState({
    count: undefined,
    next: true,
    previous: false,
    results: [],
  });
  let rows = createArray(people);
  const classes = useStyles();

  useEffect(() => {
    fetchPeople(page).then((response) => {
      const characters = response.results;
      setPeople(characters);
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

function createArray(people) {
  return people.map((person, index) => {
    return {
      id: index,
      nombre: person.name,
      edad: person.birth_year,
      genero: person.gender,
    };
  });
}
export default People;
