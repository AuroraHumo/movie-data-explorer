import { API_URL, API_KEYS } from "./apiConfig";
import { useState, useEffect } from "react";


export default function ApiRequests() {
    try {
        //const [data, setData] = useState([]);

        //const headers: HeadersInit = { 'Accept': 'application/json' };

        const answer = async () => fetch(API_URL.STARWARS_SHIPS);
        console.log(answer);
/* 
        if (!answer.ok) {
            throw new Error(`⚠️ API Error: ${answer.status}`);
        }

        const json = await answer.json();

        let joke = '';
        if (apiURL.includes('icanhazdadjoke') && json.joke) {
            joke = json.joke;
        } else if (apiURL.includes('api-ninjas.com') && Array.isArray(json) && json.length > 0 && json[0].joke) {
            joke = json[0].joke;
        } else {
            throw new Error("⚠️ Invalid joke format received from API");
        }

        return { joke };

    } catch (error) {
        return { error: error instanceof Error ? error.message : String(error) };
    }
}

export async function getWeather() {
        const url = `https://www.meteosource.com/api/v1/free/point?lat=41.38879&lon=2.15899&sections=current&timezone=auto&language=en&units=metric&key=${API_KEYS.METEOSOURCE_KEY}`;
    
        try {
            const answer = await fetch(url, {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            });
    
            if (!answer.ok) {
                throw new Error(`⚠️ Weather API Error: ${answer.status}`);
            }
    
            const dades = await answer.json();

            if (
                !dades.current ||
                typeof dades.current.temperature !== 'number' ||
                !dades.current.wind ||
                typeof dades.current.wind.speed !== 'number' ||
                typeof dades.current.wind.dir !== 'string' ||
                typeof dades.current.cloud_cover !== 'number'
            ) {
                throw new Error("⚠️ Invalid weather data format received from API");
            }
    
            return {
                temperature: dades.current.temperature,
                windSpeed: dades.current.wind.speed,
                windDir: dades.current.wind.dir,
                cloudCover: dades.current.cloud_cover
            }; */
    
        } catch (error) {
            return { error: error instanceof Error ? error.message : String(error) };
        }
    }



