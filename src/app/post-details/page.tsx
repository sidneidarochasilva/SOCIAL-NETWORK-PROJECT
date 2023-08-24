"use client"
import React, { useEffect, useState } from 'react'

import { HiArrowSmallLeft } from "react-icons/hi2";
import { useRouter } from 'next/navigation'

import PostInfo from '@/app/components/PostInfo';
import PostImage from '../components/PostImage';


function DetailsPost(props: any) {
  const [details, setDetails] = useState({});
  const router = useRouter();


useEffect(()=>{

  setDetails(JSON.parse(localStorage.getItem("details") || ''));
},[])
  return (
    <>
     
      <div className=' bg-white p-8 sm:px-10 md:p-12 rounded-2xl md:px-24 lg:px-36'>
        <HiArrowSmallLeft className='text-[60px] font-bold ml-[-50px] 
        cursor-pointer hover:bg-gray-200 rounded-full p-2 '
        onClick={() => router.push('/')} />
        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-10 shadow-lg
       rounded-2xl p-3 md:p-7 lg:p-12 xl:pd-16 '
          
        >

          <PostImage post={details}/>
          <div className="">
            <PostInfo post={details}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsPost