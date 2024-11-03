import React, {useEffect, useState} from 'react'
import '../CSS/navbars.css'
import '../App.css'
import Pecas_montagem from '../componentes/pecas_montagem' 
import api from '../services/api'


export default function Home() {
  const [pecas, setPecas] = useState({})
  const [total, setTotal] = useState(0.00)
  const [montagem, setMontagem] = useState({
    'processador': [],
    'cooler_processador': [],
    'armazenamento': [],
    'memoria': [],
    'placa_mae': [],
    'placa_video': [],
    'gabinete': [],
    'fonte': []
  })
  
  useEffect(()=>{
    
    async function fetchPecas(){
      const response = await api.get('/produtos')
      const novasPecas = {
        'processador': [...response.data][0]['Processador'],
        'cooler_processador': [...response.data][0]['Cooler do processador'],
        'armazenamento': [...response.data][0]['Armazenamento'],
        'memoria': [...response.data][0]['Memória'],
        'placa_mae': [...response.data][0]['Placa mãe'],
        'placa_video': [...response.data][0]['Placa de vídeo'],
        'gabinete': [...response.data][0]['Gabinete'],
        'fonte': [...response.data][0]['Fonte']
      }
      setPecas(novasPecas)
      // console.log(montagem)
    }
    fetchPecas()
  }, []);

  useEffect(()=>{
    
      
      const novoTotal = Object.values(montagem).reduce((acc, item) => {
        // Verifica se o item é um array e se tem pelo menos um elemento com o campo de preço
        if (Array.isArray(item) && item.length > 0 && item[0].preco) {
            return acc + parseFloat(item[0].preco)
        }
        return acc
      }, 0)

      // Atualiza o estado total com o novo total
      setTotal(novoTotal)
    
  }, [montagem])
 
  return(
      <main>
      <p><span>Home</span> / Simulação</p>
        <div className='container'>
          <h3>Montagem</h3>
          <table>
            <thead>
              <tr>
                <th>Peça</th>
                <th>Modelo</th>
                <th>Preço</th>
                <th>Loja</th>
              </tr>
            </thead>
            <tbody>
              {pecas.processador && (
                  <Pecas_montagem peca="Processador"
                    modelo={pecas.processador}
                    onChangeModelo={(novoModelo)=>{
                      setMontagem(prev => (
                        {
                        ...prev,
                        'processador': [novoModelo]
                      }))
                    }}
                    />
              )               
              }
              <Pecas_montagem peca="Cooler do Processador"
                modelo={pecas.cooler_processador}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'cooler_processador': [novoModelo]
                  }))
                }}/>
              <Pecas_montagem
                peca="Placa-Mãe"
                modelo={pecas.placa_mae}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'placa_mae': [novoModelo]
                  }))
                }}
                />
              <Pecas_montagem
                peca="Memória"
                modelo={pecas.memoria}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'memoria': [novoModelo]
                  }))
                }}
                />
              <Pecas_montagem
                peca="Armazenamento"
                modelo={pecas.armazenamento}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'armazenamento': [novoModelo]
                  }))
                }}
                />
              <Pecas_montagem
                peca="fonte"
                modelo={pecas.fonte}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'fonte': [novoModelo]
                  }))
                }}
                />
              <Pecas_montagem
                peca="Placa de video"
                modelo={pecas.placa_video}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'placa_video': [novoModelo]
                  }))
                }}
                />
              <Pecas_montagem
                peca="Gabinete"
                modelo={pecas.gabinete}
                onChangeModelo={(novoModelo)=>{
                  setMontagem(prev => (
                    {
                    ...prev,
                    'gabinete': [novoModelo]
                  }))
                }}
                />
            </tbody>
          </table>

          <h3>Total: R$ {total.toFixed(2).replace(".",",") || "00,00"}</h3>
        </div>
      </main>
  )
}