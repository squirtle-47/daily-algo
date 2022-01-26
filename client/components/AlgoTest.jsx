import React from 'react';

export default ({ test, status, error }) => {
  let statusClass;
  if (!status) {
    statusClass = 'test-untested';
  }
  else if (status === 'success') {
    statusClass = 'test-success';
  }
  else if (status === 'failure') {
    statusClass = 'test-failure';
  }
  else if (status === 'error') {
    statusClass = 'test-error';
  }
  else {
    throw new Error("Unknown test status");
  }

  if (error) {
    return <div className={statusClass}>
      {test}
      <br />
      Error: {error}
    </div>
  }
  else {
    return <div className={statusClass}>
      {test}
    </div>
  }
}