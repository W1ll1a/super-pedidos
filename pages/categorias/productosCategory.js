import React from 'react'
import axios from 'axios'

const productosCategory = ({productos}) => {
  return (
    <div>
        <div className='grid grid-cols-2'>
          <div className='border shadow-lg'>
            {productos.map(data =>(
              <title>
                {data.nombreProducto}
              </title>
            ))}

          </div>
        </div>
    </div>
  )
}


export const getServerSideProps = async (context)=>{
    const {data:productos}= await axios.get('http://localhost:3000/api/categorias/productsinCategory/'+ context.query.id)
    console.log(productos)
    return {
        props:{
            productos,
        }
    }
}
export default productosCategory