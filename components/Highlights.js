import React, { useContext } from 'react'
import {Context} from "../Context";
import styled from 'styled-components';

const DivStyle = styled.div`
width: 90%;
text-align: center;
background: #1E213A;
@media(min-width: 1000px) {
    
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
@media(min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
`;

function Highlights() {
    const {weatherDetail} = useContext(Context);
    return (
        <div className="highlights-container">
            <h3 className="light-text">Today's highlights</h3>
            <DivContainer>
                <DivStyle>
                    <p>Wind status</p>
                    <p className="light-text">
                        <span className="bold">{Math.round(weatherDetail.consolidated_weather?.[0].wind_speed)}</span> mph</p>
                    <p>{weatherDetail.consolidated_weather?.[0].wind_direction_compass}</p>
                </DivStyle>
                <DivStyle>
                    <p>Humidity</p>
                    <p className="light-text">
                        <span className="bold ">{weatherDetail.consolidated_weather?.[0].humidity}</span> %</p>
                    <div className="wrapper">
                        <div style={{width:`${weatherDetail.consolidated_weather?.[0].humidity}%`}}>
                            <div className="percentage"></div>
                        </div>
                    </div>
                </DivStyle>
                <DivStyle>
                    <p>Visibility</p>
                    <p className="light-text">
                        <span className="bold ">{Math.round(weatherDetail.consolidated_weather?.[0].visibility)}</span> miles</p>
                    <p></p>
                </DivStyle>
                <DivStyle>
                    <p>Air Pressure</p>
                    <p className="light-text">
                        <span className="bold">{weatherDetail.consolidated_weather?.[0].air_pressure}</span> mb</p>
                    <p></p>
                </DivStyle>
            </DivContainer>
        </div>
    )
}

export default Highlights
