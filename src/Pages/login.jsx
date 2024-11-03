import React, { useContext } from 'react'
import Header from '../componentes/header'
import {Link} from 'react-router-dom'
import AuthContext from '../context/auth'

export default function Login(){
  const context = useContext(AuthContext)

  context.Login()
  return(
      <main>
        <p><Link to="/" className='navigation'><span>Home</span></Link> / Login</p>
        <div className='form'>
            <div className='group_input'>
              <label>Email</label>
              <input type="password"></input>
            </div>
            <div className='group_input'>
              <label>Senha</label>
              <input type="password"></input>
            </div>

            <button className='btn_submit'>Entrar</button>
            <p>Esqueceu a senha?</p>
        </div>
      
      </main>
  )
}