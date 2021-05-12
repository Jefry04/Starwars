import React from 'react';
import DataTable from '../components/DataTable';
import { Button, makeStyles } from '@material-ui/core';
import Search from '../components/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const PageView = ({ state, path, rows, page, setPage }) => {
  const hasNext = !!state.next;
  const hasPrevious = !!state.previous;
  const classes = useStyles();

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
          <Search path={path} />
        </div>
      </div>
    </>
  );
};

export default PageView;
