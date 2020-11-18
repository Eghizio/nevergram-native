// Picsum

export type PhotoData = {
    id: string;
    width: number;
    height: number;
    author: string;
    url: string;
    download_url: string;
}

export type PhotoState = {
    loading: boolean;
    error: boolean;
    photos: PhotoData[];
    nextPage: number;
};

export type Action = { type: string; payload?: any };