import Image from 'next/image';
import React from 'react';
import { HiSearch } from 'react-icons/hi'


function Header() {
 

  return (
    <div className="flex gap-3 md:gap-2 items-center p-6">

      <button className='bg-black text-white p-2 px-4 rounded-full hidden md:block'>Home</button>

      <div className='bg-[#e9e9e9] p-3
       gap-3 items-center rounded-full w-full hidden md:flex
      '>
        <HiSearch className='text-[25px] text-gray-500' />
        <input type='text' placeholder='Seach'
          className='bg-transparent outline-none '
        />

      </div>


      <Image src="/profile.png" alt="profile" width={60} height={60}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
      />


    </div>
  )
}

export default Header