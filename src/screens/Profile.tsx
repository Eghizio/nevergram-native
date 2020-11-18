import React, { useCallback, useEffect, useReducer } from "react";
import { View, Text, ActivityIndicator, ScrollView, FlatList } from "react-native";
import styled from "styled-components/native";
import Center from "../components/atoms/Center";
import PhotoGrid from "../components/organisms/PhotoGrid";
import ProfileInfo from "../components/organisms/ProfileInfo";
import usePhotos from "../hooks/usePhotos";


const Profile: React.FC = (props) => {
    const { photos, loading, error, fetchPhotos } = usePhotos();

    if(!photos.length){
        if(loading) return <Center><ActivityIndicator animating={true}/></Center>
        if(error) return <Center><Text style={{color: "red"}}>There was an error</Text></Center>
    }
    return (
        <Center>
            <ProfileInfo/>
            <PhotoGrid
                photos={photos}
                numColumns={3}
                onEndReached={fetchPhotos}
            />
        </Center>
    );
};

export default Profile;