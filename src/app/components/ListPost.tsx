'use client'
import React from 'react';
import Post from './Post';


function ListPost({ posts }: any) {


  return (
    <div className='mt-7 px-2 md:px-5
    columns-2 md:columns-3
    lg:columns-4 mb-4
    xl:columns-5 space-y-6 mx-auto'>

      {posts ? posts.map((item: IPost, index: number) => (

        <Post post={item} key={index} />

      )) : <>Carregando...</>}
    </div>
  )
}

export default ListPost