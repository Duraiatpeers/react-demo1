import {articles} from '../data/articles'
import ArticleCard from './ArticleCard.jsx'

function ArticleList(){


    return (

        <div className="article-grid" >
                {articles.map ( 
                    article =>
                        <ArticleCard key={article.id} article={article} /> 
                )
                }
            
        </div>

    )

}

export default ArticleList