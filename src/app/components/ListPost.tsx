'use client'
import React, { useState, useEffect } from 'react';
import Post from './Post';


function ListPost(props: any) {


  return (
    <div className='mt-7 px-2 md:px-5
    columns-2 md:columns-3
    lg:columns-4 mb-4
    xl:columns-5 space-y-6 mx-auto'>
      {props.posts.data && props.posts.data.map((item: any, index: any) => (

        <Post post={item} key={index} />
      ))}
    </div>
  )
}

export default ListPost