import React, {useState, useEffect} from 'react';
import ColorForm from './ColorForm'
import './App.css';

function App(props) {
  let [newColor, setNewColor] = useState('')
  let [colors, setColors] = useState(props.elements)

  const colorMap = colors.map((color, i) => {
    return (
      <div key={i}>
        <div className="colorBlock" style={{'background-color': `${color}`}}></div>
      </div>
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
        <div className="colorBlock" style={{'background-color': `${newColor}`}}></div>
      </ul>
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
