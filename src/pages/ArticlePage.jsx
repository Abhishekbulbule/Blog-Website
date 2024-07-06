import React from 'react'
import { useParams } from 'react-router-dom'
import { articleData } from './article-data'
import NotFoundPage from './NotFoundPage';

//new edit
const ArticlePage = () => {
  const {articleId} = useParams();
  const data = articleData.find((e)=> e.name===articleId);
  if(!data){
    return (<NotFoundPage/>)
  } 
  return (
    <div >
      <h1 className=' text-center text-2xl font-extrabold'>Title -- {data.title}</h1>
      
    <h2 className='text-justify p-5 text-black font-semibold' dangerouslySetInnerHTML={{__html:data.content}}></h2>
    </div>
  )
}

export default ArticlePage