import React, {useState} from 'react'

function ColourPicker() {

    const [colour, setColour] = useState("#FFFFFF");

    function handleColourChange(event) {
        setColour(event.target.value);
    }

    return(
        <div className='Colour-picker-container'>
            <h1>Colour Picker</h1>
            
            <div className='Colour-display' style={{backgroundColor: colour}}>
                <p>Selected Colour: {colour}</p>
            </div>

            <label>Select Colour:</label>
            <input type="color" value={colour} onChange={handleColourChange} />
        </div>
    );
}

export default ColourPicker