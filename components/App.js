import React from 'react'
import Convert from './Convert'
import Highlights from './Highlights'
import Weather from './weather'
import WeatherIn5days from './WeatherIn5days'

function App() {
    return (
        <div>
            <Convert />
            <Weather />
            <WeatherIn5days />
            <Highlights />
        </div>
    )
}

export default App
