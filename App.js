import React from 'react'

import Icon from '@expo/vector-icons/FontAwesome'
import BottomNavigation, {Badge, IconTab} from 'react-native-material-bottom-navigation'
import {View} from "react-native";
import HomeScreenOver from "./src/container/HomeScreenOver";
import WaitingForPassenger from "./src/container/WaitingForPassenger";
import DetailsScreen from "./src/components/DetailsScreen";


export default class App extends React.Component {
    tabs = [
        {
            key: 'map',
            label: 'Map',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'map'
        },
        {
            key: 'trip',
            label: 'Trip',
            barColor: '#00695C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'car'
        },
        {
            key: 'profile',
            label: 'Profile',
            barColor: '#6A1B9A',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'user'
        }
    ];

    state = {
        activeTab: this.tabs[0].key
    };

    renderIcon = icon => ({isActive}) => (
        <Icon size={24} color="white" name={icon}/>
    );
    onTabPress = (tab) => (
        this.setState({activeTab: tab})
    );

    renderTab = ({tab, isActive}) => (
        <IconTab
            isActive={isActive}
            // showBadge={tab.key === 'movies-tv'}
            // renderBadge={() => <Badge>2</Badge>}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    );

    render() {
        console.disableYellowBox = true;
        return (

            <View style={{flex: 1, backgroundColor: 'white'}}>
                <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    {this.state.activeTab === 'map' ? <HomeScreenOver/> :
                        this.state.activeTab === 'trip' ? <WaitingForPassenger/> :
                        this.state.activeTab === 'profile'?<DetailsScreen/>:null}
                </View>
                <BottomNavigation
                    tabs={this.tabs}
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({activeTab: newTab.key})}
                    renderTab={this.renderTab}
                    useLayoutAnimation
                />
            </View>

        )
    }
}