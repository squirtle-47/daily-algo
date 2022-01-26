import React from 'react';

import AlgoTest from './AlgoTest.jsx';

function testUserInput(userText, checkText) {
  const testHandler = ` 
    onmessage = function(e) {
      try {
        result = eval(e.data);
        if (result) {
          postMessage({ status: 'success' });
        }
        else {
          postMessage({ status: 'failure' });
        }
      }
      catch (err) {
        postMessage({ status: 'error', err: err.message });
      }
    };
  `;
  return new Promise((resolve) => {
    const blob = new Blob([userText, testHandler], {type: 'text/javascript'});
    const worker = new Worker(URL.createObjectURL(blob));
    worker.onmessage = (e) => { resolve(e.data) };
    worker.postMessage(checkText);
  }); 
}

export default ({ algo_id, tests, clearAllTestStatus, setTestStatus }) => {

  function testAndSubmit() {
    
  }
  const submit = () => {
    fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ algo_id }),
    });
  };

  const testComponents = tests.map(({ test, status, error }, idx) => {
    return <li><AlgoTest test={test} status={status} error={error} /></li>;
  })


  return <>
    <textarea rows="15" cols="80"></textarea>
    <button onClick={testAndSubmit}>Test and submit</button>
    <ul>
      {testComponents}
    </ul>
  </>;
};

