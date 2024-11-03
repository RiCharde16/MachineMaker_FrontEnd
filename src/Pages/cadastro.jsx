import React from 'react'
import Header from '../componentes/header'
import {Link} from 'react-router-dom'



export default function Cadastro(){
  return(
      <main>
        <p><Link to="/" className='navigation'><span>Home</span></Link> / Cadastro</p>
        <div className='form'>
          <div className='group_input'>
            <label>Nome do usuário</label>
            <input type="text"></input>
          </div>
          <div className='group_input'>
            <label>Email</label>
            <input type="email"></input>
          </div>
          <div className='group_input'>
            <label>Senha</label>
            <input type="password"></input>
          </div>
          <div className='group_input'>
            <label>Repita Senha</label>
            <input type="password"></input>
          </div>
  
          <button className='btn_submit'>Registrar</button>
        </div>
      </main>
  )
}