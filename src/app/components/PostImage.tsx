import Image from 'next/image'
import React from 'react'

function PostImage({post}:any) {

  return (
    <div>
      <Image src={post.image}
      alt={post.text}
      width={300}
      height={300}
    
      className='rounded-2xl'
      />

    </div>
  )
}

export default PostImage