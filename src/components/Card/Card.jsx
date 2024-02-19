import React from "react";
import "./card.css";
import { useState, useEffect } from "react";
const Card = () => {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const buscarGrupos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/selecoes.json"
      );
      const data = await response.json();
      setGrupos(data);
    };
    buscarGrupos();
  }, []);

  return (
    <>
      {grupos.map((grupo) => (
        <section className="card" key={grupo.grupo}>
          <div className="linha" style={{ backgroundColor: grupo.cor }}></div>
          <h2>GRUPO {grupo.grupo}</h2>
          {grupo.selecoes.map((selecao) => (
            <ul key={selecao.sigla}>
              <li>
                <img src={`/bandeiras/${selecao.imagem}.png`} alt={selecao.selecao} />
                {selecao.selecao}
              </li>
            </ul>
          ))}
        </section>
      ))}
    </>
  );
};

export default Card;
