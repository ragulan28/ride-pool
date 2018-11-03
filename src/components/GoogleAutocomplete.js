import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import React, {Component} from "react";
import {StyleSheet} from "react-native";
// import {bin}

const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};
const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
};

const owner = "ragulan22";

const config = {
    apiKey: "AIzaSyDrtq-Q4yVzjCVWLQ-jr_rQukDxDKjYpcA",
    authDomain: "pitivutu.firebaseapp.com",
    databaseURL: "https://pitivutu.firebaseio.com",
    projectId: "pitivutu",
    storageBucket: "pitivutu.appspot.com",
    messagingSenderId: "267002079127"
}

export default class GoogleAutocomplete extends Component {
    callForRide(location) {
        console.log(location);
    }


    render() {
        return (
            <GooglePlacesAutocomplete
                placeholder="Search"
                minLength={2} // minimum length of text to search
                autoFocus={false}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                listViewDisplayed="auto" // true/false/undefined
                fetchDetails={true}
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => {
                    // console.log(data);
                    this.callForRide(details.geometry.location);
                    // this.props.getLocation(details.geometry.location)
                    // props.setLocation(location.lat,location.lng)
                }}
                getDefaultValue={() => {
                    return ''; // text input default value
                }}
                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: 'AIzaSyBkGzJElnbpk3kj2WdaN4p_o2lkKtOei0E',
                    language: 'en', // language of the results
                    types: '(cities)', // default: 'geocode'
                }}
                styles={{
                    textInputContainer: {
                        // widget:'100%',
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        // backgroundColor: '#388E3C',

                    },
                    textInput: {
                        marginLeft: 0,
                        marginRight: 0,
                        height: 38,
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: '#388E3C',
                        borderWidth: 3,
                        color: '#bebebe',
                        fontSize: 16
                    },
                    description: {
                        fontWeight: 'bold',
                        // zIndex: 999
                        // backgroundColor: '#388E3C',

                    },
                    // row:{
                    //         backgroundColor: '#388E3C',
                    //     // zIndex: 999
                    //
                    // },
                    // listView: {
                    //     // zIndex: 999
                    //
                    // },
                    // container:{
                    //     zIndex:999,
                    //     backgroundColor: '#388E3C',
                    //
                    // },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                    },
                }}
                currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
                currentLocationLabel="Current location"
                nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
                GoogleReverseGeocodingQuery={{
                    // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
                }}
                GooglePlacesSearchQuery={{
                    // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
                    rankby: 'distance',
                    types: 'food',
                }}
                filterReverseGeocodingByTypes={[
                    'locality',
                    'administrative_area_level_3',
                ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
                predefinedPlaces={[homePlace, workPlace]}
                debounce={200}
            />
        )

    }


}
// store.getState().getLocationReducer.location;
//
// function mapStateToProps(state, props) {
//     return {
//         loading: state.getLocationReducer.loading,
//         location: state.getLocationReducer.location
//     }
// }
//
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(Actions, dispatch);
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);

// export default AutoComplete;
const styles = StyleSheet.create({});