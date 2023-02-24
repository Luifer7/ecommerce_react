import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const  DialogDelete = ({location, item, deleteDocument}) => {

const Navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = (respuesta) => {
    if (respuesta === 'cancelar') {
         setOpen(false)
    }
    if (respuesta === 'confirmar') {
        deleteDocument(item)
        setOpen(false)
        Navigate(`/admin/${location.modulo}/${location.icon}`)
    }
  }

  return (
    <div>
      <Button variant="contained" color="error" size="small" onClick={handleClickOpen}>
        Eliminar
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
         <strong className='text-danger'> Borrando</strong> {location.item} <i className={location.icon}></i>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" className='text-dark fw-bold'>
           Se perdefran todos los datos de est@ {location.modulo}, estas segur@?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose('cancelar')}>Cancelar</Button>
          <Button onClick={() => handleClose('confirmar')} autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogDelete