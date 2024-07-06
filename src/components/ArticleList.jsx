import React from 'react'
import { Link } from 'react-router-dom'

const ArticleList = ({articles}) => {
  return (
    <>
        {articles.map((e,i) => (
        <Link className="mt-5 border-b border-gray-900 hover:text-blue-700" key={i} to={`/article/${e.name}`}>
          <h2 className="font-bold p-3">{e.title}</h2>
          <p className="px-3 pt-3 mb-5">{e.content.substring(0, 150)}......</p>
        </Link>
      ))}
    </>
  )
}

export default ArticleList