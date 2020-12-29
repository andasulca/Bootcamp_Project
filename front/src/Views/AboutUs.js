import { AddressMap } from "../Components/GoogleMaps";
import TabsWithCards from "../Components/TabsWithCards";
import TextAboutUsPage from "../Components/TextAboutUsPage";

function AboutUs() {
    return (
        <div>
            <TabsWithCards />
            <div className="row">
                <div className="col">
                    <AddressMap />
                </div>
                <div className="col text-left">
                    <TextAboutUsPage />
                </div>
            </div>
        </div>
    ); 
}

export default AboutUs;