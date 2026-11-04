import Banner from "./components/Banner";
import Card from "./components/Card";
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
      <Card
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZisGfsSaFDhPfR0nAxS6T3OxUznRS6nOtliXwsoXXw&s=10"}
        title={"Noticia 1"} 
        category={"esportes"} 
        paragraph={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia laborum sed, molestias voluptatibus eum quam consequuntur placeat temporibus natus voluptatem deserunt eius iste enim maiores optio mollitia cum excepturi."} 
        tipo={"A"}
      />
        
      <Card
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZisGfsSaFDhPfR0nAxS6T3OxUznRS6nOtliXwsoXXw&s=10"}
        title={"Noticia 2"} 
        category={"Musica"} 
        paragraph={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia laborum sed, molestias voluptatibus eum quam consequuntur placeat temporibus natus voluptatem deserunt eius iste enim maiores optio mollitia cum excepturi."} 
      />
      <Card 
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ZisGfsSaFDhPfR0nAxS6T3OxUznRS6nOtliXwsoXXw&s=10"}
        title={"Noticia 3"} 
        category={"cinema"} 
        paragraph={"Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quia laborum sed, molestias voluptatibus eum quam consequuntur placeat temporibus natus voluptatem deserunt eius iste enim maiores optio mollitia cum excepturi."} 
      />
      
    </>
    );
}
 
export default App;