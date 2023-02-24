
const Filtros = ({handleQueryNombre, handleQueryCategoria}) => {

    return ( 
    <div className="row m-auto mt-3 px-1" >

        <div className="col-12 col-sm-6 mb-2" >
        <input 
        onChange={handleQueryNombre} 
        type="text" 
        placeholder="filtra por nombre" 
        className="form-control form-control-sm"
        />
        </div>

        <div className="col-12 col-sm-6">
        <select  onChange={handleQueryCategoria}  
        className="form-select form-select-sm" 
        aria-label=".form-select-sm example">
        <option value='' >Filtra por categoria</option>
        <option value="telefonos">telefonos</option>
        <option value="computadores">computadores</option>
        <option value="portatiles">portatiles</option>
        </select>
        </div>
           
    </div>
    )
}
 
export default Filtros;