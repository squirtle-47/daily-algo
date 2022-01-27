import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEditorCode } from '../actions/actions';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

//import "./prism.css";

export default () => {
  const dispatch = useDispatch();
  const code = useSelector(state => state.algo.code);

  const setEditorCodeWrapper = (code) => {
    dispatch(setEditorCode(code));
  };

  return <Editor
    className="textarea"
    value={code}
    onValueChange={setEditorCodeWrapper}
    highlight={code => highlight(code, languages.js)}
    padding={10}
  />;
}