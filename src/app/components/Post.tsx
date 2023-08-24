import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import UserTag from './UserTag';



function Post({ post }: any) {
  const router = useRouter();


  function detailsPost() {
    router.push('/post-details')
    localStorage.setItem("details", JSON.stringify(post));
  }

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
       "
        onClick={() => detailsPost()}
      >

        <Image src={post?.image}
          alt={post?.text}
          width={500}
          height={500}
          className='rounded-3xl 
        cursor-pointer relative z-0  mb-2 '
        />


        <div className='p-2'>
          <UserTag owner={post?.owner} />

          <p className='font-bold text-[12px] mt-2'>{post?.text}</p>
        </div>

      </div>

    </>
  )
}

export default Post