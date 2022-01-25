import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Algo from '../components/Algo.jsx';
import { fetchAndSetAlgo } from '../actions/actions';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAndSetAlgo(dispatch);
  }, []);

  const { title, content, examples } = useSelector(state => state.algo);
  
  return <Algo title={title} content={content} examples={examples} />;
};