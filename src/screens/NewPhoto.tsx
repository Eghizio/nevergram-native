import React from "react";
import { Text } from "react-native";
import { Center } from "../components/atoms";


export interface NewPhotoProps {
    navigation: any;
};

const NewPhoto: React.FC<NewPhotoProps> = ({ navigation }) => {
    return (
        <Center>
            <Text>NewPhoto screen</Text>
        </Center>
    );
};

export default NewPhoto;