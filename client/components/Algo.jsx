import React from 'react';

export default ({ title, content, examples }) => {

  return <span>
      <h3 className = "algoName" >Today's Algo: {title}</h3>
      <br></br>
      <div className="textarea" rows = "10" cols = "35" readOnly>{content}
      <br></br>
      {examples}
      </div>
      <br></br>
    </span>;
};