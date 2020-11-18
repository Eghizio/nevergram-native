import { useCallback, useEffect, useReducer } from "react";
import { PhotoData, PhotoState, Action } from "../types/photos";

// need to fix abort on unmount
const usePhotos = () => {
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

    return { photos, loading, error, fetchPhotos };
};

const initialState: PhotoState = {
    loading: false,
    error: false,
    photos: [],
    nextPage: 1
};

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

export default usePhotos;