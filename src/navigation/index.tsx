import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import StackNavigator from "./StackNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import * as Screens from "../screens";
import { Screen, ScreenOptions } from "../types/navigation";


const Navigation = () => {
    return (
        // <NavigationContainer linking={}> set up linking
        <NavigationContainer>
            <BottomTabNavigator/>
        </NavigationContainer>
    );
};

export default Navigation;