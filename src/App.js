import React, { useState } from 'react';
import './App.css';

function App() {
  const [dot, setDot] = useState([])
  const handleClick = (e) => {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY 
    }
    setDot((prevState) => [...prevState, newDot])
  }
  

  return (
    <div id='father' onClick={handleClick}>
      {dot.map((dots, index) => (
      <p
        className='childrenDot'
        key={index}
        style={{top: dots.clientY, left: dots.clientX}}
      > </p>
    ))}
    </div>
  );
}

export default App;
