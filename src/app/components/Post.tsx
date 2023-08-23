import Image from 'next/image'
import React from 'react'
import UserTag from './userTag'


function Post({ post }: any) {



  return (
    <>
      <div className="relative 
       before:absolute
       before:h-full before:w-full
       before:rounded-3xl
       before:z-10
       hover:before:bg-gray-600 
       before:opacity-50
       cursor-pointer
       " >

        <Image src={post?.image}
          alt={post?.text}
          width={500}
          height={500}
          className='rounded-3xl 
        cursor-pointer relative z-0  mb-2'
        onChange={() => console.log("teste",true)}
        onMouseLeave={() => console.log("teste",false)}
        />

      </div>
      <UserTag owner={post?.owner} />

      <p className='font-bold text-[12px] mb-1 mt-2 line-clamp-2'>{post?.text}</p>
    </>
  )
}

export default Post