import React, { useEffect, useState } from 'react'
import { verify } from 'jsonwebtoken';
import axios from 'axios';
import { useUser } from '@/hooks/users';
import { useRouter } from 'next/router';


const carrito = () => {
  const user = useUser();
  const [productos, setProductos] = useState([]);
  const router = useRouter()

  const handleDeleteProduct = async(idProducto)=>{
    if (!user){
      return []
    }
    const deleteProduct = await axios.delete('/api/carrito/carritoProd', {data:{user,idProducto}})
    console.log(deleteProduct)
  }
  async function getProductosCarrito(username) {
    if (!username){
      return []
    }
    console.log("Este es el ID del usuario antes de pedir el carrito", username);
    const productos = await axios.get(`/api/carrito?username=${username}`);
    console.log('este es el producto que estoy treyendo. ',productos.data);
    return productos.data
  }
  const handleBuyProduct = ()=>{
    
    router.push('/wallet/viewWallet')
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const productosCarrito = await getProductosCarrito(user);
        setProductos(productosCarrito);
        console.log(productosCarrito)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [user]);
  
  return (
    <div className="grid grid-cols-3 ">
    {productos.map(producto =>(
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img
        className="rounded-t-lg object-cover "
        width={500}
        height={200}
        src={producto.productoURL}
        alt=""
      />
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {producto.nombreProducto}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {producto.descripcionProducto}
      </p>
      <div className='grid grid-cols-2'>
      <a
        href="#"
        key={producto.idProducto}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={()=> handleBuyProduct(producto.idProducto)}
      >
        Comprar producto
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      <a
        href="#"
        key={producto.idProducto}
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={()=> handleDeleteProduct(producto.idProducto)}
      >
        Eliminar de carrito
        <svg
          aria-hidden="true"
          class="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </a>
      </div>
    </div>
  </div>


    ))}
</div>
  );
   
}

export default carrito