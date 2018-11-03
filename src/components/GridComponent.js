import {Image, StyleSheet, Text, View} from "react-native";
import GridView from "react-native-super-grid";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const GridComponent = (props) => (
    <GridView
        itemDimension={130}
        items={props.items}
        style={styles.gridView}
        renderItem={item => (
            <View
                style={[styles.itemContainer, {backgroundColor: item.code}]}
            >
                <Image source={require('../../assets/user.png')}/>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>
                    {item.rating}
                    <Icon name="star" size={15} color="#f1c40f" />
                </Text>

            </View>
        )}
    />
);

export default GridComponent;

const styles = StyleSheet.create({
    gridView: {
        paddingTop: 55,
        flex: 1,

    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
        alignItems:'center'
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
