import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';

export default function App(props) {
  const count = useSelector((state) => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({type:"INC"})}>INC</button>
      <button onClick={() => dispatch({type:"DEC"})}>DEC</button>
    </div>
  );
}


