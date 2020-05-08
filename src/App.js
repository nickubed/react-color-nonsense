import React, {useState, useEffect} from 'react';
import ColorForm from './ColorForm'
import './App.css';

function App(props) {
  let [newColor, setNewColor] = useState('')
  let [colors, setColors] = useState(props.elements)

  const colorMap = colors.map((color, i) => {
    return (
      <li key={i}>
        <div style={{'background-color': `${color}`}}>{color}</div>
      </li>
    )
  })

  const addColor = (userColor) => {
    setNewColor(userColor)
    setColors(colors.concat(newColor))
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
