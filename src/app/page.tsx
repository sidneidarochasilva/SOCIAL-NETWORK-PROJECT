
'use client'
import Header from './components/Header'
import React, { useEffect, useState } from 'react';

import { getPosts } from '@/dummy_api/dummy_api';
import ListPost from './components/ListPost';

export default function Home() {
 

  const [postagens, setPostagens] = useState([]);

   useEffect(() => {

    getPosts().then((response: any) => {
      setPostagens(response.data)
      console.log("response", response.data)
    })

  },[]); 




  return (
    <>
      <Header />
      <ListPost posts={postagens} />
    </>
  )
}
