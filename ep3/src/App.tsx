import NotFoundIcon from "./icons/NotFoundIcon";
import SearchIcon from "./icons/SearchIcon";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 24, fontFamily: "Roboto" }}>Não encontramos resultados para sua pesquisa.</p>
        <NotFoundIcon width={400} height={400} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 24, fontFamily: "Roboto" }}>Porém, você pode pesquisar no google!</p>
        <a href="https://www.google.com.br" target="_blank">
          <SearchIcon width={100} height={100} />
        </a>
      </div>
    </div>
  );
}

export default App;
