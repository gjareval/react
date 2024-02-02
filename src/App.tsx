import ListGroup from "./components/ListGroup";

function App() {
  const ciudades = ["Guayaquil", "Quito", "Cuenca", "Ambato"];

  const handleSelectedItem = (ciudad: string) => {
    console.log(ciudad);
  };

  return (
    <div>
      <ListGroup
        items={ciudades}
        encabezado="Ciudades del Ecuador"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
