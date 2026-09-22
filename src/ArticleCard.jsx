function ArticleCard({article}){
    return (
        <div className='card'>
            <h3 >{article.title}</h3>
            <p>{article.author}</p>
            <p>{article.description}</p>
            <p>Likes: {article.likes}</p>
        </div>
    )

}

export default ArticleCard