
const HeadTable = ({headDataModule, params}) => {

    
    return ( 
        <thead>
        <tr>
           {
            headDataModule.map((item, i)=> (
               item.tipo === 'hidden' 
               ? '' 
               :  <th key={i} className="align-end">{item.nombre}</th>
            ))
           }
                 <th>Acciones</th> 
        </tr>
      </thead>
     )
}
 
export default HeadTable;