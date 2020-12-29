import pData from "../Data/pData.js"

function ArticleText() {
    const articleParagraph = pData.map((p, index) => <p key={index}> {p}</p>)
    
    return (
        <div>
            {articleParagraph}
        </div>
    )
}

export default ArticleText;