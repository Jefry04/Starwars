import { React, useState } from 'react';
import { makeStyles, Modal } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: '16px 32px 24px',
    top: '50%',
    left: '50%',
    transform: 'translate (-50%, -50%)',
  },
}));

export default function SingleModal({ name }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const body = (
    <div className={classes.modal}>
      <h2>{name}</h2>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      <div align="right">
        <button type="button" onClick={handleClose}>
          CERRAR
        </button>
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={handleOpen}>
        MAS INFO
      </button>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </>
  );
}
