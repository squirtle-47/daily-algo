import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Algo from '../components/Algo.jsx';
import AlgoSubmitter from '../components/AlgoSubmitter.jsx';
import { fetchAndSetAlgo, clearAllTestStatus, setTestStatus } from '../actions/actions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAndSetAlgo(dispatch);
  }, []);

  const { title, content, examples, algo_id, tests } = useSelector(state => state.algo);

  const clearAllTestStatusWrapper = () => {
    dispatch(clearAllTestStatus());
  };

  const setTestStatusWrapper = ({ idx, status, error }) => {
    dispatch(setTestStatus({ idx, status, error }));
  };
  
  return <>
    <Algo title={title} content={content} examples={examples} algo_id={algo_id} />
    <AlgoSubmitter 
      algo_id={algo_id}
      tests={tests}
      clearAllTestStatus={clearAllTestStatusWrapper}
      setTestStatus={setTestStatusWrapper}
    />
  </>;
};