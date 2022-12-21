import React, { useState } from 'react';
import './App.css';

function App() {
  const [dot, setDot] = useState([])
  const [refazerDot, setRefazerDot] = useState([])

  const addDot = (e) => {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY 
    }
    setDot((prevState) => [...prevState, newDot])
  }
  let list = [];

  const desfazer = () => {
    if(dot.length < 1) return null
    else setDot(list = dot.slice(0, -1)) 
    setRefazerDot((prev) => [...prev, list])
    console.log(refazerDot)
  }

  const refazer = () => {
    const recod = refazerDot[refazerDot.length -1]
    setDot([...dot, recod])
    console.log(recod)
  }

  return (
    <div className='container'>
      <div id='father' onClick={addDot}>
        {dot.map((dots, index) => (
        <p
          className='childrenDot'
          key={index}
          style={{top: dots.clientY, left: dots.clientX}}
        > </p>
      ))}
      </div>
      <button onClick={desfazer}>Desfazer</button> <button onClick={refazer}>Refazer</button>
    </div>

  );
}

export default App;
