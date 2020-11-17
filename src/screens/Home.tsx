import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Center } from "../components/atoms";
import * as Screens from "../screens";


export interface HomeProps {
    navigation: any;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    // need to create bottom bar
    return (
        <Center>
            <Text>Home screen</Text>
            {Object.keys(Screens).map(screenName => 
                <TouchableOpacity key={screenName} onPress={() => navigation.navigate(screenName)}>
                    <Text>{screenName}</Text>
                </TouchableOpacity>
            )}
        </Center>
    );
};

export default Home;