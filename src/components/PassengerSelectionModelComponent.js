import Modal from "react-native-modalbox";
import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PassengerSelectionModelComponent extends Component {

    render() {
        return (

            <Modal
                isOpen={true}
                style={[styles.modal]}
                position={"top"}
                ref={"modal"}
                entry={"top"}
            >

                <Avatar
                    size="xlarge"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    activeOpacity={0.7}
                />
                <Text
                    style={styles.text}
                >Name Name
                </Text>

                <View style={styles.rating}>
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                </View>
                <Button
                    buttonStyle={styles.acceptButton}
                    icon={
                        <Icon
                            name='check'
                            size={50}
                            color='white'
                        />
                    }
                    title={''}
                />
                <Button
                    buttonStyle={styles.rejectButton}
                    icon={
                        <Icon
                            name='times'
                            size={25}
                            color='white'
                        />
                    }
                    title={''}
                />

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
        paddingTop: 80,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        alignItems: 'center'
    },

    text: {
        color: '#ffffff',
        fontSize: 30
    },
    acceptButton: {
        marginTop: 20,
        borderColor: "green",
        borderWidth: 1,
        padding: 10,
        height: 100,
        width: 100,
        overflow: 'hidden',
        borderRadius: 50,
        backgroundColor: '#13b006'
    },
    rejectButton: {
        marginTop: 5,
        borderColor: "#b0000b",
        borderWidth: 1,
        padding: 10,
        height: 50,
        width: 50,
        overflow: 'hidden',
        borderRadius: 25,
        backgroundColor: '#b0000b'
    },
    rating: {

        flexDirection: "row"
    },
    star:{
       margin:2
    }
});
