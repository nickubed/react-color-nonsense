import React, {useState} from 'react'

const ColorForm = (props) => {
    let [myColor, setMyColor] = useState('')
    
    const addColor = props.addColor
    
    const setColor = (input) => {
        setMyColor(input)
        myColor = input
    }

    console.log('Color is: ', myColor)

    const handleSubmit = (e) => {
        e.preventDefault()
        addColor(myColor)
    }

    return (
        <div>
            <form>
                <input type="text" name="userColor" value={myColor} onChange={(e) =>{setColor(e.target.value)}}></input>
                <button type="submit" onClick={(e) => {handleSubmit(e)}}>Send it</button>
            </form>
        </div>
    )
}

export default ColorForm