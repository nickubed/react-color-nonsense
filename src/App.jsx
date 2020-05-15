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

  const isValidColor = (strColor) => {
    var s = new Option().style;
    s.color = strColor;
    // return 'false' if color wasn't assigned
    return s.color == strColor.toLowerCase();
}

  const addColor = (userColor) => {
    if (isValidColor(userColor)) {
      setNewColor(userColor)
      setColors(colors.concat(userColor))
    }
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
