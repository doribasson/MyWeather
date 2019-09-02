import { FETCH_WEATHER } from './type';
import axios from 'axios';


export function fetchAction() {
    return function (dispatch) {
        return axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/215854?apikey=sw6KP9xtcxxdfcjATTiMPxcUAaBifaFl')
            .then(response => {console.log("this is data forcast",response.data.DailyForecasts[0].Date)
                dispatch({
                    type: FETCH_WEATHER,
                    payload: response.data.DailyForecasts
                });
            })
    }
}



