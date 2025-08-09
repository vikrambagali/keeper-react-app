import React from 'react'

 function Header(){
  return (
    <div className='bg-yellow-400 text-white py-4 px-8 shadow-md text-2xl font-bold'>
      <h1>Keeper App</h1>
      <img
      className="w-8 h-8 sm:w-10 sm:h-10"
      src="/logo.svg"
       alt="Keeper Logo" />
    </div>
  )
}
export default Header

