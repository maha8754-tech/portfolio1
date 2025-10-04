// import React from "react";
import { useState } from 'react';
import './CardArticle.css'

function CardArticle(article) {

  const [count, setCount] = useState(0)

  return (
    <div id="Article">
       <img className="img-article"
         src={article.images} 
         alt={article.alt}
        />

        <div>
            <h4 className="titr-article">{article.title}</h4>
        </div>
        <div className="info-article-card">
            <div className='info-author'>
                <img className='img-author' src={article.imgAuthor} alt="" />
                <span className='author'>
                    {article.author}
                </span>
                {/* <a href=""></a> */}
                <span className='category-art'>
                    <i class="fa fa-folder"></i>
                    {article.category}
                </span>
            </div>
            <div className='btns-time'>
                <button className='btnComment-article' onClick={() => setCount((count) => count + 1)}>
                    <i class='far fa-comment gray'></i> {count}
                </button>
                <button className='btnLike-article' onClick={() => setCount((count) => count + 1)}>
                    <i class='far fa-heart red'></i> {count}
                </button>
                <button className='btnMark-article' onClick={() => setCount((count) => count + 1)}>
                    <i class='far fa-bookmark'></i>
                </button>
                <div className='times'>
                    {/* <i class="fa fa-bookmark-o"></i> */}
                    <span className='study-time'>
                        <i class='far fa-clock'></i>
                        زمان مطالعه:
                        {article.studyTime}
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CardArticle;
