import React from "react";
import { articleData } from "./article-data";
import { Link } from "react-router-dom";
import ArticleList from "../components/ArticleList";

const ArticleListPage = () => {
  return (
    <div className="flex flex-col place-items-center m-5">
      <h1 className="font-bold m-3">Articles</h1>
      <ArticleList articles={articleData}/>
    </div>
  );
};

export default ArticleListPage;
