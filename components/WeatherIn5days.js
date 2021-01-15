import React, { useContext } from 'react';
import {Context} from '../Context';
import styled from 'styled-components';

export const FiveWeather = styled.div`
    width: 120px;
    background: #1E213A;
    padding: 1rem;
    .degree {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
    `;

const FiveWeatherContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 1rem;
    @media(min-width:1000px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }`;

function WeatherIn5days() {
    const {state, isFarenheit} = useContext(Context)
    const {weatherDetail} = state;
    console.log(weatherDetail.consolidated_weather);
    return (
        <FiveWeatherContainer>
            {weatherDetail.consolidated_weather?.slice(1).map(weather => {
                return (
                    <FiveWeather key={weather.id}>
                        <p>{new Date(weather.applicable_date).toDateString()}</p>
                        <img src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} />
                        {isFarenheit 
                            ? <p className="degree">
                                <span className="light-text">{(Math.round(weather.min_temp) * 9/5) + 32}°F</span>
                                <span>{(Math.round(weather.max_temp) * 9 / 5) + 32}°F</span>
                            </p> 
                            : <p className="degree">
                                <span className="light-text">{Math.round(weather.min_temp)}°C</span>
                                <span>{Math.round(weather.max_temp)}°C</span>
                            </p>}
                    </FiveWeather>
                )
            })}
        </FiveWeatherContainer>
    )
}

export default WeatherIn5days
