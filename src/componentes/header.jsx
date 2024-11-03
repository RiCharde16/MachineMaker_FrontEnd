import react from 'react'
import '../CSS/navbars.css'
import {Link} from 'react-router-dom'

export default function Header(){
  return(
    <div>
      <header>
        <h1>MahcineMaker</h1>
        <div className='btn_group'>
          <Link to="/login"><button className="btn_round">Entrar</button></Link>
          <Link to="/cadastro"><button className="btn_round">Cadastrar-se</button></Link>
        </div>
      </header>
      <ul className='menu'>
        <Link to="/pecas" className="navigation"><li className="item">Peças</li></Link>
        <Link to="/" className="navigation"><li className="item">Simulação</li></Link>
        <Link to="/ajuda" className="navigation"><li className="item">Ajuda</li></Link>
      </ul>
    </div>
  )
}