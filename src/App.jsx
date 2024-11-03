import Home from './Pages/home'
import {Routes, Route} from 'react-router-dom'
import Header from './componentes/header'
import Footer from './componentes/footer'
import { AuthProvider } from './context/auth';
import './App.css'

// paginas
import Login from './Pages/login'
import Cadastro from './Pages/cadastro'
import Ajuda from './Pages/ajuda'
import Pecas from './Pages/pecas'

export default function App() {
  return (
    <AuthProvider>
      <Header/>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/cadastro' Component={Cadastro}/>
        <Route path='/ajuda' Component={Ajuda}/>
        <Route path='/pecas' Component={Pecas}/>
      </Routes>
      <Footer/>
    </AuthProvider>
  )
}
