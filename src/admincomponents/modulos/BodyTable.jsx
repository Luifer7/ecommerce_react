import TableBtnDetails from "./TableBtnDetails"

const TableData = ({item, headDataModule}) => {

   
    return ( 
      <tbody>
        <tr className="text-center" >
          
        {headDataModule.map((p, i)=> (
          p.tipo === 'hidden' 
          ? ''
          : <td key={i}>
          {
          item[p.nombre]
          }
        </td>
        ))}
          <TableBtnDetails item={item} />
        </tr>
        </tbody>
    )
}
 
export default TableData;