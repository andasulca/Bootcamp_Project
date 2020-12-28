import pData from "../Data/pData.js"

function ArticleText() {
    const articleParagraph = pData.map((p, index) => <p key={index}> {p}</p>)
    
    return (
        <div className="text-left">
            {articleParagraph}
        </div>
    )
}

export default ArticleText;