import React, { useCallback, useEffect, useReducer } from "react";
import { View, Text, ActivityIndicator, ScrollView, FlatList } from "react-native";
import styled from "styled-components/native";
import Center from "../components/atoms/Center";
import PhotoGrid from "../components/organisms/PhotoGrid";
import ProfileInfo from "../components/organisms/ProfileInfo";



type PhotoData = {
    id: string;
    width: number;
    height: number;
    author: string;
    url: string;
    download_url: string;
}

type PhotoState = {
    loading: boolean;
    error: boolean;
    photos: PhotoData[];
    nextPage: number;
};

const initialState: PhotoState = {
    loading: false,
    error: false,
    photos: [],
    nextPage: 1
};

type Action = { type: string; payload?: any };
const photoReducer = (state: PhotoState, action: Action): PhotoState => {
    switch(action.type){
        case "LOADING": return ({ ...state, loading: true, error: false });
        case "ERROR": return ({ ...state, loading: false, error: true });
        case "SUCCESS": 
            return ({
                ...state, loading: false, error: false,
                photos: [...state.photos, ...action.payload],
                nextPage: state.nextPage + 1
            });
        default: return state;
    }
};

const getPhotos = async (page: number = 1): Promise<PhotoData[]> => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}`);
    const photos = await response.json();
    return photos;
};

const Profile: React.FC = (props) => {
    const [state, dispatch] = useReducer(photoReducer, initialState);
    const { photos, loading, error, nextPage } = state;

    const fetchPhotos = useCallback(async () => {
        dispatch({ type: "LOADING" });

        try {
            const nextPhotos = await getPhotos(nextPage);
            dispatch({ type: "SUCCESS", payload: nextPhotos });
        } catch (e) {
            dispatch({ type: "ERROR" });
        }
    }, [nextPage]);

    useEffect(() => {
        fetchPhotos();
    }, []);

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