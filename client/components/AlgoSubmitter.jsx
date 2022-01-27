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
        postMessage({ status: 'error', error: err.message });
      }
    };
  `;
  return new Promise((resolve) => {
    console.log('creating blob')
    const blob = new Blob([userText, testHandler], {type: 'text/javascript'});
    console.log('creating worker')
    const worker = new Worker(URL.createObjectURL(blob));
    console.log('created worker')
    worker.onerror =  (e) => {
      console.log('got error:', e);
      resolve({ status: 'error', error: e.message });
    }
    worker.onmessage = (e) => {
      console.log('got response:', e);
      resolve(e.data);
    };
    worker.postMessage(checkText);
  }); 
}

export default ({ algo_id, tests, clearAllTestStatus, setTestStatus, code }) => {
  function testAndSubmit() {
    //const userAlgo = document.getElementById('user-algo').value;
    const userAlgo = code;
    clearAllTestStatus();
    let promiseChain = new Promise(resolve => resolve());
    let allPass = true;

    promiseChain = promiseChain.then(() => {
      return fetch('/api/attempt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ algo_id }),
      });
    })

    for (let idx = 0; idx < tests.length; idx++) {
      promiseChain = promiseChain
        .then(() => testUserInput(userAlgo, tests[idx].test))
        .then(({ status, error }) => {
            console.log("Got test result:", status, error);
            if (status !== 'success') {
              allPass = false;
            }
            setTestStatus({ idx, status, error })
        });
    }

    promiseChain = promiseChain.then(() => {
      if (allPass) {
        return fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ algo_id }),
        });
      }
    });
  }

  const testComponents = tests.map(({ test, status, error }, idx) => {
    return <AlgoTest key={idx} test={test} status={status} error={error} />;
  })

  const showTests = !!(tests.filter(x => x.status).length);
  const testsClass = showTests ? "textarea" : "hidden";

  return <>
    <br />
    <button id="btn-test" class="logoutButton" onClick={testAndSubmit}>Test and submit</button>
    <br />
    <div className={testsClass}>Test Results:
    <ul>
      {testComponents}
    </ul>
    </div>
  </>;
};

