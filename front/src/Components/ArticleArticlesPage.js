function ArticleArticlesPage(props) {
    return (
        <div className="row">
            <div className="col">
                <img
                    src="https://dummyimage.com/100x100/000/fff"
                    alt=""
                />
            </div>
            <div className="col">
                <div className="row">
                    {props.item.header}
                </div>
                <div className="row">
                    {props.item.content}
                </div>
            </div>
        </div>
    )
}

export default ArticleArticlesPage;