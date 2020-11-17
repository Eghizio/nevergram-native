import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { Screen, ScreenOptions } from "../types/navigation";


export interface ScreenNavigatorProps {
    screens: Screen[];
    screenOptions: ScreenOptions;
};

const Stack = createStackNavigator();

const ScreenNavigator: React.FC<ScreenNavigatorProps> = ({ screens, screenOptions }) => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
        >
            {screens.map(({name, screen, options}) =>
                <Stack.Screen
                    key={name} 
                    name={name}
                    component={screen}
                    options={({ navigation, route }) => options}
                />
            )}
        </Stack.Navigator>
    );
};

export default ScreenNavigator;