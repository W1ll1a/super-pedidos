import React, { useState } from 'react'

const Carrito = ({openClose}) => {
    const [isCartOpen,setIsCartOpen]=useState(openClose)

    const handleOpenClose = () =>{
        setIsCartOpen(!isCartOpen)
    }
  return (
    <div
    id="cart"
    className={
      isCartOpen
        ? "fixed top-0 right-0 z-40 min-h-screen p-4 bg-white w-96 dark:bg-gray-800 shadow-lg"
        : "fixed top-0 right-[-100%] z-40 min-h-screen p-4 bg-white w-96 dark:bg-gray-800 shadow-lg"
    }
    tabIndex={-1}
    aria-labelledby="drawer-label"
  >
    <div className="flex justify-between">
      <h5
        id="cart-label"
        className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
      >
        your cart
      </h5>
      <div id="close cart">
        <button onClick={handleOpenClose}>
          <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <line x1="18" y1="6" x2="6" y2="18" />{" "}
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
    <div id="content" className="grid gap-1 grid-cols-1">
      <div id="cart-Details">
        <div id="product-Details">EarBuds</div>
        <div id="price">L.250</div>
        <input
          id="quantity"
          type="number"
          className="border rounded-lg w-9"
        />
      </div>
      <div>
        <div className="text-right m-2 border-t-2 border-black">Total</div>
      </div>
      <div id="eliminate" className="flex justify-end">
        <svg
          className="h-8 w-8 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <polyline points="3 6 5 6 21 6" />{" "}
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />{" "}
          <line x1="10" y1="11" x2="10" y2="17" />{" "}
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </div>
    </div>
  </div>
  )
}

export default Carrito