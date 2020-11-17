import React from "react";
import { Text } from "react-native";
import { Center } from "../components/atoms";


export interface AboutProps {
    navigation: any;
};

const About: React.FC<AboutProps> = ({ navigation }) => {
    return (
        <Center>
            <Text>About screen</Text>
        </Center>
    );
};

export default About;