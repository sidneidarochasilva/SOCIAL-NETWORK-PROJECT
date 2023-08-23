"use client"
import React from 'react'
import Image from 'next/image';

function UserTag({owner}:any) {

  return (
    <div className=''>
       {owner?
       <div className='flex gap-3 
       items-center'>
       <Image src={owner.picture} 
       alt='userImage'
       width={45}
       height={45}
       className='rounded-full'/>
       <div>
        <h2 className='text-[14px] font-medium'>{owner.firstName}</h2>
       
        </div>
       </div>
       :null}
    </div>
  )
}

export default UserTag