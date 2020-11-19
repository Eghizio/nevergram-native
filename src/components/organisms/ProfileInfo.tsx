import React from "react";
import { Text, TouchableOpacity, useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { Center, Column, Row } from "../atoms";

export interface ProfileProps{

}

const Profile: React.FC<ProfileProps> = (props) => {
    const { width } = useWindowDimensions();

    const posts: number = Math.ceil(Math.random()*50);
    const followers: number = Math.ceil(Math.random()*200);
    const following: number = Math.ceil(Math.random()*200);

    const stories = [
        { title: "Animal", url: "https://picsum.photos/id/1003/106/106" },
        { title: "Rocks", url: "https://picsum.photos/id/1016/106/106" },
        { title: "Some green", url: "https://picsum.photos/id/1018/106/106" },
        { title: "Berries", url: "https://picsum.photos/id/102/106/106" },
        { title: "River", url: "https://picsum.photos/id/1044/106/106" },
    ];

    return (
        <ProfileWrapper>
            <ProfileInfo>
                <TouchableOpacity>
                    <Column>
                        <Avatar source={{ width: 90, height: 90, uri: "https://picsum.photos/id/1005/5760/3840" }}/>
                    </Column>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Column>
                        <BoldText>{posts}</BoldText>
                        <InfoLabel>Posts</InfoLabel>
                    </Column>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Column>
                        <BoldText>{followers}</BoldText>
                        <InfoLabel>Followers</InfoLabel>
                    </Column>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Column>
                        <BoldText>{following}</BoldText>
                        <InfoLabel>Following</InfoLabel>
                    </Column>
                </TouchableOpacity>
            </ProfileInfo>
            <Biography>
                <Text>
                    Some info about me here
                </Text>
            </Biography>
            <EditProfileButton>
                <Text>Edit profile</Text>
            </EditProfileButton>
            <HighlightedStories>
                <StoriesCarousel
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width: width, gap: "15px", paddingHorizontal: 15, marginHorizontal: -15 }}
                    // contentContainerStyle={{ width: width, paddingHorizontal: 15, marginHorizontal: -15 }}
                >
                    {stories.map(({title, url}) =>
                        <Story key={url}>
                            <StoryImageBorder>
                                <StoryImage source={{ width: 50, height: 50, uri: url }}/>
                            </StoryImageBorder>
                            <StoryTitle>{title}</StoryTitle>
                        </Story>
                    )}
                    <Story>
                        <AddStory><Plus>+</Plus></AddStory>
                        <StoryTitle>New</StoryTitle>
                    </Story>
                </StoriesCarousel>
            </HighlightedStories>
        </ProfileWrapper>
    );
};

const ProfileWrapper = styled(Center)`
    width: 100%;
    padding: 60px 10px 5px 20px;
    margin-bottom: 10px;
    gap: 20px;
`;

const ProfileInfo = styled(Row)`
    flex: 3;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    text-align: center;
`;

const Avatar = styled.Image`
    border-radius: 50%;
`;

const BoldText = styled.Text`
    font-weight: bold;
`;

const InfoLabel = styled.Text`
    font-size: 0.7em;
`;

const Biography = styled.View`
    align-self: flex-start;
    text-align: left;
    margin-top: 20px;
    padding: 10px 5px 0px 20px;
`;

const EditProfileButton = styled.TouchableOpacity`
    width: 90%;
    padding: 0.25em;
    border-radius: 3px;
    border: 1px solid lightgray;
    text-align: center;
`;

const HighlightedStories = styled.View`
    overflow: hidden;
`;

const StoriesCarousel = styled.ScrollView`
`;

const Story = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

const StoryImageBorder = styled.View`
    border-radius: 50%;
    padding: 2px;
    border: 1px solid lightgray;
`;

const StoryImage = styled.Image`
    border-radius: 50%;
    border: 1px solid lightgray;
`;

const StoryTitle = styled.Text`
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const AddStory = styled.View`
    width: 50px;
    height: 50px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1px solid black;
`;

const Plus = styled.Text`
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: x-large;
    color: black;
`;

export default Profile;