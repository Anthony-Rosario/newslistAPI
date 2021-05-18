import React from 'react'
import PropTypes from 'prop-types'
import NewsArticles from './NewsArticles';


function NewsArticleList({ articles }) {
  return (
    <ul aria-label='news-article-list'>
    
      {articles.map((article) => (
        <li key={`${article.author}-${article.title}`}>
          <NewsArticles
          author={article.author}
          title={article.title}
          description={article.description}
          url={article.url}
          content={article.content}
          />
        </li>
      ))}
      
    </ul>
  );
};

NewsArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};

export default NewsArticleList;