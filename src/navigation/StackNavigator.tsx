import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
// import * as Screens from "../screens";
import { Screen, ScreenOptions } from "../types/navigation";


export interface ScreenNavigatorProps {
    screens: Screen[];
    screenOptions: ScreenOptions;
};

const Stack = createStackNavigator();

const ScreenNavigator: React.FC<ScreenNavigatorProps> = ({ screens, screenOptions }) => {
    // const screens: Screen[] = Object.entries(Screens).map(([key, value]) => ({
    //     name: key,
    //     screen: value,
    //     options: { title: key },
    // }));

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

// const screenOptions: ScreenOptions = {
//     headerStyle: {
//       backgroundColor: '#f4511e',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     headerTitleAlign: "center"
// };

export default ScreenNavigator;