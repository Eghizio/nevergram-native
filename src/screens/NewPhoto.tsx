import React from "react";
import { Text } from "react-native";
import { Center } from "../components/atoms";
import IconList from "../components/molecules/IconList";


export interface NewPhotoProps {
    navigation: any;
};

const NewPhoto: React.FC<NewPhotoProps> = ({ navigation }) => {
    return (
        <Center>
            <Text>NewPhoto screen</Text>
            <IconList/>
        </Center>
    );
};

export default NewPhoto;