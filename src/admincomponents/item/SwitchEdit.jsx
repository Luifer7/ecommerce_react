import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const SwitchEdit = ({checked, handleCheked}) => {

    return ( 

        <FormControlLabel
        label={checked ? 'Habilitar edición' : 'Deshabilitar edición'}
        control={
        <Switch
        color="default"
        size="medium"
        checked={checked}
        onChange={handleCheked}
        inputProps={{ 'aria-label': 'controlled' }}
        />}
        >
        </FormControlLabel>
        
    )
}
 
export default SwitchEdit;