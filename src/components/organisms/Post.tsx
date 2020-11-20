import React, { useState } from "react";
import { TouchableOpacity, useWindowDimensions, Pressable } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useDoublePress from "../../hooks/useDoublePress";
import PostOptionsModal from "../molecules/PostOptionsModal";
import ImageCarousel from "../molecules/ImageCarousel";


export interface PostProps{
    author: {
        name: string;
        avatar: string;
    };
    images: string[];
}

// needs component decoupling, might do after adding redux store
const Post: React.FC<PostProps> = ({ author, images }) => {
    const { width } = useWindowDimensions();
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const handleDoublePressHero = useDoublePress(() => {
        handleHeartPress();
        console.log("Double press!"); // display heart and handleHeartPress, tho Instagram 2tap sets like but does not undo it
    });
    const image = images[0]; // need to implement carousel
    // const [isOptionModalOpened, setIsOptionModalOpened] = useState<boolean>(false);
    


    const [likes, setLikes] = useState<number>(Math.round(Math.random()*1000));
    const [comments] = useState<number>(Math.round(Math.random()*255));
    const [date] = useState<string>([
        "1 hour ago",
        "3 days ago",
        "1 week ago",
        "2 october 2020"
    ][Math.floor(Math.random()*4)]);


    const handleAvatarClick = () => {}; // story ? story : handleNameClick
    const handleNameClick = () => {}; // navigate to name profile
    const handleOpenPostOptionsModal = () => {
        // setIsOptionModalOpened(true);
    }; // open modal with post options

    const handleHeartPress = () => {
        setIsLiked(prev => {
            const currentlyLiked = !prev;

            if(currentlyLiked) setLikes(likes => likes+1);
            else setLikes(likes => likes-1);
            
            return currentlyLiked;
        });
    }; // like
    const handleCommentPress = () => {}; // launch comment modal
    const handleMessagePress = () => {}; // launch send as message modal
    const handleBookmarkPress = () => {}; //sets it to black and adds to collection

    const handleLikedPress = () => {}; // show who liked the post /navigate to subscreen
    const handleAllCommentsPress = () => { console.log("all comments") }; // navigate to comments subscreen

    return (
        <PostContainer>
            {/* <PostOptionsModal isOpened={isOptionModalOpened}/> */}
            <PostHeader>
                <Author>
                <TouchableOpacity onPress={handleAvatarClick}>
                    <AuthorAvatar source={{ uri: author.avatar, width: 30, height: 30 }}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNameClick}>
                    <AuthorName>{author.name}</AuthorName>
                </TouchableOpacity>
                </Author>
                <TouchableOpacity onPress={handleOpenPostOptionsModal}>
                    <Ionicons name="md-more" color="black" size={24}/>
                </TouchableOpacity>
            </PostHeader>
            <Pressable onPress={handleDoublePressHero}>
                <ImageCarousel images={images} size={width}/>
            </Pressable>
            <PostControls>
                <PostIcons>
                    <PressableIcon onPress={handleHeartPress}>
                        <Ionicons name={isLiked ? "ios-heart" : "ios-heart-empty"} color={isLiked ? "orangered" : "black"} size={24}/>
                    </PressableIcon>
                    <PressableIcon onPress={handleCommentPress}>
                        <Ionicons name="ios-chatbubbles" color="black" size={24}/>
                    </PressableIcon>
                    <PressableIcon onPress={handleMessagePress}>
                        <Ionicons name="md-paper-plane" color="black" size={24}/>
                    </PressableIcon>
                </PostIcons>
                <PostIndicators>
                    <Indicator/>
                </PostIndicators>
                <PressableIcon onPress={handleBookmarkPress}>
                    <Ionicons name="md-bookmark" color="black" size={24}/>
                </PressableIcon>
            </PostControls>
            <PostInfo>
                <TouchableOpacity onPress={handleLikedPress}>
                    <PostLikes>{likes} likes</PostLikes>
                </TouchableOpacity>
                <PostDescription>
                    <TouchableOpacity onPress={handleNameClick}>
                        <AuthorName>{author.name}</AuthorName>
                    </TouchableOpacity>
                    <Description>Nice post</Description>
                </PostDescription>
                <TouchableOpacity onPress={handleAllCommentsPress}>
                    <PostComments>See all comments: {comments}</PostComments>
                </TouchableOpacity>
                <Date>{date}</Date>
            </PostInfo>
        </PostContainer>
    );
};

const PostContainer = styled.View`
    width: 100%;
`;

// Post Header
const PostHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;
const Author = styled.View`
    flex-direction: row;
    align-items: center;
`;
const AuthorAvatar = styled.Image`
    border-radius: 50%;
`;
const AuthorName = styled.Text`
    padding: 0 10px;
    font-weight: bold;
`;

// Hero Image
const HeroImage = styled.Image``;

// Post Controls
const PostControls = styled.View`
    flex-direction: row;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
`;
const PostIcons = styled.View`
    flex-direction: row;
`;
const PressableIcon = styled.TouchableOpacity`
    margin: 0 5px;
`;
const PostIndicators = styled.View``;
const Indicator = styled.View``;

// Post Info
const PostInfo = styled.View`
    padding-bottom: 5px;
`;
const PostLikes = styled.Text`
    padding: 0 10px;
    font-weight: bold;
`;
const PostDescription = styled.View`
    flex-direction: row;
`;
const Description = styled.Text``;
const PostComments = styled.Text`
    padding: 0 10px;
    color: gray;
    opacity: 0.9;
`;
const Date = styled.Text`
    padding: 0 10px;
    color: gray;
    opacity: 0.75;
    font-size: x-small;
`;

export default Post;