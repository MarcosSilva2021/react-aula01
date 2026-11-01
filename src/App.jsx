const OlaMundo = () => {
  return (
    <h1>hello Dev</h1>
  )
}

function Soma() {
  const valor = 1 +1;
  return (
    <p>{valor}</p>
  );
}

const App = () => {
  return (
    <>
    <OlaMundo/>
    <Soma/>    
    </>
  );
}

export default App;
