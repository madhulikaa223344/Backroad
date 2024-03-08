import React from 'react'

const Title = ({first_word,second_word}) => {
  return (
    <div className="section-title">
      <h2>
        {first_word} <span>{second_word}</span>
      </h2>
    </div>
  );
}

export default Title
