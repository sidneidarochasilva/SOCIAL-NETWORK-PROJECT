
'use client'
import Header from './components/Header'
import React, { useEffect, useState } from 'react';
import { getPosts } from '@/dummy_api/dummy_api';
import ListPost from './components/ListPost';




export default function Home() {

  const [postagens, setPostagens] = useState([]);
  const [tempList, setTempList] = useState([])

  useEffect(() => {

    getPosts().then((response: any) => {
      setPostagens(response.data.data)
      setTempList(response.data.data)
    })
  }, []);



  const handleFilteredList = (filterList: []) => {

    if (filterList.length === 0) {
      setPostagens(tempList);
      return
    }
    setPostagens(filterList);
  };

  return (
    <div className='p-3'>
      <Header posts={postagens} onFiltered={handleFilteredList} />
      <div className='mt-[120px]'>
        <ListPost posts={postagens} />
      </div>

    </div>
  )
}
