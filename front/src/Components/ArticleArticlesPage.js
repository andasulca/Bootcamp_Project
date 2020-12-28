

function ArticleArticlesPage(props) {
    return (
        <div className="row mt-2 mb-2 pt-2 pb-2 border-bottom border-dark">
            <div className="col-2">
                <img
                    src="https://dummyimage.com/100x100/000/fff"
                    alt=""
                />
            </div>
            <div className="col-10">
                <div className="row">
                    <h3>{props.item.header}
                    </h3>
                </div>
                <div className="row">
                    {props.item.content}
                </div>
            </div>
        </div>
    )
}

export default ArticleArticlesPage;