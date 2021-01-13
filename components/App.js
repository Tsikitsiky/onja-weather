import React from 'react'
import Highlights from './Highlights'
import Weather from './weather'
import WeatherIn5days from './WeatherIn5days'

function App() {
    return (
        <div>
            <Weather />
            <WeatherIn5days />
            <Highlights />
        </div>
    )
}

export default App
