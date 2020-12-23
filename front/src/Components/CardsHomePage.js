import CardHomePage from "./CardHomePage"
import cardsData from "../Data/cardsData"

function CardsHomePage() {
    const cardsWithData = cardsData.map(item => <CardHomePage key={item.id} item={item}/>)

    return (
        <div>
            {cardsWithData}
        </div>
    )
}

export default CardsHomePage