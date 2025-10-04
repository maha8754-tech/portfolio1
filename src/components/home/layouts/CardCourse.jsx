// import React from "react";
import { useState } from 'react';
import './CardCourse.css'

function CardCourse(props , margintop) {

  const [count, setCount] = useState(0)

  return (
    <div id="Course">
      <div className='image-container'>
       <img className="img-card"
         src={props.image} 
         alt={props.alt}/>
      </div>
      <div>
      <span className="course-mode-card">
        <i className='fas fa-circle blue'></i>
        {props.sort}
        </span>
      <h2 className="titr-card">{props.title}</h2>
      <p className="description-card">{props.description}</p>
      </div>

      <div className="info-course-card">
        <span className="time-course">
          <i className='far fa-dot-circle time'></i>
         {props.time}
        </span>
        <button className='btnLike-course' onClick={() => setCount((count) => count + 1)}>
            <i class='far fa-heart red'></i> {count}
        </button>
        {/* <button className="btnLike-course" 
        onClick={props.onButtonClick}>
        <i class='far fa-heart red'></i>
        {props.buttonText}
       </button> */}
       <span className="price-course-card">{props.price}</span>
      </div>

      {/* برای جدا کننده */}
      <div id="hr-card"></div>
      <div className="infoMore-see-course">
        <a href="">
        <span className="more">مشاهده اطلاعات دوره 
          <i className='fas fa-reply blue'></i>
        </span>
        {/* <span>{props.info}</span> */}
        
        </a>
      </div>

    </div>
  );
}

export default CardCourse;
