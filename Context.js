import React, { createContext, useEffect, useReducer, useState } from 'react'

const Context = createContext();

function ContextProvider({children}) {
    const apiaSearch = 'https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=';
    const [isFarenheit, setIsFarenheit] = useState(false)

    const [state, dispatch] = useReducer(
        (state, action)=> {
            switch (action.type) {
                case "LOAD_DATA": {
                    return {
                        ...state,
                        loading: false,
                        weather: action.weather,
                        weatherDetail: action.detail
                    }
                };
                case "LIST_LOCATIONS": {
                    return {
                        ...state,
                        searchResult: action.result
                    }
                }
                case "SEARCH_LOCATION": {
                    return {
                        ...state,
                        loading: false,
                        currentCity: action.input,
                        weather: action.weather,
                        weatherDetail: action.detail
                    }
                }
                default: "No location found"
                    break;
            }
        }, {
            loading: true,
            currentCity: "moscow",
            weather: {},
            weatherDetail: {},
            searchResult: []
        })

    async function fetchData(city) {
        let api = `${apiaSearch}${city}`;
        console.log(api)
        const data = await fetch(api);
        const response = await data.json();
        //  setWeather(response[0]);
        console.log(response);
        if(response.length) {
            const data = await fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${response[0].woeid}`);
            const responseW = await data.json();
            //  setWeatherDetail(responseW)
            dispatch({type: "SEARCH_LOCATION", weather: response[0], detail: responseW, input: city})
            console.log(responseW);
            
        }
    }
    console.log(state)
            
    async function getSearchResult(input) {
        let api = `${apiaSearch}${input}`;
        console.log(api)
        const data = await fetch(api);
        const response = await data.json();
        dispatch({type:"LIST_LOCATIONS", result: response})
        console.log(response);
    }

    

    function searchSubmit(city) {
        fetchData(city)
    }

    useEffect(async() => {
        let api = `${apiaSearch}${state.currentCity}`;
        console.log(api)
        const data = await fetch(api);
        const response = await data.json();
        //  setWeather(response[0]);
        console.log(response);
        if(response.length) {
            const data = await fetch(`https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${response[0].woeid}`);
            const responseW = await data.json();
            //  setWeatherDetail(responseW)
            dispatch({type: "LOAD_DATA", weather: response[0], detail: responseW})
            console.log(responseW);
        }
    },[]);

    console.log(state)

    return(
        <Context.Provider value={{state, dispatch, searchSubmit, getSearchResult, isFarenheit, setIsFarenheit}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}