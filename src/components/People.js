import React, { useState, useEffect } from 'react';
import DataTable from './DataTable';
import { Button, makeStyles } from '@material-ui/core';

const fetchPeople = async (page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const data = await response.json();
    return data;
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
      <DataTable people={people} />
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
      </div>
    </>
  );
};

export default People;
