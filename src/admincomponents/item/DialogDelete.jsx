import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCrud } from '../../adminhooks/useCrud';

const  DialogDelete = ({location}) => {

const {deleteDocument} = useCrud(location)
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
        deleteDocument(location.id)
        setOpen(false)
        Navigate(`/admin/${location.modulo}`)
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
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
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