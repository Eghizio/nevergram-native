import React from "react";
import { Text } from "react-native";
import { Center } from "../components/atoms";


export interface SearchProps {
    navigation: any;
};

const Search: React.FC<SearchProps> = ({ navigation }) => {
    return (
        <Center>
            <Text>Search screen</Text>
        </Center>
    );
};

export default Search;