import TableBtnDetails from "./TableBtnDetails"

const TableData = ({item, headDataModule}) => {

  
    return ( 
      <tbody>
        <tr className="text-center" >
          
        {headDataModule.map((p, i)=> (
          p.tipo === 'hidden' 
          ? ''
          : <td key={i} style={{wordBreak: 'break-word'}}>
          
          {
            p.nombre != 'imagen' 
            ? p.nombre === 'comentarios' ? `${item[p.nombre].slice(0, 30)}...` : item[p.nombre]
            : <img src={item[p.nombre]} width='35' height='35' className="rounded-circle" alt="no disponible" />
          }

        </td>
        ))}
          <TableBtnDetails item={item} />
        
        </tr>
        </tbody>
    )
}
 
export default TableData;