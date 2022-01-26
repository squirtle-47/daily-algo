import React from 'react';

export default ({ title, content, examples, algo_id }) => {

  const submit = () => {
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ algo_id }),
    });
  };

  return <span>
      <h3 className = "algoName" >{title}</h3>
      <br></br>
      <textarea rows = "10" cols = "35" value = {content} readOnly>
      </textarea>
      <br></br>
      <p>ex:</p>
      {examples}
      <br />
      <button onClick={submit}>Click me when finished (no cheating!)</button>
    </span>;
};