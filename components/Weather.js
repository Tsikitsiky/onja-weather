import React, { useContext, useState } from 'react';
import {Context} from '../Context'

function Weather() {
    const {currentCity, setCurrentCity, weatherDetail, setWeatherDetail, searchSubmit} = useContext(Context);
    const [isSearch, setIsSearch] = useState(false);
    const [input, setInput] = useState("")
    function submit(e) {
        e.preventDefault();
        setCurrentCity(input);
        searchSubmit(input);
        setIsSearch(false);
    }
    console.log(currentCity)
    return (
        <div  className="weather-today">
            {isSearch ? <div className="search">
                            <button className="btnClear" onClick={() => setIsSearch(false)}>X</button>
                            <form onSubmit={submit}>
                                <input 
                                    placeholder="search location" 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)} />
                                <button  className="btnSubmit">Search</button>
                            </form>
                            <button className="search-result" onClick={submit}>{input}</button>
                        </div>
                        : 
                        <div>
                            <button className="btnSearch" onClick={() => setIsSearch(true)}>Search for places</button>
                            <div className="weatherDesc">
                                <img src={`https://www.metaweather.com/static/img/weather/${weatherDetail.consolidated_weather?.[0].weather_state_abbr}.svg`} />
                                <p>
                                    <span className="temp light-text">{Math.round(weatherDetail.consolidated_weather?.[0].the_temp)}</span>
                                    °C</p>
                                <p className="state-name">{weatherDetail.consolidated_weather?.[0].weather_state_name}</p>
                                <p>Today - {new Date(weatherDetail.consolidated_weather?.[0].applicable_date).toDateString()}</p>
                                <p className="location">Location: {currentCity}</p>
                            </div>
                        </div>}
        </div>
    )
}

export default Weather
