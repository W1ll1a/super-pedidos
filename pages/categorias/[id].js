import axios from 'axios'
import React from 'react'
import Hero from '@/components/Hero'
import { data } from 'autoprefixer'

const categoriaView = ({categoria}) => {
const handleDelete = async(id) =>{ 
    const res =await  axios.delete('/api/categorias/'+ id)

}

  return (
    <>
    <Hero></Hero>
    <div className='relative py-11'>
        <div>
       <h1>{categoria.categoryName}</h1> 
        </div>
        <button className='bg-red-500 px-3 p-2' onClick={()=>{handleDelete(categoria.idCategoria)}}>delete</button>
    </div>
    </>
  )
}


export const getServerSideProps = async (context)=>{
    const {data:categoria}= await axios.get('http://localhost:3000/api/categorias/'+ context.query.id)
    console.log(categoria)
    return {
        props:{
            categoria
        }
    }
}

export default categoriaView