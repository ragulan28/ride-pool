import React, {Component} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyDuXA4chStezoMCNQW4PN-qz57utXRPJ3U';

export default class LiveTrackingScreen extends Component {


    onMapPress = (e) => {
        this.setState({
            coordinates: [
                ...this.state.coordinates,
                e.nativeEvent.coordinate,
            ],
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            coordinates: [
                {
                    latitude: 9.7335339,
                    longitude: 79.8692612,
                },
                {
                    latitude: 9.6903453,
                    longitude: 79.9822583,
                },
            ],
        };

        this.mapView = null;
    }

    render() {
        const coordinate = {
            latitude: 9.743985,
            longitude: 79.9189473,
        };
        return (
            <MapView
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
                style={StyleSheet.absoluteFill}
                ref={c => this.mapView = c}
                onPress={this.onMapPress}
            >

                <MapView.Marker
                    coordinate={coordinate}
                    image={require('./../../assets/car.png')}
                />

                {(this.state.coordinates.length >= 2) && (
                    <MapViewDirections
                        origin={this.state.coordinates[0]}
                        waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
                        destination={this.state.coordinates[this.state.coordinates.length - 1]}
                        apikey={GOOGLE_MAPS_APIKEY}
                        strokeWidth={4}
                        strokeColor="#060055"
                        onStart={(params) => {
                            console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                        }}
                        onReady={(result) => {
                            this.mapView.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: (width / 20),
                                    bottom: (height / 20),
                                    left: (width / 20),
                                    top: (height / 20),
                                }
                            });
                        }}
                        onError={(errorMessage) => {
                            // console.log('GOT AN ERROR');
                        }}
                    />
                )}
            </MapView>
        );
    }
}
