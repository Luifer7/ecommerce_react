import HeadTable from "./HeadTable";
import BodyTable from "./BodyTable";

const TableModule = ({headDataModule, bodyDataModule, params}) => {
    return ( 

      headDataModule[0] ?
       <table className="table table-striped table-bordered table-sm text-center table-hover">

        <HeadTable headDataModule={headDataModule} params={params} />
       
          {
            bodyDataModule.map((item, i)=> (
            <BodyTable key={i} item={item} headDataModule={headDataModule}/>
            ))
          }               
        
       </table>
      : <div className="text-center text-dark h3">¡No has agregado {params.modulo}!</div>
     )
}
 
export default TableModule