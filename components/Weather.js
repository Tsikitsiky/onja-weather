import React, { useContext, useState } from 'react';
import {Context} from '../Context';

function Weather() {
    const {state, searchSubmit, getSearchResult, isFarenheit} = useContext(Context);
    const {loading,currentCity, weatherDetail, searchResult} = state;
    console.log(state.currentCity)
    const [isSearch, setIsSearch] = useState(false);
    const [input, setInput] = useState("");
    function submit(e) {
        e.preventDefault();
        getSearchResult(input);
        console.log("submit");
    }

    function submitCity(city) {
        searchSubmit(city);
        setIsSearch(false);
    console.log(city)
    }
    
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
                            {searchResult?.map(city => <button className="search-result" value={city.title} onClick={() => submitCity(city.title)}>{city.title}</button>)}
                        </div>
                        : 
                        <div>
                            <button className="btnSearch" onClick={() => setIsSearch(true)}>Search for places</button>
                            {loading ? <h1>Loading...</h1> : <div className="weatherDesc">
                                <img src={`https://www.metaweather.com/static/img/weather/${weatherDetail.consolidated_weather?.[0].weather_state_abbr}.svg`} />
                                {isFarenheit ? <p>
                                    <span className="temp light-text">{(Math.round(weatherDetail.consolidated_weather?.[0].the_temp * 9 / 5) + 32)}</span>
                                    °F</p>
                                : <p>
                                    <span className="temp light-text">{Math.round(weatherDetail.consolidated_weather?.[0].the_temp)}</span>
                                    °C</p> }
                                <p className="state-name">{weatherDetail.consolidated_weather?.[0].weather_state_name}</p>
                                <p>Today - {new Date(weatherDetail.consolidated_weather?.[0].applicable_date).toDateString()}</p>
                                <p className="location">{currentCity}</p>
                            </div>}
                        </div>}
        </div>
    )
}

export default Weather
