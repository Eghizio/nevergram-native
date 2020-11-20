type ID = string;
type Likes = number; //ID[] //list of people who liked? their ID/User.name? would require that many mocked users,
type URL = string;

// you need to think about user application data not the database model
// try to use IDs to link stuff and store things seperately and link by ID
// think about dispatched events, and how it will impact the store instead of initial fetch

export type PostData = {
    id: ID;
    author: UserData;
    createdAt: Date;
    likes: Likes; 
    comments: Comment[];
    description: string;
    images: URL[];
    isVideo: boolean;
};

export type UserData = {
    id: ID;
    name: string;
    avatar: URL;
};

export type UserProfileData = UserData & {
    biography: string;
    posts: PostData[]; // number of posts?
    followers: UserData[]; // number of followers?
    following: UserData[]; // number of following?
    stories: StoryData[]; // story on main page?
    memories: MemoryData[]; // highlighted stories on profile
};

export type CommentData = {
    id: ID;
    author: User;
    text: string;
};

export type StoryData = {
    id: ID;
    author: UserData;
    createdAt: Date;
    image: URL;
    isPrivate: boolean; // close friends only
    // isSeen?: boolean; //?
};

export type MemoryData = {
    id: ID;
    name: string;
    coverImage: URL;
    stories: StoryData[];
};



// how to handle Activities/Notifications?
export type NotificationData = {
    id: string;
    date: Date;
    text: string;
};

