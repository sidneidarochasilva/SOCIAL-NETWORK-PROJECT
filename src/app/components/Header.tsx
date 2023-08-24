'use client'
import Image from 'next/image';
import React from 'react';
import { HiSearch } from 'react-icons/hi'


function Header({ posts, onFiltered }: any) {

  //Função recebe um texto como parâmetro e filtra os objetos com base nesse texto.
  const handleSearch = (text: string) => {
 
    const filteredObjects = posts?.filter((object: IPost) =>
      object.text.toLowerCase().includes(text.toLowerCase())
    );

    onFiltered(filteredObjects);
  };

  return (
  
    <div className="flex gap-3 md:gap-2 items-center p-6 fixed bg-[#ffff] z-50 w-full top-0">
      
     
      <button className='bg-black text-white p-2 px-4 rounded-full hidden md:block'>Home</button>

      <div className='bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex'>
        <HiSearch className='text-[25px] text-gray-500' />
      
        <input type='text' placeholder='Search'
          className='bg-transparent outline-none '
          
          onChange={e => {
            handleSearch(e.target.value);
          }}
        />
      </div>

      <Image src="/profile.png" alt="profile" width={60} height={60}
        className='hover:bg-gray-300 p-2 rounded-full cursor-pointer'
      />

    </div>
  )
}


export default Header;
