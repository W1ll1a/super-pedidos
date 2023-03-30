import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import axios from 'axios'
import { relativeTimeRounding } from 'moment'
import Link from 'next/link'


export default function Home({categorias}) {
  return (
  <>
    <Hero></Hero>
    <h1 className=' text-center text-2xl font-bold font-sans'>Encuentra aqui nuestras categorias</h1>
    <div className='flex justify-center items-center'>
      <div>
    {categorias.map(categoria =>(
    <div className='items-center grid-cols-1 gap-4'>
      <Link href={`/categorias/${categoria.idCategoria}`} key={categoria.idCategoria}>
     <div key={categoria.idCategoria} className="max-w-lg rounded overflow-hidden shadow-lg flex justify-center">
     <img className="object-cover"src={categoria.categoryURL} width={300}
     height={400} />
     <div className="px-6 py-4">
       <div className="font-bold text-xl ">{categoria.categoryName}</div>
       <p class="text-gray-700 text-base">
         {categoria.categoryDescription}
       </p>
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

  const {data:categorias} = await axios.get('http://localhost:3000/api/categorias/categoriasApi')
  return{
    props:{
      categorias,
    }
  }
}
