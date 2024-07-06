import React from 'react'
import ArticleList from '../components/ArticleList';
import { articleData } from './article-data';


const Homepage = () => {
  return (
    <div className="flex flex-col place-items-center m-5">
      <h1 className="font-bold m-3">Latest Articles</h1>
      <ArticleList articles={articleData}/>
    </div>
  )
}

export default Homepage;