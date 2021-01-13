import React, { useContext } from 'react';
import {Context} from '../Context';
import styled from 'styled-components';

export const FiveWeather = styled.div`
    max-width: 200px;
    background: #1E213A;
    padding: 1rem`;

const FiveWeatherContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
    @media(min-width:376px) {
        justify-content: space-between;
    }`;

function WeatherIn5days() {
    const {weatherDetail} = useContext(Context);
    console.log(weatherDetail.consolidated_weather);
    return (
        <FiveWeatherContainer>
            {weatherDetail.consolidated_weather?.slice(1).map(weather => {
                return (
                    <FiveWeather key={weather.id}>
                        <p>{weather.applicable_date}</p>
                        <img src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} />
                        <p>
                            <span>{Math.round(weather.min_temp)}°C  </span>
                            <span>{Math.round(weather.max_temp)}°C</span>
                        </p>
                    </FiveWeather>
                )
            })}
        </FiveWeatherContainer>
    )
}

export default WeatherIn5days
