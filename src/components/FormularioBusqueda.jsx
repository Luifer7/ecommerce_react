
const FormularioBusqueda = () => {
    return(
        <form>
            <div className="row">
                <div className="form-group col-md-6 mt-1">
                    <input type="text" className="form-control" placeholder="Busca un Articulo" />
                </div>    
                <div className="form-group col-md-1 mt-1">
                    <input 
                    type="submit" className="btn btn-danger  btn-block"
                    value='Buscar'
                     />
                </div>
            </div>
        </form>
    )
}

export default FormularioBusqueda;