const ArticleList = ({ articles }) => {
    return (
        <ul>
            {articles.map(({ objectID, url, title }) => (
                <li key={objectID}>
                    <a href={url} target="_blank" rel="noreferrer" >
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default ArticleList