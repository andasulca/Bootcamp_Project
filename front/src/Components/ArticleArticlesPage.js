import { Link } from 'react-router-dom'

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
                    <h3><Link to="/article">{props.item.header}</Link>
                    </h3>
                </div>
                <div className="row">
                    <p><Link to="/article">{props.item.content}</Link></p>
                </div>
            </div>
        </div>
    )
}

export default ArticleArticlesPage;