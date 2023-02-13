
const HeadTable = ({headDataModule}) => {

    
    return ( 
        <thead>
        <tr>
           {
            headDataModule.map((item, i)=> (
                item.nombre === 'acciones' ? '' 
                : <th key={i}>{item.nombre}</th>
            ))
           }
        </tr>
      </thead>
     )
}
 
export default HeadTable;