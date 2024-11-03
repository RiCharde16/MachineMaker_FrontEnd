import React, { createContext } from "react";
import api from '../services/api';

const AuthContext = createContext({})

export const AuthProvider =({children})=>{
  
  async function Login() {
    const response = await api.get('/usuarios')
    // const data = await response.json();
    console.log(response)
    // console.log(data):
  }

  return(
    <AuthContext.Provider value={{signed:true, Login}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;