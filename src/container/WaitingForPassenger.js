import React, {Component} from 'react';

import Passenger from '../components/GridComponent'
import Aux from '../hoc/Aux'
import {Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from "react-native";


export default class WaitingForPassenger extends Component {
    render() {
        // Taken from https://flatuicolors.com/
        const items = [
            {name: 'Ragulan', rating: '4.5', code: '#1abc9c'},
            {name: 'Ranjana', rating: '4.5', code: '#2ecc71'},
            {name: 'Jatharthan', raating: '4.5', code: '#3498db'},
            {name: 'Karthika', rating: '4.5', code: '#9b59b6'},
            {name: 'Amizhthini', rating: '4.5', code: '#34495e'}
        ];

        return (
            <Aux>
                <Passenger
                    items={items}
                />

                <Button
                    buttonStyle={styles.button}
                    icon={
                        <Icon
                            name='car'
                            size={20}
                            color='white'
                        />
                    }
                    title='Go'
                />
            </Aux>

        );
    }
}

const styles = StyleSheet.create({

    aux:{
        alignItems:'center'
    },
    button:{
        marginLeft:60,
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 200,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
    }
});

