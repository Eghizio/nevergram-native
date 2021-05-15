import React from "react";
import styled from "styled-components/native";
import { Text, ScrollView, useWindowDimensions, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Center } from "../components/atoms";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PhotoGrid from "../components/organisms/PhotoGrid";
import usePhotos from "../hooks/usePhotos";
import { tags } from "../data/search";


export interface SearchProps {
    navigation: any;
};

// needs decoupling
// need to make masonry effect, videos are taking 4 spaces, on photo click navigate to post
const Search: React.FC<SearchProps> = ({ navigation }) => {
    const { photos, loading, error, fetchPhotos } = usePhotos();
    const { width } = useWindowDimensions();


    const handleSearchIconPress = () => {}; // focus input
    const handleScanQRPress = () => {}; // open QR scanner screen

    const renderPhotoGridLoaders = () => {
        if(!photos.length){
            if(loading) return (<Center><ActivityIndicator animating={true}/></Center>);
            if(error) return (<Center><Text style={{color: "red"}}>There was an error</Text></Center>);
        }
        return null;
    };

    return (
        <Center>
            <SearchBar>
                <TouchableOpacity onPress={handleSearchIconPress}>
                    <Ionicons name="ios-search" color="black" size={24}/>
                </TouchableOpacity>
                <SearchInput placeholder="Search"/>
                <TouchableOpacity onPress={handleScanQRPress}>
                    <AntDesign name="scan1" color="black" size={24}/>
                </TouchableOpacity>
            </SearchBar>
            <TagBar>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width, }}
                >
                    {tags.map(({ label, iconName }) =>
                        <View key={label} style={{ paddingHorizontal: 5, paddingVertical: 2 }}>
                            <Tag>
                                {iconName && <MaterialCommunityIcons name={iconName} color="black" size={16} style={{ paddingRight: 3 }}/>}
                                <TagText>{label}</TagText>
                            </Tag>
                        </View>
                    )}
                </ScrollView>
            </TagBar>
            {renderPhotoGridLoaders() || <PhotoGrid photos={photos} numColumns={3} onEndReached={fetchPhotos}/>}
        </Center>
    );
};

// Search Bar
const SearchBar = styled.View`
    width: 100%;
    padding: 0 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const SearchInput = styled.TextInput`
    flex: 1;
    margin: 3px 10px;
    padding: 10px 5px;
    font-size: 15px;
    align-self: stretch;
    outline-width: 0;
`;

// Tag Bar
const TagBar = styled.View`
    padding: 4px 0;
`;
const Tag = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    border-color: lightgray;
    border-width: 1px;
    padding: 5px 15px;
`;
const TagText = styled.Text`
    align-items: center;
    font-size: small;
    font-weight: bold;
`;

export default Search;