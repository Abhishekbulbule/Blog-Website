import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase-Config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const CreateAccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signUp= async(e)=>{
    e.preventDefault();
    if(password != confirmPassword){
      setError("Password's do not match!");
      return;
    }
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate('/articleList')
    }catch(e){
      setError(e.message);
    }
  }

  return (
    <div className="h-full w-full m-5  flex flex-col justify-center">
      <form className="w-3/4 p-4 flex flex-col self-center  border-y border-black" onSubmit={signUp}>
      <h1 className="text-4xl text-center my-2 font-bold"> Create account here </h1>
      {error && <p className="my-2 text-red-500 text-center">{error}</p>}
        <label className="mb-2 text-center, text-md font-bold">
          Email:
          <br />
          <input
            className="mb-2 p-1 font-medium bg-white border-2 border-gray-900 w-full"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </label>
        <label className="mb-2 text-center, text-md font-bold">
          Password:
          <br />
          <input
            className="mb-2 p-1 font-medium bg-white border-2 border-gray-900 w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </label>
        <label className="mb-2 text-center, text-md font-bold">
          Confirm Password:
          <br />
          <input
            className="mb-2 p-1 font-medium bg-white border-2 border-gray-900 w-full"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={true}
          />
        </label>
        <button
          className="p-2 mb-2 text-black font-semibold border-b-2 border-slate-500 bg-slate-400 hover:bg-slate-200 hover:border-gray-800" 
          type="submit"
        >
          Create Account
        </button>
        <p className="border-b-2 border-black my-4"></p>
        <button
          className="p-2 my-2 text-black font-semibold  border-b-2 border-slate-500 bg-slate-400 hover:bg-slate-200 hover:border-gray-800"
          onClick={signUp}
        >
          Sign In With Google
        </button>
        <Link className="border-t-2 pt-4 border-black mt-4 text-center text-blue-500" to={'/login'}> Have an Account Click Here to login!!</Link>
      </form>
    </div>
  );

}

export default CreateAccountPage