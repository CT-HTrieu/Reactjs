import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';
ColorBox.propTypes = {

};
function getRandomColor() {
    const ColorList = ['deepink', 'green', 'yellow', 'black', 'blue', 'red', 'white'];
    const randomindex = Math.trunc(Math.random() * 7);
    return ColorList[randomindex];
}
function ColorBox() {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deepink';
        return initColor;
    });
    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            ColorBox
        </div>
    );
}

export default ColorBox;