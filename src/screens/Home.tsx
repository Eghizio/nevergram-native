import React from "react";
import { useWindowDimensions, View } from "react-native";
import { Center } from "../components/atoms";
import Story from "../components/molecules/Story";
import Post from "../components/organisms/Post";
import styled from "styled-components/native";
import { stories, posts } from "../data/home";



export interface HomeProps {
    navigation: any;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
    const { width } = useWindowDimensions();
    
    
    // change scroll view to flatlist with stories header and infinite posts
    return (
        <Center>
            <Wall showsVerticalScrollIndicator={false}>
                <Stories
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width, paddingHorizontal: 10 }}
                >
                    <View style={{ padding: 5 }}>
                        <Story key="eghizio" name="My&nbsp;story" avatar="https://picsum.photos/id/1003/106/106" seen={true} isPrivate={false}/>
                    </View>
                    {stories.map(({ name, avatar, seen, isPrivate }) =>
                        <View style={{ padding: 5 }} key={name}>
                            <Story name={name} avatar={avatar} seen={seen} isPrivate={isPrivate}/>
                        </View>
                    )}
                    <View style={{ padding: 5 }}></View>
                </Stories>
                <Posts>
                    {posts.map(({ author, images }) => 
                        <Post key={author.name} author={author} images={images}/>
                    )}
                </Posts>
            </Wall>
        </Center>
    );
};

const Wall = styled.ScrollView``;
const Stories = styled.ScrollView`
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: lightgray;
`;
const Posts = styled.View``;

export default Home;