

const Cards = ({info}) => {

    const bgCard = (nombre) => {
        if(nombre === 'Categorias') return 'bg-warning fw-bold'
        if(nombre === 'Productos') return 'bg-danger fw-bold'
        if(nombre === 'Ventas') return 'bg-success fw-bold'
        if(nombre === 'Usuarios') return 'bg-info fw-bold'
    }

    const iconCard = (nombre) => {
        if(nombre === 'Categorias') return 'bi bi-tags h3'
        if(nombre === 'Productos') return 'bi bi-basket3 h3'
        if(nombre === 'Ventas') return 'bi bi-cash h3'
        if(nombre === 'Usuarios') return 'bi bi-person-circle h3'
    }

    return ( 
        <>
          <div className="col-12 col-sm-6 col-md-3 p-2">
                    <div className={`rounded p-2 w-100`} 
                    style={{minHeight: '120px', 
                    background: 'linear-gradient(110deg, #0275d8 60%, #1a1b1b  60%)',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', position: 'relative'
                    }}>
                    <strong className="fs-5">{info.nombre}</strong>
                    <p style={{fontSize: '12px'}} >
                        <i>
                        {info.descripcion}
                        </i>
                    </p>
                    <i className={`${iconCard(info.nombre)}`} 
                    style={{position: 'absolute', bottom: '0', right: '5px'}} ></i>
                    </div>
            </div>
        </>
     )
}
 
export default Cards