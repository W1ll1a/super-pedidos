import React from 'react'
import Hero from './Hero'
import AplicationCard from './AplicationCard'
const AccountSetting = () => {
  return (
    <div>
      <Hero heading={"Welcome"} message={"To account settings"}></Hero>
      <div className ="text-center text-4xl ">
        <h1 className = "font-bold ">Account Setting</h1>
      </div>
      <div>

      </div>
      <AplicationCard></AplicationCard>
    </div>
  )
}

export default AccountSetting