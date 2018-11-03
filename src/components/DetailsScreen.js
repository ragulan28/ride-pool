import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Avatar, ListItem, List} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
    },

]
export default class DetailsScreen extends Component {
    render() {
        return (
            <View style={styles.mainContent}>
                <Avatar
                    size="xlarge"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                    onPress={() => console.log("Works!")}
                />
                <Text style={styles.userName}>User name</Text>
                <View style={styles.rating}>
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                    <Icon style={styles.star} name="star" size={15} color="#f1c40f" />
                </View>
                <View>
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContent: {
        alignItems: 'center'
    },
    userName: {
        fontSize: 25
    },
    rating: {

        flexDirection: "row"
    },
});