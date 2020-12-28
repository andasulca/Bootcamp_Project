import ArticleText from "../Components/ArticleText";
import LightBox from "../Components/LightBox";


function Article() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <LightBox />
                </div>
                <div class="col-6">
                    <ArticleText />
                </div>
            </div>
        </div>
    ); 
}

export default Article;