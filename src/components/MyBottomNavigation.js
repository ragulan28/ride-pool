import {View} from "react-native";
import React from "react";

import BottomNavigation, {Badge, IconTab} from 'react-native-material-bottom-navigation'


import HomeScreenOver from "../container/HomeScreenOver";
import WaitingForPassenger from "../container/WaitingForPassenger";

const MyBottomNavigation = (props) => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                {props.activeTab === 'map' ? <HomeScreenOver/> :
                    props.activeTab === 'trip' ?
                    <WaitingForPassenger/> : null}
            </View>
            <BottomNavigation
                tabs={props.tabs}
                activeTab={props.activeTab}
                onTabPress={newTab => this.props.onTabPress(newTab.key)}
                renderTab={()=>props.renderTab}
                useLayoutAnimation
            />
        </View>
    )
};

export default MyBottomNavigation;