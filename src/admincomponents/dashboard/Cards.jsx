import EliminarModulo from "./EliminarModulo"


const Cards = ({info}) => {


    return ( 
        <>
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-2">
                    <div className={`rounded p-2 w-100`} 
                    style={{minHeight: '160px', 
                    background: 'linear-gradient(110deg, #0275d8 60%, #1a1b1b  60%)',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', position: 'relative'
                    }}>
                    <strong className="fs-5">{info.value}</strong>
                    <p style={{fontSize: '12px'}} >
                        <i>
                        {info?.descripcion?.slice(0, 100)}...
                        </i>
                    </p>
                    
                    <EliminarModulo modulo={info} />
                    <i className={`${info.icon} h4`} 
                    style={{position: 'absolute', bottom: '0', right: '5px'}} ></i>
                    </div>
            </div>
        </>
     )
}
 
export default Cards