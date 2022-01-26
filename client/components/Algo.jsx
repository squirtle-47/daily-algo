import React from 'react';

export default ({ title, content, examples }) => {

  return <span>
    <h3>{title}</h3>
    <br></br>
    <textarea rows = "10" cols = "35" value = {content} readOnly>
    </textarea>
    <br></br>
    <p>ex:</p>
    {examples}
    </span>;
};