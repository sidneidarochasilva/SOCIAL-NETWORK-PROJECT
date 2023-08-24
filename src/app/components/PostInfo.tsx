import React, { useEffect, useState } from 'react'
import UserTag from './UserTag'



function PostInfo({ post }: any) {

  const [tags, setTags] = useState([]);

  useEffect(() => {
    setTags(post.tags)
  }, [tags])

  //Função para converter o formato da data para pt-br
  function convertToPtBrDateFormat(isoDate: string): string {
    const date = new Date(isoDate);
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear().toString();

    return `${day}/${month}/${year}`;
  }

  return (
    <div>
      <UserTag owner={post.owner} />
      <h2 className='text-[30px] font-bold mb-10'>{post.text}</h2>

      <h2 className='mt-5'>Publicado em  {convertToPtBrDateFormat(post.publishDate)}</h2>
      <h2 className='mt-5 mb-4'>Likes: {post.likes}</h2>

      <div>

        {tags && tags.map((tag: any, index: number) => <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-3.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300">{tag}</span>)}


      </div>
      <button className='p-2 bg-[#e9e9e9] px-5 text-[23px]
      mt-10 rounded-full hover:scale-105 transition-all'
        onClick={() => window.open(post.image)}>Abrir imagem</button>
    </div>
  )
}

export default PostInfo