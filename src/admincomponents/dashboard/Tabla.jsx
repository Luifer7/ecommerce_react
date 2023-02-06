
const Tabla = ({datos}) => {

    const accionesBg = (acciones) => {
        if(acciones === 'detalles') return 'btn btn-info btn-sm fw-bold disabled'
        if(acciones === 'edit') return 'btn btn-warning btn-sm fw-bold disabled'
        if(acciones === 'del') return 'btn btn-danger btn-sm fw-bold disable'
    }
    
    return(
        <div className="my-4" >
            <h3>{datos.nombre}</h3>
            <p className="text-dark">
                <i>{datos.descripcion}</i>
            </p>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    {datos.head.map((head, i)=> (
                        <th key={i} > {head}</th>
                        ))
                    }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {datos.body.map((body, i)=> (
                        <td style={{maxWidth: '100px', fontSize: '15px'}} key={i} > {body}</td>
                        ))
                    }
                    <td className="d-flex gap-1" >
                    {datos.acciones.map((acciones, i)=> (
                        <button className={accionesBg(acciones)} 
                        key={i} > {acciones}</button>
                        ))
                    }
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
    
    }
    
export default Tabla