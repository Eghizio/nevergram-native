import { PostData, UserProfileData } from "../types/data";

const year = 2020;
const month = () => Math.floor(Math.random()*11); //without december, its November now
const day = () => Math.ceil(Math.random()*28);
const hour = () => Math.floor(Math.random()*24);
const minute = () => Math.floor(Math.random()*60);

// needs normalization
type DummyData = {
    posts: PostData[];
    users: UserProfileData[];
};

const dummyData: DummyData = {
    posts: [
        {
            id: "_xc5bhug0r",
            author: {
                id: "_dc1fe33b7",
                name: "A",
                avatar: ""
            },
            createdAt: new Date(year, month(), day(), hour(), minute()),
            likes: 100,
            comments: [],
            description: "Nice post",
            images: [
                ""
            ],
            isVideo: false
        },
    ],
    users: [
        
    ]
};

export default dummyData;

// not sure about this tbh, posts need author avatar and name,
const normalized = {
    posts: [
        {
            id: "_xc5bhug0r",
            author: "_dc1fe33b7",
            createdAt: new Date(year, month(), day(), hour(), minute()),
            likes: [
                "_dc1fe33b7",
            ],
            comments: [
                "_011po6reh",
            ],
            description: "Nice post",
            images: [
                "",
            ],
            isVideo: false
        },
    ],
    users: [
        {
            id: "_dc1fe33b7",
            name: "A",
            avatar: "",
            biography: "",
            posts: [
                "_xc5bhug0r",
            ],
            followers: [],
            following: [],
            stories: [],
            memories: []
        }
    ],
    comments: [
        {
            id: "_011po6reh",
            author: "_dc1fe33b7",
            text: "Cool and good! 👌"
        },
    ]
};

// ค้้้ค้้้ค้้้ค้้้ค้้้