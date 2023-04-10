import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import axios from 'axios'
import { relativeTimeRounding } from 'moment'
import Link from 'next/link'


export default function Home({productos}) {
  return (
  <>
    <Hero></Hero>
    <h1 className=' text-center text-2xl font-bold font-sans'>En venta</h1>
    <div className='flex justify-center items-center'>
      <div>
    {productos.map(producto =>(
    <div className='items-center grid-cols-1 gap-4'>
      <Link href={`/categorias/${producto.idProducto}`} key={producto.idProducto}>
     <div key={producto.idProducto} className="max-w-lg rounded overflow-hidden shadow-lg flex justify-center">
     <img className="object-cover"src={producto.productoURL} width={200}
     height={200} />
     <div className="p-8">
       <div className="font-bold text-xl ">{producto.nombreProducto}</div>
       <p class="text-gray-700 text-base">
         {producto.descripcionProducto}
       </p>
       <span className='bottom-0 right-0'>
        {producto.precioProducto}
       </span>
     </div>
   
   </div>
      </Link>
    </div>
    ))}
    </div>
    </div>
  </>
  )
}

export const getServerSideProps = async(context) =>{
  const {data:productos} = await axios.get('http://localhost:3000/api/products/productosApi')
  return{
    props:{
      productos,
    }
  }
}
