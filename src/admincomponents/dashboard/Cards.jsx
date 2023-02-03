

const Cards = ({info}) => {

    const bgCard = (nombre) => {
        if(nombre === 'Categorias') return 'bg-warning fw-bold'
        if(nombre === 'Productos') return 'bg-primary fw-bold'
        if(nombre === 'Ventas') return 'bg-success fw-bold'
        if(nombre === 'Usuarios') return 'bg-info fw-bold'
    }

    return ( 
        <>
          <div className="col-12 col-sm-6 col-md-3 p-2">
                    <div className={`rounded p-2 w-100 ${bgCard(info.nombre)}`} style={{minHeight: '120px'}}>
                    <strong className="fs-5">{info.nombre}</strong>
                    <p style={{fontSize: '12px'}} >{info.descripcion}</p>
                    </div>
            </div>
        </>
     )
}
 
export default Cards