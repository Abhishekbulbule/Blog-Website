import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase-Config';

const useUser = () => {
    const [user, setUser]=useState(null);
    const [isLoading, setIsLoading]= useState(true);

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) =>{
        setUser(user);
        setIsLoading(false);
        // console.log(user);
       });
       return unsubscribe; 
    },[])
  return {user, isLoading}
}

export default useUser