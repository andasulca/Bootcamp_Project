import CardsHomePage from "../Components/CardsHomePage";
import Carousel from "../Components/Carousel";

function Home() {
    return (
        <div className="container">
            <CardsHomePage />
            <h1>This is Home page</h1>
            <Carousel />
        </div>
    ); 
}

export default Home;