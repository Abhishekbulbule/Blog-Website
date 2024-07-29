import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-Config";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const Login = async(e)=>{
    e.preventDefault();
    try {
        const login = await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
    } catch (error) {
        setError(error);

    }
  }
  return (
    <div className="h-full w-full m-5  flex flex-col justify-center">
      <form className="w-3/4 p-5 flex flex-col self-center  border-y border-black" onSubmit={Login}>
      <h1 className="text-4xl text-center my-2 font-bold"> Login </h1>
      {error && <p className="my-2 text-red-500 text-center">{}</p>}
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
        <button
          className="p-2 mb-2 text-black font-semibold border-b-2 border-slate-500 bg-slate-400 hover:bg-slate-200 hover:border-gray-800" 
          type="submit"
        >
          Login
        </button>
        <p className="border-b-2 border-black my-4"></p>
        <button
          className="p-2 my-2 text-black font-semibold  border-b-2 border-slate-500 bg-slate-400 hover:bg-slate-200 hover:border-gray-800"
          onClick={Login}
        >
          Sign In With Google
        </button>
        <Link className="border-t-2 pt-4 border-black mt-4 text-center text-blue-500" to={'/signUp'}>Dont Have an Account Click Here</Link>
      </form>
    </div>
  );
};

export default LoginPage;
