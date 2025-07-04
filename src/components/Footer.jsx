import React from 'react'
import { Twitter } from 'lucide-react'
import { Github } from 'lucide-react'
import { Triangle } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-gray-900 w-full h-[300px] text-white lg:pl-2 pt-12'>
      <div className="flex items-center gap-2 p-4 ml-4">
        <img src="/letter-r.png" alt="" className='w-8 h-8' />
        <p className='text-xl font-mono'>React Movies</p>
      </div>
      <div className='ml-10'>
        <p className='flex gap-x-2 items-center '>Made with <img src="/React-icon.png" alt=""  className='w-5 h-5 cursor-pointer'/> <p className='font-bold cursor-pointer hover:underline'>React</p> </p>

        <p className='flex gap-x-2 items-center pt-2 pb-2'>Data provided by <img src="/tmdb.svg" alt="" className='w-[120px] cursor-pointer hover:scale-105 transition-transform duration-300'/> </p>

        <p>This project uses the TMDB API but is not endorsed or certified by TMDB.</p>

      </div>

      <div className='flex mt-4 ml-10 gap-x-4 items-center'>
        <Twitter className='fill-gray-500 cursor-pointer hover:scale-110 transition-transform duration-300 '/>
        <Github  className='fill-gray-500 cursor-pointer hover:scale-110 transition-transform duration-300'/>
        <p className='flex gap-x-2 ml-8 border-2 border-white p-1 rounded-md'><Triangle className='fill-gray-500 cursor-pointer' /> Powered by <p className='font-bold font-mono cursor-pointer hover:scale-105 transition-transform duration-300'>Vercel</p></p>
        
      </div>
      

    </div>
  )
}

export default Footer