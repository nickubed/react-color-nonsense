import React, {useState} from 'react';
import ColorForm from './ColorForm'
import './App.css';

const App = (props) => {
  let [newColor, setNewColor] = useState('')
  let [colors, setColors] = useState(props.colors)

  const colorMap = colors.map((color, i) => {
    return (
      <div key={i}>
        <div className="colorBlock" style={{'background-color': `${color}`}}></div>
      </div>
    )
  })

  const addColor = (userColor) => {
    setNewColor(userColor)
    // janky, removes "latency"
    newColor = userColor
    setColors(colors.concat(newColor))
  }
  
  return (
    <div className="App">
      <ul>
        {colorMap}
      </ul>
      <ColorForm addColor={addColor} />
    </div>
  );
}

export default App;
