import React from "react";
import { Text } from "react-native";
import { Center } from "../components/atoms";


export interface ActivityProps {
    navigation: any;
};

const Activity: React.FC<ActivityProps> = ({ navigation }) => {
    return (
        <Center>
            <Text>Activity screen</Text>
        </Center>
    );
};

export default Activity;