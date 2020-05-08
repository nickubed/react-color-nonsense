import React, {useState, useEffect} from 'react';
import ColorForm from './ColorForm'
import './App.css';

function App(props) {
  let [newColor, setNewColor] = useState('')

  const colorMap = props.elements.map((color, i) => {
    return (
      <li key={i}>
        <div style={{'background-color': `${color}`}}>{color}</div>
      </li>
    )
  })

  const addColor = (userColor) => {
    setNewColor(userColor)
  }
  
  return (
    <div className="App">
      <ul>
        {colorMap}
        <li><div style={{'background-color': `${newColor}`}}>{newColor}</div></li>
      </ul>
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
