import NeoGrid from "./components/Grid";

const App = () => {
  return (
    <>
      <header>
        <h1 style={{ marginBottom: "15px" }}>Near-Earth Object Overview</h1>
      </header>
      <main>
        <NeoGrid />
      </main>
      <footer />
    </>
  );
};

export default App;
