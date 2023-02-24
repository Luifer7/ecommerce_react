

const ItemBanner = ({item}) => {


    return ( 

        <>
            {
                item.map((info, i)=> (
                <div key={i} 
                    className="mt-4 w-100 p-3 rounded d-flex flex-wrap gap-1 align-items-center justify-content-between banner-card">
                
                    <div className="p-1 mx-3 text-center">
                        <h2 style={{fontSize: '50px'}} className="m-0 text-start mb-2" >{info.nombre}</h2>
                        <p style={{fontSize: '12px', maxWidth: '220px'}} className='text-start' >{info.comentarios}</p>
                    </div>
                   
                    <div className="text-center" >
                    <img width={'200'} height={'180'} className="banner-img"
                    style={{objectFit: 'cover'}}
                    src={info.imagen}
                    alt="No disponible"  />
                    </div>
        
                </div>
                ))
            }
         
        </>
      
     )
}
 
export default ItemBanner