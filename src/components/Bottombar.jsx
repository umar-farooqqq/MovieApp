import React from 'react'

const Bottombar = () => {
  return (
    <div className='flex justify-between items-center p-4 bg-black px-16 sticky bottom-0 lg:hidden xl:hidden'>
        <img src="./house.svg" alt="" className='w-6 h-6 cursor-pointer' />
        <img src="./film.svg" alt="" className='w-6 h-6 cursor-pointer' />
        <img src="./tv.svg" alt="" className='w-6 h-6 cursor-pointer' />
        <img src="./search.svg" alt="" className='w-6 h-6 cursor-pointer' />
    </div>
  )
}

export default Bottombar