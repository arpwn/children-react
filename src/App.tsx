import Card from "./components/Card";

// Componente padre
function App () {
  return (
    <>
      <Card>
        <h2>Título</h2>
        <p>Descripción del contenido</p>
      </Card>

      <Card>
        <button>Guardar</button>
      </Card>
    </>
  );
}

export default App;