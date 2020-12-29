import CardsHomePage from "../Components/CardsHomePage";
import ControlledCarousel from "../Components/ControlledCarousel";
import TextHomePage from "../Components/TextHomePage";

function Home() {
    return (
        <div className="container">
            <ControlledCarousel />
            <TextHomePage />
            <CardsHomePage />
        </div>
    ); 
}

export default Home;