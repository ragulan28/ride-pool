import firebase from "firebase";
import {StyleSheet, View} from "react-native";
import React, {Component} from "react";

import Map from '../components/MapComponent'
import WaitingForPassenger from "./WaitingForPassenger";
import PassengerSelectionModelComponent from "../components/PassengerSelectionModelComponent";
import ModelComponent from "../components/ModelComponent";
import LiveTricking from "./../components/LiveTrackingScreen"

const currentCoords = {
    latitude: 6.923684,
    longitude: 79.8855776,
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
export default class HomeScreenOver extends Component {


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

                {/*<Map*/}
                    {/*ads={this.state.markers}*/}
                    {/*isLoading={this.state.isLoading}*/}
                {/*/>*/}

                <LiveTricking
                    // ads={this.state.markers}
                    isLoading={this.state.isLoading}
                />


                {/*<PassengerSelectionModelComponent/>*/}
                {/*<ModelComponent/>*/}
            </View>
        )
    }

}


const styles = StyleSheet.create({});
