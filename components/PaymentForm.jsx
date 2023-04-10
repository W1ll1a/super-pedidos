import { useUserId } from '@/hooks/userId'
import axios from 'axios'
import React, { useState } from 'react'

const PaymentForm = () => {

  const idUsuario = useUserId()
    const [card ,setCard ]= useState({
        cardHolder:'',
        cardNumber:'',
        expirationDate:'',
        cardVerificationCode:'',
        idUsuario:''
      })
      const handleDateChange = ({target:{name, value}}) =>{
        //parse para que sql lo entienda.
        const formattedDate = new Date(value).toISOString().split('T')[0];
        setCard({ ...card, [name]: formattedDate });
      }
    
      const handleChange =({target:{name,value}})=>{
        //envio todos los cambios a la tarjeta.
        setCard({...card,[name]:value})
      }
      const handleSubmit = async()=>{
        console.log("los valores que hay en card son ", card)
          const cardData = {
            ...card
          }
          // const res = await axios.post('/api/payments/', cardData)
      }
    
    
      return (
        <div className='md-6 px-10 py-10'>
        {/**Creo mi contenedor del form */}
        <form className="bg-white md-6 px-10 mx-auto max-w-4xl border rounded-lg" onSubmit={handleSubmit}>
          <div>
            {/*Aqui esta solamente el titulo de la pagina*/}
            <h1 className="font-bold text-black text-2xl text-center py-4 ">
              Enter your payment method
            </h1>
          </div>
          <div className=" p-3 mb-6 items-center">
            {/*primer label de nombre*/}
            <div>
            <label className="text-black p-2">
              Nombre
            </label>
            <input
              type="text"
              name="cardholderName"
              id="name"
              placeholder="John"
              className="border border-gray-300 rounded-lg focus:ring-blue-500"
              onChange={handleChange}
            ></input>
               {/*primer label de Apellido*/}
               
            </div>
          
          </div>
          <div className="p-3">
              <div>
            {/*Aqui va el label del email y numero de la tarjeta*/}
            <label className="text-black  p-2">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              placeholder="Card number..."
              className="border border-gray-300 rounded-lg focus:ring-blue-500 max-w-lg"
              onChange={handleChange}
            ></input>
              </div>
          </div>
          <div className="grid p-3 grid-cols-1 gap-2">
            {/**Expiracion de la tarjeta mes ,año y cvv*/}
            <label className="text-black p-2">
              Card expiration Date
            </label>
            <input
              type="date"
              name="expirationDate"
              id="expirationDate"
              placeholder=""
              min={new Date().toISOString().split("T")[0]}
              className="border border-gray-300 rounded-lg focus:ring-blue-500 max-w-lg"
              onChange={handleDateChange}
            ></input>
            <label className="text-black p-2">
              Card cvc
            </label>
            <input
              type="text"
              name="cardVerificationCode"
              id="cardVerificationCode"
              placeholder="CVC"
              className="border border-gray-300 rounded-lg focus:ring-blue-500 max-w-lg"
              onChange={handleChange}
            ></input>
          </div>
          <button className="font-bold py-6 bg-blue-500 px-6 border rounded-lg" type="submit">Submit</button>
        </form>
      </div>
      )
}

export default PaymentForm