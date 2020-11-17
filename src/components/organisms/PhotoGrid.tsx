import React from "react";
import { Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Center } from "../atoms";
//import {} from "./styles";
import styled from "styled-components/native";

export interface PhotoGridProps{
    photos: any[]
    numColumns: number
    onEndReached: () => void;
}

const formatPhotoURI = (id: string, width: number, height: number) => `https://picsum.photos/id/${id}/${Math.floor(width)}/${Math.floor(height)}`;

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, numColumns, onEndReached }) => {
    const navigation = useNavigation();
    const { width } = Dimensions.get("window");
    const size = width/numColumns;
    
    return (
        <GridWrapper>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                onEndReached={onEndReached}
                renderItem={({ item }) => 
                    <ImageContainer onPress={() => navigation.navigate("PhotoDetail", { item })}>
                        <Image
                            source={{
                                width: size-2,
                                height: size-2,
                                uri: formatPhotoURI(item.id, size, size),
                            }}
                        />
                    </ImageContainer>
                }
            />
        </GridWrapper>
    );
};

const GridWrapper = styled(Center)`
    overflow: hidden;
`;

const ImageContainer = styled.TouchableOpacity`
    padding: 1px;
`;

export default PhotoGrid;