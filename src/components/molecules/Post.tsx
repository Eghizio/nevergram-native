import React, { useState } from "react";
import { View, TouchableOpacity, Dimensions, Pressable, GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import useDoublePress from "../../hooks/useDoublePress";


export interface PostProps{
    author: {
        name: string;
        avatar: string;
    };
    images: string[];
}

const Post: React.FC<PostProps> = ({ author, images }) => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const image = images[0]; // need to implement carousel
    const handleDoublePressHero = useDoublePress(() => {
        // setIsLiked(true);
        setIsLiked(prev => !prev);
        console.log("Double press!"); // display heart and handleHeartPress, tho Instagram 2tap sets like but does not undo it
    });
    const { width } = Dimensions.get("window");


    const likes = Math.round(Math.random()*1000);
    const comments = Math.round(Math.random()*255);
    const date = [
        "1 hour ago",
        "3 days ago",
        "2 october 2020"
    ][Math.floor(Math.random()*3)];


    const handleAvatarClick = () => {}; // story ? story : handleNameClick
    const handleNameClick = () => {}; // navigate to name profile
    const handleOpenPostOptionsModal = () => {}; // open modal with post options

    const handleHeartPress = () => { setIsLiked(prev => !prev); }; // like
    const handleCommentPress = () => {}; // launch comment modal
    const handleMessagePress = () => {}; // launch send as message modal
    const handleBookmarkPress = () => {}; //sets it to black and adds to collection

    const handleLikedPress = () => {}; // show who liked the post /navigate to subscreen
    const handleAllCommentsPress = () => { console.log("all comments") }; // navigate to comments subscreen

    return (
        <PostContainer>
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
                <HeroImage source={{ uri: image, width, height: width }}/>
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
const PostInfo = styled.View``;
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