
const FormularioBusqueda = () => {
    return(
        <form>
            <div className="row  justify-content-md-center">
                <div className="form-group col-md-6  mt-1">
                    <input type="text" className="form-control" placeholder="Busca por Articulo o por Categoría" />
                </div>    
                <div className="form-group col-md-1 mt-1 d-flex justify-content-end ">
                    <input 
                    type="submit" className="btn btn-danger btn-block"
                    value='Buscar'
                     />
                </div>
            </div>
        </form>
    )
}

export default FormularioBusqueda;