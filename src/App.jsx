import Banner from "./components/Banner";
import FromaDeBolo from "./components/FormaDeBolo";
import Header from "./components/Header";
import { Componente1, Componente2 } from "./components/VariosComponentes";

const App = () => {
  return (
    <>
      <Header/>
      <Banner/>
      <Componente1/>
      <Componente2/>
      <FromaDeBolo sabor="Laranja" cobertura="Chocolate"/>
      <FromaDeBolo sabor="Milho" cobertura="Morango"/>
    </>
    );
}
 
export default App;