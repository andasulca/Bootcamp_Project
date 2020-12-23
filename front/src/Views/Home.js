import CardsHomePage from "../Components/CardsHomePage";
import ControlledCarousel from "../Components/ControlledCarousel";


function Home() {
    return (
        <div className="container">
            <ControlledCarousel />
            <CardsHomePage />
        </div>
    ); 
}

export default Home;