import ArticleText from "../Components/ArticleText";
import LightBox from "../Components/LightBox";

function Article() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <LightBox />
                </div>
                <div className="col-6">
                    <ArticleText />
                </div>
            </div>
        </div>
    ); 
}

export default Article;