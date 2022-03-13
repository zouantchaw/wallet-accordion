import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
  return (
    <article className="wallet">
      <header>
        <h4>{title}</h4>
        <div className="btn">btn</div>
      </header>  
      <p>{info}</p>
    </article>
  )
};

export default Question;
