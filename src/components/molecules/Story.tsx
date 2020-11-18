import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export interface StoryProps{
    name: string;
    avatar: string;
    seen?: boolean;
    isPrivate?: boolean;
}

const Story: React.FC<StoryProps> = ({ name, avatar, seen = false, isPrivate = false }) => {
    const [isSeen, setIsSeen] = useState<boolean>(seen);

    const formatName = (name: string): string => {
        if(name.length > 10)
            return `${name.substring(0, 10)}...`;
        return name;
    };

    const handleStoryPress = () => {
        //display story
        setIsSeen(true);
    };

    return (
        <StoryContainer onPress={handleStoryPress}>
            <Border isSeen={isSeen} isPrivate={isPrivate}>
                <AvatarImage source={{ uri: avatar, width: 50, height: 50 }}/>
            </Border>
            <Name>{formatName(name)}</Name>
        </StoryContainer>
    );
};

const StoryContainer = styled.TouchableOpacity`
    width: 60px;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
`;

const Border = styled.View<{isSeen: boolean, isPrivate: boolean}>`
    border-radius: 50%;
    border-color: ${props => props.isSeen ? "gray" : props.isPrivate ? "limegreen" : "mediumvioletred "};
    border-width: ${props => props.isSeen ? "1px" : "3px"};
    margin: ${props => props.isSeen ? "4px" : "2px"};
`;
const AvatarImage = styled.Image`
    border-radius: 50%;
    margin: 3px;
`;
const Name = styled.Text`
    font-size: 10px;
    text-align: center;
`;

export default Story;