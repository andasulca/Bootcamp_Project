function Pagination() {
    return (
        <div class="container">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class="page-item">
                    <a class="page-link" href="/articles" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="/articles">1</a></li>
                    <li class="page-item"><a class="page-link" href="/articles">2</a></li>
                    <li class="page-item"><a class="page-link" href="/articles">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="/articles" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination