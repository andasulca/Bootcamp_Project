import cardsData from "../Data/cardsData"
import ArticleArticlesPage from "./ArticleArticlesPage"
function ArticlesArticlesPage() {
    const ArticleWithData = cardsData.map(item => <ArticleArticlesPage key={item.id} item={item}/>)
    return (
        <div>
            {ArticleWithData}
        </div>
    )
}

export default ArticlesArticlesPage