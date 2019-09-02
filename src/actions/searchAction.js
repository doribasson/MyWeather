
import { FETCH_SEARCH, API_ADDRESS, API_ADDRESS_CURRENT, API_ADDRESS_SEARCH } from '../actions/type';
import axios from 'axios';


export const searchCity = cityQuery => { 
    console.log('iam cityQury', cityQuery);
    return function (dispatch) {
        axios.get(`${API_ADDRESS}${cityQuery}`)
            .then((response => {
                if (response.status !== 200) {
                    throw new Error('Unsuccessful request to deckofcardsapi.com')
                }
                const cityName=response.data[0].LocalizedName;
                const cityId=response.data[0].AdministrativeArea.ID;
                const cityKey = response.data[0].Key;

                axios.get(`${API_ADDRESS_SEARCH}${cityKey}?apikey=sw6KP9xtcxxdfcjATTiMPxcUAaBifaFl`)
                .then((response => {
                    const forcasts = response.data.DailyForecasts;
                    
                axios.get(`${API_ADDRESS_CURRENT}${cityKey}?apikey=sw6KP9xtcxxdfcjATTiMPxcUAaBifaFl`)
                    .then((response => {

                        if (response.status !== 200) {
                            throw new Error('Unsuccessful request to deckofcardsapi.com')

                        }

                        dispatch({
                            type: FETCH_SEARCH,
                            data: response.data,cityName,cityId,forcasts
                        })
                    }))
                }))
            }))
            

            .catch((error) => {
                console.log("this city not found");
                alert("this city not found");
            })

    }
   
}                                                                                                     
