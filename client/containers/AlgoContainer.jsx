import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Algo from '../components/Algo.jsx';
import AlgoSubmitter from '../components/AlgoSubmitter.jsx';
import { fetchAndSetAlgo } from '../actions/actions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAndSetAlgo(dispatch);
  }, []);

  const { title, content, examples, algo_id, tests } = useSelector(state => state.algo);
  
  return <>
    <Algo title={title} content={content} examples={examples} algo_id={algo_id} />
    <AlgoSubmitter algo_id={algo_id} tests={tests} />
  </>;
};