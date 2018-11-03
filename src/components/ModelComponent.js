import Button from "react-native-button";
import Modal from "react-native-modalbox";
import React, {Component} from "react";
import {StyleSheet} from "react-native";
import GoogleAutoComplete from '../components/GoogleAutocomplete'

export default class ModelComponent extends Component {
    state = {
        from: {
            latitude:0,
            longitude:0
        },
        to:{
            latitude:0,
            longitude:0
        },
    };

    updateFromLocation(latitude,longitude){
        this.state.from.latitude=latitude;
        this.state.from.longitude=longitude
        console.log("From");
        console.log(longitude+" "+latitude);
    }

    updateToLocation(latitude,longitude){
        this.state.to.latitude=latitude;
        this.state.to.longitude=longitude
        console.log("to")
    }

    saveDataBase(){
        //fiorebase save code
        //this.props.location
    }

    render() {
        return (

            <Modal
                isOpen={true}
                style={[styles.modal]}
                backdrop={false}
                position={"top"}
                ref={"modal"}
                entry={"top"}
            >

                {/*<TextField*/}
                {/*style={[styles.text]}*/}
                {/*label='From'*/}

                {/*/>*/}
                {/*<TextField*/}
                {/*style={[styles.text]}*/}
                {/*label='To'*/}

                {/*/>*/}

                <GoogleAutoComplete
                    setLocation={(lat,lng)=>this.updateFromLocation(lat,lng)}
                    style={styles.text}/>
                <GoogleAutoComplete
                    setLocation={(lat,lng)=>this.updateToLocation(lat,lng)}
                    style={styles.text}/>

                <Button
                    containerStyle={[styles.callButton]}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    style={{fontSize: 20, color: '#FFFFFF'}}
onPress={()=>{this.saveDataBase()}}
                >
                    Call
                </Button>


            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    inner: {
        flex: 1
    },
    modal: {
        // flex: 1,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 30,
        width: 300,
        height: 200,
        backgroundColor: 'rgba(52, 52, 52, 0.5)'
    },
    text: {
        color: "#f1f1f1",
        fontSize: 22,
        marginTop: 20
    },
    text1: {
        color: "#f1f1f1",
        fontSize: 22,
        marginTop: 40,
        // position:'absolute'
    },
    callButton: {
        // marginLeft: 150,
        borderColor: "#388E3C",
        borderWidth: 1,
        // padding: 10,
        // color:'#ffffff',
        height: 45,
        marginBottom: 15,
        // overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#388E3C'
    }
});
