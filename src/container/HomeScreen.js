import firebase from "firebase";
import {StyleSheet, View} from "react-native";
import {MapView} from "expo";
import ActionButton from "react-native-action-button";
import Icon from "react-native-vector-icons/Ionicons";
import React from "react";
import {TextField} from "react-native-material-textfield";
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";

const currentCoords = {
    latitude: 6.923684,
    longitude: 79.8855776,
};


const homePlace = {
    description: 'Home',
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};
const workPlace = {
    description: 'Work',
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
};
const owner = "ragulan22";

const config = {
    apiKey: "AIzaSyDrtq-Q4yVzjCVWLQ-jr_rQukDxDKjYpcA",
    authDomain: "pitivutu.firebaseapp.com",
    databaseURL: "https://pitivutu.firebaseio.com",
    projectId: "pitivutu",
    storageBucket: "pitivutu.appspot.com",
    messagingSenderId: "267002079127"
};
const actionBtn = () => {
    return (
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item
                buttonColor='#9b59b6'
                title="Share"
                onPress={() => this.openModel('share')}>
                <Icon name="md-walk" style={styles.actionButtonIcon}/>
            </ActionButton.Item>
            <ActionButton.Item
                buttonColor='#3498db'
                title="Own Vehicle"
                onPress={() => this.openModel('own')}>

                <Icon name="md-car" style={styles.actionButtonIcon}/>
            </ActionButton.Item>
        </ActionButton>
    );
};
export default class HomeScreen extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            from: {
                latitude: 0,
                longitude: 0
            },
            to: {
                latitude: 0,
                longitude: 0
            },
            markers: [],
            markedLocation: currentCoords,
            rideType: '',
            isRideInActive: '',
            userType: 'owner'

        };


        if (!firebase.apps.length) {
            firebase.initializeApp(config);

        }


    }


    componentDidMount() {
        this.readAdsData();
        const db = firebase.database().ref('Trip/');
        db.orderByChild('owner_isActive')
            .equalTo(owner + "_true")
            .on('value',
                (trip) => {
                    if (trip) {
                        this.state.isRideInActive = true;
                    } else {
                        this.state.isRideInActive = false;
                    }
                }
            );

        // this.fetchMarkerData();
    }

    openModel(type) {
        console.log(type);

        this.state.rideType = type;

        const db = firebase.database().ref('Trip/');

        if (type === 'own') {
            db.orderByChild('owner_isActive')
                .equalTo("ragulan_true")
                .on('value',
                    (trip) => {
                        if (trip === null) {
                            this.refs.modal2.open()
                        }
                    }
                );
        } else if (type === 'share') {
            this.refs.modal2.open()
        } else {

        }
    }

    selectLocation(where) {
        console.log(where);
        if (where == 'from') {

            console.log(">>from");
            // this.setState({
            this.state.from.latitude = this.state.markedLocation.latitude;
            this.state.from.longitude = this.state.markedLocation.longitude;
            // });
        }

        if (where == 'to') {
            console.log(">>to");
            // this.setState({
            this.state.to.latitude = this.state.markedLocation.latitude;
            this.state.to.longitude = this.state.markedLocation.longitude;
            // });
        }
        // this.refs.modal2.open()
    }

    readAdsData() {
        firebase.database().ref('Ads/').on('value',
            (marker) => {
                console.log(marker.val());
                this.setState({
                    isLoading: false,
                    markers: marker.val(),
                });
            });
    }


    render() {


        return (

            <View style={{flex: 1, backgroundColor: '#f3f3f3'}}>

                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: 6.9427102,
                        longitude: 79.8583849,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {this.state.isLoading ? null : Object.keys(this.state.markers).map((key, index) => {

                        const coords = {
                            latitude: this.state.markers[key].latitude,
                            longitude: this.state.markers[key].longitude,
                        };

                        return (
                            <MapView.Marker
                                key={index}
                                coordinate={coords}
                                title={this.state.markers[key].title}
                                description={this.state.markers[key].description}
                            />
                        );

                    })}



                    <MapView.Marker draggable
                                    coordinate={currentCoords}
                        // onDragEnd={(e) => this.setState({markedLocation: e.nativeEvent.coordinate})}
                                    onDragEnd={(e) => this.setState({markedLocation: e.nativeEvent.coordinate})}
                                    image={require('./../../assets/from.png')}
                    />
                </MapView>

                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item
                        buttonColor='#9b59b6'
                        title="Share"
                        onPress={() => this.openModel('share')}>
                        <Icon name="md-walk" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        buttonColor='#3498db'
                        title="Own Vehicle"
                        onPress={() => this.openModel('own')}>

                        <Icon name="md-car" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
                    <Modal
                        style={[styles.modal, styles.modal2]}
                        backdrop={false}
                        position={"top"}
                        ref={"modal2"}
                        entry={"top"}
                    >

                        <GooglePlacesAutocomplete
                            placeholder="Search"
                            minLength={2} // minimum length of text to search
                            autoFocus={false}
                            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                            listViewDisplayed="auto" // true/false/undefined
                            fetchDetails={true}
                            renderDescription={row => row.description} // custom description render
                            onPress={(data, details = null) => {
                                console.log(data);
                                console.log(details);
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
                                description: {
                                    fontWeight: 'bold',
                                },
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

                        <Button
                            containerStyle={[styles.callButton]}
                            disabledContainerStyle={{backgroundColor: 'grey'}}
                            style={{fontSize: 20, color: 'green'}}

                        >
                            Call
                        </Button>
                    </Modal>


            </View>
        )
    }

    addOrRequestRide(navigate) {
        const db = firebase.database().ref('Trip/');

        db.orderByChild('owner_isActive')
            .equalTo("ragulan_true")
            .on('value',
                (trip) => {
                    console.log(trip.val())

                    if (trip.val() == null && this.state.rideType == 'own') {
                        const d = new Date();
                        const trip = {
                            start: this.state.from,
                            end: this.state.to,
                            isActive: true,
                            tripStatus: 'waiting',
                            isEnd: false,
                            addedTime: d.getTime(),
                            maxTravelers: 4,
                            passengers: [],
                            passengerCount: 0,
                            owner: owner,
                            owner_isActive: owner + "_true"
                        };
                        firebase.database().ref('Trip/').push(trip).then((data) => {
                            //success callback
                            console.log('data ', data)
                        }).catch((error) => {
                            //error callback
                            console.log('error ', error)
                        })

                    } else {
                        console.log("ride")
                    }
                });


        this.refs.modal2.close();

        navigate('Profile', {name: 'Jane'})
    }
}


const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    modal2: {
        padding: 50,
        height: 250,
        backgroundColor: "#ededed"
    },
    text: {
        color: "#111112",
        fontSize: 22
    },
    callButton: {
        borderColor: "green",
        borderWidth: 1,
        padding: 10,
        height: 45,
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: 'white'
    }
});
