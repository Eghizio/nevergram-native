import React from "react";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import Center from "../components/atoms/Center";



// type PhotoData = {
//     id: string;
//     width: number;
//     height: number;
//     author: string;
//     url: string;
//     download_url: string;
// }

export interface PhotoDetailProps{

}

const PhotoDetail: React.FC<PhotoDetailProps> = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const { width } = Dimensions.get("window");

    const { download_url, author } = route.params?.item || { download_url: "", author: "Unknown" };

    return (
        <Center>
            <Row>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color: "gray"}}>back</Text>
                </TouchableOpacity>
            </Row>
            <Image 
                source={{
                    width: width,
                    height: width,
                    uri: download_url,
                }}
            />
            <Row>
                <Text>{author}</Text>
            </Row>
        </Center>
    );
};

const Row = styled.View`
    padding: 5px;
`;

export default PhotoDetail;