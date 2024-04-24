import React from 'react'
import './css/courses.css';

function course({course}) {
  const {id , title , instructor , price , image , url , description} = course;
  
  return (
    <div className='course'>

        <div>
            <img  src={image} width={300} height={200} />
            <h4 className='TitleClass'>{title}</h4>
            <h5>{description}</h5>
            <h3>{price}$</h3>
            <a className='URL' href={url}> Please buy ME! </a>
        </div>

    </div>
  )
}

export default course    
