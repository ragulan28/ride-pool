import {MapView} from "expo";
import React from "react";

const currentCoords = {
    latitude: 6.923684,
    longitude: 79.8855776,
};

const MapComponent = (props) => (
    <MapView
        style={{flex: 1}}
        region={{
            latitude: 6.9427102,
            longitude: 79.8583849,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    >
        {props.isLoading ? null : Object.keys(props.ads).map((key, index) => {

            const coords = {
                latitude: props.ads[key].latitude,
                longitude: props.ads[key].longitude,
            };

            return (
                <MapView.Marker
                    key={index}
                    coordinate={coords}
                    title={props.ads[key].title}
                    description={props.ads[key].description}
                />
            );

        })}



        <MapView.Marker draggable
                        coordinate={currentCoords}
                        image={require('./../../assets/from.png')}
        />
    </MapView>
)

export default MapComponent;