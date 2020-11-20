import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Screen from "../screens";
import Ionicons from "react-native-vector-icons/Ionicons";


type IconProps = { color: string; size:number; };
type BottomTabScreen = {
    name: string;
    screen: React.FC<any>;
    iconName: string;
};

const Tab = createBottomTabNavigator();

const ScreenNavigator: React.FC = () => {
    // Home(feed), Search, New Post, Activity(follows), Profile
    const screens: BottomTabScreen[] = [
        { name: "Home", screen: Screen.Home, iconName: "ios-home" },
        { name: "Search", screen: Screen.Search, iconName: "ios-search" },
        { name: "NewPhoto", screen: Screen.NewPhoto, iconName: "ios-add-circle-outline" },
        { name: "Activity", screen: Screen.Activity, iconName: "ios-heart-empty" },
        { name: "Profile", screen: Screen.Profile, iconName: "ios-person" }
    ];

    return (
        <Tab.Navigator
            // initialRouteName="Home" //temp to not manualy change for development
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            {screens.map(({ name, screen, iconName }) =>
                <Tab.Screen
                key={name}
                    name={name}
                    component={screen}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused, color, size }) => <Ionicons name={iconName} color={color} size={size}/>
                    }}
                />
            )}
        </Tab.Navigator>
    );
};

export default ScreenNavigator;