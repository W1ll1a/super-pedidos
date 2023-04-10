import { useUserId } from '@/hooks/userId'
import React from 'react'

const viewWallet = () => {
    const userId  = useUserId()
    console.log(userId) 
  return (
    <div>{userId}</div>
  )
}

export default viewWallet