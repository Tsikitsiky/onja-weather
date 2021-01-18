import React, { useContext } from 'react'
import {Context} from "../Context";
import styled from 'styled-components';

const DivStyle = styled.div`
width: 90%;
padding: 1rem;
text-align: center;
background: #1E213A;
@media(min-width: 1000px) {
    
    
}
.progress-bar {
    width: 100%;
}
.bold {
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
}
.percent {
    text-align: right;
}
.percent-number {
    display: flex;
    justify-content: space-between;
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
    const {state} = useContext(Context)
    const {loading, weatherDetail} = state;
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div className="highlights-container">
            <h3 className="light-text">Today's highlights</h3>
            <DivContainer>
                <DivStyle>
                    <p>Wind status</p>
                    <p className="light-text">
                        <span className="bold">{Math.round(weatherDetail.consolidated_weather?.[0].wind_speed)}</span> mph</p>
                    <p className="wind">{weatherDetail.consolidated_weather?.[0].wind_direction_compass}</p>
                </DivStyle>
                <DivStyle>
                    <p>Humidity</p>
                    <p className="light-text">
                        <span className="bold ">{weatherDetail.consolidated_weather?.[0].humidity}</span> %</p>
                    <div className="progerss-bar">
                        <div className="percent-number">
                            <span>0</span>
                            <span>50</span>
                            <span>100</span>
                        </div>
                        <div className="wrapper">
                            <div style={{width:`${weatherDetail.consolidated_weather?.[0].humidity}%`}}>
                                <div className="percentage"></div>
                            </div>
                        </div>
                        <div className="percent">%</div>
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
        </div>}
        </div>
    )
}

export default Highlights
