import { useUserId } from '@/hooks/userId'
import React, { useCallback } from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'

const viewWallet = () => {
  const userId = useUserId()
  const [creditCards, setCreditCards] = useState([])
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchCreditCards = async () => {
      const { data } = await axios.get(`/api/payments?idUsuario=${userId}`)
      setCreditCards(data)
    }
    fetchCreditCards()
  }, [userId])

  const handleUtilizarClick = useCallback((date) => {
    const today= new Date()
    const expiration = new Date(date)
    if (expiration> today) {
      setShowModal(true);
    } else {
      // Aquí puedes mostrar algún mensaje indicando que la tarjeta ha expirado
    }
  }, [setShowModal]);
  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  {creditCards.map((creditCard) => (
    <div key={creditCard.idCreditCard} className='border rounded-lg shadow-lg overflow-hidden'>
      <div className='bg-gradient-to-br from-pink-500 to-orange-400 text-white py-2 px-4'>
        <p className='text-lg font-semibold'>{creditCard.cardHolder}</p>
      </div>
      <div className='p-4'>
        <p className='text-gray-500 text-sm mb-2'>Número de tarjeta:</p>
        <p className='text-lg mb-4'>
          <span className='opacity-50'>
            {'*'.repeat(creditCard.cardNumber.length - 4)}
          </span>
          <span className='font-semibold'>{creditCard.cardNumber.slice(-4)}</span>
        </p>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <p className='text-gray-500 text-sm mb-1'>Fecha de vencimiento:</p>
            <p className='text-lg'>{new Date(creditCard.expirationDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className='text-gray-500 text-sm mb-1'>CVV:</p>
            <p className='text-lg'>•••</p>
          </div>
        </div>
        <button className='bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg text-sm px-5 py-2.5 text-center'
           onClick={() => handleUtilizarClick(creditCard.expirationDate)}>
            Utilizar
        </button>
      </div>
    </div>
  ))}
  {showModal && (
  <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
      <div
        className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg className="h-6 w-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                ¿Seguro que quieres terminar la compra?
              </h3>
              <div className="mt-2">
                <p className="text-sm leading-5 text-gray-500">
                  Recuerda que una vez que confirmes la compra no se puede cancelar.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={() => {
                // Handle the buy action here
              }}
            >
              Comprar
            </button>
          </span>
          <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto"/>
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            </div>
      </div>
    </div>
  </div>
)} 
</div>

  
  )

}

export default viewWallet