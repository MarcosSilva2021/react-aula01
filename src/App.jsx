import Banner from "./components/Banner";
import Card from "./components/Card";
import CardDinamico from "./components/CardDinamico";
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
      
      <CardDinamico>
        <h1>Noticias 4</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBg-DTLOdKR3vqhNKwus_TI8HPaRQX1Fi8R9kl0mQBA&s=10" alt="" />
        <h6>Esportes</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, recusandae itaque voluptatum quidem voluptatibus iure ab inventore sequi optio pariatur cum autem ipsam quam molestias architecto quos amet incidunt earum?</p>
      </CardDinamico>
      <CardDinamico>
        <h1>Noticias 4</h1>
        <h6>Esportes</h6>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, recusandae itaque voluptatum quidem voluptatibus iure ab inventore sequi optio pariatur cum autem ipsam quam molestias architecto quos amet incidunt earum?</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBg-DTLOdKR3vqhNKwus_TI8HPaRQX1Fi8R9kl0mQBA&s=10" alt="" />
      </CardDinamico>
    </>
    );
}
 
export default App;