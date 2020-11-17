import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";
import * as Screens from "../screens";
import { Screen, ScreenOptions } from "../types/navigation";


const Navigation = () => {
    const screens: Screen[] = Object.entries(Screens).map(([key, value]) => ({
        name: key,
        screen: value,
        options: { title: key },
    }));

    return (
        // <NavigationContainer linking={}> set up linking
        <NavigationContainer>
            <StackNavigator screens={screens} screenOptions={screenOptions}/>
        </NavigationContainer>
    );
};

const screenOptions: ScreenOptions = {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTitleAlign: "center"
};

export default Navigation;