import CartItem from '@/components/CartItem'
import axios from 'axios'
import React from 'react'



const carrito = ({productoCarrito}) => {

  return (
    <div>
        {productoCarrito.map(producto=>(
       <CartItem id= {productoCarrito.idProducto}/>
        ))}
    </div>
  )
}
/*Traigo el getServerSideProps*/

export const getServerSideProps = async(context) =>{

  const {id} = await axios.get();

    const {data:productoCarrito} = await axios.get(`http://localhost:3000/api/carrito/${id}`)
    return{
      props:{
        productoCarrito
      }  
    }
  }
  
  

export default carrito