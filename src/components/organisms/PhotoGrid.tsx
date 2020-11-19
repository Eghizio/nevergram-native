import React from "react";
import { FlatList, Image, useWindowDimensions } from "react-native";
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

// move data here "usePhoto", add play and folder icon for images
// https://temp.media/video/?height=400&width=500&length=10 videos?
const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, numColumns, onEndReached }) => {
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
    const size = width/numColumns;
    
    const handleItemPress = (id: string) => {
        // navigation.navigate("PhotoDetail", { item });
        console.log(formatPhotoURI(id, size, size));
    };

    return (
        <GridWrapper>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id}
                numColumns={numColumns}
                onEndReached={onEndReached}
                renderItem={({ item }) => 
                    <ImageContainer onPress={() => handleItemPress(item.id)}>
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