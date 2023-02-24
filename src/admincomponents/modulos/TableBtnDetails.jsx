import { useNavigate, useParams } from "react-router-dom"

const TableBtnDetails = ({item}) => {
    
    const Navigate = useNavigate()
    const location = useParams()

    const handleItem = (item) => {
      if (item) {
       Navigate(`/admin/${location.modulo}/${location.icon}/${item.nombre}/${item.id}`)        
      }
    }
   
    return ( 
        <td>
        <button onClick={() => handleItem(item)} type="button"
        className="btn btn-sm btn-outline-info">detalles</button>
      </td>
     )
}
 
export default TableBtnDetails