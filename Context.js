import React, { createContext, useEffect, useReducer, useState } from 'react'

const Context = createContext();

function ContextProvider({children}) {
    const apiaSearch = 'https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query='
    const [currentCity, setCurrentCity] = useState('moscow');
    const [weather, setWeather] = useState([]);
    const [weatherDetail, setWeatherDetail] = useState({});

    // const [state, dispatch] = useReducer(
    //     (state, action)=> {
    //         switch (action.type) {
    //             case "LOAD_DATA": {
    //                 return {
    //                     ...state,
    //                     loading: false,
    //                     location: action.location,
    //                     currentCity: action.location,
    //                     weather: action.weather,
    //                     weatherDetail: action.detail
    //                 }
    //             };
    //             case "SEARCH_LOCATION": {
    //                 return {
    //                     ...state,
    //                     loading: false,
    //                     location: action.location,
    //                     currentCity: action.input,
    //                     weather: action.weather,
    //                     weatherDetail: action.detail
    //                 }
    //             }
    //             default: "No location"
    //                 break;
    //         }
    //     }, {
    //         loading: true,
    //         location: "moscow",
    //         currentCity: "moscow",
    //         weather: [],
    //         weatherDetail: {}
    //     })

    async function fetchData(city) {
        let api = `${apiaSearch}${city}`;
        console.log(api)
        const data = await fetch(api);
        const response = await data.json();
         setWeather(response[0]);
        console.log(response);
        if(response.length) {
            const data = await fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${response[0].woeid}`);
            const responseW = await data.json();
             setWeatherDetail(responseW)
            console.log(responseW);
            
        }
    }

    function searchSubmit(input) {
        fetchData(input)
    }

    useEffect(() => {
        fetchData(currentCity)
    },[]);
    console.log(weatherDetail);

    return(
        <Context.Provider value={{currentCity, setCurrentCity, weather, weatherDetail, setWeatherDetail, searchSubmit}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}