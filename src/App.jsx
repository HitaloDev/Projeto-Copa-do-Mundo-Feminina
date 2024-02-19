import "./App.css";
import Card from "./components/Card/Card";
import GameTable from "./components/GameTable/GameTable";
function App() {

  // https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/selecoes.json
  return (
    <>
      <h1>Copa do mundo Feminina 2023</h1>
      <section className="cards">
        <Card />
      </section>

      <h2>Tabela de Jogos</h2>

      <section className="game_table">
        <GameTable />
      </section>
    </>
    );
}

export default App;


