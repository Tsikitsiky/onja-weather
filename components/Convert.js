import React, { useContext, useState } from 'react'
import { Context } from '../Context'

function Convert() {
    const {isFarenheit, setIsFarenheit} = useContext(Context);
    const classNameC = isFarenheit ? "dark" : "light";
    const classNameF = isFarenheit ? "light" : "dark";
    return (
        <div className="convert">
            <button className= {classNameC} onClick={() => setIsFarenheit(false)}>°C</button>
            <button className= {classNameF} onClick={() => setIsFarenheit(true)}>°F</button>
        </div>
    )
}

export default Convert
