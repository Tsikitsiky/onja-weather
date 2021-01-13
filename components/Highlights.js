import React, { useContext } from 'react'
import {Context} from "../Context";
import styled from 'styled-components';

const DivStyle = styled.div`
width: 100%;
text-align: center;
background: #1E213A;
@media(min-width: 376px) {
    width: 200px;
    height: 100px;
    padding: 1rem;
}
.bold {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
}
`;

const DivContainer = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
@media(min-width: 376px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
}
`;

function Highlights() {
    const {weatherDetail} = useContext(Context);
    return (
        <div className="highlights-container">
            <h3>Today's highlights</h3>
            <DivContainer>
                <DivStyle>
                    <p>Wind status</p>
                    <p className="bold">{Math.round(weatherDetail.consolidated_weather?.[0].wind_speed)} mph</p>
                    <p>{weatherDetail.consolidated_weather?.[0].wind_direction_compass}</p>
                </DivStyle>
                <DivStyle>
                    <p>Humidity</p>
                    <p className="bold">{weatherDetail.consolidated_weather?.[0].humidity} %</p>
                    <p></p>
                </DivStyle>
                <DivStyle>
                    <p>Visibility</p>
                    <p className="bold">{Math.round(weatherDetail.consolidated_weather?.[0].visibility)} miles</p>
                    <p></p>
                </DivStyle>
                <DivStyle>
                    <p>Air Pressure</p>
                    <p className="bold">{weatherDetail.consolidated_weather?.[0].air_pressure} mb</p>
                    <p></p>
                </DivStyle>
            </DivContainer>
        </div>
    )
}

export default Highlights
