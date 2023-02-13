import TableBtnDetails from "./TableBtnDetails"

const TableData = ({item, headDataModule}) => {

    const handleClass = (elemento) => {
      if (elemento[0] === 'acciones') {
        return 'd-none'
      }
      if (elemento[0] === 'id') {
        return 'text-start p-0'
      }
      else {
        return 'text-center p-0'
      }
    }



    return ( 
          
        <tr>
          
        {headDataModule.map((p, i)=> (
        <td key={i} className={handleClass([p.nombre])}>
          {item[p.nombre]}
        </td>
        ))}
          <TableBtnDetails item={item} />
        </tr>
    )
}
 
export default TableData;