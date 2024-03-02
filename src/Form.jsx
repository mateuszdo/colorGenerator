import React from 'react'

const Form = ({color, setColor, colors, setColors, generateColor, toast}) => {

    
    const handleSubmit = (e) => {
        e.preventDefault();
        isValidHex(color);
        if(!isValidHex(color)) {
            toast.error(`This color is incorrect`);
        } else {
            generateColor();
            console.log(color);
        }
    }
    const handleColorChange = (e) => {
        setColor(e.target.value);
        setColors([]);
    }
    
    function isValidHex(color) {
        if(!color || typeof color !== 'string') return false;
    
        // Validate hex values
        if(color.substring(0, 1) === '#') color = color.substring(1);
    
        switch(color.length) {
            case 3: return /^[0-9A-F]{3}$/i.test(color);
            case 6: return /^[0-9A-F]{6}$/i.test(color);
            case 8: return /^[0-9A-F]{8}$/i.test(color);
            default: return false;
        }
    
        return false;
    }

    return (
        <form onSubmit={handleSubmit} className='color-form'>
            <h4>Color Generator</h4>
            <input 
                type='color' 
                name='color' 
                value={color} 
                className='color-input'
                onChange={handleColorChange}></input>
            <input 
                type='text' 
                name='text' 
                value={color}
                onChange={handleColorChange}></input>
            <button type='submit' className='btn'>Generate</button>
        </form>
    )
}

export default Form
