import React from 'react'
import '../CSS/pecas_style.css'
import {Link} from 'react-router-dom'
import Card from '../componentes/card'

export default function Pecas(){
  return(
    <main>
      <p><Link to="/" className="navigation"><span>Home</span></Link> / Peças</p>
      <div className="container">

        <div id="pesquisa">
          <input type="text" placeholder='digite um nome de uma peça'></input>
          <i className='fa fa-search'></i>
        </div>
        <div>
          <Card 
            image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/b/5/b550m-k61461v31.jpg"
            nome="Placa Mae Gigabyte B550M K, DDR4, Socket AMD AM4, M-ATX, Chipset AMD B550, B550M-K"
            />
          <Card 
            image="https://media.pichau.com.br/media/catalog/product/cache/ef72d3c27864510e5d4c0ce69bade259/b/5/b550m-k61461v31.jpg"
            nome="Placa Mae Gigabyte B550M K, DDR4, Socket AMD AM4, M-ATX, Chipset AMD B550, B550M-K"
            preco="490,00"
            />
        </div>
      </div>
    </main>
  )
}