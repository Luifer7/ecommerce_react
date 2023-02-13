import HeadTable from "./HeadTable";
import TableData from "./TableData";

const TableModule = ({headDataModule, bodyDataModule}) => {
    return ( 
       <table className="table" >
        <HeadTable headDataModule={headDataModule}/>
        <tbody>
          {
            bodyDataModule.map((item, i)=> (
            <TableData key={i} item={item} headDataModule={headDataModule}/>
            ))
          }        
                  
        </tbody>
       </table>
     )
}
 
export default TableModule;