import axios from 'axios'
import React, { useState } from 'react'

const paymentMethod = () => {
  const [card ,setCard ]= useState({
    cardHolder:'',
    cardNumber:'',
    expirationMonth:'',
    expirationYear:'',
    cardVerificationCode:''

  })

  const handleChange =({target:{name,value}})=>{
    setCard({...card,[name]:value})
  }
  const handleSubmit = async()=>{
      const cardData = {
        ...card
      }
      const res = await axios.post('/api/payments/', cardData)
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
          Card expiration Month
        </label>
        <input
          type="text"
          name="expirationMonth"
          id="expirationMonth"
          placeholder="MM"
          className="border border-gray-300 rounded-lg focus:ring-blue-500 max-w-lg"
          onChange={handleChange}
        ></input>
        <label className="text-black  p-2">
          Card expiry year
        </label>
        <input
          type="text"
          name="expirationYear"
          id="Year"
          placeholder="YY"
          className="border border-gray-300 rounded-lg focus:ring-blue-500 max-w-lg"
          onChange={handleChange}
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

export default paymentMethod