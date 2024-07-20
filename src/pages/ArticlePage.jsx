import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { articleData } from "./article-data";
import NotFoundPage from "./NotFoundPage";
import axios from "axios";
import { getIdToken } from "firebase/auth";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";
import useUser from "../hooks/useUser";
//new edit
const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({name:"", title:"", content:"",comments:[],upvotes:0,canUpvote:false});
  const { articleId } = useParams();
  const {canUpvote} = articleInfo;
  const data = articleData.find((e) => e.name === articleId);
console.log(canUpvote)
  const {user, isLoading} = useUser();
  useEffect(() => {
    const loadArticle = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? {authToken:token}:{};
      const data = await axios.get(`/api/articles/${articleId}`,{headers});
      console.log(data.data)
      setArticleInfo(data.data);
    };
    if(!isLoading){
      loadArticle();
    }
  }, [isLoading, user]);
  if (!data) {
    return <NotFoundPage />;
  }
  const addLike = async()=>{
    const token = user && await user.getIdToken();
    const headers = token ? {authToken:token}:{};
    const response = await axios.put(`/api/articles/${articleId}/upvotes`,null, {headers});
    setArticleInfo(response.data);
  }
  return (
    <div className=" justify-start">
      <h1 className=" text-center text-2xl font-extrabold">
        Title -- {data.title}
      </h1>
      <p className="text-center my-3 text-xl font-bold">
        {user ? <button className="p-2 border-b-2 border-slate-500 bg-slate-300 hover:bg-slate-100 hover:border-gray-800" onClick={addLike}>{canUpvote ? `Likes ${articleInfo.upvotes||0}`: `Already Liked ${articleInfo.upvotes||0}`}</button>:<Link to={'/login'}><button className="p-2 border-b-2 border-slate-500 bg-slate-300 hover:bg-slate-100 hover:border-gray-800">Login to like</button></Link>} 
      </p>

      <h2
        className="text-justify border-b border-black p-5 text-black font-semibold"
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></h2>
      {user? <AddComment articleId={articleId} onArticleUpdate={e=>setArticleInfo(e)}/>:<Link to={'/login'}><button className="p-2 border-b-2 border-slate-500 bg-slate-300 hover:bg-slate-100 hover:border-gray-800">Login to like</button></Link>}
      <Comments comments={articleInfo.comments}/>      
    </div>
  );
};

export default ArticlePage;
