import { FETCH_SEARCH  } from '../actions/type';

const initialState = {
    forcast: [],
    forcasts: [],
    temper: '',
    cityName: '',
    cityId: ''
};

export default function (state = initialState, action) {
    console.log("iam FETCH_SEARCH reducer ")
    switch (action.type) {
        case FETCH_SEARCH:
            return {
                ...state,
                forcast: action.data,
                cityName: action.cityName,
                cityId: action.cityId,
                forcasts: action.forcasts
            };

        default:
            return state;
    }
}
