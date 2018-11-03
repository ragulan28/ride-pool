
export const ADD_LOCATION = 'ADD_LOCATION';

export function getLocation(latitude) {

    return (dispatch) => {
        dispatch({type: ADD_LOCATION, location: latitude, loading: false});

        // return fetch(URL)
        //     // {
        //     //     headers: {
        //     //         Authorization: 'Bearer ' + store.getState().postLoginReducer.accessToken
        //     //     }
        //     // })
        //
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         if (responseJson.error) {
        //             throw responseJson.error;
        //         }
        //         // setTimeout(() => {
        //         const location = responseJson.content;
        //         dispatch({type: ADD_LOCATION, location: location, loading: false});
        //         // }, 2000);
        //
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //         dispatch({
        //             type: ADD_LOCATION,
        //             location:null
        //         });
        //     });

    };
}


