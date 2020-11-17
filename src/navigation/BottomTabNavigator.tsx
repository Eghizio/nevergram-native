import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Screen from "../screens";
import Foundation from "react-native-vector-icons/Foundation";


type IconProps = { color: string; size:number; };
type BottomTabScreen = {
    name: string;
    screen: React.FC<any>;
    Icon: (props: IconProps) => JSX.Element;
};

const Tab = createBottomTabNavigator();

const ScreenNavigator: React.FC = () => {
    // Home(feed), Search, New Post, Activity(follows), Profile
    const screens: BottomTabScreen[] = [
        {
            name: "Home", screen: Screen.Home,
            Icon: ({color, size}) => <Foundation name="home" color={color} size={size}/>
        },
        {
            name: "Search", screen: Screen.Search,
            Icon: ({color, size}) => <Foundation name="magnifying-glass" color={color} size={size}/>
        },
        {
            name: "NewPhoto", screen: Screen.NewPhoto,
            Icon: ({color, size}) => <Foundation name="plus" color={color} size={size} style={{ borderRadius: 3, borderColor: color, borderWidth: 1, paddingHorizontal: 5 }}/> 
        },
        {
            name: "Activity", screen: Screen.Activity,
            Icon: ({color, size}) => <Foundation name="heart" color={color} size={size}/>
        },
        {
            name: "Profile", screen: Screen.Profile,
            Icon: ({color, size}) => <Foundation name="torso" color={color} size={size}/>
        }
    ];

    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            {screens.map(({ name, screen, Icon }) =>
                <Tab.Screen
                key={name}
                    name={name}
                    component={screen}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused, color, size }) => <Icon color={color} size={size}/>
                    }}
                />
            )}
        </Tab.Navigator>
    );
};

export default ScreenNavigator;