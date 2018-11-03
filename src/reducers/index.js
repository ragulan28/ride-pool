import {ADD_LOCATION} from "../action";
import {combineReducers} from "redux";

let initialStateLocation ={
    location:{},
    loading:true
};

const getLocationReducer = (state = initialStateLocation, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            state = Object.assign({}, state, {location: action.location, loading: action.loading});
            return state;
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    getLocationReducer: getLocationReducer,
});

export default rootReducer;

