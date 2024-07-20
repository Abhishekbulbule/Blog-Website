import axios from "axios";
import React, { useState } from "react";
import useUser from "../hooks/useUser";

const AddComment = ({ articleId, onArticleUpdate }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const {user} = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authToken: token } : {};
    const response = await axios.post(`/api/articles/${articleId}/comments`, {
      postedBy: name,
      text: comment,
    });
    onArticleUpdate(response.data);
    setComment("");
    setName("");
  };

  return (
    <form className="w-100 p-5 flex flex-col  border-b border-black">
      <h2 className="mb-2 text-center, text-2xl font-extrabold">Add Comment</h2>
      {user &&
      <p className="mb-2 text-center uppercase text-md font-bold">
        You are commenting as <u>{user.email}</u>
      </p>
      }
      <label className="mb-2 text-center, text-md font-bold">
        Comment:
        <br />
        <textarea
          className="mb-2 p-1 font-medium bg-white border-2 border-gray-900 w-full"
          rows={3}
          cols={50}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required={true}
        />
      </label>
      <button
        className="p-2 mb-2 text-black font-semibold border-b-2 border-slate-500 bg-slate-300 hover:bg-slate-100 hover:border-gray-800"
        onClick={addComment}
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddComment;
