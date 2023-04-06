import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const CartItem = ({id}) => {
    const [product, setProduct] = useState("");
    
    const getProduct = async (id) => {
        const res = await axios.get('/api/products/' + id);
        console.log("este es el id que se le esta mandando",id);
        setProduct(res.data);
        return res.data; // assuming the product data is in the `data` field of the response object
      };
    useEffect(() => {
        getProduct(id);
    }, [id]);
  return (
    <div>
            <div className='border shadow-lg border-gray-500'>
                <title>
                        {product.nombreProducto}
                </title>
            </div>
    </div>
  )
}


export default CartItem