import React, { useEffect, useState } from 'react'
import './gametable.css'

const GameTable = () => {

    const [ jogos, setJogos ] = useState([])

    useEffect( () => {
        const buscarJogos = async () => {

            const response = await fetch("https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/tabela-copa-feminina-2023.json")

            const data = await response.json();

            setJogos(data)
        }

        buscarJogos()
    }, [])

  return (
    <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Dia</th>
                    <th>Data</th>
                    <th>Hora</th>
                    <th>Grupo</th>
                    <th colSpan={5}>Jogo</th>
                </tr>
            </thead>

            <tbody>
                {
                    jogos.map( (jogo) => (
                        <tr key={jogo.jogo}>
                            <td>{jogo.dia}</td>
                            <td>{jogo.data}</td>
                            <td>{jogo.hora}</td>
                            <td>{jogo.grupo}</td>
                            <td>
                                <span className='direita'>
                                    {jogo.mandante}
                                    <img src={`/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`} alt={jogo.mandante} />
                                </span>
                            </td>
                            <td className='gols'>                              
                                {jogo.gols_mandante}
                            </td>
                            <td>X</td>
                            <td className='gols'>
                                {jogo.gols_visitante}
                            </td>
                            <td>
                                <span className='esquerda'>
                                    <img src={`/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`} alt={jogo.visitante} />
                                    {jogo.visitante}
                                </span>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default GameTable