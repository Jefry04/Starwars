import { React, useState } from 'react';
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
  Modal,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  body: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function DataTable({ data = [] }) {
  const classes = useStyles();
  const columns = data[0] && Object.keys(data[0]);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState([]);
  const [modalStyle] = useState(getModalStyle);

  const handleOpen = (e) => {
    setInfo(e);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div style={modalStyle} className={classes.body}>
      <h2>{info.nombre}</h2>
      <p>Inforamcion adicional</p>
      <div align="right">
        <button type="button" onClick={handleClose}>
          CERRAR
        </button>
      </div>
    </div>
  );

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
                  <TableCell align="center" key={uuidv4()}>
                    MAS INFO
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column, index) => (
                      <TableCell align="right" key={index + 1}>
                        {row[column]}
                      </TableCell>
                    ))}
                    <TableCell align="center">
                      <button type="button" onClick={() => handleOpen(row)}>
                        mas info
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {open && (
            <Modal open={open} onClose={handleClose}>
              {body}
            </Modal>
          )}
        </Grid>
      </Grid>
    </>
  );
}
