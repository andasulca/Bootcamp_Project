import CardHomePage from "./CardHomePage"
import cardsData from "../Data/cardsData"

function CardsHomePage() {
    const cardsWithData = cardsData.map(item => <CardHomePage key={item.id} item={item}/>)

    return (
        <div className="container">
            <div className="row d-flex justify-content-between">
            {cardsWithData}
            </div>
        </div>
    )
}

export default CardsHomePage